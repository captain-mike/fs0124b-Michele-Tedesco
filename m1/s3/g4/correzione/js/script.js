
const nCelle = 90;
const arrCelle = [];

//creazione celle
const tabellone = document.querySelector('#tabellone')
for(let i = 1; i <= nCelle; i++){
    
    // <div class="cella estratta">1</div>
    const cella = document.createElement('div')
    cella.classList.add('cella');
    cella.innerText = i;

    arrCelle[i] = cella;

    tabellone.append(cella)
}


const gioca = document.querySelector('#gioca')

const sacchetto = [...arrCelle];
let timer;
gioca.addEventListener('click',()=>{
    if(timer){
        clearInterval(timer)
        timer = undefined;
    }else{
        timer = setInterval( estrai ,500)
    }
})


function estrai(){
    
    if(!sacchetto.length){
        //se ho estratto tutti i numeri blocca tutto
        clearInterval(timer)
        return;
    }

    let nEstratto = getRandomNum();

    sacchetto.splice(nEstratto,1)//rimuovi il numero estratto
    arrCelle[nEstratto].classList.add('estratta')
    
    console.log(sacchetto, arrCelle);

}

function getRandomNum(){
    return Math.floor(Math.random() * sacchetto.length) + 1
}

