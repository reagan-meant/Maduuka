import { Component, OnInit } from '@angular/core';
import { headerList } from './headerItems';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headItems = headerList;
  constructor() { }

  ngOnInit() {
  }

}
