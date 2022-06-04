function geral() {
    let a = Number(prompt('Entre com o primeiro número:'));
    let b = Number(prompt('Entre com o segundo número:'));
    let resultado;

    const condicionalConst = condicional(a,b);
    const somaConst = soma(a,b);
    



    function condicional(a,b) {
        if (a == b) {
            return `Os números ${a} e ${b} são iguais. `;
            novaOperacao();
        }
        else {
            return `Os números ${a} e ${b} não são iguais. `;
            novaOperacao();
        }
    }

    function soma(a,b){
        resultado = a + b;
        if (resultado > 10 && resultado < 20){
            return `Sua soma é ${resultado}, que é maior que 10 e menor que 20.`;
            novaOperacao();
        }
        else if (resultado < 10) {
            return `Sua soma é ${resultado}, que é menor que 10.`;
            novaOperacao();
        }
        else if (resultado > 20) {
            return `Sua soma é ${resultado}, que é maior que 20.`;
            novaOperacao();
        }
        else {
            return `Sua soma é ${resultado}.`;
            novaOperacao();
        }

    }

    function novaOperacao(){
        let opcao = prompt('Deseja fazer uma nova operação?\n1 - Sim\n2 - Não');
        if (opcao == 1){
           geral();
        }
        else if (opcao == 2 ) {
            alert('Até mais!');
        }
        else {
            alert('Digite uma opção válida!');
            novaOperacao();
        }
    }
    alert(`${condicionalConst} ${somaConst}`);
    novaOperacao();
}


geral()
