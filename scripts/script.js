// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards
fetch("https://api.magicthegathering.io/v1/cards")
.then(result => result.json())
.then ((res) => {
    collectData(res);
})
.catch(err => console.log(err))




/*  */

function collectData (result){
    console.log(result);
    
    
    /* lager en loop for å gå igjennom et kort og for hver gang
     begynne på nesten  til den har gjort hele lengden 
     */
    for (var i=0; i < result.cards.length; i++) {
        var deck = document.getElementById('cards');
        /* her lager eg en div til col-sm-4 for å senere slette den originale col-sm-4
        i selve html filen for en senere oppgave. 
        */
        var colm4 = document.createElement('div');
        colm4.className="col-sm-4";
        
        
        /* her alger eg oså en ny div fil som skal erstatte cardContain diven i html filen
        for å prøve den eg har til senere.
        */ 
        var cardContain = document.createElement('div');
        cardContain.className="card-container";
        
        
        /* her tar eg og gjør både colm4 og cardcontain (som er de nye div filene mine
        ) og tar de inni deck. Siden cardcontain er inni colm4 diven tar eg og appender den til colm4 
        */ 
        deck.appendChild(colm4);
        colm4.appendChild(cardContain);
        
        /* Her lager eg en ny Variable ifra h4 keyword og sier at det er en innerhtml bit.
        Altså tekst av noe slag.
        Så ber eg den finner den i result. card og array keyword name*/
        var title = document.createElement('h4');
        title.innerHTML = result.cards[i].name;
        
        /* cardlm4 er inni deck diven så eg tar og gjør en childappent til deck (siden colm4 er inni den) Hvis colm4 og cardcontain var begge inni en div hadde eg tatt og gjort 
        begge til childappent deck
        */ 
        cardContain.appendChild(title);
        
        
        
        /* her tar eg og get img en variable som heter pic. Eg velger ta å finne pic sin url
        (siden det er det som viser) Går i results. cards diven. [i] inni array listen og
        finner imageUrl taggen.
        Eg velger også å ta bildet på 100% i en string
        */
        var pic = document.createElement('img');
        pic.src = result.cards[i].imageUrl;
        pic.style.width = '100%';
        
        /* eg tar pic og gjør den til en child til cardContain siden den er ikki den div'en */
        cardContain.appendChild(pic);
        
        /* eg lager en ny variable og fester den ifra a linken. Eg sier så at det er en
        href type. så forteller eg at eg vil ha resultatet i cards og [i] array listen
        hvor eg vil ha ordet ID
        */
        var identity = document.createElement('a');
        identity.href = result.cards[i].id;
        /* eg vil så ha det som er mellom begge <a> og </a>. Altså "view more" biten. 
        */ 
        identity.innerHTML = 'View More';
        /* Så ber eg den finne class namen for å finne style typen som har blitt brukt.
        */
        identity.className='btn btn-success';
        
        cardContain.appendChild(identity);
    }
}

function search() {
    
}



/* Slett ifra col-sm-4 i html filen når du har alle kortene.    <div class="row">
<div class="col-sm-12" id="cards">
                <div class="col-sm-4">
                    <div class="card-container">
                        <h4>Atinlay Igpay</h4>
                        <img src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=73937&amp;type=card" width="100%">
                        <a href="card-specific.html?id=c353618d9f76c03a0c7d549f2d877f9533112d0c" class="btn btn-success">View More</a>
                    </div>
                </div>*/