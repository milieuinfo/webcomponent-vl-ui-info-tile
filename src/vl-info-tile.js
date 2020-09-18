import {vlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import '/node_modules/vl-ui-accordion/dist/vl-accordion.js';

/**
 * VlInfoTile
 * @class
 * @classdesc
 *
 * @extends HTMLElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-info-tile/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-info-tile/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-info-tile.html|Demo}
 *
 */
export class VlInfoTile extends vlElement(HTMLElement) {
  constructor() {
    super(`
        <style>
            @import '/src/style.css';
        </style>
        <div class="vl-info-tile">
            <header class="vl-info-tile__header" role="presentation">
                <div class="vl-info-tile__header__wrapper">
                    <h3 class="vl-info-tile__header__title">
                        <slot name="title"></slot>
                    </h3>
                    <p class="vl-info-tile__header__subtitle">
                        <slot name="subtitle"></slot>
                    </p>
                </div>
            </header>

            <div class="vl-info-tile__content">
                <slot name="content"></slot>
            </div>

            <footer class="vl-info-tile__footer">
                <slot name="footer"></slot>
            </footer>
        </div>
    `);
  }

  connectedCallback() {
    this._processContent();
  }

  get _contentElement() {
    return this._shadow.querySelector('.vl-info-tile__content');
  }

  get _contentSlot() {
    return this.querySelector('[slot="content"]');
  }

  _processContent() {
    if (!this._contentSlot) {
      this._contentElement.remove();
    }
  }
}

define('vl-info-tile', VlInfoTile);
