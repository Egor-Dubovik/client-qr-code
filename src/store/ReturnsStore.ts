import { Return } from 'common/models/Return';
import { makeAutoObservable } from 'mobx';

class ReturnsStore {
  private _allReturns: Return[];
  private _isFormValidate: boolean;
  private _isFormSubmit: boolean;
  private _errors: string[];

  constructor() {
    this._allReturns = [] as Return[];
    this._isFormValidate = false;
    this._isFormSubmit = false;
    this._errors = [] as string[];
    makeAutoObservable(this);
  }

  setReturn(userReturn: Return): void {
    this._allReturns.push(userReturn);
  }

  setFormValidate(value: boolean): void {
    this._isFormValidate = value;
  }

  setFormSubmit(value: boolean): void {
    this._isFormSubmit = value;
  }

  setFormErrors(errors: string[]): void {
    this._errors = errors;
  }

  get allReturns(): Return[] {
    return this._allReturns;
  }

  get formValidate(): boolean {
    return this._isFormValidate;
  }

  get isFormSubmit(): boolean {
    return this._isFormSubmit;
  }

  get formErrors(): string[] {
    return this._errors;
  }
}

export default ReturnsStore;
