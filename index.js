/**!
 * mailover - index.js
 *
 * Copyright(c) 2014 Janus-z and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   Janus-z <Janus.zheng@gmail.com> (https://github.com/janus-z)
 */

'use strict';

var Mailer = require('./lib/mailer');
var mailroom = require('./lib/mailroom');

exports = module.exports = function(transport, options) {
  return new Mailer(transport, options);
};

exports.Mailer = Mailer;
exports.mailroom = mailroom;
