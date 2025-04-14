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

document.getElementById("conteudo").innerHTML = servicosCategoria[0] + " - "
document.getElementById("conteudo").innerHTML += servicosCategoria[1] + " - "
document.getElementById("conteudo").innerHTML += servicosCategoria[2] + " - "
document.getElementById("conteudo").innerHTML += servicosCategoria[3] + " - "
document.getElementById("conteudo").innerHTML += servicosCategoria[4] + " - "