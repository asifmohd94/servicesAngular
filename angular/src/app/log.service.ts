import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private static count:number=0;
  constructor() { 
    LogService.count=LogService.count+1;
    console.log("Constructor called "+LogService.count+" times");
  }
  sayHello(name:string){
   return "Hello" + name;
  }
}
