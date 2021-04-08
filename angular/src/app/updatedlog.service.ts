import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdatedlogService {
  private static count = 0
  constructor() {
    UpdatedlogService.count = UpdatedlogService.count + 1;
    console.log("Constructor of Updated LogService called "+UpdatedlogService.count+" times")
  }

  sayHello(name:string) {
    return "Hello Updated "+name
  }
  sayNotHello() {
    return "Not hello" 
  }

}
