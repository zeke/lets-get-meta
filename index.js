var cheerio = require("cheerio")

var letsGetMeta = module.exports = function(input) {
  var $ = cheerio.load(input)
  var meta = {}
  $("meta").each(function(i, tag){
    var k = $(this).attr('name')
    var v = $(this).attr('content')
    if (k && v) meta[k] = v
  })
  return meta
}
