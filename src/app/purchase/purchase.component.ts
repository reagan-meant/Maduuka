import { Component, OnInit } from '@angular/core';
import { Purchase } from './purchase';
import { MaduukaService } from '../maduuka.service';
import { firestore } from 'firebase';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
 today = new Date();

purchaseModel : Purchase= {
  date: this.today,
  item: '',
  amount: null,
  unit: null,
  total: null
}
  constructor(private _maduukaService: MaduukaService) { }

  ngOnInit() {
   /*
    this._maduukaService.getPurchase().subscribe(items => {
      this.purchaseModels = items;
      console.log(this.purchaseModels);
    })  
    */
  }


  purchase(){
    /*
    console.log(this.purchaseModel);

    this._maduukaService.purchase(this.purchaseModel)
    .subscribe(data => console.log("Successful"),
    error => console.log('Unsuxccessful'));
    */
   var fdate = new Date(this.purchaseModel.date);
   this.purchaseModel.date = firestore.Timestamp.fromDate(fdate);
    this._maduukaService.addPurchase(this.purchaseModel);
    this.purchaseModel.date = this.today,
    this.purchaseModel.item= '',
    this.purchaseModel.amount= null,
    this.purchaseModel.unit= null,
    this.purchaseModel.total= null
  }

  
}
