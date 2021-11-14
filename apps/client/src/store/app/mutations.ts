import {MutationTree} from 'vuex'
import {AppStateInterface} from './state'
import Vue from "vue";
import {plainToClass} from "class-transformer";
import {ClientConfig} from "common-dto";

const mutation: MutationTree<AppStateInterface> = {

  incrementLoading(state:AppStateInterface) {
    Vue.set(state, 'loadingCount', state.loadingCount + 1);
  },

  decrementLoading(state:AppStateInterface) {
    Vue.set(state, 'loadingCount', Math.max(0, state.loadingCount - 1));
  },

  setConfig(state:AppStateInterface, config: any) {
    Vue.set(state, "config", plainToClass(ClientConfig, config));
  }
}

export default mutation
