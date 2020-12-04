const {VlElement} = require('vl-ui-core').Test;
const {By} = require('vl-ui-core').Test.Setup;

class VlInfoTile extends VlElement {
  async toggle() {
    const element = await this._getToggleElement();
    await element.click();
  }

  async isOpen() {
    return this.shadowRoot.hasClass('js-vl-accordion--open');
  }

  async getTitle() {
    const element = await this._getSlotElement('title');
    return element.getText();
  }

  async getSubtitle() {
    const element = await this._getSlotElement('subtitle');
    return element.getText();
  }

  async getContentSlotElement() {
    return this._getSlotElement('content');
  }

  async getFooterSlotElement() {
    return this._getSlotElement('footer');
  }

  async _getSlotElement(name) {
    const slot = await this.shadowRoot.findElement(By.css(`slot[name="${name}"]`));
    const element = await this.getAssignedElements(slot);
    return new VlElement(this.driver, element[0]);
  }

  async _getToggleElement() {
    return this.shadowRoot.findElement(By.css('.js-vl-accordion__toggle'));
  }
}

module.exports = VlInfoTile;
