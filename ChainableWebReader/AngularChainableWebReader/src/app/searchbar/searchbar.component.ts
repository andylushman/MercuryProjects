import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})

export class SearchbarComponent implements OnInit {
  searchValue= "";
  queryURL= "";
  results = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  search() {
    this.http.get(this.queryURL)
    .subscribe(
      (data: any []) => {
        console.log(data);
      }
    )
  }

  onUpdateSearchField(event: Event) {
    this.searchValue = (<HTMLInputElement>event.target).value;
    this.queryURL = `https://api.giphy.com/v1/gifs/search?q=${this.searchValue}&api_key=dc6zaTOxFJmzC&limit=10`;
    console.log(this.searchValue);
  }

}
