import { makeAutoObservable } from 'mobx';

class ModalStore {
  private _isOpen: boolean;

  constructor() {
    this._isOpen = false;
    makeAutoObservable(this);
  }

  setIsOpen(value: boolean): void {
    this._isOpen = value;
  }

  get isOpen(): boolean {
    return this._isOpen;
  }
}

export default ModalStore;
