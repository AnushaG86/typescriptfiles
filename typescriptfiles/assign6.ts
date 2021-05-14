var capName = function (str: String[]) {
  var str1 = [];
  for (var i = 0; i < str.length; i++) {
    str1[i] = str[i].toUpperCase();
  }
  return str1;
};
var names = ["jones", "chandler", "joey", "racheal"];
console.log(capName(names));
