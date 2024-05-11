import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private isLoading = new BehaviorSubject<boolean>(false);
  // isLoading$ = this.isLoadingSubject.asObservable();

  constructor() { }


  show(): void {
    this.isLoading.next(true);
  }

  hide(): void {
    this.isLoading.next(false);
  }

  isLoading$(): BehaviorSubject<boolean> {
    return this.isLoading;
  }
}
