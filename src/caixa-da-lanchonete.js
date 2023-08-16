

class CaixaDaLanchonete {
    
    calcularValorDaCompra(metodoDePagamento, itens) {    
                       
        var i = "";
        var y = "";
        var rs = "R$ ";
        var lista = [["cafe","Café", 3],["chantily","Chantily",1.5],["suco","Suco Natural", 6.2], ["sanduiche", "Sanduiche", 6.5],
            ["queijo", "Queijo", 2], ["salgado", "Salgado", 7.25], ["combo1", '1 Suco e 1 Sanduiche', 9.5], ["combo2" ,'1 Café e 1 Sanduiche', 7.5]];        
        var calculo = '';
        var resultado = '';
        var valor = '';
        var soma = '';
        var string = 0;
        var laco = itens.toString();
        var compra = laco.split(",");

        
        if (metodoDePagamento == "dinheiro" || metodoDePagamento == "debito" || metodoDePagamento == "credito") {
            if ( itens == "") {
                resultado = "Não há itens no carrinho de compra!";
            }else{
                
                for (y = 0; y < itens.length; y = y + 1) {
                    for (i = 0; i < lista.length; i = i + 1 ) {                    
                        if (compra[0] == lista[i][0]) {
                            calculo = Number.parseFloat(lista[i][2]).toFixed(2);
    
                            switch (metodoDePagamento) {
                                case "dinheiro" :
                                    calculo = calculo - calculo/20;                                                              
                                    break;                                
                                case "credito" :
                                    calculo = 103/100*calculo;                                                               
                                    break;
                                case "debito" :
                                    break;
                            }
                                                                            
                        }                        
                    }
                    calculo = Number(calculo);
                    soma = Number(soma);
                    soma = soma + calculo;                    
                    console.log(typeof soma);
                }
                soma = parseFloat(soma).toFixed(2);
                string = soma.toString();
                valor = string.replace(".", ",");
                resultado = rs + valor;
            }
        } else {
            resultado = "Forma de pagamento inválida!";
        }

        return resultado;
    } 
}

export { CaixaDaLanchonete };
