class Runway {
    runwayName;

    constructor(runwayName){
        this.runwayName = runwayName;
    }

    get getRunwayName(){
        return this.runwayName;
    }

    set setRunwayName(newRunwayName){
        this.runwayName = newRunwayName;
    }
}