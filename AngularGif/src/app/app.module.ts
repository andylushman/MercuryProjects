import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResultsComponent } from './results/results.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { GiphyService } from './giphyService/giphy.service';
import { ResultComponent } from './results/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResultsComponent,
    SearchbarComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
