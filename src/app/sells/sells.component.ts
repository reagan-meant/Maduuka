import { Component, OnInit } from '@angular/core';
import { Sells } from './sells';
import { MaduukaService } from '../maduuka.service';
import { firestore } from 'firebase';

@Component({
  selector: 'app-sells',
  templateUrl: './sells.component.html',
  styleUrls: ['./sells.component.css']
})
export class SellsComponent implements OnInit {

  sellModel: Sells = {
    date: null,
    item: '',
    total: null
  };
  constructor(private maduukaservice: MaduukaService) { }

  ngOnInit() {
  }

  onSubmit() {
    var tdate = new Date(this.sellModel.date);
    this.sellModel.date = firestore.Timestamp.fromDate(tdate);
    this.maduukaservice.sells(this.sellModel);
    this.sellModel.date = null;
  }
}
