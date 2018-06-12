import { Component, OnInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GiphyService } from '../giphyService/giphy.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})

export class SearchbarComponent implements OnInit {
  searchValue: string = "";

  constructor(
    private httpClient: HttpClient,
    private giphyService: GiphyService
  ) { }

  ngOnInit() {
  }

  search() {
    this.giphyService.getGiphyData();
  }

  onUpdateSearchField(event: Event) {
    this.searchValue = (<HTMLInputElement>event.target).value;
    this.giphyService.changeGiphyUrl(this.searchValue);
  }

}
