const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const index = urlParams.get('nub');
const col = urlParams.get('colore')

monkeys = ["dart", "bomer", "boom", "tack", "ice", "glue", "sniper", "sub", "buccaner", "ace", "heli", "mortar", "dartling", "wiz", "sup", "ninja", "alc", "druid"];
selected = monkeys[index];

if(col == "blu"){
    color = "#6EBFE8";
    }
if(col == "gre"){
    color = "#8DEB79";
    }
if(col == "pur"){
    color = "#AB7EF8"
}

//Primary
if(selected == "dart"){
    $(".title").html("Ultravidunder");
        $(".pic").attr("src", "/bild/UJ.png");
        $(".inGameDes").html('<p class="infoText">"Gigantiska spikklot som delas två gånger i 6 Vidunderklot för ännu större destruktiv kraft mot Keramik- och Förstärkta Bloons."</p>');
        $(".des").html('<p class="infoText">Ultravidunder kan förstöra blybloons och gör extra skada emot förstärkta bloons och keramik bloons och den kan inte förstöra kamobloons utan någon tvärbana. Ultravidunders spikklot studsar emot vägar och på grund av det är ultra vidunder bättre på banor med många väggar.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Ultravidunder attackerar 33% snabbare</p>');
        $(".under").html('<p class="infoText">5-0-2 Har 16 större räckvidd spikklotets livslängd ökar med 35% spikklots hastigheten ökar med 10% och kloten kan skada kamobloons</p>');
        $('.bild').css({'background-color':color});
        $('.text').css({'background-color':color});
}
if(selected == "bomer"){
    $(".title").html("Svärdherre");
        $(".pic").attr("src", "/bild/GL.png");
        $(".inGameDes").html('<p class="infoText">"Glavherren omger sig självmed 3 specialglavar som strimlar sönder allt som kommer i närheten. Glavherrens glavar skär sig nu in i Bloons i MOAB-klassen och strimlar långsamt sönder dem från insidan."</p>');
        $(".des").html('<p class="infoText">Specialglavarna kan förstöra camo blons och har ökad skada emot kermaik bloons och glavarna svärdherren kastar söker upp andra bloons. Och glavherren fortsätter att skada MOAB bloons över tid efter att ha träffat MOABs med glavar.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Svärdherren attackerar snabbare med 0.15 sekunder.</p>');
        $(".under").html('<p class="infoText">5-0-2 Har 15% störe räckvidd och svärdherren gör 1 extra skada och kan nu förstöra ledbloons.</p>');
        $('.bild').css({'background-color':color});
        $('.text').css({'background-color':color});
}
if(selected == "boom"){
    $(".title").html("Bloonkross");
        $(".pic").attr("src", "/bild/BC.png");
        $(".inGameDes").html('<p class="infoText">"Bloonförintande explosioner åsamkar massiv skada och kan bedöva MOAB-klass-Bloons."</p>');
        $(".des").html('<p class="infoText">Bloonkrossen kan inte förstöra kamobloons men kan förstöra ledbloons. Bloonkrossen kan bedöva alla typer av bloons.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Bloonkrossen attackerar oftare med 0.675 sekunder.</p>');
        $(".under").html('<p class="infoText">5-0-2 Räckvidden ökar med 9 och den får framgment som skjuts ut när bomben exploderar</p>');
        $('.bild').css({'background-color':color});
        $('.text').css({'background-color':color});
}
if(selected == "tack"){
    $(".title").html("Infernalisk ring");
        $(".pic").attr("src", "/bild/IR.png");
        $(".inGameDes").html('<p class="infoText">"Dödligt eldhav bränner Bloons till aska."</p>');
        $(".des").html('<p class="infoText">Infernalisk ring kan inte förstöra kamobloons men kan förstöra ledbloons. Men skjuter ut eld klot som kan förstöra kamobloons och gör massiv eldskada.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Räckviden ökar med 8, genombornings förmågan ökar med 20 och genomborningen av eldklotet ökar med 1.</p>');
        $(".under").html('<p class="infoText">5-0-2 Den vanliga attackens skada ökar med 2 och eldklotets skada ökar med 300.</p>');
        $('.bild').css({'background-color':color});
        $('.text').css({'background-color':color});
}
if(selected == "ice"){
    $(".title").html("Superspröd");
        $(".pic").attr("src", "/bild/SB.png");
        $(".inGameDes").html('<p class="infoText">"Bloons tar stor skada när de frusna, även MOAB-klass-Bloons."</p>');
        $(".des").html('<p class="infoText">Superspröd kan förstöra kamobloons och ledbloons. Och de frusna bloonsen tar mer skada av alla attacker som kan påvärka dom.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Superspröd attackerar snabbare och frysningen varar 0.7 sekunder längre och genomborningen ökar med 10.</p>');
        $(".under").html('<p class="infoText">5-0-2 Ökar räckviden med 7.</p>');
        $('.bild').css({'background-color':color});
        $('.text').css({'background-color':color});
}
if(selected == "glue"){
    $(".title").html("Bloonlösaren");
        $(".pic").attr("src", "/bild/TBS.png");
        $(".inGameDes").html('<p class="infoText">"Är Bloons ett problem? Här är lösningen."</p>');
        $(".des").html('<p class="infoText">Bloonlösaren kan förstöra blybloons men kan inte förstöra kamobloons. När klistret förstör bloons lämnar dom en hög av klister på marken som förstör nästan alla bloons som kommer i kontakt med den.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Bloonlösaren ökar sin genomborningsförmåga ökar med otroligt mycket.</p>');
        $(".under").html('<p class="infoText">5-0-2 Klistret slöar bloonsen med 75% istället för 50% och varar 9.1 sekunder längre.</p>');
        $('.bild').css({'background-color':color});
        $('.text').css({'background-color':color});
}

