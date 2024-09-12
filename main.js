import './style.css'

let newStory = [
  //0 METRO
  {
    header: "Ved Nørrebro st",
    description: 
    `Det er en kold vintermorgen i februar. Din cykel fungerer egentlig fint, men du orker simpelthen ikke den hårde tur ud til det vindblæste Vestamager.
    <br><br/>
    Du beslutter dig for at tage metroen. Du går ned for at checke ind med dit rejsekort, men din saldo er for lav. Du er studerende, så du gider ikke bruge 100kr på at fylde saldoen op igen. 
    <br><br/>
    DU KØRER SORT! og må ikke få en bøde!! Du står på Nørrebro st og skal med metro til DMJX. - Hvad gør du?`,
    // choices: [1,2],
    choices: [
      { text: "M3 mod Frederiksberg", nextState: 1 },
      { text: "M3 mod Kongens Nytorv", nextState: 2 },
    ],
    imgUrl: "Metro.jpeg",
  },
  //1 FREDERIKSBERG
  {
    header: "Ved Frederiksberg st",
    description: `Du er hermed succesfuldt kommet til Frederiksberg - du tager rulletrappen op. Stationen er fyldt med gammel sne, der er blevet slæbt ned. 
    <br><br/>
    Alt er beskidt. Du støder ind i en forretningsmand i jakkesæt på vejen hen til din næste metro - han kigger ondt på dig og snakker videre i sin telefon.
    <br><br/>
    Du bevæger dig ned på en ny perron og overvejer dit liv. Hvad gør du herfra?`,
    // choices: [3,4],
    choices: [
      {text: "M1 mod Vestamager", nextState: 3},
      {text: "M2 mod Københavns Lufthavn", nextState: 4},
    ],
    imgUrl: "Metro.frederiksberg.jpg",
  },
  //2 KGS NYTORV
  {
    header: "Ved Kongens Nytorv",
    description: `Så kom du til Kgs Nytorv. Det mest gudsforladte sted i hele Absalons København. To mænd begynder at råbe op og forstyrre de andre metro-gæster. 
    <br><br/>
    En halv fransk hotdog med et fodaftryk fra en vinterstøvle str. 46 ligger på jorden som et fjernt minde om den weekend der nu er forbi, og virkeligheden har ramt. 
    <br><br/>
    Du flygter. Ned på en ny perron. Du skal altså stadig i skole. Du skal hen og kode hele dagen. Hvad gør du herfra?`,
    // choices: [5,4],
    choices: [
      {text: "M1 mod Vestamager", nextState: 5},
      {text: "M2 mod Københavns Lufthavn", nextState: 4},
    ],
    imgUrl: "Metro.KgsNytorv.jpg",
  },
  //3 DR BYEN
  {
    header: "Ved DR Byen",
    description: `TILLYKKE Du er nu kommet til DR Byen, og har dermed klaret spillet! 
    <br><br/>
    "Kom I Skole Part 2: Killer Bikes" er under udvikling. 
    <br><br/>
    Vi ses snart 
    <br><br/>
    vh Valdemar`,
    choices: [{text: "prøv igen", nextState: 0}],
    // choices: [-1],
    imgUrl: "metro.DRByen.jpg",
  },
  //4 FORKERT RETNING
  {
    header: "Forkert retning",
    description: `Forkert retning. <br><br/> Spillet er tabt`,
    choices: [{text: "prøv igen", nextState: 0}],
    // choices: [-1],
    imgUrl: "sadSmiley.webp",
  },
  //5 KONTROLLØR
  {
    header: "Kontrollør",
    description: `Du støder desværre ind i en kontrollør og får en bøde på 1.200 kroner. <br><br/>Spillet er tabt`,
    choices: [{text: "prøv igen", nextState: 0}],
    // choices: [-1],
    imgUrl: "sadSmiley.webp",
  },
];

//HOOKS til html DOM
const headerEl = document.querySelector('header h1')
const textEl = document.querySelector("#text p")
const optionsEl = document.querySelector("#options")
const imgEl = document.querySelector("main img")
// console.log(imgEl)

//sæt den aktuelle position i historien
let currentState = 0

function startGame() {
  currentState = 0
  
  showText(currentState)
  showImage(currentState)
  showChoices(currentState)
} 

function showText(stateID) {
  console.log(newStory[stateID].header)
  headerEl.textContent = newStory[stateID].header
  textEl.innerHTML = newStory[stateID].description
}

function showImage(stateID) {
  imgEl.src = "./færdige billeder/" + newStory[stateID].imgUrl
}

function showChoices(stateID) {
  optionsEl.innerHTML = ""

  console.log(newStory[stateID])


  newStory[stateID].choices.forEach( (valg) => {
    const myButton = document.createElement("button")
    myButton.innerText = valg.text
    myButton.classList.add("btn-color")

    // Tilføj event listener
    myButton.addEventListener("click", () => {
      optionSelected(valg)
    })
    optionsEl.append(myButton)
  })
}

//Håndter den valgte knap
function optionSelected(valg) {
  currentState = valg.nextState

  showText(currentState)
  showImage(currentState)
  showChoices(currentState)
}

// START SPILLET
startGame()
