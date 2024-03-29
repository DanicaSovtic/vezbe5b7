
//1.TIP -IZVRSNA F-JA

function menjanjeBoje(boja){
    let obrisiDugmad=document.getElementsByClassName("obrisi");
    for (const dugme of obrisiDugmad) {
        dugme.style.backgroundColor=boja;   
    }

}

//menjanjeBoje("green");

//2. TIP - ARROW F-JA

let menjanjeBojeA=(boja)=>{

    let obrisiDugmad=document.getElementsByClassName("obrisi");
    for (const dugme of obrisiDugmad) {
        dugme.style.backgroundColor=boja;   
    }
}

//menjanjeBojeA("blue");

let menjanjeBojeB=(boja)=>Array.from(document.getElementsByClassName("obrisi")).forEach(dugme=>dugme.style.backgroundColor=boja);

menjanjeBojeB("purple");

//3.tip - CALLBACK F-JA


let obrisiDugmad=document.getElementsByClassName("obrisi");

for (const dugme of obrisiDugmad) {
    dugme.addEventListener("click",function(e){
        console.log(this);
        console.log(this.parentNode);

        let elZaBrisanje=this.parentNode;

        // elZaBrisanje.remove();
        document.getElementById("lista").removeChild(elZaBrisanje);

    });
    
}

// function obrisiRed(){
//     this.parentNode.remove();
// }

// for (const dugme of obrisiDugmad) {
//     dugme.addEventListener("click",obrisiRed);
// }


function dodavanjeDestinacije(event){
     event.preventDefault();

    let inputPolje=document.querySelector("#dodaj-destinaciju input");
    let novaDest=inputPolje.value.trim();

    if(novaDest){
        let ul=document.getElementById("lista");
        let novoLi=document.createElement("li");
        novoLi.innerHTML=`<span class="naziv">${novaDest}</span>
        <span class="obrisi">obriši</span>`;
        ul.appendChild(novoLi);
        inputPolje.value="";
    }

}

function dodajCallBack(){
    let forma=document.forms["dodaj-destinaciju"];
    forma.addEventListener("submit",dodavanjeDestinacije);
}

// dodajCallBack();


document.addEventListener("DOMContentLoaded",dodajCallBack);










