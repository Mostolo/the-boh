let Percentuale = 244;
let PercentualeP = 244;

let ngsqg = 0;

function createredsq() {
    let x = document.getElementById("nrsq").innerHTML
    // finche non è pieno
    if (x <= 99) {
        let det = getrandomint(999999)
        if (det>Percentuale) {
            // un blocchettino rosso
            createsq("citto", "panel", "nrsq");
        } else {
            // un blocchettino dorato
            createsq("goldencitto", "panel", "ngsqg")
            document.getElementById("nrsq").innerHTML ++;            
            Percentuale = Percentuale * 1.2
        }
    // una volta pieno
    } else {
        let y = document.getElementById("nbsq").innerHTML
        // finche pannello blu non è pieno
        if (y <= 99) {
            let det = getrandomint(999999)
            if (det>PercentualeP) {
                // un blocchettino blu e cancella i rossi/oro
                createsq("bcitto", "bpanel", "nbsq")
                Eraser();
            } else {
                // un blocchettino platinato e cancella i rossi/oro
                createsq("platinumcitto", "bpanel", "npsqg")
                document.getElementById("nbsq").innerHTML ++;            
                PercentualeP = PercentualeP * 1.2
                Eraser();
            }
        // una volta pannello blu pieno
        } else {
            // cancella i rossi/oro
            Eraser();
        }
    }
}

function createsq(classe, pannello, gruppo) {
    var div = document.createElement("div");
    div.classList.add(classe);
    document.getElementById(pannello).appendChild(div);
    document.getElementById(gruppo).innerHTML ++;    
}

function Eraser() {
    const citto = document.querySelectorAll(".citto")
    citto.forEach(citto => {
        citto.remove();
    });
    let c = Number(document.getElementById("ngsqg").innerHTML);
    document.getElementById("nrsq").innerHTML = c;
}

function PercChange() {

}

function getrandomint(max) {
    return Math.floor(Math.random() * max)
}



function randomrandom() { //inutile, ma quanto è carino??
let random = getrandomint(999999)                   
document.getElementById("random").innerHTML = random
}

setInterval(randomrandom, 50); //finisce qui

let nclick = 0
let value = setInterval(createredsq, 100931731455);
// ho lasciato quello sopra perché è il massimo numero

function cheat1() {
    for (let i = 0; i < 100; i++) {
        createredsq();
    }
}
