/**!
 * mailover - example/simple.js
 *
 * Copyright(c) 2014 Janus-z and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   Janus-z <Janus.zheng@gmail.com> (https://github.com/janus-z)
 */

'use strict';

var mailover = require('..');

// transport mechanism
var transport = {
  service: 'gmail',
  auth: {
    user: 'sender@gmail.com',
    pass: 'password'
  }
};

// mail message
var mail = {
  from: 'sender@address',
  to: 'receiver@address',
  subject: 'Send a message using mailover',
  markdown: {
    path: './asset/message.md'
  }
};

// send mail
var mailer = mailover(transport);
mailer.send(mail);
