const VlInfoTile = require('../components/vl-info-tile');
const {Page, Config} = require('vl-ui-core').Test;

class VlInfoTilePage extends Page {
  async getInfoTile() {
    return new VlInfoTile(this.driver, 'vl-info-tile');
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-info-tile.html');
  }
}

module.exports = VlInfoTilePage;
