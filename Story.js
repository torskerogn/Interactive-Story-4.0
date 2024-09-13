export let newStory = [
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
        { text: "M3 MOD FREDERIKSBERG", nextState: 1 },
        { text: "M3 MOD KONGENS NYTORV", nextState: 2 },
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
        {text: "M1 MOD VESTAMAGER", nextState: 3},
        {text: "M2 MOD KØBENHAVNS LUFTHAVN", nextState: 4},
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
        {text: "M1 MOD VESTAMAGER", nextState: 5},
        {text: "M2 MOD KØBENHAVNS LUFTHAVN", nextState: 4},
      ],
      imgUrl: "Metro.KgsNytorv.jpg",
    },
    //3 DR BYEN
    {
      header: "Ved DR Byen",
      description: `TILLYKKE Du er kommet helskindet til DR Byen, og har dermed klaret spillet! 
      <br><br/>
      Skynd dig i skole så du kan komme i gang med at kode!
      <br><br/>
      "Metro Adventure 1.5: The Walk" er under udvikling. 
      <br><br/>
      Vi ses snart 
      <br><br/>
      vh Valdemar`,
      choices: [{text: "PRØV IGEN", nextState: 6}],
      // choices: [-1],
      imgUrl: "metro.DRByen.jpg",
    },
    //4 FORKERT RETNING
    {
      header: "Forkert retning",
      description: `Forkert retning. <br><br/> Spillet er tabt.`,
      choices: [{text: "PRØV IGEN", nextState: 6}],
      // choices: [-1],
      imgUrl: "sadSmiley.webp",
    },
    //5 KONTROLLØR
    {
      header: "Kontrollør",
      description: `Du støder desværre ind i en kontrollør og får en bøde på 1.200 kroner. <br><br/>Spillet er tabt.`,
      choices: [{text: "PRØV IGEN", nextState: 6}],
      // choices: [-1],
      imgUrl: "stack.jpg",
    },
    //6 FORSIDE
    {
      header: "Metro Adventure",
      description: `Hej med dig. <br><br/> Velkommen til mit spil. Tryk på knappen "START" for at begynde.`,
      choices: [{text: "START",nextState: 0}],
      imgUrl: "metrologo.jpg",
    },
  ];
  