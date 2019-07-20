import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOptions: any;

  constructor() {
    this.slideOptions = {
      initialSlide: 0,
      slidesPerView: 2.5,
      autoplay: false,
      loop: true
    };
  }

}
