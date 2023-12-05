function stringChop(str, size) {
  if (str === null) {
    return [];
  }

  size = parseInt(size); // Convert size to a number

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