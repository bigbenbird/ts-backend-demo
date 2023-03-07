import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  findByID(id: number) {
    return this.prismaService.user.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  findAllDocument(id: number) {
    const ret = this.prismaService.user.findUniqueOrThrow({
      where: {
        id, 
      },
      select: {
        documents: true 
        
      }
    }).then(value => {return value['documents']});

    return ret
  }
}
