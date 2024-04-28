function gerador(){
    let inicio = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let quantidade = document.getElementById('qtd');

    if(inicio.value.length == 0 || fim.value.length == 0 || quantidade.value.length == 0){
        window.alert('Preencha todos os dados');
    }
    else{
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let qtda = Number(quantidade.value);
        let resultado = document.getElementById('res'); 

        resultado.innerHTML = ''; 

        let numerosPossiveis = [];
        for(let j = i; j <= f; j++){
            numerosPossiveis.push(j);
        }

        // Embaralhar o array
        for(let j = numerosPossiveis.length - 1; j > 0; j--){
            let k = Math.floor(Math.random() * (j + 1));
            [numerosPossiveis[j], numerosPossiveis[k]] = [numerosPossiveis[k], numerosPossiveis[j]];
        }

        // Pegar a quantidade desejada de números
        for(let j = 0; j < qtda; j++){
            if(resultado.innerHTML != ''){
                resultado.innerHTML += ', ';
            }
            resultado.innerHTML += numerosPossiveis[j];
        }
    }
}
