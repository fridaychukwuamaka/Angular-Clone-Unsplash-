import { Pipe, PipeTransform } from '@angular/core';
import { Image } from './image.model'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(images: Image[],  searchTerm: string):Image[] {
    if(!images || !searchTerm){
      return []
    }

    return images.filter(images => 
      images.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
  }

}
