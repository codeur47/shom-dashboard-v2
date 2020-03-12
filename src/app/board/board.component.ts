import { Component, OnInit, Input } from '@angular/core';
import { BuildMonitoringResponse } from '../models/buildMonitoringResponse';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() boardItem: BuildMonitoringResponse;

  constructor() { }

  ngOnInit() {
  }

}
