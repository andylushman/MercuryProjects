import { Component, OnInit } from "@angular/core";
import { GiphyService } from "../giphyService/giphy.service";
import { Result } from "./result";

@Component ({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnInit {
    public giphys: Result[];


    constructor( 
        private giphyService: GiphyService 
    ){}
    
    ngOnInit(){
        this.giphyService.getGiphyData().subscribe((giphys: Result[]) => {
            this.giphys = giphys;
            console.log(this.giphys);
        })       
    }

}