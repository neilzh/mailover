/**!
 * mailover - example/semantic.js
 *
 * Copyright(c) 2014 Janus-z and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   Janus-z <Janus.zheng@gmail.com> (https://github.com/janus-z)
 */

'use strict';

var mailroom = require('..').mailroom;

// add a mailer to mailroom
var send = mailroom.add('gmail', {
  service: 'gmail',
  auth: {
    user: 'sender@gmail.com',
    pass: 'password'
  }
});

// send mail
send.mail
  .from('sender@address')
  .to('receiver@address')
  .with.subject('Send a message using mailover')
  .and.text('Hello world!');
