/* eslint-disable no-unused-vars */
const {assert, driver} = require('vl-ui-core').Test.Setup;
const VlInfoTilePage = require('./pages/vl-info-tile.page');

describe('vl-info-tile', async () => {
  const vlInfoTilePage = new VlInfoTilePage(driver);

  before(() => {
    return vlInfoTilePage.load();
  });

  it('', async () => {
  });
});
