let nomes = document.getElementById("nome")
let matri = document.getElementById("mat")
let botao = document.getElementById("botao")
let div = document.getElementById("m")


class NomesAlunos{
    constructor(nome , matricula){
        this.matricula = matricula;
        this.nome = nome;
    }
}

let sistema = []

function cadastrar() {

     let pessoa = new NomesAlunos(nomes.value,matri.value)
     sistema.push(pessoa)

    div.innerHTML = ""
    matri.value = ''
    nomes.value  = ''

    sistema.map((el) =>{
        
        let mosstra = document.createElement("div")
        mosstra.classList.add("bb")

        let nomesTela = document.createElement("span")
        nomesTela.textContent = el.nome
        nomesTela.classList.add("kkk")


        let matriculaTela = document.createElement("span")
        matriculaTela.textContent = el.matricula
        matriculaTela.classList.add("ccc")

        

        mosstra.appendChild(nomesTela)
        mosstra.appendChild(matriculaTela)

        div.appendChild(mosstra)
    } )
}
