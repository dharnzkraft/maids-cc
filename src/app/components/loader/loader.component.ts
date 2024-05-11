import { Component, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  isLoading = false;

  constructor(public loaderService: LoaderService) {
    this.loaderService.isLoading$().subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }

 

}
