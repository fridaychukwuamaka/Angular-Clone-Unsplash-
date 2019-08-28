import { Component, OnInit, Input } from '@angular/core';
import { Image} from '../../../image.model'

@Component({
  selector: 'app-display-image-item',
  templateUrl: './display-image-item.component.html',
  styleUrls: ['./display-image-item.component.css']
})
export class DisplayImageItemComponent implements OnInit {
	image = false;
	@Input() displayImg: Image;
  constructor() { }

  ngOnInit() {
  }
  modal(){
  	this.image  = !this.image
  	console.log(this.image)
  }

close(){
	this.image = false;
}

}
