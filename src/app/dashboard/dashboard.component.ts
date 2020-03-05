import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {Thematic} from '../models/thematic';
import {System} from '../models/system';
import {Source} from '../models/source';
import {SystemOceano} from '../models/systemOceano';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
  })
  export class DashboardComponent implements OnInit {
    thematics: Thematic[];
    systems: System[];
  systemsOceano: SystemOceano[];
    sources: Source[];

    constructor(private apiService: ApiService) {}

    ngOnInit() {
      this.apiService.getAllThematic().subscribe(data => {
        this.thematics = data;
      });
      this.apiService.getAllSystem().subscribe(data => {
        this.systems = data;
      });
      this.apiService.getAllSystemOceano().subscribe(data => {
        this.systemsOceano = data;
      });
      this.apiService.getAllSource().subscribe(data => {
        this.sources = data;
      });
    }

}
