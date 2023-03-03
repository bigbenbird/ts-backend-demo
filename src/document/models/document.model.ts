import { Field, ObjectType } from '@nestjs/graphql';

import type { Document as DocumentModel } from '@prisma/client';

@ObjectType()
export class Document implements DocumentModel {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  text_body: string;

  @Field()
  author: string;

  @Field()
  userId: number;

  @Field()
  create_date: Date;

  @Field()
  updated_date: Date;

}
