function firstNonRepeatedChar(str) {
//     let num=str.split('');
	
//   for (let index = 0; index < num.length-1; index++) {
//   	   if(num[i]!=num[i+1]){
// 		   return num[i];
//   }
// }
	// return null;
	for(let i=0;i<str.length;i++){
		let char=str[i];
		if(str.indexOf(char)===i && str.indexOf(char,i+1)===-1){
			return char;
		}
	}
	return null;
	console.log(firstNonRepeatedChar('aabbcdd'));
console.log(firstNonRepeatedChar('aabbcc'));
}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
