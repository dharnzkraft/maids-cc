import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const modifiedRequest = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'X-Api-Key': '5a994dabbe204e4392b862b1d584b0d8',
        // Add other headers as needed
      }
    });
    
    this.loaderService.show(); // Show loader when HTTP call starts
    

    return next.handle(modifiedRequest).pipe(
      
      finalize(() => {
        
        this.loaderService.hide(); // Hide loader when HTTP call completes
      })
    );
  }
}
