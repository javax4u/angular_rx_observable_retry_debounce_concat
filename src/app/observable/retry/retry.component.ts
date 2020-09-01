import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { retry, retryWhen, delay, scan } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {

  person;
  fetchingStatus = -1; //0 means ready to fetching, 1 means fetch complete and 2 means error
  statusMessage = ""; statusClass = "primary";
  constructor(private httpClient: HttpClient, private designUtility: DesignUtilityService) { }

  ngOnInit() {

    // this.fetchDetails();
  }
  fetchDetails() {
    this.fetchingStatus = 0;
    this.statusMessage = "Fetching. ...";
    //httpClient
    //get me file with this url
    this.httpClient.get('https://raw.githubusercontent.com/javax4u/rx_observable_retry_debounce_concat/master/employee.json')
      .pipe(
        retry(4)
        //scan and delay code should come here. But rupesh was not able to comprehend it and there was error about missing ) and { on screen so removed it for a while
        //https://www.youtube.com/watch?v=isFdiFdg8y0&list=PLLhsXdvz0qjI68a8tLUUMyXmNhl608mcn&index=19
      )
      .subscribe((data) => {
        this.person = data;
        console.log(data)
        this.statusMessage = " Complete";
        this.fetchingStatus = 1;
      }, error => {
        this.statusMessage = " Failed";
        this.fetchingStatus = 2;
      });

    //show file data on html
  }

}
