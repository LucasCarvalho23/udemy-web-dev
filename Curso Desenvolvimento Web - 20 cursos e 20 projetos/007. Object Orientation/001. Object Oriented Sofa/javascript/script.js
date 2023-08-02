class Sofa {

    constructor(quantLugar,cor,extensaoPe) {
        
        this.quantLugar = quantLugar
        this.cor = cor
        this.extensaoPe = extensaoPe

    }

    extensaoDePe() {
        if (this.extensaoPe == true) {
            console.log (`possui extensão de pé.`)
        } else {
            console.log (`não possui extensão de pé.`)
        }
    }

}

let sofa = Array()

sofa.push (new Sofa(2, 'vermelho', false))
sofa.push (new Sofa(3, 'verde', true))
sofa.push (new Sofa(4, 'preto', true))

console.log(sofa)

sofa[1].extensaoDePe()