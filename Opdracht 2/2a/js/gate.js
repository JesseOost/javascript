class Gate {
    number;

    constructor(number) {
        this.number = number;
    }

    get getNumber() {
        return this.number;
    }

    set setNumber(newNumber) {
        this.number = newNumber;
    }
}