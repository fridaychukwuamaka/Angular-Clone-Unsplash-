import { Component, OnInit } from '@angular/core';
import {ImageService} from '../../../image.service'
import {Image} from '../../../image.model'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
image: Image[]
searchTerm = ''
  constructor(private imageService: ImageService) { }

  ngOnInit() {
  	this.image = this.imageService.getImages()
  	console.log(this.searchTerm.length)
  }

filteredStatus:''
}
