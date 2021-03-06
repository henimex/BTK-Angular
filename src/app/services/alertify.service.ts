import { Injectable } from '@angular/core';

declare let alertify: any;

@Injectable({
  providedIn: 'root',
})
export class AlertifyService {
  constructor() {}

  success(message: string) {
    alertify.success("00: "+message);
  }

  error(message: string) {
    alertify.error("99: "+message);
  }

  warning(message: string) {
    alertify.warning("55: "+message);
  }
}
