import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {

  slides :ImageSlide[]= [];
  images = [944,945, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(){
    for(let i = 0;i<10;i++){
      this.slides.push(new ImageSlide(`${i}`));
    }
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}

class ImageSlide {
  src = "../../../assets/RaisaEmblem.jpg";
  id:string;
  constructor(id:string){
    this.id = id;
  }
}