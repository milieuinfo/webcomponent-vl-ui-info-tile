const {assert, getDriver} = require('vl-ui-core').Test.Setup;
const VlInfoTilePage = require('./pages/vl-info-tile.page');

describe('vl-info-tile', async () => {
  let vlInfoTilePage;

  before(() => {
    vlInfoTilePage = new VlInfoTilePage(getDriver());
    return vlInfoTilePage.load();
  });

  it('WCAG', async () => {
    await assert.eventually.isFalse(vlInfoTilePage.hasWcagIssues());
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
    const infoTile = await vlInfoTilePage.getToggleableInfoTile();
    await assert.eventually.isFalse(infoTile.isOpen());
    await infoTile.toggle();
    await assert.eventually.isTrue(infoTile.isOpen());
    await infoTile.toggle();
    await assert.eventually.isFalse(infoTile.isOpen());
  });

  it('als gebruiker kan ik een toggleable info tile openen en sluiten door op de titel te klikken', async () => {
    const infoTile = await vlInfoTilePage.getToggleableInfoTile();
    await assert.eventually.isFalse(infoTile.isOpen());
    const slots = await infoTile.getTitleSlotElements();
    await slots[0].click();
    await assert.eventually.isTrue(infoTile.isOpen());
    await slots[0].click();
    await assert.eventually.isFalse(infoTile.isOpen());
  });

  it('als gebruiker kan ik meteen de content zien van een toggleable info tile die automatisch open staat', async () => {
    const infoTile = await vlInfoTilePage.getToggleableAutoOpenInfoTile();
    await assert.eventually.isTrue(infoTile.isOpen());
  });

  it('als gebruiker kan ik een toggleable info tile openen en sluiten als de content een grid element bevat', async () => {
    const infoTile = await vlInfoTilePage.getToggleableGridInfoTile();
    await assert.eventually.isFalse(infoTile.isOpen());
    await infoTile.toggle();
    await assert.eventually.isTrue(infoTile.isOpen());
    await infoTile.toggle();
    await assert.eventually.isFalse(infoTile.isOpen());
  });
});
