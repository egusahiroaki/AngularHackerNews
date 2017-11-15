import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataTransferService {

  constructor() { }

  private toParentDataSource = new Subject<string>();
  private toChildDataSource = new Subject<string>();

  // Observable streams
  public toParentData$= this.toParentDataSource.asObservable();
  public toChildData$= this.toChildDataSource.asObservable();

  // Send to param
  sendParamToParent(data: any) {
    this.toParentDataSource.next(data);
  }

  sendParamToChild(data: any) {
    this.toChildDataSource.next(data);
  }
}
