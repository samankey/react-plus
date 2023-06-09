import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server, WebSocket } from 'ws';
import crypto from 'node:crypto';
@WebSocketGateway(8080)
export class DummyGateway implements OnGatewayInit {
  @WebSocketServer()
  server: Server;
  afterInit(server: Server) {
    setInterval(() => {
      server.clients.forEach((c) => {
        c.send(
          JSON.stringify({
            event: 'broadcast',
            data: {
              randomText: crypto.randomBytes(64).toString('hex'),
            },
          })
        );
      });
    }, 1000);
  }

  @SubscribeMessage('dummy')
  onEvent(client: any, data: any): Observable<WsResponse<{ item: number }>> {
    return from([1, 2, 3]).pipe(
      map((item) => ({ event: 'dummy', data: { item } }))
    );
  }
}
