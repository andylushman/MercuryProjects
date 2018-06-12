import { Component, OnInit } from '@angular/core';
import { ResultsComponent } from '../results.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private results: ResultsComponent) { }

  ngOnInit() {
  }

}
