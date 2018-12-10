import { Injectable } from "@angular/core";
import {AngularFireDatabase} from 'angularfire2/database';
 
@Injectable()
export class ShoppingListService {

    //private shoppingListRef =this.db.list<Item>('shopping-list');
    items : {}[];

    constructor (private db: AngularFireDatabase){
        
    }

    getShoppingList()
    {
        this.db.list("/shopping-list").valueChanges().subscribe((data) => {
           console.log("DATA", data);
           
            this.items = data;
        });
        console.log("GetshoppingList",this.items);
        return this.items;
    }

    addItem(item){
        this.db.list("/shopping-list").push(item);
    }
    
}
