import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {

  constructor(private httpClient:HttpClient,private designUtility:DesignUtilityService) { }

  ngOnInit() {

    this.fetchDetails();
  }
  fetchDetails(){
    //httpClient
    //get me file with this url
    this.httpClient.get('https://raw.githubusercontent.com/javax4u/rx_observable_retry_debounce_concat/master/employee.json')
    .subscribe((data) => console.log(data));

    //show file data on html
  }

}
