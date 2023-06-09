import EventEmitter from 'eventemitter3';
type WebSocketClientOptionsType = {
  url?: string;
};
type EmptyFunctionType = () => void;
type ErrorListenerType = (event: Event) => void;
type MessageListenerType<T = any> = (data: T) => void;

class WebSocketClientImpl {
  #webSocket: WebSocket | null = null;
  #connectListeners = new Set<EmptyFunctionType>();
  #reconnectListeners = new Set<EmptyFunctionType>();
  #errorListeners = new Set<ErrorListenerType>();
  #closeListeners = new Set<EmptyFunctionType>();
  #messageEmitter = new EventEmitter();
  #closedCount = 0;

  public addConnectListener(listener: EmptyFunctionType) {
    this.#connectListeners.add(listener);
  }

  public addReconnectListener(listener: EmptyFunctionType) {
    this.#reconnectListeners.add(listener);
  }

  public addErrorListener(listener: ErrorListenerType) {
    this.#errorListeners.add(listener);
  }

  public addCloseListener(listener: EmptyFunctionType) {
    this.#closeListeners.add(listener);
  }

  public addMessageListener<T>(
    event: string,
    listener: MessageListenerType<T>
  ) {
    const eventId = `msg_${event}`;
    this.#messageEmitter.on(eventId, listener);
    return () => {
      this.#messageEmitter.off(eventId, listener);
    };
  }

  init(options: WebSocketClientOptionsType = {}) {
    if (this.#webSocket) {
      return;
    }
    const { url = 'ws://localhost:8080' } = options;
    this.#webSocket = new WebSocket(url);
    this.#webSocket.onopen = () => {
      if (this.#closedCount > 0) {
        for (const listener of this.#reconnectListeners.values()) {
          listener();
        }
      } else {
        for (const listener of this.#connectListeners.values()) {
          listener();
        }
      }
      this.#closedCount = 0;
    };

    this.#webSocket.onclose = () => {
      this.#webSocket = null;
      this.#closedCount++;
      for (const listener of this.#closeListeners) {
        listener();
      }
      const retryTimeout = this.#closedCount > 10 ? 10000 : 1000;
      setTimeout(() => {
        this.init(options);
      }, retryTimeout);
    };

    this.#webSocket.onerror = (event) => {
      for (const listener of this.#errorListeners) {
        listener(event);
      }
    };
    this.#webSocket.onmessage = (evt) => {
      const { event, data } = JSON.parse(evt.data);
      this.#messageEmitter.emit(`msg_${event}`, data);
    };
  }
}
export const WebSocketClient = new WebSocketClientImpl();
