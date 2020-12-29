let prenom = prompt("Prénom?");

// alert(prenom.substr(0, 1));

// alert(prenom.substr(-1));

// alert(prenom.substr(1));

// alert(`${prenom.substr(0, 1)}${prenom.charAt(1).toUpperCase()}${prenom.substr(2)}`);

// let letMaj = prompt("Quelle lettre désirez vous mettre en majuscule?")

// alert(prenom.replace(letMaj, letMaj.toUpperCase()));

// alert(`${prenom.charAt(0).toUpperCase()}${prenom.substr(1).toLowerCase()}`);

let pos = Math.floor(Math.random()*prenom.length);
nomRand = prenom.substr(0, pos)+prenom.substr(pos+1);

alert(nomRand);



