import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareserviceService {

  public particular_id =new BehaviorSubject<any>('');
  constructor() { }
}
