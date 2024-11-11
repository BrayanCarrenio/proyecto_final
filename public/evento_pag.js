const tit_evento = document.getElementById('titulo_evento'); 
const fecha_evento = document.getElementById('fecha_evento');
const direc_evento = document.getElementById('direccion_evento');
const cupo_evento = document.getElementById('cupos_evento');
const hora_evento = document.getElementById('hora_evento');
const num_evento = document.getElementById('numero_contacto_evento');
const desc_evento = document.getElementById('desc_evento');
const boton_publicar = document.querySelector('publicar_evento');
const listaEventos = document.getElementById('card-container');

boton_publicar.addEventListener('click', agregarEvento);

function agregarEvento(){
    if(tit_evento.value && fecha_evento.value && direc_evento.value && cupo_evento.value){
        let eventoNuevo = document.createElement('div');
        eventoNuevo.classList.add('card');

        let titulo = document.createElement('h2');
        titulo.innerText = tit_evento.value;
        eventoNuevo.appendChild(titulo);

        let fecha = document.createElement('p');
        fecha.innerText = fecha_evento.value;
        eventoNuevo.appendChild(fecha);

        let lugar = document.createElement('p');
        lugar.innerText = direc_evento.value;
        eventoNuevo.appendChild(lugar);

        let cupos = document.createElement('p');
        cupos.innerText = cupo_evento.value;
        eventoNuevo.appendChild(cupos);

        let buton_asistir = document.createElement('button');
        buton_asistir.innerText = "Asistir";
        eventoNuevo.appendChild(buton_asistir);

        listaEventos.appendChild(eventoNuevo);
    }else{
        alert("Debes ingresar la información del evento");
    }
}