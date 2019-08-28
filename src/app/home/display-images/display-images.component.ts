import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../image.service'
import { Image } from '../../image.model'

@Component({
  selector: 'app-display-images',
  templateUrl: './display-images.component.html',
  styleUrls: ['./display-images.component.css'],
  providers: [ImageService]
})
export class DisplayImagesComponent implements OnInit {
	images: Image[]
  underline = false
  constructor(private imageService: ImageService ) { }

  ngOnInit() {
  	this.images = this.imageService.getImages();
  }

  filt(filt: string){
  	this.images = this.imageService.filtImage(filt)
    this.underline = true
  }
  
  all(){
    this.images = this.imageService.getImages();
    this.underline = true
  }

}
