import { Component, OnInit } from '@angular/core';
import { Summary } from './summary';
import { MaduukaService } from '../maduuka.service';
import { Purchase } from '../purchase/purchase';
import { firestore } from 'firebase';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
summaryItems: Purchase[];

  today = new Date();
  //monthBackDate = new Date();
  //monthBackDate.setDate(new Date().getDate()-5);
 //monthBackDate: Date= this.today.setDate(this.today.getDate()-30);
  summaryModel: Summary={
    startDate:null,
    endDate:null
  }
  constructor(private maduukaService: MaduukaService) { }

  ngOnInit() {
  }

onSubmit(){
  console.log(this.summaryModel.startDate);
  console.log(this.summaryModel.endDate);

  var sdate = new  Date (this.summaryModel.startDate);
  var edate = new  Date (this.summaryModel.endDate);

//console.log(tdate);

   // console.log( firestore.Timestamp.fromDate(tdate));
   this.summaryModel.startDate = firestore.Timestamp.fromDate(sdate);
   this.summaryModel.endDate = firestore.Timestamp.fromDate(edate);

  this.maduukaService.getSummary(this.summaryModel.startDate,this.summaryModel.endDate).subscribe(items =>{
  
    this.summaryItems = items;
    
    console.log(items);
  });
}

}
