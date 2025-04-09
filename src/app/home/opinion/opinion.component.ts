import { CommonModule } from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA,AfterViewInit, Component, ViewEncapsulation, HostListener, OnInit, viewChild, ElementRef, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {SlickCarouselModule} from "ngx-slick-carousel";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { register } from 'swiper/element/bundle';
import { Swiper } from 'swiper/types';

register();

@Component({
    selector: 'app-opinion',
    templateUrl: './opinion.component.html',
    styleUrls: ['./opinion.component.scss'],
    imports:[SlickCarouselModule,CommonModule,CarouselModule],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class OpinionComponent{
slidesPerView:number = 3;
screenwidth:number ;

@HostListener("window:resize")
getScreenWidth(): void{
  this.screenwidth = window.innerWidth
  if (this.screenwidth <= 768) {
    this.slidesPerView = 1;
    console.log("slid1",this.slidesPerView);

  }
  else if (this.screenwidth <= 992) {
    this.slidesPerView = 2;
    console.log("slid2",this.slidesPerView);
  }
  else if (this.screenwidth <= 1115) {
    this.slidesPerView = 3;
    console.log("slid3",this.slidesPerView);
  }
  else {
    this.slidesPerView = 3;
    console.log("slid4",this.slidesPerView);
  }
}

}

