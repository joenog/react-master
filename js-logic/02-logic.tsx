//5. Faça um programa, utilizando while e listas, que permita o usuário realizar o cadastro de um número indeterminado de pessoas enquanto quiser e os mostre na tela ao finalizar. 

export default function Exemplo() {
    
    return(
            function Pessoas() {
            let pessoas = [];
            
            while (pessoas.length < 100) {
                let nome = prompt('Digite um nome');
                pessoas.push(nome);
                console.log(pessoas);
                console.log('fim do programa')
            }
            }
        )
    }