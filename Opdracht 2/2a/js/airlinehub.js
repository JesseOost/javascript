class AirlineHub {
    airlinerName;
    fleetSize;

    constructor(airlinerName){
        this.airlinerName = airlinerName;
    }

    constructor(fleetSize){
        this.fleetSize = fleetSize;
    }

    get getAirlinerName(){
        return this.airlinerName;
    }

    set setAirlinerName(newAirlinerName){
        this.airlinerName = newAirlinerName;
    }
}