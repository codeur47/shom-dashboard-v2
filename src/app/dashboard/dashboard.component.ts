import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { Thematic } from "../models/thematic";
import { System } from "../models/system";
import { Source } from "../models/source";
import { SystemOceano } from "../models/systemOceano";
import { Subject } from 'rxjs';
import { OceanoService } from '../services/oceanoService';
import { HttpClient } from '@angular/common/http';
import { ApiUtilsService } from '../services/apiUtilsService';
import { secondsCheck } from 'src/environments/environment';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  screenWidth: number;
  screenHeight: number;
  interval: any;
  private unsubscribe: Subject<any> = new Subject();

  constructor(
    private oceanoService: OceanoService,
    private http: HttpClient,
    private apiService: ApiService,
    private apiUtilsService: ApiUtilsService
  ) {}

  ngOnInit() {
    this.oceanoService.getAllBuild();
    this.interval = setInterval(() => {
    this.oceanoService.setLastBuild();
    this.oceanoService.getAllBuild();
    }, secondsCheck);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    clearInterval(this.interval);
  }
}
