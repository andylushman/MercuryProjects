import { Component, OnInit, Input } from '@angular/core';
import { ResultsComponent } from '../results.component';
import { Result } from '../result';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private results: ResultsComponent) { }
  @Input() gif: Result;


  ngOnInit() {
  }

}