//Military
if(selected == "sniper"){
    $(".title").html("MOAB-Krymplare");
        $(".pic").attr("src", "/bild/CMOAB.png");
        $(".inGameDes").html('<p class="infoText">"Skadade MOAB:er är orörliga längre och tar extra skada från alla andra attacker."</p>');
        $(".des").html('<p class="infoText">MOAB-Krymplaren kan förstöra blybloons men kan inte förstöra kamobloons. Och stannar MOAB:er när dom blir träffade så blir de orörliga ett tag och tar extraskada under den tiden.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Sniper skotten får splitterskott som göra MOAB som blir träfade orörliga och gör så att de tar mer skada och kan förstöra kamobloons.</p>');
        $(".under").html('<p class="infoText">5-0-2 Skjuter snabbare.</p>');
        $('.bild').css({'background-color':color});
        $('.text').css({'background-color':color});
}
if(selected == "sub"){
    $(".title").html("Energigivare");
        $(".pic").attr("src", "/bild/E.png");
        $(".inGameDes").html('<p class="infoText">"Minskar nedkylningen av förmågor överallt med 20%. Inom radien får hjältar XP 50% snabbare och vattenapornas nedkylning av förmågor halveras."</p>');
        $(".des").html('<p class="infoText">Energigivaren kan inte förstöra blybloons eller kamobloons med sin vanliga attack. När u-båten är under vattnet kan den tabort kamon från bloons inanför dens radie och skaddar alla bloons inanför dens radie.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Gör så att Energigivaren kan förstöra ledbloons med både sina vanliga attacker och när den är under vattnet.</p>');
        $(".under").html('<p class="infoText">5-0-2 Gör så att den kan påvärka och skada fler bloons när den är under vattnet.</p>');
        $('.bild').css({'background-color':color});
        $('.text').css({'background-color':color});
}
if(selected == "buccaner"){
    $(".title").html("Hangarfartygsflaggskepp");
        $(".pic").attr("src", "/bild/CF.png");
        $(".inGameDes").html('<p class="infoText">"Ger extra skada. Kan placera andra apor på fartygets övre däck och öka attackhastigheten för alla vattenbaserade apor och apess."</p>');
        $(".des").html('<p class="infoText">Hangarfartygsflaggskeppet kan inte förstöra blybloons eller kamobloons. Men har små flyggplan som flyger runt på kartan och skjuter pilar på bloons och missiler på MOAB-klass-Bloons.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Gör så att hangarfartygsflaggskeppet kan förstöra ledbloons och skjuter ut brinnande vindruvor från skeppets kanoner.</p>');
        $(".under").html('<p class="infoText">5-0-2 Gör så att den kan förstöra kamobloons och ökar båtens räckvidd.</p>');
        $('.bild').css({'background-color':color});
        $('.text').css({'background-color':color});
}
if(selected == "ace"){
    $(".title").html("Himmelsförstörare");
        $(".pic").attr("src", "/bild/SS.png");
        $(".inGameDes").html('<p class="infoText">"Alla Bloons kommer att önska att de aldrig hade kommit."</p>');
        $(".des").html('<p class="infoText">Himmelsförstarare kan förstöra blybloons men kan inte förstöra kamobloons. Skickar ut missiler emot MOAB-klass-Bloons som gör mycket skada.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Gör så att flygplanet kan släppa exploderande ananaser och kan förstöra kamobloons.</p>');
        $(".under").html('<p class="infoText">5-0-2 Ökar genomborningen och ger flygplanet förmågan att åka i en stor ciekel som spelaren kan välja vart den är.</p>');
        $('.bild').css({'background-color':color});
        $('.text').css({'background-color':color});
}
if(selected == "heli"){
    $(".title").html("Apache Prime");
        $(".pic").attr("src", "/bild/AP.png");
        $(".inGameDes").html('<p class="infoText">"Apache Prime får de flesta Bloons att önska att de aldrig blivit uppblåsta"</p>');
        $(".des").html('<p class="infoText">Apache Prime kan förstöra blybloons men kan inte förstöra kamobloons. Skjuter laser kulspruta och missiler.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Gör så att den kan åka snabbare och kan förstöra kamobloons.</p>');
        $(".under").html('<p class="infoText">5-0-2 Gör så att det helikoptern skjuter rör sig snabbare och den skjuter snabbare.</p>');
        $('.bild').css({'background-color':color});
        $('.text').css({'background-color':color});
}
if(selected == "mortar"){
    $(".title").html("Den Allra Största");
        $(".pic").attr("src", "/bild/TBO.png");
        $(".inGameDes").html('<p class="infoText">"Spränger sig djupt genom Bloons och lager över ett stort område, samt kraftfull Brännstoffskada."</p>');
        $(".des").html('<p class="infoText">Den Allra Största kan förstöra blybloons men kan inte förstöra kamobloons. Kan göra bloons orörliga ett tag genom att träffa dom.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Skjuter snabbare.</p>');
        $(".under").html('<p class="infoText">5-0-2 Gör så att den träffar bättre och bränner bloons när den träffar dom.</p>');
        $('.bild').css({'background-color':color});
        $('.text').css({'background-color':color});
}
if(selected == "dartling"){
    $(".title").html("Domedagsstråle");
        $(".pic").attr("src", "/bild/ROD.png");
        $(".inGameDes").html('<p class="infoText">"Skapar en stark linje av förstörelse. Du kan tillintetgöra de flesta Bloons efter eget gottfinnande."</p>');
        $(".des").html('<p class="infoText">Domedagsstrålen kan förstöra blybloons men kan inte förstöra kamobloons. Har otoligt hög genomborning.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Kan förstöra ledbloons och skjuter snabbare.</p>');
        $(".under").html('<p class="infoText">5-0-2 Gör så att man kan snurra stålen snabbare och gör pilarna starkare.</p>');
        $('.bild').css({'background-color':color});
        $('.text').css({'background-color':color});
//MAgic
}
if(selected == "wiz"){
    $(".title").html("Ärkemagiker");
        $(".pic").attr("src", "/bild/A.png");
        $(".inGameDes").html('<p class="infoText">"En verklig mästare på magiska trollkonster. Attackerar snabbare och åsamkar mr skada på MOAB-klass-Bloons."</p>');
        $(".des").html('<p class="infoText">ärkemagikern kan förstöra blybloons och kan förstöra kamobloons. Kan även ta bort kamo från kamobloons.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Kan skjuta eld och skapa en eldvägg.</p>');
        $(".under").html('<p class="infoText">5-0-2 Så att magin rör sig snabbare och kan förstöra fler bloons.</p>');
        $('.bild').css({'background-color':color});
        $('.text').css({'background-color':color});
}
if(selected == "sup"){
    $(".title").html("Sann solgud");
        $(".pic").attr("src", "/bild/TSG.png");
        $(".inGameDes").html('<p class="infoText">"Darra inför den SANNA Solgudens ENASTÅENDE kraft!!"</p>');
        $(".des").html('<p class="infoText">Sann solgud kan förstöra blybloons och kan inte förstöra kamobloons. Kan även bli starkare genom att absorbera andra försvar när man uppgraderar till sann Solgud.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Har en mycket större räckvidd</p>');
        $(".under").html('<p class="infoText">5-0-2 Kan förstöra kamobloons och kan knuffa bloons emot början av kartan.</p>');
        $('.bild').css({'background-color':color});
        $('.text').css({'background-color':color});
}

