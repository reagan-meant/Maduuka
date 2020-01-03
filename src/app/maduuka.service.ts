import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Purchase } from './purchase/purchase';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

//import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';
import { Sells } from './sells/sells';
import { Debts } from './debts/debts';
@Injectable({
  providedIn: 'root'
})
export class MaduukaService {
  
  
 

 maduukaCollection :AngularFirestoreCollection<Purchase>;
  maduukaItems: Observable<Purchase[]>;
  purchaseUrl='http://localhost:3000/purchase';

  constructor(
    private _http: HttpClient,
    private maduukaFireStore: AngularFirestore
    ) { 

      this.maduukaCollection = this.maduukaFireStore.collection<Purchase>('maduuka');
     /* this.maduukaItems = this.maduukaCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Purchase;
          data.id = a.payload.doc.id;
          return data ;
        }))
      );
      */
    }

  purchase(purchase: Purchase){
    return this._http.post<any>(this.purchaseUrl, purchase);
  }

  getPurchase(){
    return this.maduukaItems;
  }

  addPurchase(purchase : Purchase){
    return this.maduukaCollection.add(purchase);
  }

  postSells(debtModel: Debts) {
this.maduukaCollection = this.maduukaFireStore.collection<Debts>('debts');
return this.maduukaCollection.add(debtModel);
  }

  getSummary(startDate: Date, endDate: Date) {

    let start = startDate;
    let end = endDate;

    this.maduukaCollection=  this.maduukaFireStore.collection<Purchase>('sells'
    , ref => {
      return ref.where('date', '>=', startDate)
                  .where('date', '<=', endDate);
      }     
      )
    
    this.maduukaItems = this.maduukaCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Purchase;
        data.id = a.payload.doc.id;
        return data ;
      }))
    );

return this.maduukaItems;
//this.maduukaCollection =this.maduukaFireStore.collection<Purchase>('maduuka', ref => ref.)
  }

  sells(sellModel: Sells) {
    this.maduukaCollection = this.maduukaFireStore.collection<Purchase>('sells');
    return this.maduukaCollection.add(sellModel);
  }
}


