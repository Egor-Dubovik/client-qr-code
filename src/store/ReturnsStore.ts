import { Return } from 'common/models/Return';
import { makeAutoObservable } from 'mobx';

class ReturnsStore {
  private _allReturns: Return[];
  private _isValidate: boolean;

  constructor() {
    this._allReturns = [] as Return[];
    this._isValidate = false;
    makeAutoObservable(this);
  }

  setReturn(userReturn: Return): void {
    this._allReturns.push(userReturn);
  }

  setValidate(value: boolean): void {
    this._isValidate = value;
  }

  get allReturns(): Return[] {
    return this._allReturns;
  }

  get validate(): boolean {
    return this._isValidate;
  }
}

export default ReturnsStore;
