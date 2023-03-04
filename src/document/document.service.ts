import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma';
import type { NewDocumentInput } from './dto/new-document.input';

@Injectable()
export class DocumentService {
  constructor(private readonly prismaService: PrismaService) {}

  findDocumentByUserId(user_id: number) {
    return this.prismaService.document.findMany({
      where: {
        user_id: user_id
      },
    });
  }

  async create(new_data: NewDocumentInput){

    return this.prismaService.document.create({
        data: {
            title: new_data.title,
            text_body: new_data.text_body,
            user_id: new_data.user_id
//            author: {
//                connect: {
//                    id: new_data.user_id
//                }
//            }
        }
    }
    )
  }
}

