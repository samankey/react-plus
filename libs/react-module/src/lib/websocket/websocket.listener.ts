import { WSMessageBroadcastModel } from './message/broadcast/websocket.broadcast.model';
import { WSMessageDummyModel } from './message/dummy/websocket.dummy.model';
import { WebSocketClient } from './websocket.client';
type WebSocketEventModel = {
  broadcast: WSMessageBroadcastModel;
  dummy: WSMessageDummyModel;
};
class WebSocketMessageListenerImpl {
  public addListener<T extends keyof WebSocketEventModel>(
    event: T,
    listener: (data: WebSocketEventModel[T]) => void
  ) {
    return WebSocketClient.addMessageListener(event, listener);
  }
}
export const WebSocketMessageListener = new WebSocketMessageListenerImpl();
