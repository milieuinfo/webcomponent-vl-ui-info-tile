/* eslint-disable no-unused-vars */
const VlInfoTile = require('../components/vl-info-tile');
const {Page, Config} = require('vl-ui-core').Test;

class VlInfoTilePage extends Page {
  async _getInfoTile(selector) {
    return new VlInfoTile(this.driver, selector);
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-info-tile.html');
  }
}

module.exports = VlInfoTilePage;
