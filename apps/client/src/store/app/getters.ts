import {GetterTree} from 'vuex'
import {StateInterface} from '../index'
import {AppStateInterface} from './state'
import {ClientConfig} from "common-dto";

const getters: GetterTree<AppStateInterface, StateInterface> = {

  isLoading(state):boolean {
    return state.loadingCount > 0;
  },

  config(state):ClientConfig{
    return state.config;
  }
}

export default getters
