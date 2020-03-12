import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import {environment, hoursMonitoringOceano, numberIntegration, THEMATIQUE, oceanoApiBuild, oceanoApiLastId} from '../../environments/environment';
import { BuildMonitoringResponse } from '../models/buildMonitoringResponse';
import { ApiService } from './apiService';
import { ApiUtilsService } from './apiUtilsService';

@Injectable({
  providedIn: 'root'
})
export class OceanoService {

  resultAllBuild: BuildMonitoringResponse[] = [];
  category = 'OCEANO';
  idLastBuild: string = null;

  constructor(protected http: HttpClient, private apiService: ApiService, private apiUtilsService: ApiUtilsService) {
      this.initAllThematic();
  }

  /**
   *
   * @description initializes all the thematic
   *
   */
  initAllThematic() {
    this.resultAllBuild = [];
    for (const item in THEMATIQUE) {
        if (isNaN(Number(item))) {
          const oneThematique = new BuildMonitoringResponse();
          oneThematique.source = item;
          oneThematique.category = this.category;
          this.resultAllBuild.push(oneThematique);
        }
    }
  }


  /**
   *
   * @description retrieve the id of the last build and update the idLastBuild variable
   *
   */
  setLastBuild() {
    this.apiService.getLastBuild(oceanoApiLastId)
      .pipe(first())
      .subscribe(
        data => {
          this.idLastBuild = data.id;
        },
        error => {
          this.initAllThematic();
        }
      );
  }

  /**
   *
   * @description retrieve all the builds from the OCEANO category
   *
   */
  getAllBuild() {
    this.resultAllBuild.forEach((item) => {
      if (item.source === 'HYDRODYN') {
        if (this.idLastBuild === null || this.idLastBuild !== item.idLastBuild) {
          this.apiService.getAllBuild(oceanoApiBuild)
            .pipe(first())
            .subscribe(
              data => {
                this.setData(data);
              },
              error => {
                this.resultAllBuild.forEach((itemThematic) => {
                  itemThematic.statusBuild = 'FAILURE';
                });
              }
            );
        } else {
          this.setStatusMonitoring();
        }
      }
    });
  }

  /**
   *
   * @description updates the monitoring status of each thematic
   *
   */
  setStatusMonitoring() {
    this.resultAllBuild.forEach((item) => {
      if (item.data.length > 0 &&
        this.apiUtilsService.getDifference(item.data[0].timestamp) > hoursMonitoringOceano) {
        item.statusMonitoring = 'FAILURE';
      }
    });
  }

  /**
   *
   * @description update the this.resultOceao[X] variable of type BuildMonitoringResponse
   * @param builds any - list of builds in the OCEANO category
   */
  setData(builds: any) {
    let i = 0;
    builds = builds.builds;
    this.resultAllBuild.forEach((item) => {
      item.data = [];
    });

    while (i < builds.length) {
      let j = 0;
      while (j < builds[i].actions.length) {
        if (Object.keys(builds[i].actions[j]).length !== 0) {
          let k = 0;
          while (k < builds[i].actions[j].parameters.length) {

            this.resultAllBuild.forEach((item) => {
              if (builds[i].actions[j].parameters[k].value === item.source && item.data.length < numberIntegration) {
                item.data.push(builds[i]);
              }
              item.idLastBuild = builds[0].id;
            });

            k++;
          }
        }
        j++;
      }
      i++;
      if (i === builds.length) {
        this.setStatusBuildAndMonitoring();
      }
    }
  }

  /**
   *
   * @description updates the monitoring status of each theme
   *
   */
  setStatusBuildAndMonitoring() {

    this.resultAllBuild.forEach((item) => {
        if (item.data.length > 0) {
          item.statusBuild = 'SUCCESS';
          if (this.apiUtilsService.getDifference(item.data[0].timestamp) <= hoursMonitoringOceano) {
            item.statusMonitoring = 'SUCCESS';
          }
        }
    });
  }

}
