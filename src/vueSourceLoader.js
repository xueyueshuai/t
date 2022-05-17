delete require.cache[require.resolve("./vueSourceLoader.js")]

module.exports = function (content) {
  content = content.replace(/`/g, "\\`").replace(/\t/g, "    ").replace(/\$/g, "\\$");
  return "export default `" + content + "`";
}
