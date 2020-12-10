const {assert, getDriver} = require('vl-ui-core').Test.Setup;
const VlInfoTilePage = require('./pages/vl-info-tile.page');

describe('vl-info-tile', async () => {
  let vlInfoTilePage;

  before(() => {
    vlInfoTilePage = new VlInfoTilePage(getDriver());
    return vlInfoTilePage.load();
  });

  it('als gebruiker kan ik de titel van de info tile bekijken', async () => {
    const infoTile = await vlInfoTilePage.getInfoTile();
    await assert.eventually.equal(infoTile.getTitle(), 'Broos Deprez');
  });

  it('als gebruiker kan ik de subtitel van de info tile bekijken', async () => {
    const infoTile = await vlInfoTilePage.getInfoTile();
    await assert.eventually.include(infoTile.getSubtitle(), 'Uw zoon (19.05.2005)');
    await assert.eventually.include(infoTile.getSubtitle(), 'niet verwant aan referentiepersoon');
  });

  it('als gebruiker kan ik de content van de info tile bekijken', async () => {
    const infoTile = await vlInfoTilePage.getInfoTile();
    const contentSlotElement = await infoTile.getContentSlotElement();
    await assert.eventually.include(contentSlotElement.getText(), 'Beslissingsbrief Studietoelage');
    await assert.eventually.include(contentSlotElement.getText(), 'De studietoelage voor Broos Deprez werd toegekend.');
  });

  it('als gebruiker kan ik een toggleable info tile openen en sluiten', async () => {
    const infoTile = await vlInfoTilePage.getInfoTile();
    await assert.eventually.isFalse(infoTile.isOpen());
    await infoTile.toggle();
    await assert.eventually.isTrue(infoTile.isOpen());
    await infoTile.toggle();
    await assert.eventually.isFalse(infoTile.isOpen());
  });
});
