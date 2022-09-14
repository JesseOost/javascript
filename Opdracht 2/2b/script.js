// element = document.getElementById("song");

class Song {

    name;
    dooDoo;
    sharks;

    constructor(name){

        this.name = name;
        this.dooDoo = " doo".repeat(6);
        this.sharks = ["Baby Shark", "Mommy Shark", "Daddy Shark", "Grandma Shark", "Grandpa Shark", "Let's go hunt", "Run Away", "Safe at last", "It's the end"];

        const element = document.getElementById("song");
        element.innerHTML = this.singing();
    }

    singing(){
        
        var theSong = "";

        for(let chorus = 0; chorus < this.sharks.length; chorus++){

            var newChorus = this.getSharks()[chorus] + "," + this.getDooDoo() + "<br>";
            newChorus = newChorus.repeat(3) + this.getSharks()[chorus] + "!<br><br>";

            theSong += newChorus;
        }
        
        return theSong;
    }

    getName(){
        return this.name;
    }

    set setName(newName){
        this.name = newName;
    }

    getDooDoo(){
        return this.dooDoo;
    }

    set setDooDoo(newDooDoo){
        this.dooDoo = newDooDoo;
    }

    getSharks(){
        return this.sharks;
    }

    set setSharks(newSharks){
        this.sharks = newSharks;
    }
}

const BabyShark = new Song("Baby Shark");