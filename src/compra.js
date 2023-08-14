import { Cardapio } from './cardapio.js';

class Compra {
    constructor() {
        this.cardapio = new Cardapio();
    }


    calcularValorTotal(itens) {
      

        let total = 0;

        for (const item of itens) {
            const [codigo, quantidade] = item.split(',');
            const itemInfo = this.cardapio.getItemInfo(codigo);
        
            if (itemInfo) {
                total += itemInfo.valor * parseInt(quantidade);
            }

        }

        return total;
    }
}


export { Compra };