const one = new Promise<number>((resolve, reject) => {
  resolve(2);
});

one.then((value) => {
  return (value);
});
one.catch((error) => {
  console.log("rejected", error);
});

const two = new Promise<number>((resolve, reject) => {
  resolve(4);
});

two.then((value) => {
  return (value);
});
two.catch((error) => {
  console.log("rejected", error);
});

