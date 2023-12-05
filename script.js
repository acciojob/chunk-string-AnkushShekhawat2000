// function stringChop(str, size) {
//   // your code here
// }

// // Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));









function stringChop(str, size) {
  if (str === null) {
    return [];
  }

  const chunks = [];
  let i = 0;

  while (i < str.length) {
    chunks.push(str.slice(i, i + size));
    i += size;
  }

  return chunks;
}

// Example
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(JSON.stringify(stringChop(str, size)));

