class Personne {
    constructor(nom, age) {
        this.nom = nom,
        this.age = age,

        this.afficher = function() {
            console.log(`${nom}, ${age}`)
        }
    }

    
}

let perso = new Personne('jean', 18);
perso.afficher()

let perso2 = new Personne('jean', 18);
perso2.afficher()

let perso3 = new Personne('jean', 18);
perso3.afficher()