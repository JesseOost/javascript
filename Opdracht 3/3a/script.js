const quotes = ["Geluk is niet te koop en toch wil je veel betalen om gelukkig te lijken.",
    "Het geluk is: zijn hart aan de kant van zijn plicht zetten.",
    "We kunnen veel mensen gelukkig maken met het geluk dat wij weggooien.",
    "Dit vind ik het schoonste en echtste geluk: niet weten waarom, zonder reden.",
    "Alle aards geluk berust op een compromis tussen droom en werkelijkheid.",
    "Wie zich gelukkig voelt met het geluk van anderen, bezit een rijkdom zonder grenzen.",
    "Geluk is een goede gezondheid en een slecht geheugen.",
    "Het geluk is gemaakt van heel veel droom en een beetje werkelijkheid",
    "De gelukkigste mens is degene die het denkt te zijn.",
    "Het geluk loopt wel eens de tegenovergestelde richting uit van je principes.",
    "Wie het geluk niet kan genieten als het komt, moet niet klagen als het hem verlaat.",
    "Het geluk is als de zon, je mag er niet met open ogen naar kijken.",
    "Loop niet te hard, het geluk loopt dikwijls achter je.",
    "Hoe hoger de toppen van geluk, hoe dieper de schaduwen van pijn.",
    "Geluk alleen maakt niet gelukkig.",
    "Put het geluk nooit uit. De laatste emmer smaakt naar de bodem.",
    "Wie het volmaakte geluk wil kennen, blijven thuis",
    "Het geluk treedt graag binnen in het huis waar opgeruimdheid heerst.",
    "Het geluk bestaat erin te verlangen wat men heeft.",
    "Geluk is als een vlinder. Hoe meer je er op jaagt, hoe verder hij zich van jou verwijdert. Maar als je rustig blijft zitten en je aandacht aan andere dingen besteedt, komt hij vanzelf op je schouders zitten.",
    "Het leven is een grap voor degenen die alleen meelachen.",
    "Geluk is niet iets dat je meemaakt. Het is iets dat je je herinnert.",
    "Het enige geluk dat men werkelijk het zijne mag noemen is het geluk dat men aan anderen heeft geschonken.",
    "Op het geluk moet je niet wachten, je moet het tegemoet gaan.",
    "Het geluk is een dwaze maagd die zich laat zoenen door elke sterke jonge man.",
    "Geluk bestaat uit zoveel losse stukken dat er bijna altijd één ontbreekt.",
    "Het geluk van de man is: ik wil. Het geluk van de vrouw is: hij wil."
];

const element = document.getElementById("quote");

function giveLuckyCookie(){

    // Math random generates a random float between 0 & 1 and mutliples it with the amount of items in the array
    // This gives you a random number within amount of quotes in the array
    // Math floor rounds the number down to an int giving you a random number to displat from the array
    chosenQuote = quotes[Math.floor(Math.random()*quotes.length)];

    element.innerHTML = chosenQuote;
}