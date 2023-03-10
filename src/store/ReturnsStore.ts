import { IAxiosError } from 'common/interfaces/axios';
import { Return } from 'common/models/Return';
import { makeAutoObservable } from 'mobx';

class ReturnsStore {
  private _allReturns: Return[];
  private _isFormValidate: boolean;
  private _isFormSubmit: boolean;
  private _isSuccess: boolean;
  private _formErrors: string[];
  private _serverError: IAxiosError<{ message: string }> | null;

  constructor() {
    this._allReturns = [] as Return[];
    this._isFormValidate = false;
    this._isFormSubmit = false;
    this._isSuccess = false;
    this._formErrors = [] as string[];
    this._serverError = null;
    makeAutoObservable(this);
  }

  setServerError(error: IAxiosError<{ message: string }>): void {
    this._serverError = error;
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
    this._formErrors = errors;
  }

  setSuccess(value: boolean): void {
    this._isSuccess = value;
  }

  get serverError(): IAxiosError<{ message: string }> | null {
    return this._serverError;
  }

  get success(): boolean {
    return this._isSuccess;
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
    return this._formErrors;
  }
}

export default ReturnsStore;
