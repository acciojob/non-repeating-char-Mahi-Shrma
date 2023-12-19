function firstNonRepeatedChar(str) {
//     let num=str.split('');
	
//   for (let index = 0; index < num.length-1; index++) {
//   	   if(num[i]!=num[i+1]){
// 		   return num[i];
//   }
// }
	let freq = {};
  // Loop through the string and update the frequency
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  // Loop through the string again and return the first character with frequency 1
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }
  // If no such character exists, return null
  return null;
	// return null;
// 	for(let i=0;i<str.length;i++){
// 		let char=str[i];
// 		if(str.indexOf(char)===i && str.indexOf(char,i+1)===-1){
// 			return char;
// 		}
// 	}
// 	return null;
// 	console.log(firstNonRepeatedChar('aabbcdd'));
// console.log(firstNonRepeatedChar('aabbcc'));
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
