export interface Parameter {
    value: string;
}

export interface Action {
    parameters: Parameter[];
}

export interface OceanBuild {
    actions: Action[];
    id: string;
    result: string;
    timestamp: any;
    url: string;
}

