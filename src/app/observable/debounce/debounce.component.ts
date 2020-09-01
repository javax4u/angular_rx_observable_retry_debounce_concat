import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})
export class DebounceComponent  implements AfterViewInit {

  @ViewChild('myInput') myInput:ElementRef;
  @ViewChild('myInput2') myInput2:ElementRef;

  requestData;
  requestData2;

  constructor() { }

  ngAfterViewInit() {

    // Ex 01
    const searchTerm=fromEvent<any>(this.myInput.nativeElement,'keyup')
    .pipe(map(event => event.target.value), debounceTime(500))
    ;

    searchTerm.subscribe(data => {
      this.requestData=data;
      console.log(data);
    });

    // Ex 02
    const searchTerm2=fromEvent<any>(this.myInput2.nativeElement,'keyup')
    .pipe(map(event => event.target.value),
    debounceTime(500),
    distinctUntilChanged())

    searchTerm2.subscribe(data => {
      this.requestData2=data;
      console.log(data);

      setTimeout(() => {
        //this.requestData2=null;
      },1000);
    });
  }

}
