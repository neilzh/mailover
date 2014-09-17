/**!
 * mailover - lib/mail.js
 *
 * Copyright(c) 2014 Janus-z and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   Janus-z <Janus.zheng@gmail.com> (https://github.com/janus-z)
 */

'use strict';

var Mailer = require('./mailer');
var api = require('./api');

var proto = Mail.prototype;
var and = And.prototype;

module.exports = Mail;

/**
 * Semantic Mail
 *
 * @constructor
 * @param {Object} transport Transport mechanism
 * @param {Object} options   Options for plugins
 */
function Mail(transport, options) {
  this._mailer = new Mailer(transport, options);
  this._mail = {};
}

proto.__defineGetter__('with', function() {
  return new And(this._mailer, this._mail);
});

api.fields.verbs.forEach(function(verb) {
  proto[verb] = function(value) {
    this._mail[verb] = value;
    return this;
  };
});

/**
 * Class And
 *
 * @param {Mailer} mailer A mailer capable of sending mail
 * @param {Object} mail   Mail message
 */
function And(mailer, mail) {
  this._mailer = mailer;
  this._mail = mail;
}

api.fields.nouns.forEach(function(noun) {
  and[noun] = function(value) {
    this._mail[noun] = value;
    return {
      and: this
    };
  };
});

api.methods.forEach(function(method) {
  and[method] = function(value) {
    this._mail[method] = value;
    this._mailer.send(this._mail);
  };
});
