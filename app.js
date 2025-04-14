// console.dir(servicos)
// console.log(servicos[2]) // mostrar 1 valor
// servicos[3] = "sobrancelhas"
// console.dir(servicos)
// servicos.push("depilação") // adiciona um valor
// console.dir(servicos)

let servicosCategoria = new Array()
servicosCategoria.push("barbearia")
servicosCategoria.push("manicure")
servicosCategoria.push("limpeza_de_pele")
servicosCategoria.push("cabeleleiro")
servicosCategoria.push("massagem")
console.dir(servicosCategoria)

document.getElementById("conteudo").innerHTML = "<ul>"
document.getElementById("conteudo").innerHTML += "<li>" + servicosCategoria[0] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + servicosCategoria[1] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + servicosCategoria[2] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + servicosCategoria[3] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + servicosCategoria[4] + "</li>"
document.getElementById("conteudo").innerHTML += "</ul>"