//Primary ändra mellan 5
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

if(selected == "boom"){
    $( "#first" ).on( "click", function() {
        $(".title").html("Bloonkross");
        $(".pic").attr("src", "/bild/BC.png");
        $(".inGameDes").html('<p class="infoText">"Bloonförintande explosioner åsamkar massiv skada och kan bedöva MOAB-klass-Bloons."</p>');
        $(".des").html('<p class="infoText">Bloonkrossen kan inte förstöra kamobloons men kan förstöra ledbloons. Bloonkrossen kan bedöva alla typer av bloons.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Bloonkrossen attackerar oftare med 0.675 sekunder.</p>');
        $(".under").html('<p class="infoText">5-0-2 Räckvidden ökar med 9 och den får framgment som skjuts ut när bomben exploderar</p>');
    } );

    $( "#sechound" ).on( "click", function() {
        $(".title").html("MOAB-eliminator");
        $(".pic").attr("src", "/bild/ME.png");
        $(".inGameDes").html('<p class="infoText">"Massiv skada på Bloons i MOAB-klassen"</p>');
        $(".des").html('<p class="infoText">MOAB-eliminator kan förstöra ledbloons men kan inte förstöra kamobloons. Förmågan skuter ut en starckare raket som gör massiv skada emot den starkaste MOABen på skärmen.</p>');
        $(".över").html('<p class="infoText">2-5-0 Ökar genombornings förmågan med 16, sprängradien ökar med 6 och skadan ökar med 2.</p>');
        $(".under").html('<p class="infoText">0-5-2 Ökar räckviden med 9 och får fragment som skjuts ut när raketen exploderar.</p>');
    } ); 

    $( "#third" ).on( "click", function() {
        $(".title").html("Bomb Blitz");
        $(".pic").attr("src", "/bild/BB.png");
        $(".inGameDes").html('<p class="infoText">"Åsamkar mycket större skada och förvärvar den passiva bombstormförmågan - när liv förloras, aktiveras bombstormen automatiskt, villket förstör alla utom de allra största Bloonsen."</p>');
        $(".des").html('<p class="infoText">Bomb Blitz kan förstara ledbloons men kan inte förstöra kamobloons och när bomben sprängs så skuter den ut fragment som sedan ibland sprängs i egna fragment.</p>');
        $(".över").html('<p class="infoText">2-0-5 Ökar genombornings förmågan med 16, skadan ökar till 6 och genomborningen av fragmenten ökar.</p>');
        $(".under").html('<p class="infoText">0-2-5 Minskar hastigheten emelan skott med 0.625 sekunder och bomberna blir messiler.</p>');
    } );
}

