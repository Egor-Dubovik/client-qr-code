import { Return } from 'common/models/Return';
import { makeAutoObservable } from 'mobx';

class ReturnsStore {
  private _amount: number;
  private _allReturns: Return[];

  constructor() {
    this._amount = 0; // get from db
    this._allReturns = [] as Return[];
    makeAutoObservable(this);
  }

  setReturn(userReturn: Return): void {
    this._allReturns.push(userReturn);
    console.log(this._allReturns);
  }

  get allReturns(): Return[] {
    return this._allReturns;
  }
}

export default ReturnsStore;
