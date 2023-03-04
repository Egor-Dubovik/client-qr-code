import { makeAutoObservable } from 'mobx';

export interface IScanerData {
  text: string;
}

type Camera = 'environment' | 'user';

class BasketStore {
  private _data: IScanerData | null;
  private _loadingScan: boolean;
  private _isScan: boolean;
  private _visibility: boolean;
  private _selectedCamera: Camera;

  constructor() {
    this._data = null;
    this._isScan = false;
    this._loadingScan = true;
    this._visibility = true;
    this._selectedCamera = 'environment';
    makeAutoObservable(this);
  }

  setData(data: IScanerData | null): void {
    this._data = data;
  }

  get data(): IScanerData | null {
    return this._data;
  }

  setIsScan(value: boolean): void {
    this._isScan = value;
  }

  get isScan(): boolean {
    return this._isScan;
  }

  setLoadingScan(value: boolean): void {
    this._loadingScan = value;
  }

  get loadingScan(): boolean {
    return this._loadingScan;
  }

  setVisibility(value: boolean): void {
    this._visibility = value;
  }

  get visibility(): boolean {
    return this._visibility;
  }

  setSelectedCamera(value: Camera): void {
    this._selectedCamera = value;
  }

  get selectedCamera(): Camera {
    return this._selectedCamera;
  }
}

export default BasketStore;
