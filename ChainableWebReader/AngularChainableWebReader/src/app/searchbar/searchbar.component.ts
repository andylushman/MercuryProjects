import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})

export class SearchbarComponent implements OnInit {
  searchValue= "";
  queryURL= "";


  constructor() { }

  ngOnInit() {
  }

  search() {

    const myRequest = new XMLHttpRequest();
  
    myRequest.onreadystatechange = () => {
      if (myRequest.readyState == XMLHttpRequest.DONE) {
        if (myRequest.status == 200) {
          // document.getElementById("myDiv").innerHTML = myRequest.responseText;           
          console.log(JSON.parse(myRequest.response));        
        }
        else if (myRequest.status == 400) {
          alert('There was an error 400');
        }
        else {
          alert('something else other than 200 was returned');
        }
      }

      // for(i = 0; i < response.data.length; i++){
      //   //Add raiting and img to html
      //   $("#giphy-area").append("<div class= 'gif-div'>Rating: " + response.data[i].rating.toUpperCase() + "<br>" + "<img data-name= " + response.data[i].images.original.url + " src= " + response.data[i].images.original_still.url + " class= 'gif-img'></div>");
      // };

    };

    myRequest.open("GET", this.queryURL, true);
    myRequest.send(); 
  }

  onUpdateSearchField(event: Event) {
    this.searchValue = (<HTMLInputElement>event.target).value;
    this.queryURL = `https://api.giphy.com/v1/gifs/search?q=${this.searchValue}&api_key=dc6zaTOxFJmzC&limit=10`;
    console.log(this.searchValue);
    
  }


}
