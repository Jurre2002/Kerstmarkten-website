function openkerstmarkt(city) {
    const modalContent = document.getElementById('modalContent')


    //de verschillende infoformatie van de steden
    const cityData = {
      'boedapest' : {
        'stad' : 'Boedapest',
        'info' : 'De kerstmarkt vanIn het hart van Europa, langs de majestueuze oevers van de Donau, wordt de kerstmarkt van Boedapest jaarlijks tot leven gebracht en betovert bezoekers met zijn unieke charme. De kerstmarkt van Boedapest strekt zich uit over de prachtige pleinen van de Hongaarse hoofdstad, met de meest opvallende locatie op het Vörösmarty-plein. Hier vormt zich een sprookjesachtig dorp van houten chalets, elk gevuld met de rijke tradities en smaken van de feestdagen. ',
        'image' : '/Images/Boedapest.jpeg'
      },
      'keulen' : {
        'stad' : 'Keulen',
        'info' : 'In het hart van Duitsland, langs de oevers van de Rijn, komt de stad Keulen tot leven tijdens de feestelijke periode met een kerstmarkt die bekend staat om zijn levendige sfeer en historische charme. De kerstmarkt van Keulen, gehouden op de historische Alter Markt en de Domplatz, is een van de oudste en meest pittoreske kerstmarkten van Duitsland. De kraampjes, versierd met fonkelende lichtjes en feestelijke ornamenten, creëren een betoverend dorp dat doordrenkt is van traditie. ',
        'image' : '/Images/Keulen.jpg'
      },
      'madeira' : {
        'stad' : 'Madeira',
        'info' : 'Madeira, het betoverende Portugese eiland in de Atlantische Oceaan, verwelkomt bezoekers tijdens de feestdagen met een kerstmarkt die de warmte van het eiland combineert met de magie van het seizoen. De kerstmarkt van Madeira vindt plaats in de hoofdstad Funchal, waar de straten worden omgetoverd tot een schitterend schouwspel van lichtjes en kleurrijke decoraties. De bloemrijke lanen en de kustlijn van de stad dienen als het perfecte decor voor deze feestelijke viering.',
        'image' : '/Images/Madeira.jpeg'
      },
      'madrid' : {
        'stad' : 'Madrid',
        'info' : 'In de levendige Spaanse hoofdstad Madrid, komt de magie van Kerstmis tot leven met een betoverende kerstmarkt die bekend staat om zijn energieke sfeer en levendige festiviteiten. De kerstmarkt in Madrid wordt gehouden op het historische Plaza Mayor, een iconisch plein dat doordrenkt is van geschiedenis en karakter. Hier verrijzen kleurrijke kraampjes die een uitgebreid assortiment aan traditionele producten en handgemaakte kunst presenteren, waardoor het plein wordt omgetoverd tot een feestelijk winterdorp.',
        'image' : '/Images/Madrid.jpeg'
      },
      'montbéliard' : {
        'stad' : 'Montbéliard',
        'info' : 'In het pittoreske stadje Montbéliard, gelegen in de Franse regio Bourgogne-Franche-Comté, komt de kerstmarkt tot leven als een betoverend tafereel van traditionele charme en feestelijke vreugde. De kerstmarkt van Montbéliard staat bekend als een van de oudste en meest authentieke in Frankrijk. Elk jaar vult de geur van versgebakken lekkernijen, ambachtelijke producten en glühwein de lucht op het schilderachtige Place Saint-Martin, waar de markt plaatsvindt. ',
        'image' : '/Images/Montbéliard.jpeg'
      },
      'valkenburg' : {
        'stad' : 'Valkenburg',
        'info' : 'In het betoverende Valkenburg wordt elk jaar een kerstmarkt georganiseerd die diep geworteld is in traditie en gezelligheid. In de pittoreske grotten van Valkenburg wordt de kerstmarkt op unieke wijze gehouden. Deze ondergrondse locatie geeft de markt een sfeer van mysterie en warmte, waardoor bezoekers worden ondergedompeld in een betoverende kerstervaring. ',
        'image' : '/Images/Valkenburg.jpeg'
      },
      'gdansk' : {
        'stad' : 'Gdansk',
        'info' : 'In het historische Gdansk aan de Baltische Zee, komt de oude stad tot leven tijdens de kerstperiode met een betoverende kerstmarkt die de rijke geschiedenis van de stad combineert met de feestelijke geest van Kerstmis. De kerstmarkt van Gdansk strekt zich uit langs de geplaveide straten van de oude binnenstad, waar kleurrijke kraampjes een scala aan ambachtelijke producten, lokale lekkernijen en feestelijke decoraties aanbieden. De middeleeuwse architectuur van de stad fungeert als een sfeervol decor voor deze betoverende viering. ',
        'image' : '/Images/Gdansk.jpeg'
      },
      'brussel' : {
        'stad' : 'Brussel',
        'info' : 'In de bruisende stad Brussel, gehuld in historische pracht en Europese allure, schittert elk jaar een betoverende kerstmarkt die bezoekers van over de hele wereld trekt. De kerstmarkt van Brussel, gehouden op het prachtige Grand-Place, wordt beschouwd als een van de mooiste ter wereld. Hier verlichten duizenden fonkelende lichtjes de gevels van de historische gebouwen, waardoor het plein wordt omgetoverd tot een schitterend spektakel van kleur. ',
        'image' : '/Images/Brussel.webp'
      },
      'wenen' : {
        'stad' : 'Wenen',
        'info' : 'In de elegante stad Wenen, doordrenkt van keizerlijke grandeur en artistieke pracht, komt tijdens de feestdagen een kerstmarkt tot leven die de sfeer van traditie en betovering omarmt. De kerstmarkt van Wenen, gehouden op het Rathausplatz voor het imposante stadhuis, is een meesterwerk van licht en kleur. Duizenden fonkelende lampjes verlichten de kraampjes die een scala aan ambachtelijke producten, heerlijke lekkernijen en feestelijke decoraties aanbieden. Het is een magisch schouwspel dat bezoekers transporteert naar een wereld van warmte en gezelligheid. ',
        'image' : '/Images/Wenen.jpeg'
      },
      'tallinn' : {
        'stad' : 'Tallinn',
        'info' : 'In de middeleeuwse charme van Tallinn, de hoofdstad van Estland, wordt de aankomst van de feestdagen gevierd met een betoverende kerstmarkt die de stad in een sprookjesachtige omgeving omtovert. De kerstmarkt van Tallinn, gehouden op het historische Raekoja Plats (Stadhuisplein), neemt bezoekers mee terug in de tijd met zijn middeleeuwse setting. Omringd door pastelkleurige koopmanshuizen en de oude toren van het stadhuis, straalt dit plein een unieke sfeer uit.',
        'image' : '/Images/tallinn.jpg'
      },

       
    };
    //haalt de informatie op voor de bepaalde stad
    const cityInfo = cityData[city];

    modalContent.innerHTML = '<h1>' + cityInfo.stad + '</h1>' + '<img src=" ' + cityInfo.image + '"alt="' + city + '"/><p>' + cityInfo.info + '</p>';

    document.getElementById('myModal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }
  
  window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target === modal) {
      closeModal();
    }
  };
