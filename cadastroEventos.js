let cadastrarEvento = "sim"
let relatorioEvento = "sim"
let dataAtual = new Date()

//escolha da data do evento:
let dataEvento = new Date("11/19/2021")//formato da data mm/dd/aaaa

//cadastro do evento
let nomeEvento = "Maratona C#"
let cadastroPalestantes = ["Odirlei Sabella De Assis", " Thiago Rocha Do Nascimento"]

//cadastro de participantes
let dataNascimento = "05/07/1991"
let nomeParticipante = "Sergio Cosmo"
let emailParticipoante = "sergioc@eventos.com"

//relatório do evento
let listaParticipantes = ["Rodrigo Sales", "Carla Santos", "Silvia Leão", "Luiz Carlos", "Sergio Cosmo"]
let listaEmailParticipantes = ["rodrigosales@eventos.com", "carlasantos@eventos.com", "silvial@eventos.com", "lcarlos@eventos.com", "sergioc@eventos.com"]
let listaNascimentoParticipantes = ["05/12/1975", "04/08/1986", "01/03/1988", "08/09/1990", "05/07/1991"]

let dataInformada = dataNascimento.split('/')[2]
let dataReferenciaNascimento = new Date().getFullYear()
let idade = dataReferenciaNascimento - dataInformada

console.log("Deseja cadastrar um Evento? " + cadastrarEvento)

if (cadastrarEvento == "sim") {
    if (dataEvento >= dataAtual) {
        console.log("Qual a data para realização do Evento? " + new Intl.DateTimeFormat("pt-BR").format(dataEvento));
        console.log("Data para realização do Evento válida, siga com o cadastro.")
        console.log("Digite o Nome do Evento: " + nomeEvento)
        console.log("Digite os Nomes dos Palestrantes: " + cadastroPalestantes)
        if (listaParticipantes.length < 100) {
            console.log("Data de nascimento do participante: " + dataNascimento)
            if (idade >= 18) {
                console.log("Participante maior de 18 anos, siga com o cadastro.")
                console.log("Digite o Nome do participante: " + nomeParticipante)
                console.log("Digite o E-mail do participante: " + emailParticipoante)
                console.log("Cadastro concluido com sucesso!")
            }
            else {
                console.log("Cadastro não permitido, idade inferior a 18 anos")
            }
        } else
            console.log("Limite de participantes excedido!")
    } else {
        console.log("Data invalida, escolha uma nova data! ")
    }
} else {
} 
console.log("Imprimir relatório dos Participantes do Evento? " + relatorioEvento)
if (relatorioEvento == "sim") {
    for (let i = 0; i < listaParticipantes.length; i++){
        const listaAtual = listaParticipantes[i]
        console.log(listaAtual)
    }
}

