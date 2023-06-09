import { Args, Field, Int, ObjectType, Query, Resolver } from '@nestjs/graphql';

@ObjectType()
export class Author {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;
}

@Resolver((of) => Author)
export class DummyResolver {
  @Query((returns) => Author)
  async author(@Args('id', { type: () => Int }) id: number): Promise<Author> {
    return {
      id,
      firstName: 'asdf',
      lastName: 'qwer',
    };
  }
}
