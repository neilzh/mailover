/**!
 * mailover - lib/mailer.js
 *
 * Copyright(c) 2014 Janus-z and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   Janus-z <Janus.zheng@gmail.com> (https://github.com/janus-z)
 */

'use strict';

var debug = require('debug')('mailto');
var nodemailer = require('nodemailer');
var markdown = require('nodemailer-markdown').markdown;

module.exports = Mailer;

/**
 * Mailer capable of sending mail
 *
 * @constructor
 * @param {Object} transport Transport mechanism
 * @param {Object} options   Options for plugins
 */
function Mailer(transport, options) {
  this._transporter = nodemailer.createTransport(transport);
  this.options = options;
}

Mailer.prototype.send = function(mail, callback) {
  if (mail.markdown) {
    var md = this.options && this.options.markdown;
    this._transporter.use('compile', md ? markdown(md) : markdown());
  }

  // TODO: Support other plugins

  callback = callback || function(err, info) {
    debug('mailto: ' + (Array.isArray(mail.to) ? mail.to.join(', ') : mail.to));

    if (!err) {
      debug('response: ' + info.response);
      debug('accepted: ' + info.accepted.join(', '));
      debug('rejected: ' + info.rejected.join(', '));
      return;
    }

    debug('error has occurred! ' + JSON.stringify(err));
  };

  this._transporter.sendMail(mail, callback);
};
