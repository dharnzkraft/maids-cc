import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private menuVisibilitySubject = new BehaviorSubject<boolean>(false);
  menuVisibility$ = this.menuVisibilitySubject.asObservable();
  
  constructor() { }

  toggleMenuVisibility() {
    this.menuVisibilitySubject.next(!this.menuVisibilitySubject.value);
  }
}
