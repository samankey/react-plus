import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3000/graphql',
  documents: ['src/**/!(*.d).{ts,tsx}'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    '../../libs/react-module/src/client/gql/': {
      preset: 'client',
      plugins: ['typescript-msw'],
    },
    '../../libs/react-module/src/client/gql/mocks.ts': {
      plugins: [
        {
          add: {
            content:
              '/* eslint-disable @typescript-eslint/no-use-before-define,@typescript-eslint/no-unused-vars,no-prototype-builtins,@typescript-eslint/no-non-null-assertion */',
          },
        },
        {
          'typescript-mock-data': {
            typesFile: './graphql.ts',
            typeNames: 'keep',
            generateLibrary: 'faker',
            dynamicValues: true,
            prefix: 'gqlMock',
          },
        },
      ],
    },
  },
};

export default config;