if(selected == "tack"){
    $( "#first" ).on( "click", function() {
        $(".title").html("Infernalisk ring");
        $(".pic").attr("src", "/bild/IR.png");
        $(".inGameDes").html('<p class="infoText">"Dödligt eldhav bränner Bloons till aska."</p>');
        $(".des").html('<p class="infoText">Infernalisk ring kan inte förstöra kamobloons men kan förstöra ledbloons. Men skjuter ut eld klot som kan förstöra kamobloons och gör massiv eldskada.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Räckviden ökar med 8, genombornings förmågan ökar med 20 och genomborningen av eldklotet ökar med 1.</p>');
        $(".under").html('<p class="infoText">5-0-2 Den vanliga attackens skada ökar med 2 och eldklotets skada ökar med 300.</p>');
    } );

    $( "#sechound" ).on( "click", function() {
        $(".title").html("Supermalström");
        $(".pic").attr("src", "/bild/SMae.png");
        $(".inGameDes").html('<p class="infoText">"Ännu mera kraftfull Malströmförmåga och varar längre."</p>');
        $(".des").html('<p class="infoText">Supermalström kan förstöra ledbloons men kan inte förstöra kamobloons. Förmågan skuter ut massa rakblad åt alla håll.</p>');
        $(".över").html('<p class="infoText">2-5-0 Attackerar snabbare med 25% från 1-5-0 som attackerar 25% snabbare än 0-5-0.</p>');
        $(".under").html('<p class="infoText">0-5-2 Ökar antalet rakblad som skjuts ut med 4.</p>');
    } ); 

    $( "#third" ).on( "click", function() {
        $(".title").html("Nubbzonen");
        $(".pic").attr("src", "/bild/TTZ.png");
        $(".inGameDes").html('<p class="infoText">"Många, många nubb."</p>');
        $(".des").html('<p class="infoText">Nubbzonen kan inte förstara ledbloons och kan inte förstöra kamobloons. Skjuter ut jätte många nubbar i alla håll.</p>');
        $(".över").html('<p class="infoText">2-0-5 Ökar attackhastigheten med 25% från 1-0-5 som ökar attackhastighetn med 25% från 0-0-5.</p>');
        $(".under").html('<p class="infoText">0-2-5 Ökar räckviden med 20 och ökar genomborningen av nubbarna med 6.</p>');
    } );
}

if(selected == "ice"){
    $( "#first" ).on( "click", function() {
        $(".title").html("Superspröd");
        $(".pic").attr("src", "/bild/SB.png");
        $(".inGameDes").html('<p class="infoText">"Bloons tar stor skada när de frusna, även MOAB-klass-Bloons."</p>');
        $(".des").html('<p class="infoText">Superspröd kan förstöra kamobloons och ledbloons. Och de frusna bloonsen tar mer skada av alla attacker som kan påvärka dom.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Superspröd attackerar snabbare och frysningen varar 0.7 sekunder längre och genomborningen ökar med 10.</p>');
        $(".under").html('<p class="infoText">5-0-2 Ökar räckviden med 7.</p>');
    } );

    $( "#sechound" ).on( "click", function() {
        $(".title").html("Absolut Nollpunkt");
        $(".pic").attr("src", "/bild/AZ.png");
        $(".inGameDes").html('<p class="infoText">"Förmågan är så kall att den fryser alla Bloons under längre tid, inklusive Vita, Zebra och Kamo, saktar ner Bloons i MOAB-klassen under längre tid och ökar attackhastigheten betydligt för alla isapor så länge den varar."</p>');
        $(".des").html('<p class="infoText">Absolut Nollpunkt kan inte förstöra ledbloons eller kamobloons utan sin förmåga som kan förstöra båda.</p>');
        $(".över").html('<p class="infoText">2-5-0 Kan förstöra både blybloons och kamobloons.</p>');
        $(".under").html('<p class="infoText">0-5-2 Ökar räckviden med 7.</p>');
    } ); 

    $( "#third" ).on( "click", function() {
        $(".title").html("Istappsspetsning");
        $(".pic").attr("src", "/bild/II.png");
        $(".inGameDes").html('<p class="infoText">"Skjuter stora istappar som åsamkar stor skada på MOAB-klass-Bloons och fryser dem."</p>');
        $(".des").html('<p class="infoText">Istappsspetsning kan inte förstara ledbloons och kan inte förstöra kamobloons. Skjuter ut stora istappar som gör stor skada på MOAB-klass bloons.</p>');
        $(".över").html('<p class="infoText">2-0-5 Gör så att istappsspetsning kan förstöra ledbloons och kamobloons.</p>');
        $(".under").html('<p class="infoText">0-2-5 Ökar längden bloons är frysta med 0.7 sekunder och ökar genomborningen med 10.</p>');
    } );
}

if(selected == "glue"){
    $( "#first" ).on( "click", function() {
        $(".title").html("Bloonlösaren");
        $(".pic").attr("src", "/bild/TBS.png");
        $(".inGameDes").html('<p class="infoText">"Är Bloons ett problem? Här är lösningen."</p>');
        $(".des").html('<p class="infoText">Bloonlösaren kan förstöra blybloons men kan inte förstöra kamobloons. När klistret förstör bloons lämnar dom en hög av klister på marken som förstör nästan alla bloons som kommer i kontakt med den.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Bloonlösaren ökar sin genomborningsförmåga ökar med otroligt mycket.</p>');
        $(".under").html('<p class="infoText">5-0-2 Klistret slöar bloonsen med 75% istället för 50% och varar 9.1 sekunder längre.</p>');
    } );

    $( "#sechound" ).on( "click", function() {
        $(".title").html("klisterstorm");
        $(".pic").attr("src", "/bild/GS.png");
        $(".inGameDes").html('<p class="infoText">"Klisterstormförmåga täcker hela skärmen med klister i 20 sekunder. Fastlimmade Bloons tar extra skada medan dom är fastlimmade"</p>');
        $(".des").html('<p class="infoText">Klisterstorm kan inte förstöra led eller kamo bloons. Förmågan klistrar alla bloons på skärmen och gör så att dom tar mer skada av alla attacker.</p>');
        $(".över").html('<p class="infoText">2-5-0 Kan förstöra blybloons och klistra MOAB klass Bloons och skadar klistrade bloons.</p>');
        $(".under").html('<p class="infoText">0-5-2 Gör så att klistret varar längre och slöar ner bloonsen änu mer.</p>');
    } ); 

    $( "#third" ).on( "click", function() {
        $(".title").html("Superklister");
        $(".pic").attr("src", "/bild/SG.png");
        $(".inGameDes").html('<p class="infoText">"Klistret är så starkt att det gör alla påverkade Bloons orörliga tillfälligt!"</p>');
        $(".des").html('<p class="infoText">Superklister kan inte förstara ledbloons och kan inte förstöra kamobloons. Skjuter ut klister som kan slöa ner och tillfälligt stopa MOAB-klass bloons.</p>');
        $(".över").html('<p class="infoText">2-0-5 Gör så att klistret kan förstöra ledbloons och gör långsamt skada mot alla bloons.</p>');
        $(".under").html('<p class="infoText">0-2-5 Skjuter bara en klister som bara kan träffa en bloon men när den gör det kan klistret föras över till 10 bloons i närheten.</p>');
    } );
}

