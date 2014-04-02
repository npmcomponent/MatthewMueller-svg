/**
 * Module Dependencies
 */

var html = require('./template');
var domify = require('component-domify');
var Group = require('./lib/group');

/**
 * create a new drawing context
 *
 * @param {Element} el
 * @api public
 */

module.exports = function(el){
  var svg = domify(html);
  el.appendChild(svg);
  return new Group(svg);
}
