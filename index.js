'use strict';

const Anchor = require('./Anchor');
const Cookies = require('./Cookies');
const GoTop = require('./GoTop');
const ScrollDirection = require('./ScrollDirection');
const ScrollTo = require('./ScrollTo');
const ScrollTop = require('./ScrollTop');
const Touchable = require('./Touchable');

module.exports = {
  /**
   * Create an anchor link for all elements with a certain class
   * @param {string} settings
   */
  Anchor: Anchor,
  /**
   * Navigates to an anchor
   * @param {string} hash
   */
  handleScrollToAnchor: Anchor.handleScrollToAnchor,
  /**
   * Creates a cookies policy dialog
   * @param {string} settings
   */
  Cookies: Cookies,
  /**
   * Creates a scroll top button
   * @param {string} settings
   */
  GoTop: GoTop,
  /**
   * Adds scroll direction classes to html tag
   * @param {string} settings
   */
  ScrollDirection: ScrollDirection,
  /**
   * Animation for scroll to an element
   * @param {element} startPoint, default: body
   * @param {integer} duration, default: 500
   */
  ScrollTo: ScrollTo,
  /**
   * Validates the ScrollTop of an element
   */
  ScrollTop: ScrollTop,
  /**
   * Validates if the device is touchable or not
   * @param {string} settings
   */
  Touchable: Touchable
};
