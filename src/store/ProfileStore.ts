import { makeAutoObservable } from 'mobx';

class ProfileStore {
  private _isOpen: boolean;

  constructor() {
    this._isOpen = true;
    makeAutoObservable(this);
  }

  setIsOpen(value: boolean): void {
    this._isOpen = value;
  }

  get isOpen(): boolean {
    return this._isOpen;
  }
}

export default ProfileStore;
