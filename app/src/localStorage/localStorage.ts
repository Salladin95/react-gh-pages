import { ILocalStore } from './contracts';

export default class {
  private ls: ILocalStore;

  constructor() {
    const localStore = localStorage.getItem('movieLand');
    const ls = localStore ? JSON.parse(localStore) : { title: null };

    this.ls = ls;
  }

  get getValue() {
    return this.ls.title;
  }

  set updateValue(value: string) {
    this.ls.title = value;
    localStorage.setItem('movieLand', JSON.stringify(this.ls));
  }
}
