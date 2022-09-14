class Palindrome{
    
    input;

    constructor(input){
        this.input = input;

        alert(this.checkPalindrome());
    }

    checkPalindrome(){

        var inputLower = this.input.toLowerCase().replace(" ", "");
        console.log("Input Lower: " + inputLower);
        var reverseInput = inputLower.split("").reverse().join("");
        console.log("Reverse Input: " + reverseInput);
        
        if(inputLower === reverseInput){
            return this.input + " is a palindrome";
        } else{
            return this.input + " is NOT a palindrome";
        }
    }

    setInput(newInput){
        this.input = newInput;
    }

    getInput(){
        return this.input;
    }
}

const input = new Palindrome("Race Car");