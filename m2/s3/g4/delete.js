fetch(`https://jsonplaceholder.typicode.com/posts/3`,{
    method:'DELETE',
    headers: {
        'Content-Type':'application/json'
    }
})
.then(res => res.json())
.then(res => {

    //operazioni di conferma
    //eventuale apparizione O MODIFICA del nuovo dato

})