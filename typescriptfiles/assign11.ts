var func = (arr: String[]) => {
  var arr2 = [];
  for (var i = 0; i < arr.length; i++) {
    arr2[i] = { name: arr[i], length: arr[i].length };
  }
  return arr2;
};

console.log(func(["joey", "chandler", "ross"]));
