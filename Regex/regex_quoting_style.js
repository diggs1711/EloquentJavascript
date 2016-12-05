//replace single quotes with double

var str = "'We're all Leeds aren't we'";
var reg = str.replace(/(^|\W)'|'(\W|$)/g, '$1"$2');
console.log(reg);
