import store from './store';

export function init(): Promise<any> {
  return registerModules();
}

function registerModules(): Promise<any> {
  return Promise.resolve();
}

export default store;
