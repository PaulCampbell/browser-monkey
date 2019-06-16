var Query = require('./lib/query')
var finders = require('./lib/finders')
var actions = require('./lib/actions')
var button = require('./lib/button')
var fields = require('./lib/fields')
var set = require('./lib/set')
var assertions = require('./lib/assertions')

module.exports = function (rootSelector = document.body) {
  return new Query()
    .component(finders)
    .component(button)
    .component(fields)
    .component(set)
    .installSetters()
    .scope(rootSelector)
    .component({
      browserMonkey2Compat: function () {
        return this.component(actions).component(assertions)
      }
    })
}
