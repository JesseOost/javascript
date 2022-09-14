class Morse{

    input;

    constructor(input){

        this.input = input;

        this.letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"," ","\n"];
        this.morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..","-----",".----","..---","...--","....-",".....","-....","--...","---..","----.","^","\n"];
        
        alert(this.convertToMorseCode())
    }

    convertToMorseCode(){
        var txt = this.input.toUpperCase().split("");
        var code = "";

        for(var i in txt){
            code += this.morse[this.letters.indexOf(txt[i])] + " ";
        }

        return code;
    }

    setInput(newInput){
        this.input = newInput;
    }

    getInput(){
        return this.input;
    }
}

const input = new Morse("Hello world");