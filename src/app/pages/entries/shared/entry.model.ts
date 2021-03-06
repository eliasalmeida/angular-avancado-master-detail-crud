import {Category} from '../../categories/shared/category.model';
export class Entry{
    constructor(
        public id?:number,
        public name?:string,
        public type?:string,
        public amount?:string,
        public date?:string,
        public paid?:boolean,
        public categoryId?:number,
        public category?:Category,
        public description?:string
    ){}

    static types = {
        expense: 'Despesa',
        renevue: 'Receita'
    }

    get paidText(): string{
        return this.paid ?  'Pago': 'Pendente'
    }
}