//Military ändra mellan 5
if(selected == "sniper"){
    $( "#first" ).on( "click", function() {
        $(".title").html("MOAB-Krymplare");
        $(".pic").attr("src", "/bild/CMOAB.png");
        $(".inGameDes").html('<p class="infoText">"Skadade MOAB:er är orörliga längre och tar extra skada från alla andra attacker."</p>');
        $(".des").html('<p class="infoText">MOAB-Krymplaren kan förstöra blybloons men kan inte förstöra kamobloons. Och stannar MOAB:er när dom blir träffade så blir de orörliga ett tag och tar extraskada under den tiden.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Sniper skotten får splitterskott som göra MOAB som blir träfade orörliga och gör så att de tar mer skada och kan förstöra kamobloons.</p>');
        $(".under").html('<p class="infoText">5-0-2 Skjuter snabbare.</p>');
    } );

    $( "#sechound" ).on( "click", function() {
        $(".title").html("Elitprickskytt");
        $(".pic").attr("src", "/bild/ES.png");
        $(".inGameDes").html('<p class="infoText">"Släpp av förnödigheten ger mycket mera pengar. Ger elitsiktesporioritet och snabbare omladdning till alla prickskyttar."</p>');
        $(".des").html('<p class="infoText">Elitprickskytten kan förstöra kamo bloons men inte bly bloons. Skotten som elitprickskytten skjuter studsar mellan bloons och förmågan ger 3000 kontanter.</p>');
        $(".över").html('<p class="infoText">2-5-0 Kan förstöra blybloons och gör 5 mer skade och splitterskotten gör 1 mer skada.</p>');
        $(".under").html('<p class="infoText">0-5-2 Skjuter oftare med 0.324 sekunder.</p>');
    } ); 

    $( "#third" ).on( "click", function() {
        $(".title").html("Elitförsvarare");
        $(".pic").attr("src", "/bild/ED.png");
        $(".inGameDes").html('<p class="infoText">"Avfyrar supersnabbt och ännu snabbare ju längre Bloons har kommit på banan. Får 4 gånger högre attackhastighet en kort stund vid förlust av liv. Ger större skada på MOAB-klass-Bloons."</p>');
        $(".des").html('<p class="infoText">Elitförsvarare kan inte förstara ledbloons och kan inte förstöra kamobloons. Den skjuter jätte snabt och skjuter snabbare om man läcker bloons.</p>');
        $(".över").html('<p class="infoText">2-0-5 Gör mer 5 skada och kan förstöra ledbloons.</p>');
        $(".under").html('<p class="infoText">0-2-5 Sniper skotten får splitterskott och kan förstöra ledbloons.</p>');
    } );
}
if(selected == "sub"){
    $( "#first" ).on( "click", function() {
        $(".title").html("Energigivare");
        $(".pic").attr("src", "/bild/E.png");
        $(".inGameDes").html('<p class="infoText">"Minskar nedkylningen av förmågor överallt med 20%. Inom radien får hjältar XP 50% snabbare och vattenapornas nedkylning av förmågor halveras."</p>');
        $(".des").html('<p class="infoText">Energigivaren kan inte förstöra blybloons eller kamobloons med sin vanliga attack. När u-båten är under vattnet kan den tabort kamon från bloons inanför dens radie och skaddar alla bloons inanför dens radie.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Gör så att Energigivaren kan förstöra ledbloons med både sina vanliga attacker och när den är under vattnet.</p>');
        $(".under").html('<p class="infoText">5-0-2 Gör så att den kan påvärka och skada fler bloons när den är under vattnet.</p>');
    } );

    $( "#sechound" ).on( "click", function() {
        $(".title").html("Förebyggande angrepp");
        $(".pic").attr("src", "/bild/PES.png");
        $(".inGameDes").html('<p class="infoText">"Aktiverar automatiskt en kraftfull missilattack när MOAB-klass-Bloons dycker upp från Blooningången."</p>');
        $(".des").html('<p class="infoText">Förebyggande angrepp kan inte förtöra kamobloons men kan förstöra blybloons. Förmågan skickar en stark messil emot den starkaste MOAB-klass-Bloonen på skärmen.</p>');
        $(".över").html('<p class="infoText">2-5-0 Ger u-båten förmågan att skjuta bloons inanför alla andra försvarsbyggnaders räckvidd och ökar u-båtens räckvid.</p>');
        $(".under").html('<p class="infoText">0-5-2 Ger u-båten snabbare attackhastighet och luftexploderande pilar.</p>');
    } ); 

    $( "#third" ).on( "click", function() {
        $(".title").html("Ubåtskapten");
        $(".pic").attr("src", "/bild/SC.png");
        $(".inGameDes").html('<p class="infoText">"Ger extra genomslag och skada på Befälhavaren och alla Ubåtar inom dess radie."</p>');
        $(".des").html('<p class="infoText">Ubåtskaptenen kan inte förstara ledbloons och kan inte förstöra kamobloons. Dem skjuter snabbt och gör alla ubåtar inanför dess radie bättre.</p>');
        $(".över").html('<p class="infoText">2-0-5 Får förmågan att skjuta bloons inanför alla andra försvarsbyggnaders räckvidd och ökar ubåtens räckvidd.</p>');
        $(".under").html('<p class="infoText">0-2-5 Kan förstöra ledbloons och gör mer skada.</p>');
    } );
}
if(selected == "buccaner"){
    $( "#first" ).on( "click", function() {
        $(".title").html("Hangarfartygsflaggskepp");
        $(".pic").attr("src", "/bild/CF.png");
        $(".inGameDes").html('<p class="infoText">"Ger extra skada. Kan placera andra apor på fartygets övre däck och öka attackhastigheten för alla vattenbaserade apor och apess."</p>');
        $(".des").html('<p class="infoText">Hangarfartygsflaggskeppet kan inte förstöra blybloons eller kamobloons. Men har små flyggplan som flyger runt på kartan och skjuter pilar på bloons och missiler på MOAB-klass-Bloons.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Gör så att hangarfartygsflaggskeppet kan förstöra ledbloons och skjuter ut brinnande vindruvor från skeppets kanoner.</p>');
        $(".under").html('<p class="infoText">5-0-2 Gör så att den kan förstöra kamobloons och ökar båtens räckvidd.</p>');
    } );

    $( "#sechound" ).on( "click", function() {
        $(".title").html("Piratherre");
        $(".pic").attr("src", "/bild/PL.png");
        $(".inGameDes").html('<p class="infoText">"Mycket förbättrad kraft och kan skjuta 3 änterhackar samtidigt villket plundrar extra mycket pengar från varje Bloon i MOAB-klassen som skjuts ner."</p>');
        $(".des").html('<p class="infoText">Piratherren kan inte förtöra kamobloons men kan förstöra blybloons. Förmågan skickar tre änterhackar kan plocka upp MOAB-klass-Bloons och förstöra dom direkt.</p>');
        $(".över").html('<p class="infoText">2-5-0 Gör så att piratherren skjuter snabbare och mer kanonkullor per skott.</p>');
        $(".under").html('<p class="infoText">0-5-2 Gör så att den kan skada kamobloons och har lite längre räckvid.</p>');
    } ); 

    $( "#third" ).on( "click", function() {
        $(".title").html("Handelsimperium");
        $(".pic").attr("src", "/bild/TE.png");
        $(".inGameDes").html('<p class="infoText">"Alstrar mer pengar per runda, ökar intjänade pengar med upp till 20 andra handelsfartyg med antalet handelsfartyg och ökar skada åsamkad av samtliga handelsfatyg."</p>');
        $(".des").html('<p class="infoText">Handelsimperiumet kan inte förstara ledbloons och kan förstöra kamobloons. Och tjänar pengar i början av varje runda.</p>');
        $(".över").html('<p class="infoText">2-0-5 Skjuter snabbare och mer pilar per skott.</p>');
        $(".under").html('<p class="infoText">0-2-5 Kan förstöra ledbloons gör mer skada och skjuter brinande vindruvor.</p>');
    } );
}
if(selected == "ace"){
    $( "#first" ).on( "click", function() {
        $(".title").html("Himmelsförstörare");
        $(".pic").attr("src", "/bild/SS.png");
        $(".inGameDes").html('<p class="infoText">"Alla Bloons kommer att önska att de aldrig hade kommit."</p>');
        $(".des").html('<p class="infoText">Himmelsförstarare kan förstöra blybloons men kan inte förstöra kamobloons. Skickar ut missiler emot MOAB-klass-Bloons som gör mycket skada.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Gör så att flygplanet kan släppa exploderande ananaser och kan förstöra kamobloons.</p>');
        $(".under").html('<p class="infoText">5-0-2 Ökar genomborningen och ger flygplanet förmågan att åka i en stor ciekel som spelaren kan välja vart den är.</p>');
    } );

    $( "#sechound" ).on( "click", function() {
        $(".title").html("Tsarbomb");
        $(".pic").attr("src", "/bild/TB.png");
        $(".inGameDes").html('<p class="infoText">"En väldigt, väldigt stor bomb. Någon måste stoppa de här galenskaparna!"</p>');
        $(".des").html('<p class="infoText">Tsarbomben kan förstöra både kamobloons och ledbloons. Förmågan släpper en stor bomb som spränger alla bloons förutom de största.</p>');
        $(".över").html('<p class="infoText">2-5-0 Gör så att flygplanet skjuter fler pilar och skjuter snabbare.</p>');
        $(".under").html('<p class="infoText">0-5-2 Ökar genomborningen och ger flygplanet förmågan att flyga i en stor cirkel som spelaren väljer vart den är.</p>');
    } ); 

    $( "#third" ).on( "click", function() {
        $(".title").html("Flygande fästning");
        $(".pic").attr("src", "/bild/FF.png");
        $(".inGameDes").html('<p class="infoText">"Det är ett STORT plan."</p>');
        $(".des").html('<p class="infoText">Flygande fästnign kan förstara ledbloons och kan inte förstöra kamobloons. Skjuter missiler som söker sig till bloons och förstör dom.</p>');
        $(".över").html('<p class="infoText">2-0-5 Skjuter snabbare och flera pilar.</p>');
        $(".under").html('<p class="infoText">0-2-5 Kan förstöra ledbloons och släpper exploderande ananaser.</p>');
    } );
}
if(selected == "heli"){
    $( "#first" ).on( "click", function() {
        $(".title").html("Apache Prime");
        $(".pic").attr("src", "/bild/AP.png");
        $(".inGameDes").html('<p class="infoText">"Apache Prime får de flesta Bloons att önska att de aldrig blivit uppblåsta"</p>');
        $(".des").html('<p class="infoText">Apache Prime kan förstöra blybloons men kan inte förstöra kamobloons. Skjuter laser kulspruta och missiler.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Gör så att den kan åka snabbare och kan förstöra kamobloons.</p>');
        $(".under").html('<p class="infoText">5-0-2 Gör så att det helikoptern skjuter rör sig snabbare och den skjuter snabbare.</p>');
    } );

    $( "#sechound" ).on( "click", function() {
        $(".title").html("Hemliga smälltjänsten");
        $(".pic").attr("src", "/bild/SP.png");
        $(".inGameDes").html('<p class="infoText">"Sätter in en specialapmarinsoldat med automatgevär"</p>');
        $(".des").html('<p class="infoText">Tsarbomben kan förstöra både kamobloons och ledbloons. Förmågan släpper en marinsoldat som skjuter med ett automatgevär men har också förmågan att flytta andra försvar.</p>');
        $(".över").html('<p class="infoText">2-5-0 Gör så att flygplanet skjuter fler pilar och kan följa bloons.</p>');
        $(".under").html('<p class="infoText">0-5-2 Ökar attackhastigheten för helikoptern och pilarna den skjuter rör sig snabbare.</p>');
    } ); 

    $( "#third" ).on( "click", function() {
        $(".title").html("Comanche-befälhavare");
        $(".pic").attr("src", "/bild/CC.png");
        $(".inGameDes").html('<p class="infoText">"Uppgradera vapen. Kallar även automatiskt in ytterligare 3 Comanches. Permanent."</p>');
        $(".des").html('<p class="infoText">Comanche-befälhavare kan inte förstara ledbloons och kan inte förstöra kamobloons. Knuffar MOAB-klass-Bloons mot början av kartan.</p>');
        $(".över").html('<p class="infoText">2-0-5 Kan följa efter bloons och skjuter flera pilar.</p>');
        $(".under").html('<p class="infoText">0-2-5 Kan förstöra kamobloons och kan åka snabbare ökar även hur mycket MOABs knuffas tillbaka.</p>');
    } );
}
if(selected == "mortar"){
    $( "#first" ).on( "click", function() {
        $(".title").html("Den Allra Största");
        $(".pic").attr("src", "/bild/TBO.png");
        $(".inGameDes").html('<p class="infoText">"Spränger sig djupt genom Bloons och lager över ett stort område, samt kraftfull Brännstoffskada."</p>');
        $(".des").html('<p class="infoText">Den Allra Största kan förstöra blybloons men kan inte förstöra kamobloons. Kan göra bloons orörliga ett tag genom att träffa dom.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Skjuter snabbare.</p>');
        $(".under").html('<p class="infoText">5-0-2 Gör så att den träffar bättre och bränner bloons när den träffar dom.</p>');
    } );

    $( "#sechound" ).on( "click", function() {
        $(".title").html("Smäll och beundra");
        $(".pic").attr("src", "/bild/PAA.png");
        $(".inGameDes").html('<p class="infoText">"Pop och Awe-förmåga: regnar explosioner över hela skärmen, skadar och immobiliserar alla bloons i några sekunder. Alla artilleribatterier gör mer skada på BADs och Boss Bloons. Huvudattacken ger ytterligare bonusskador på förbluffade Bloons."</p>');
        $(".des").html('<p class="infoText">Smäll och beundra kan inte förstöra kamobloons eller ledbloons. Förmågan gör så att den skjuter mycket snabbare.</p>');
        $(".över").html('<p class="infoText">2-5-0 Gör mer skada med varje bomb som landar.</p>');
        $(".under").html('<p class="infoText">0-5-2 Gör den mer pricksäker och gör så att den kan bränna bloons den träffar.</p>');
    } ); 

    $( "#third" ).on( "click", function() {
        $(".title").html("Bloonbränning");
        $(".pic").attr("src", "/bild/B.png");
        $(".inGameDes").html('<p class="infoText">"Supervarm brinnande materia smälter igenom 5 Bloonlager för varje skott och bränner MOAB-klass-Bloons med enorm skada."</p>');
        $(".des").html('<p class="infoText">Bloonbränning kan förstara ledbloons och kan förstöra kamobloons. Tar även bort förstärkning från alla bloons som är svagare än ZOMG.</p>');
        $(".över").html('<p class="infoText">2-0-5 Gör mer skada.</p>');
        $(".under").html('<p class="infoText">0-2-5 Skjuter snabbare.</p>');
    } );
}
if(selected == "dartling"){
    $( "#first" ).on( "click", function() {
        $(".title").html("Domedagsstråle");
        $(".pic").attr("src", "/bild/ROD.png");
        $(".inGameDes").html('<p class="infoText">"Skapar en stark linje av förstörelse. Du kan tillintetgöra de flesta Bloons efter eget gottfinnande."</p>');
        $(".des").html('<p class="infoText">Domedagsstrålen kan förstöra blybloons men kan inte förstöra kamobloons. Har otoligt hög genomborning.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Kan förstöra ledbloons och skjuter snabbare.</p>');
        $(".under").html('<p class="infoText">5-0-2 Gör så att man kan snurra stålen snabbare och gör pilarna starkare.</p>');
    } );

    $( "#sechound" ).on( "click", function() {
        $(".title").html("M.A.D");
        $(".pic").attr("src", "/bild/MAD.png");
        $(".inGameDes").html('<p class="infoText">"MOAB-säker jagare. Megamissiler med långsam eldhastighet åsamkar extrem skada på Bloons i MOAB-klassen"</p>');
        $(".des").html('<p class="infoText">M.A.D kan förstöra kamobloons och ledbloons. Förmågan gör så att den skjuter stora vågor av explosiva missiler.</p>');
        $(".över").html('<p class="infoText">2-5-0 Ger laserchok som gör skada efter att missilen har träffat och fokuserad eldgivning.</p>');
        $(".under").html('<p class="infoText">0-5-2 Gör så att den snabbare kan snura runt och mer kraftfulla missiler.</p>');
    } ); 

    $( "#third" ).on( "click", function() {
        $(".title").html("Bloonsäkerhetszon");
        $(".pic").attr("src", "/bild/BEZ.png");
        $(".inGameDes").html('<p class="infoText">"Uppgraderad till 6 eldrör och massivt större skada. Bloons upphör att existera."</p>');
        $(".des").html('<p class="infoText">Bloonsäkerhetszonen kan förstöra ledbloons och kan inte förstöra kamobloons. Har även förmågan att sikta själv på olika bloons.</p>');
        $(".över").html('<p class="infoText">2-0-5 Ger laserchock och fokuserad eldgivning.</p>');
        $(".under").html('<p class="infoText">0-2-5 Skjuter snabbare och kan förstöra kamobloons.</p>');
    } );
}
//magic
if(selected == "wiz"){
    $( "#first" ).on( "click", function() {
        $(".title").html("Ärkemagiker");
        $(".pic").attr("src", "/bild/A.png");
        $(".inGameDes").html('<p class="infoText">"En verklig mästare på magiska trollkonster. Attackerar snabbare och åsamkar mr skada på MOAB-klass-Bloons."</p>');
        $(".des").html('<p class="infoText">ärkemagikern kan förstöra blybloons och kan förstöra kamobloons. Kan även ta bort kamo från kamobloons.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Kan skjuta eld och skapa en eldvägg.</p>');
        $(".under").html('<p class="infoText">5-0-2 Så att magin rör sig snabbare och kan förstöra fler bloons.</p>');
    } );

    $( "#sechound" ).on( "click", function() {
        $(".title").html("Trollkarlsherre Fenix");
        $(".pic").attr("src", "/bild/WLP.png");
        $(".inGameDes").html('<p class="infoText">"Trollkarlsherren blir en eldmästare och förvandlas till en supperkraftfull Lavafenix under en kort stund."</p>');
        $(".des").html('<p class="infoText">Trollkarlsherren kan inte förstöra kamobloons och kan förstöra ledbloons. Förmågan gör magikern till en fenix.</p>');
        $(".över").html('<p class="infoText">2-5-0 Gör så att magikern kan skjuta genom väggar.</p>');
        $(".under").html('<p class="infoText">0-5-2 Gör så att magikern kan förstöra kamobloons.</p>');
    } ); 

    $( "#third" ).on( "click", function() {
        $(".title").html("Mörkrets furste");
        $(".pic").attr("src", "/bild/POD.png");
        $(".inGameDes").html('<p class="infoText">"Återuppväck ännu mäktigare Bloons-tjänare för att tillintetgöra fienden och förstärka alla andra Besvärjare."</p>');
        $(".des").html('<p class="infoText">Mörkrets furste kan förstöra ledbloons och kan förstöra kamobloons. Har även förmågan att återskapa förstörda bloons.</p>');
        $(".över").html('<p class="infoText">2-0-5 Gör så att bloonen kan skjuta genom väggar.</p>');
        $(".under").html('<p class="infoText">0-2-5 Kan skjuta eld och skapa eld väggar.</p>');
    } );
}
if(selected == "sup"){
    $( "#first" ).on( "click", function() {
        $(".title").html("Sann solgud");
        $(".pic").attr("src", "/bild/TSG.png");
        $(".inGameDes").html('<p class="infoText">"Darra inför den SANNA Solgudens ENASTÅENDE kraft!!"</p>');
        $(".des").html('<p class="infoText">Sann solgud kan förstöra blybloons och kan inte förstöra kamobloons. Kan även bli starkare genom att absorbera andra försvar när man uppgraderar till sann Solgud.</p></div>');
        $(".över").html('<p class="infoText">5-2-0 Har en mycket större räckvidd</p>');
        $(".under").html('<p class="infoText">5-0-2 Kan förstöra kamobloons och kan knuffa bloons emot början av kartan.</p>');
    } );

    $( "#sechound" ).on( "click", function() {
        $(".title").html("Antibloon");
        $(".pic").attr("src", "/bild/TAB.png");
        $(".inGameDes").html('<p class="infoText">"Programdirektiv Utrota Bloons VERKSTÄLL"</p>');
        $(".des").html('<p class="infoText">Antibloonen kan inte förstöra kamobloons och kan inte förstöra ledbloons. Förmågan förstör nästan alla bloons inanför denns räckvidd och kan få kritiska träffar.</p>');
        $(".över").html('<p class="infoText">2-5-0 Ökar skadan per skott.</p>');
        $(".under").html('<p class="infoText">0-5-2 Kan förstöra kamobloons och kan knuffa bloons emot början.</p>');
    } ); 

    $( "#third" ).on( "click", function() {
        $(".title").html("Nattens legend");
        $(".pic").attr("src", "/bild/LOTN.png");
        $(".inGameDes").html('<p class="infoText">"Vi vänder oss till honom nät allt hopp är ute..."</p>');
        $(".des").html('<p class="infoText">Nattens legend kan inte förstöra ledbloons och kan inte förstöra kamobloons. Kan knuffa MOAB-klass-Bloons mot början av kartan och kan förstöra kamobloons.</p>');
        $(".över").html('<p class="infoText">2-0-5 Ger mer skada.</p>');
        $(".under").html('<p class="infoText">0-2-5 Har större räckvidd.</p>');
    } );
}