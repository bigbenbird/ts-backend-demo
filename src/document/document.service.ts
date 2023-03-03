import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma';
import type { NewDocumentInput } from './dto/new-document.input';

@Injectable()
export class DocumentService {
  constructor(private readonly prismaService: PrismaService) {}

  findDocumentByUserId(id: number) {
    return this.prismaService.document.findMany({
      where: {
        userId : id
      },
    });
  }

  async create(new_data: NewDocumentInput){
    return this.prismaService.document.create({
        data: {
            title: new_data.title,
            text_body: new_data.text_body,
            userId: new_data.user_id,

        }
    }
    )
  }
}

