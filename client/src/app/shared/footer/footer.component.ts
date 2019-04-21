import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public myDate: any;
  constructor() {
    setInterval(() => {this.myDate = new Date(); }, 1000);
  }

  ngOnInit() {}

}
