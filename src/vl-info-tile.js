import {vlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';

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
export class VlInfoTile extends vlElement(HTMLElement) {}

define('vl-info-tile', VlInfoTile);
