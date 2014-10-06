var assert = require("assert")
var fs = require("fs")
var path = require("path")
var m = require("..")

var fixtures = {}
fs.readdirSync(__dirname + "/fixtures").forEach(function(file) {
  var key = path.basename(file).replace(".html", "")
  fixtures[key] = fs.readFileSync(__dirname + "/fixtures/" + file).toString()
})


describe("lets-get-meta", function() {

  it("extracts name and content from meta tags in an HTML string and returns a key-value object", function() {
    assert.deepEqual(m(fixtures.simple), {
      foo: "yes",
      bar: "no"
    })
  })

  it("skips any tag missing name or content", function() {
    assert.deepEqual(m(fixtures.undesirable), {
      only: "one"
    })
  })

})
