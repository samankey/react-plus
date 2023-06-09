module.exports = {
  petstore: {
    output: {
      mode: 'tags-split',
      workspace: 'src/client/rest',
      target: 'index.ts',
      schemas: 'model',
      client: 'react-query',
      mock: true,
      prettier: true,
    },
    input: {
      target: 'http://localhost:3000/api-docs-json',
      validation: true,
    },
  },
};
