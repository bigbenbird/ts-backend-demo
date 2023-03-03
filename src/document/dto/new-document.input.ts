import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewDocumentInput{
  @Field()
  title: string;

  @Field({ nullable: true })
  text_body: string;

  @Field()
  user_id: number;
}
