import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  messages: Message[] = [];
  clientToUser = {};

  identify(name: string, clientId: string) {
    this.clientToUser[clientId] = name;
    console.log(this.clientToUser);

    return Object.values(this.clientToUser);
  }

  getClientName(clientId: string) {
    return this.clientToUser[clientId];
  }

  create(createMessageDto: CreateMessageDto, clientId: string) {
    console.log('clientid:', this.clientToUser[clientId]);

    const message = {
      name: this.clientToUser[clientId],
      text: createMessageDto.text,
    };
    console.log(message);
    this.messages.push(message);
    return message;
  }

  findAll() {
    return this.messages;
  }
}
