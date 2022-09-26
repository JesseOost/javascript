const text = prompt("Please enter some text");

const noVowels = text.replace(/[aeiou]/gi, ""); // RegEx replaces all the vowels, both lowerCase and upperCase;

alert(noVowels);