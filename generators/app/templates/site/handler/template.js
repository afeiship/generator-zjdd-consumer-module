/**
 * <%= module_name %>
 * 用户版通用token test`test`7
 * URL： http://consumer.zaijiadd.com/<%= module_name %>.php?zjtoken=test`test`7
 * WiKi：<%= wiki_url %>
 */
var Base = require('../common/base'),
  HandlerBase = require('../common/handlerBase'),
  _ = require('underscore');

module.exports = Base.extend(function () {
}, {
  extend: HandlerBase,
  handlerName: '<%= module_name %>',
  doJob: function *() {
    var method = this.koa.req.method;
    return yield this['do' + method]();
  },
  doGET: function * () {
    return yield this.jade.getHTML(
      {
        dataString: JSON.stringify({})
      },
      '<%= module_name %>'
    );
  },
  doPOST: function * () {
    var query = this.getQuery();
    return yield function () {
      return 1;
    }
  }
});
