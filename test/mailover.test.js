/**!
 * mailover - test/mailover.test.js
 *
 * Copyright(c) 2014 Janus-z and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   Janus-z <Janus.zheng@gmail.com> (https://github.com/janus-z)
 */

'use strict';

var mailover = require('..');

describe('mailover.test.js', function() {
  var transport = {
    service: 'gmail',
    auth: {
      user: 'sender@gmail.com',
      pass: 'password'
    }
  };

  it('should work fine.', function() {
    var mailer = mailover(transport);
    mailover.mailroom.should.be.an.Object.and.have.ownProperty('add');
    mailer.should.be.an.instanceof(mailover.Mailer).and.have.property('send');
  });

  // TODO: Add test cases
});
