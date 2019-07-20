import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.page.html',
  styleUrls: ['./browse.page.scss'],
})
export class BrowsePage implements OnInit {

  slideOptions: any;

  constructor() {
    this.slideOptions = {
      initialSlide: 0,
      slidesPerView: 2.5,
      autoplay: false,
      loop: true
    };
  }

  ngOnInit() {
  }

}
