var getMeta = require("./")

// Pass and HTML string
getMeta("<meta name='page' content='index'><meta name='description' content='This is the index page'>")

// Get back an object
{
  page: "index",
  description: "This is the index page"
}
