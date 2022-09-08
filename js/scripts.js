const form = document.querySelector('.conteudo-form')
const url = "https://sicstudents.herokuapp.com/person";

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputName = e.target.querySelector('.studentName');
    const inputBirthDate = e.target.querySelector('.birthDate');

    getPerson(inputName.value, inputBirthDate.value)
})

async function getPerson(name, birthDate) {
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; chaset=UTF-8'
        },
        body: JSON.stringify({
            "name": name,
            "birthDate": birthDate
        })
    })
    .then(response => response.json())
    .then(result => {
        resultado.textContent = result;
    } )
    .catch(err => console.log(err))

/*     const retorno = await response.json();

    setResult(retorno) */
    
}

/* function setResult(result) {
    const campoResult = document.querySelector(".result");

    campoResult.innerHTML = result.room
} */


/* 
function getForm() {
    const form = document.querySelector(".form");
    const result = document.querySelector(".result");
    const url = "https://sicstudents.herokuapp.com/person";

    async function getPerson(evento) {
        evento.preventDefault()
            
        const inputName = form.querySelector('.student-name');
        const inputBirthDate = form.querySelector('.birthDate');


        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": "Diego",
                "birthDate": "10/10/10"
            })
        });

        const retorno = await response.json().then(function(value) {
            result.innerHTML = `<p>TURMA: ${value.room}</p>`
        })

        console.log(retorno)
    
        
    }

    form.addEventListener('submit', getPerson);

}


getForm()  */





