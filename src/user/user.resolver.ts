import { Args, Query, Resolver } from '@nestjs/graphql';

import { User } from './models/user.model';
import { UserService } from './user.service';
import { Document } from '../document/models/document.model';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  user(@Args('id') id: number) {
    return this.userService.findByID(id);
  }

  @Query(() => [Document])
  user_document(@Args('id') id:number) {
    return this.userService.findAllDocument(id);
  }

}
