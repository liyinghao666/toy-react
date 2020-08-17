module.exports = function (content) {
  if (/\/\/\ inspect/.test(content)) {
    console.log(`the file ${this.resourcePath} is translated to string below:`)
    console.log(content)
  }
  return content
}