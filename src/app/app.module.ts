import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router"
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { DisplayImagesComponent } from './home/display-images/display-images.component';
import { HomeComponent } from './home/home.component';
import { DisplayImageItemComponent } from './home/display-images/display-image-item/display-image-item.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SearchComponent } from './home/display-images/search/search.component';
import { FilterPipe } from './filter.pipe';
import { SearchListComponent } from './home/display-images/search/search-list/search-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayImagesComponent,
    HomeComponent,
    DisplayImageItemComponent,
    FooterComponent,
    AuthenticationComponent,
    SearchComponent,
    FilterPipe,
    SearchListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
