/**
 * Created by progden on 2017/7/11.
 */

var hightlightTool = require("./umd");
var msg = "Hello Wrold!";
var keyword = "old";
console.log({
    msg: msg,
    keyword: keyword,
    rs: hightlightTool.highlight(msg, keyword)
});
