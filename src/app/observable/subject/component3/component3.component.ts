import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  userName;
  constructor(private designUtility: DesignUtilityService) {

    this.designUtility.userName.subscribe(data => { this.userName = data; })
  }

  ngOnInit() {
  }

}
