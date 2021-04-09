import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { LogService } from './log.service';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide:LogService,useClass:LogService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
