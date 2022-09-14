class Airport {
    name;
    iata;

    constructor(name) {
        this.name = name;
    }

    constructor(iata) {
        this.iata = iata;
    }

    get getName() {
        return this.name;
    }

    set setName(newName) {
        this.name = newName;
    }

    get getIata() {
        return this.iata;
    }

    set setIata(newIata) {
        this.iata = newIata;
    }
}