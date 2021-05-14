function val1(get): Promise<number> {
  return new Promise((resolve, reject) => {
    let shouldbeNumber: number = Number(get);
    resolve(shouldbeNumber);
  });
}

function val2(get): Promise<number> {
  return new Promise((resolve, reject) => {
    let shouldbeNumber: number = Number(get);
    resolve(shouldbeNumber);
  });
}
