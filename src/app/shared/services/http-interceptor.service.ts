import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
  ) { }

  intercept( request: HttpRequest<unknown>, next: HttpHandler ): Observable<HttpEvent<unknown>> {
    this.spinner.show();

    return next.handle( request ).pipe(
      map( ( event: HttpEvent<any> ) => {
        if ( event instanceof HttpResponse ) {
          this.spinner.hide();
        }
        return event;
      } ),
      catchError( ( response: HttpErrorResponse ) => {
        this.spinner.hide();
        this.router.navigateByUrl( `/error-page/${response.error.status_code}` );
        return throwError( response );
      } )
    );
  }
}
