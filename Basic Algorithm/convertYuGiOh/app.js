// checkYuGiOh
const checkYuGiOh = (n) => {
  let no = Number(n);
  if (isNaN(no)) {
    no = n;
    parameter = typeof no;
    if (Array.isArray(no)) {
      no = `[${n}]`;
      Array.isArray(no);
    } else if (parameter === "object") {
      no = JSON.stringify(no);
    }
    return `invalid parameter: "${no}"`;
  } else {
    let arr = new Array();
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
        arr.push("yu-gi-oh");
      } else if (i % 2 === 0 && i % 3 === 0) {
        arr.push("yu-gi");
      } else if (i % 2 === 0 && i % 5 === 0) {
        arr.push("yu-oh");
      } else if (i % 3 === 0 && i % 5 === 0) {
        arr.push("gi-oh");
      } else if (i % 2 === 0) {
        arr.push("yu");
      } else if (i % 3 === 0) {
        arr.push("gi");
      } else if (i % 5 === 0) {
        arr.push("oh");
      } else {
        arr.push(String(i));
      }
    }
    return arr;
  }
};

console.log(checkYuGiOh(10));

