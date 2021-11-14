import {ClientConfig} from "common-dto";

export interface AppStateInterface {
  loadingCount:number;
  config:ClientConfig;
}

function state (): AppStateInterface {
  return {
    loadingCount: 0,
    config: {} as any
  }
}

export default state
