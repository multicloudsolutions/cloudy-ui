import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  contacts = [{name:"Gaurav yadav",phone:"8962836305"},{name:"Gaurav yadav",phone:"8962836305"}]
  constructor() { }

  ngOnInit() {
  }

}
