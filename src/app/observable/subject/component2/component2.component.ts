import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  userName;
  constructor(private designUtility: DesignUtilityService) {

    this.designUtility.userName.subscribe(data => { this.userName = data; })
  }


  ngOnInit() {
  }

}
