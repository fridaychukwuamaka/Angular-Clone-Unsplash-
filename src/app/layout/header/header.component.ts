import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  image = false
	headName: string = 'Home'
  constructor() { }

  ngOnInit() {
  }


  headerName(name:string){
    if(name === 'Submit a Photo'){
      this.image = true;
      this.headName = 'Home'
    }else{
      this.headName = name;
      console.log(name)
    }
  }


close(){
  this.image = false;
}


}
