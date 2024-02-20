import { Server, Socket } from 'socket.io';
import { Server as HttpServer } from 'http';
import { IBaseSocketInterface } from './interfaces/socket.interface';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

const WEBSOCKET_CORS = {
  origin: '*',
  methods: ['GET', 'POST'],
};

export class SocketService extends Server implements IBaseSocketInterface {
  private static socketInstance: SocketService;
  private constructor(app: HttpServer) {
    super(app, {
      cors: WEBSOCKET_CORS,
    });
  }

  private initial(socket: Socket) {
    socket.on('connection', (socket: Socket) => {
      console.log('connected');
      socket.on('disconnect', () => {
        console.log('disconnect');
      });
    });
  }

  public onConnect() {}

  handleConnection(socket: Socket): void {
    socket.on(`connection`, () => {
      console.log;
    });
  }

  handleDisconnection(socket: Socket): void {}

  static getInstanceSocket(app: HttpServer): SocketService {
    if (!this.socketInstance) {
      this.socketInstance = new SocketService(app);
    }
    return this.socketInstance;
  }

  sendMessage() {}

  joinRoom() {}

  leaveRoom() {}
}
