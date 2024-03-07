fetch('http://localhost:3000/pizze')
.then(res => res.json())
.then(pizze => {

    console.log(pizze);

    for(let pizza of pizze){
        let riga = generaClone()

        let id = riga.querySelector('.id')
        let gusto = riga.querySelector('.gusto')
        let prezzo = riga.querySelector('.prezzo')
        let editBtn = riga.querySelector('.edit')
        let deleteBtn = riga.querySelector('.delete')

        id.innerText = pizza.id
        gusto.innerText = pizza.gusto
        prezzo.innerText = pizza.prezzo
        editBtn.href = `edit.html?id=${pizza.id}`;

        deleteBtn.addEventListener('click',function(){

            fetch(`http://localhost:3000/pizze/${pizza.id}`,{
                method:'DELETE',
                headers:{
                    'Content-type':'application/json'
                }
            })
            .then(res => res.json())
            .then(pizzaEliminata => {
                //il delete va effettuato solo in un then (o dopo un await)
                //per evitare che, se la chiamata fallisce, l'utente veda ugualmente l'eliminazione
                deleteBtn.closest('.riga').remove()
            })
            
        })


        document.querySelector('#listaPizze').append(riga)
    }
})


function generaClone(){
    //crea un clone del template e inseriscilo nella row
    let template = document.querySelector('#template-riga')
    let clone = template.content.cloneNode(true)

    return clone;
}