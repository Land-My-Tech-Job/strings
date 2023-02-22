//Problem One

  //function isBlank(input) {
    //return (!input || /^\s*$/.test(input));
  //}
  //console.log(isBlank(""));      // true
  //console.log(isBlank("   "));   // true
  //console.log(isBlank("foo"));   // false
  //console.log(isBlank("foo "));  // false
  //console.log(isBlank(null));    // true
  //console.log(isBlank(undefined));  // true

//Problem Two
//let input = "Hi Me!"
//function stringToArray(input) {
  // Use String.prototype.trim() to remove leading and trailing whitespace
  //const trimmedInput = input.trim();
  // Use String.prototype.split() to split the string into an array of words
  //const wordsArray = trimmedInput.split(/\s+/);
  //return wordsArray;
//}
//console.log(stringToArray(input))

//Problem Three
function abbreviateName(name) {
  const namesArray = name.trim().split(' ');
  if (namesArray.length === 1) {
    return namesArray[0];
  }
  const firstName = namesArray[0];
  const lastNameInitial = namesArray[namesArray.length - 1][0];
  return `${firstName} ${lastNameInitial}.`;
}
console.log(abbreviateName('April Harris June May'))
