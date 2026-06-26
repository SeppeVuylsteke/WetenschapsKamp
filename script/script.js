let activeCirkel = null;
let colors = Array(11).fill(null);
let code = [1,0,1,0,1,0,1,0,1,0,1]

const setup = () => {
    let cirkels = document.querySelectorAll(".color");
    let i = 0;
    cirkels.forEach(cirk => {
        cirk.id = i;
        cirk.addEventListener("click", (e) => {
            activeCirkel = e.target;
            kiesKleur();
        } )
        i++;
    })

    let rood = document.querySelector("#rood");
    let groen = document.querySelector("#groen");

    rood.addEventListener("click", () => {
        if (activeCirkel) {
            activeCirkel.style.background = "red";
            colors[activeCirkel.id] = 1;
            check();
        }
        colorPick.close();
    })

    groen.addEventListener("click", () => {
        if (activeCirkel) {
            activeCirkel.style.background = "green";
            colors[activeCirkel.id] = 0;
            check();
        }
        colorPick.close();
    })

    let iframe = document.querySelector("#video");
    let colorPick = document.querySelector("#colorPick");
    colorPick.close();

    let kruisen = document.querySelectorAll(".kruis");
    kruisen.forEach(kruis => {
        kruis.addEventListener("click", () => {
            colorPick.close();
            iframe.close();
        })
    })
}

let kiesKleur = () => {
    let colorPick = document.querySelector("#colorPick");
    colorPick.showModal();
};

let check = () => {
    let correct = colors.every((waarde, index) => waarde === code[index]);
    if (correct) {
        let iframe = document.querySelector("#video");
        iframe.showModal();
    }
}

window.addEventListener("load", setup);