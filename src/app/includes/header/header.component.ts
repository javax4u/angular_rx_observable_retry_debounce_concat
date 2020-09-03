import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navOpen:boolean=false;

  exclusive:boolean=false;

  constructor(private designUtility:DesignUtilityService) { }

  ngOnInit() {

    this.designUtility.exclusive.subscribe(res => {
      this.exclusive=res;
    });
  }

}
