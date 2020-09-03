import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  userName='Guest';

  constructor(private designUtility:DesignUtilityService) {
    this.designUtility.userName.subscribe(data =>{
      this.userName=data;
    })
  }

  ngOnInit() {
    this.designUtility.exclusive.next(true);
  }

}
