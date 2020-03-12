import { Build } from './build';

/**
 * @description contains build and monitoring information
 */
export class BuildMonitoringResponse {
    data: Build[] = [];
    statusBuild = '';
    statusMonitoring = '';
    category: string;
    source = null;
    idLastBuild: string;
    buildType: '';
}
