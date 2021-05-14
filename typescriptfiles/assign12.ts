interface Printable {
  name: String;
}
var employee: Printable = {
  name: "employee object"
};

var circle: Printable = {
  name: "circle object"
};
var printAll = function (...object) {
  console.log(object);
};

printAll(employee, circle);
