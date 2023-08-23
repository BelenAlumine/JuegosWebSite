//creo obj

const datos = {
    nombre: '',
    email: '',
    mensaje: '',
}

//obtengo los elementos html

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');
const contador = document.createElement('P');

email.disabled = true;
mensaje.disabled = true;

formulario.appendChild(contador);


//guardar valores en atributos del objeto datos
/**/
nombre.addEventListener('input', function(event) {
    datos.nombre = event.target.value;
    console.log(datos.nombre);

    const {nombre} = datos;

    for(i=0; i<nombre.length; i++) {
        if(nombre.charCodeAt(i)>47 && nombre.charCodeAt(i)<58){
            mostrarMensaje("El nombre no puede contener números", true)
            email.disable = true;
            return;
        }
    }
    email.disable = false;
});

email.addEventListener('input', function(event) {
    datos.email = event.target.value;
    mensaje.disable = false;
});

mensaje.addEventListener('input', function(event) {
    datos.mensaje = event.target.value;

    //destructuring
    const {mensaje} = datos;


    if(mensaje.length>=20){
        mostrarMensaje("El mensaje es demasiados largo.", true);
        return;
    }

    mostrarContador(mensaje.length, contador);
});


formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const {nombre, email, mensaje} = datos; //destructuring (descomponer el objeto en valores literales)

    if (mensaje.length>=20) {
        mostrarMensaje("El mensaje es demasiados largo.", true);
        return;
    }
    if(nombre === '' || email ==='' || mensaje ===''){
        mostrarMensaje("Alguno de los campos no se completó.", true);
        return;
    }
    mostrarMensaje("Los datos se ingresaron correctamente.");
});

function mostrarMensaje(mensaje, error) {
    const respuesta = document.createElement('P');
    respuesta.textContent = mensaje;

    if(error){
        respuesta.classList.add('error');
    }
    else {
        respuesta.classList.add('correcto');
    }

    formulario.appendChild(respuesta);
    setTimeout(() => { 
        respuesta.remove();
    }, 5000);
}

function mostrarContador(contador, elemento) {
    elemento.textContent = contador;//
}