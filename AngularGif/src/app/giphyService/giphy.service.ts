import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Result } from "../results/result";
import { Observable } from "rxjs-compat/Observable";
import { BehaviorSubject } from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class GiphyService {
    private giphyUrlSource = new BehaviorSubject<string>("");
    giphyUrl = this.giphyUrlSource.asObservable();


  constructor(private httpClient: HttpClient){}
    
    changeGiphyUrl(url: string){
        this.giphyUrlSource.next(url)
        console.log(url);
    }
  
    getGiphyData(): Observable<Result[]>{
        console.log(this.giphyUrlSource.value);
        return this.httpClient.get<Result[]>(`https://api.giphy.com/v1/gifs/search?q=Random&api_key=dc6zaTOxFJmzC&limit=10`);
    }

}

// ${this.giphyUrlSource.value}


//Questions
//1. getGiphyData() isn't being triggered.
//2. File is red because of .data but it is working fine...
//3. Overall review of how observables work and how to make the response useable.
//4. What is the point of having result.ts? Somehow that is a template that makes the observable data useable?