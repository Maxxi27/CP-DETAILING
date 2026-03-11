function whatsapp(){
let numero = "5491165269607"
let mensaje = "Hola, quiero consultar por detailing"

let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`

window.open(url, "_blank")
}