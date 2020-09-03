import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  uname;
  userName;
  constructor(private designUtility: DesignUtilityService) {
    this.designUtility.userName.subscribe(data => { this.userName = data; })
  }

  ngOnInit() {
  }

  onChange(uname) {
    console.log(uname.value);
    this.designUtility.userName.next(uname.value);
  }
}
