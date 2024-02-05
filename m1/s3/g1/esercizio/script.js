/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

       const changeTitle = function () {

        document.querySelector('h1').innerText = 'Titolo cambiato'
        //oppure
        //document.getElementsByTagName('h1')[0].innerText = 'Titolo cambiato'

       }

       changeTitle();

       /* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */
 
       const addClassToTitle = function () {
        document.querySelector('h1').classList.add('myHeading')
       }
       addClassToTitle();
 
       /* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */
 
       const changePcontent = function () {
        let p = document.querySelectorAll('div p');
        p.forEach(el => el.innerText = 'Testo del paragrafo cambiato')
       }
       changePcontent()
 
       /* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */
 
       const changeUrls = function () {

        let links = document.querySelectorAll('a:not(footer a)');
        
        //links.forEach(l => l.href = 'https://www.google.com')
        links.forEach(function(l){
            l.href = 'https://www.google.com'
        })
       }
       changeUrls()
 
       /* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */
 
       const addToTheSecond = function () {

        let secondList = document.getElementById('secondList')
        
        let li = document.createElement('li')
        li.innerText = 'Nuova voce'

        secondList.append(li)

       }

       addToTheSecond()
 
       /* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */
 
       const addParagraph = function () {

        let p = document.createElement('p')//creo il paragrafo da aggiungere

        let primoDiv = document.querySelector('div')
        primoDiv.append(p);//e lo aggiungo al primo div

       }
       addParagraph();
 
       /* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */
 
       const hideFirstUl = function () {

        //document.querySelector('#firstList').remove() per distruggerlo
        // per nascondere senza distruggere
        //document.querySelector('#firstList').style.display = 'none'
        //document.querySelector('#firstList').style.opacity = '0'
        document.querySelector('#firstList').style.visibility = 'hidden'

       }
 
       hideFirstUl();

       /* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */
 
       const paintItGreen = function () {

        let liste = document.querySelectorAll('ul');
        liste.forEach(el => el.style.backgroundColor = 'green')

       }
       paintItGreen();
 
       /* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */
 
       const makeItClickable = function () {

            let h1 = document.querySelector('h1');

            h1.addEventListener('click',function(){

                let substring = h1.innerText.slice(0,-1)
                
                h1.innerText = substring;

            })

       }

       makeItClickable();
 
       /* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */
 
       const revealFooterLink = function () {

        let footer =  document.querySelector('footer');

        footer.addEventListener('click',function(){
            let url = footer.querySelector('a').href
            alert(url)
        })

       }
 
       revealFooterLink()

       /* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */
 
       const generateTable = function () {}
 
       /* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */
 
       const addRow = function () {}
 
       /* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */
 
       const hideAllImages = function () {}
 
       /* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */
 
       const changeColorWithRandom = function () {}