import {ActionTree} from 'vuex'
import {StateInterface} from '../index'
import {AppStateInterface} from './state'
import {loadConfig} from "../../services/app.service";

const actions: ActionTree<AppStateInterface, StateInterface> = {

  enableLoading(context){
    context.commit("incrementLoading");
  },

  disableLoading(context){
    context.commit("decrementLoading");
  },

  loadConfig(context) {
    return loadConfig().then(result => {
      context.commit("setConfig", result);
      return result;
    });
  }
}

export default actions
