import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.css']
})
export class ReplayComponent implements OnInit {

  user1List = ['Angular 1', 'Angular 2'];
  user2List = [];
  user3List = [];
  subscribeMode2: boolean = true;
  subscribeMode3: boolean = false;
  subscription2: Subscription;
  subscription3: Subscription;
  intervalSubscription: Subscription;

  //Toggle properties
  methodInterval: boolean = false;

  constructor(private designUtility: DesignUtilityService) {
    this.subscription2 = this.designUtility.videoEmit.subscribe(data => {
      this.user2List.push(data);
      this.user1List.push(data);
    });
    this.intervalSubscription= new Subscription();//this.designUtility.videoEmit.subscribe(data => {


  }


  ngOnInit() {
  }

  onVideoAdd(video) {
    this.user1List.push(video.value);
    this.designUtility.videoEmit.next(video.value);
  }

  user2Subscribe() {
    console.log("user2Subscribe");
    if (this.subscribeMode2) {
      this.subscription2.unsubscribe();
    } else {
      this.subscription2 = this.designUtility.videoEmit.subscribe(data => {
        this.user2List.push(data);
      })
    }

    this.subscribeMode2 = !this.subscribeMode2;

  }

  user3Subscribe() {
    console.log("user3Subscribe");
    if (this.subscribeMode3) {
      this.subscription3.unsubscribe();
    } else {
      this.subscription3 = this.designUtility.videoEmit.subscribe(data => {
        this.user3List.push(data);
      })
    }

    this.subscribeMode3 = !this.subscribeMode3;

  }

  toggleMethod() {

    const broadcastVideo = interval(2000);

    if (!this.methodInterval) {
      this.intervalSubscription=broadcastVideo.subscribe(data => {
        this.designUtility.videoEmit.next('Video ' + data);
      })
    } else {
      this.intervalSubscription.unsubscribe();
    }

    this.methodInterval = !this.methodInterval;

  }

}
