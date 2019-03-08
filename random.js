

function random(){

    let nombreRecurence = 0;
    let boucle = 3;

    while(boucle < 4){
        let valeurIdentique = Math.floor((Math.random() * valeurMax) + 1);

        if(valeurIdentique !== valeur){
        nombreRecurence++;
        } else {
            boucle += 5;
        }
    }

    var result = document.getElementById("resultat");
    result.innerHTML = "La valeur a été généré " + nombreRecurence + " fois avant de retomber sur " + valeur;

}
