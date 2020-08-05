

const form = document.querySelector("#info");
const email = document.querySelector("#email");
const emailHelp = document.querySelector("#emailHelp");
const nombre = document.querySelector("#nombre");
const nombreHelp = document.querySelector("#nombreHelp");

form.addEventListener('submit', (event) => {
    event.preventDefault()
    if ( email.value === "" || nombre.value === "" ){
        if( email.value === "" ){
            emailHelp.innerText = "Completar todos los campos"
            console.log("email Help")
        }
        if(nombre.value === ""){
            nombreHelp.innerText = "Completar todos los campos"
            console.log("nombreHelp")
        }
    } else {
        form.submit();
    }


})


// ..action="#" target="" method="get" name="formDatosPersonales"