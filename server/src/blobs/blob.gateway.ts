// import {
//   WebSocketGateway,
//   WebSocketServer,
//   SubscribeMessage,
//   MessageBody,
//   ConnectedSocket,
// } from '@nestjs/websockets';
// import { Server, Socket } from 'socket.io';

// @WebSocketGateway()
// export class BlobGateway {
//   @WebSocketServer() server: Server;

//   @SubscribeMessage('send-blob')
//   async handleAudio(@MessageBody() audio: Blob): Promise<void> {
//     this.server.emit('audioStream', audio);
//   }

//   @SubscribeMessage('join')
//   async handleJoin(@ConnectedSocket() client: Socket): Promise<void> {
//     client.join('audioRoom');
//   }

//   @SubscribeMessage('leave')
//   async handleLeave(@ConnectedSocket() client: Socket): Promise<void> {
//     client.leave('audioRoom');
//   }
// }
