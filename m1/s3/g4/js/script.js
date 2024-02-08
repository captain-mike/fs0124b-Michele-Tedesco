//le variabili globali che potrebbero servirmi in tutto lo script
const todayDate = new Date()
let monthName = todayDate.toLocaleDateString('it-IT',{month:'long'})

//seleziono gli elementi con cui interagire
const monthNameElement = document.querySelector('.month-name')
const dayWrapElement = document.querySelector('.day-wrap')


//scrivo il nome del mese nel documento
monthNameElement.innerText = monthName;

//funzione che restituisce il numero dell'ultimo giorno del mese corrente
function getMonthLastDayNumber(){
    const now = new Date();//creo un oggetto data contenente la data attuale
    const year = now.getFullYear();//ottengo l'anno
    const month = now.getMonth() + 1;//ottengo l'indice del mese successivo a quello corrente
    //new Date(anno attuale, mese prossimo, 0 per indicare l'ultimo giorno rispetto al mese presente nel parametro precedente)
    return new Date(year, month, 0).getDate();//restituisco l'ultimo giorno del mese corrente
}

for(let i = 1;i <= getMonthLastDayNumber(); i++ ){

    const dayBox = document.createElement('div')// <div></div>
    dayBox.classList.add('day') // <div class="day"></div>
    dayBox.innerText = i// <div class="day">1</div>
    
    dayBox.addEventListener('click', ()=> {
        selectDay(i)
    })

    //versione fatta per usare this
    //dayBox.addEventListener('click', selectDay)

    if(i == todayDate.getDate()){
        dayBox.classList.add('today')
    }

    dayWrapElement.append(dayBox)
}

let selectedDateString;

function selectDay(day){

    const selectedDate = new Date()
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();

    let formatDate = new Date(year, month, day).toLocaleDateString()

    selectedDateString = formatDate

    const meetingDate = document.querySelector('.add-meeting-today-date')

    meetingDate.innerText = formatDate

}
//versione fatta per usare this
// function selectDay(){

//     const selectedDate = new Date()
//     const year = selectedDate.getFullYear();
//     const month = selectedDate.getMonth();
//     const day = Number(this.innerText)//this è l'elemento cliccato

//     let formatDate = new Date(year, month, day).toLocaleDateString()

//     const meetingDate = document.querySelector('.add-meeting-today-date')

//     meetingDate.innerText = formatDate

// }


//raccolta dati nuovo meeting







