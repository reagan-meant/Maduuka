import { Component, OnInit } from '@angular/core';
import { Debts } from './debts';
import { firestore } from 'firebase';
import { MaduukaService } from '../maduuka.service';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.css']
})
export class DebtsComponent implements OnInit {
total:number;
tdate = new Date();
debtModel:Debts;
  constructor(private maduukaservice:MaduukaService) {
    this.debtModel={
      date: this.tdate,
      name:'',
      item:'',
      amount:null
    }
   }

  ngOnInit() {
  }

  onSubmit(){
var fDate= new Date(this.debtModel.date);
this.debtModel.date = firestore.Timestamp.fromDate(fDate);
this.maduukaservice.postSells(this.debtModel);
  }
}
