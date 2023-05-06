const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const index = urlParams.get('nub');

monkeys = ["dart", "bomer", "boom", "tack", "ice", "glue"];
selected = monkeys[index];

if(selected == "dart"){
    $( "#first" ).on( "click", function() {
        $(".title").html("Ultravidunder");
        $(".pic").attr("src", "/bild/UJ.png");
        $(".inGameDes").html('<p class="infoText">"Gigantiska spikklot som delas två gånger i 6 Vidunderklot för ännu större destruktiv kraft mot Keramik- och Förstärkta Bloons."</p>');
        $(".des").html('<p class="infoText">Ultravidunder kan förstöra blybloons och gör extra skada emot förstärkta bloons och keramik bloons och den kan inte förstöra kamobloons utan någon tvärbana. Ultravidunders spikklot studsar emot vägar och på grund av det är ultra vidunder bättre på banor med många väggar.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Ultravidunder attackerar 33% snabbare</p>');
        $(".under").html('<p class="infoText">5-0-2 Har 16 större räckvidd spikklotets livslängd ökar med 35% spikklots hastigheten ökar med 10% och kloten kan skada kamobloons</p>');
    } );

    $( "#sechound" ).on( "click", function() {
        $(".title").html("Plasmaapans fan club");
        $(".pic").attr("src", "/bild/PMFC.png");
        $(".inGameDes").html('<p class="infoText">"Elitmedlemskap i denna klubb ger Pilapan ännu större kraft!"</p>');
        $(".des").html('<p class="infoText">Plasmaapans fan club kan inte förstöra blybloons utan sin förmåga och kan inte förstöra kamobloons utan någon tvärbana. Förmågan kan transformera 19 pilapor och sig själv till plasmapilapor transformationen varar i 15 sekunder och har en cooldown på 50 sekunder.</p>');
        $(".över").html('<p class="infoText">2-5-0 Ökar genombornings förmågan av både apans pilar och transformationens plasmaklot.</p>');
        $(".under").html('<p class="infoText">0-5-2 Har 16 större räckvidd ökar pilarnas hastighet med 10% och livslängden på pilarna ökar med 20% och plasma bollarna och pilarna kan skada kamobloons</p>');
    } );

    $( "#third" ).on( "click", function() {
        $(".title").html("Armbågsmästare");
        $(".pic").attr("src", "/bild/CM.png");
        $(".inGameDes").html('<p class="infoText">"Armborstmästaren skjuter väldigt snabbt och förstör enkeltde flästa Bloontyperna."</p>');
        $(".des").html('<p class="infoText">Armbågsmästaren kan förstöra både blybloons och kamoblons utan någon tvärbana och kan träfa kritiska träfar som gör mer skade emot alla typer av bloons. Den har även en otroligt stor räckvidd.</p>');
        $(".över").html('<p class="infoText">2-0-5 Ökar pilarnas genomborning från 8 till 21.</p>');
        $(".under").html('<p class="infoText">0-2-5 Armbågsmästaren attackerar 33% snabbare</p>');
    } );
}

if(selected == "bomer"){
    $( "#first" ).on( "click", function() {
        $(".title").html("Svärdherre");
        $(".pic").attr("src", "/bild/GL.png");
        $(".inGameDes").html('<p class="infoText">"Glavherren omger sig självmed 3 specialglavar som strimlar sönder allt som kommer i närheten. Glavherrens glavar skär sig nu in i Bloons i MOAB-klassen och strimlar långsamt sönder dem från insidan."</p>');
        $(".des").html('<p class="infoText">Specialglavarna kan förstöra camo blons och har ökad skada emot kermaik bloons och glavarna svärdherren kastar söker upp andra bloons. Och glavherren fortsätter att skada MOAB bloons över tid efter att ha träffat MOABs med glavar.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Svärdherren attackerar snabbare med 0.15 sekunder.</p>');
        $(".under").html('<p class="infoText">5-0-2 Har 15% störe räckvidd och svärdherren gör 1 extra skada och kan nu förstöra ledbloons.</p>');
    } );

    $( "#sechound" ).on( "click", function() {
        $(".title").html("Permaladdning");
        $(".pic").attr("src", "/bild/PC.png");
        $(".inGameDes").html('<p class="infoText">"Permaladdning har permanent supersnabb attackhastighet. Förmågan ökar dödligheten ännu mer."</p>');
        $(".des").html('<p class="infoText">permaladdning kan inte förstöra varken ledbloons eller kamobloons utan någon tvärbana. Förmågan ökar permaladdnings skada med 8 under 15 skeunder och har en cooldown på 40 sekunder.</p>');
        $(".över").html('<p class="infoText">2-5-0 Ökar genombornings förmågan till 13.</p>');
        $(".under").html('<p class="infoText">0-5-2 Har större räckvidd, ökar skadan emot alla bloontyper med 4 och kan förstöra ledbloons</p>');
    } ); 

    $( "#third" ).on( "click", function() {
        $(".title").html("MOAB-dominans");
        $(".pic").attr("src", "/bild/MD.png");
        $(".inGameDes").html('<p class="infoText">"Specialtillbakaknuff aktiveras oftare och ger massor av extra skada."</p>');
        $(".des").html('<p class="infoText">MOAB-dominans kan förstara ledbloons men kan inte förstöra kamobloons och ger extra skade emot MOAB bloons och kan knuffa tillbaka MOABs emot början.</p>');
        $(".över").html('<p class="infoText">2-0-5 Ökar Kylie bomerangernas genomborning med 5 och heavy Kylie genomborning med 120 och attackerar 14% snabbare.</p>');
        $(".under").html('<p class="infoText">0-2-5 Ökar Kylies attackhastigheten med 25% snabbare och heavy Kylies attackhastighet med 25%.</p>');
    } );
}