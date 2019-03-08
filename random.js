

function random(){

    let nombreRecurence = 0;
    let valeurIdentique = 0;

    while(valeurIdentique !== valeur){

        nombreRecurence++;
        valeurIdentique = Math.floor((Math.random() * valeurMax) + 1);
       
    }

    var result = document.getElementById("resultat");
    result.innerHTML = "La valeur a été généré " + nombreRecurence + " fois avant de retomber sur " + valeur;

}
