# Mailover

Simple handy apis for sending mail.

[![Build Status](https://img.shields.io/travis/Janus-Z/mailover.svg?style=flat)](https://travis-ci.org/Janus-Z/mailover)
[![NPM Version](https://img.shields.io/npm/v/mailover.svg?style=flat)](https://www.npmjs.org/package/mailover)
[![Dependencies Status](http://img.shields.io/david/Janus-Z/mailover.svg?style=flat)](https://david-dm.org/Janus-Z/mailover)
[![License Type](https://img.shields.io/npm/l/mailover.svg?style=flat)](https://www.npmjs.org/package/mailover)

---

## TL;DR

### Install

```bash
$ npm install mailover --save
```

### Simple usage

```javascript
var mailover = require('mailover');

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
```

### Semantic usage

```javascript
var mailroom = require('mailover').mailroom;

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
```

## More Options

**mailover** is based on [**Nodemailer**](https://github.com/andris9/Nodemailer).  
See more options and details [here](https://github.com/andris9/Nodemailer/blob/master/README.md).

## License

**mailover** is licensed under [MIT license](https://github.com/andris9/Nodemailer/blob/master/LICENSE).  
Basically you can do whatever you want to with it.
