/**!
 * mailover - lib/constant.js
 *
 * Copyright(c) 2014 Janus-z and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   Janus-z <Janus.zheng@gmail.com> (https://github.com/janus-z)
 */

'use strict';

module.exports = {
  methods: ['text', 'html', 'markdown'],
  fields: {
    verbs: ['from', 'to', 'cc', 'bcc', 'replyTo', 'inReplyTo'],
    nouns: [
      'subject', 'attachments', 'encoding', 'date',
      'headers', 'messageId', 'references',
      'alternatives', 'envelope'
    ],
  }
};
