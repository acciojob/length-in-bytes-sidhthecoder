const byteSize = (str) => {
  // write your code here
	// Use the TextEncoder API to convert the string to a Uint8Array
  const encoder = new TextEncoder();
  const encodedString = encoder.encode(str);

  // Return the length of the Uint8Array, which represents the size in bytes
  return encodedString.length;

};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
