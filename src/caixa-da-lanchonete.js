import { Compra } from './compra.js';
import { Cardapio } from './cardapio.js';


const compra = new Compra();

class CaixaDaLanchonete {

    constructor() {
        this.cardapio = new Cardapio();
    }
   
    calcularValorDaCompra(metodoDePagamento, itens) {
        const total = compra.calcularValorTotal(itens);
        const codigos = []

        for (const item of itens) {
            const [codigo, quantidade] = item.split(',');
            const itemInfo = this.cardapio.getItemInfo(codigo);
            codigos.push(codigo)
            if (!itemInfo) {
                return 'Item inválido!';
        
            }

            if (quantidade <= 0) {
                return 'Quantidade inválida!';
            }

            if (codigos.includes("chantily") && !codigos.includes("cafe")  ) {
                return "Item extra não pode ser pedido sem o principal";
            }
            if (codigos.includes("queijo") && !codigos.includes("sanduiche") ) {
                return "Item extra não pode ser pedido sem o principal";
            } 
        }
        
        if(total == 0){
            return "Não há itens no carrinho de compra!";
        }

        let valorFinal = total ;
        
        if (metodoDePagamento === 'dinheiro') {
            valorFinal *= 0.95;
        } else if (metodoDePagamento === 'credito') {
            valorFinal *= 1.03 ; 
        }else if(metodoDePagamento !== 'debito') {
            return "Forma de pagamento inválida!"
        }
        return "R$ " + valorFinal.toFixed(2).replace(".",",");
       
    }
}


export { CaixaDaLanchonete };
