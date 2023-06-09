/* eslint-disable @typescript-eslint/no-use-before-define,@typescript-eslint/no-unused-vars,no-prototype-builtins,@typescript-eslint/no-non-null-assertion */
import { faker } from '@faker-js/faker';
import { Author, Query } from './graphql';

faker.seed(0);

export const gqlMockAuthor = (overrides?: Partial<Author>): Author => {
    return {
        firstName: overrides && overrides.hasOwnProperty('firstName') ? overrides.firstName! : faker.lorem.word(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : faker.datatype.number({ min: 0, max: 9999 }),
        lastName: overrides && overrides.hasOwnProperty('lastName') ? overrides.lastName! : faker.lorem.word(),
    };
};

export const gqlMockQuery = (overrides?: Partial<Query>): Query => {
    return {
        author: overrides && overrides.hasOwnProperty('author') ? overrides.author! : gqlMockAuthor(),
    };
};

export const seedMocks = (seed: number) => faker.seed(seed);
