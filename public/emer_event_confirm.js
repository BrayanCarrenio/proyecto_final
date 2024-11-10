//ventana emergente para la interfaz del evento en la pag. principal
const ventana_evento_creado = document.getElementById("aviso_evento_creado")
const abrir_ventana_evento_creado = document.getElementById("publicar_evento")

abrir_ventana_evento_creado.addEventListener("click", function(){
    ventana_evento_creado.style.display = "block";
});