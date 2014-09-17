/**!
 * mailover - lib/mailroom.js
 *
 * Copyright(c) 2014 Janus-z and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   Janus-z <Janus.zheng@gmail.com> (https://github.com/janus-z)
 */

'use strict';

var Mail = require('./mail');
var mailers = module.exports = {};

/**
 * Add mailers to mailroom
 *
 * @param {String} id        Mailer id
 * @param {Object} transport Transport mechanism
 * @param {Object} options   Options for plugins
 */
mailers.add = function(id, transport, options) {
  if (id in mailers) {
    throw new Error('mailer "' + id + '" exists.');
  }

  var mail = new Mail(transport, options);
  var mailer = mailers[id] = {
    mail: mail,
    send: {
      mail: mail
    },
  };

  return mailer;
};
