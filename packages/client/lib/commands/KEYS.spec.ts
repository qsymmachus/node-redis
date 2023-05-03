import { strict as assert } from 'assert';
import testUtils, { GLOBAL } from '../test-utils';

describe('KEYS', () => {
  testUtils.testAll('client.keys', async client => {
    assert.deepEqual(
      await client.keys('pattern'),
      []
    );
  }, {
    client: GLOBAL.SERVERS.OPEN,
    cluster: GLOBAL.CLUSTERS.OPEN
  });
});
