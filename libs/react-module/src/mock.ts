import { setupWorker } from 'msw';
import { getDefaultMSW } from './client/rest/default/default.msw';
import { mockGetAuthorQuery } from './client/gql/graphql';
import { gqlMockAuthor } from './client/gql/mocks';

const worker = setupWorker(
  ...getDefaultMSW(),
  mockGetAuthorQuery((req, res, ctx) => {
    return res(
      ctx.data({
        author: gqlMockAuthor(),
      })
    );
  })
);

worker.start();
