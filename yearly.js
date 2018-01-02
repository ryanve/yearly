!function(root, name, make) {
  if (typeof module != "undefined" && module.exports) module.exports = make()
  else root[name] = make()
}(this, "yearly", function() {

  var boundary = "\\b"
  var digits = express("\\d+")

  function express(search) {
    search = boundary + search + boundary
    return new RegExp(search, "g")
  }

  function bump(content) {
    content = String(content)
    var current = full()
    return content.replace(digits, current)
  }

  function test(content) {
    content = String(content)
    var search = full()
    var pattern = express(search)
    return pattern.test(content)
  }

  function full() {
    var localYear = new Date().getFullYear()
    return String(localYear)
  }

  return Object.freeze({
    "bump": bump,
    "express": express,
    "full": full,
    "test": test,
  })
});
