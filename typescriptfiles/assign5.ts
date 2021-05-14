var user = function (name: string, str: string[]) {
  return "username=" + name + "\nfriendslist=" + str;
};

console.log(user("jones", ["amy", "chandler", "joey"]));
