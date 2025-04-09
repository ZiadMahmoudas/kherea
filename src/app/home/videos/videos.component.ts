import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
    selector: 'app-videos',
    templateUrl: './videos.component.html',
    styleUrls: ['./videos.component.scss'],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class VideosComponent  {
  slidesPerView:number = 3;
  screenwidth:number ;

  @HostListener("window:resize")
  getScreenWidth(): void{
    this.screenwidth = window.innerWidth;
    if(this.screenwidth>=0 && this.screenwidth <= 576){
      this.slidesPerView = 1;
    }
    else if(this.screenwidth>=576 && this.screenwidth <= 768){
      this.slidesPerView = 2;
    }
   else if(this.screenwidth>=768 && this.screenwidth <= 992){
      this.slidesPerView = 3;
    }
  }
}
