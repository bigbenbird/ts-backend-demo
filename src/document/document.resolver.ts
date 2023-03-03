import { Args, Query, Resolver, Mutation} from '@nestjs/graphql';

import { Document } from './models/document.model';
import { DocumentService } from './document.service';

import { NewDocumentInput } from './dto/new-document.input';

@Resolver(() => Document)
export class DocumentResolver {
  constructor(private readonly documentService: DocumentService) {}

  @Query(() => [Document])
  documents(@Args('id') id: number) {
    return this.documentService.findDocumentByUserId(id);
  }

  @Mutation(returns => Document)
  async saveDocument(
    @Args('new_document_data') new_document_data:NewDocumentInput,){
        const new_data = await this.documentService.create(new_document_data);
        return new_data;
    }

}