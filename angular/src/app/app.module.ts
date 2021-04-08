import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { PostComponent } from './post/post.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component'
import { LogService } from './log.service';
import { UpdatedlogService } from './updatedlog.service';
import { Child3Component } from './child3/child3.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    Child1Component,
    Child2Component,
    Child3Component,
   
  ],
  imports: [
    BrowserModule,
   
  ],
  providers: [{provide:LogService,useClass:UpdatedlogService},{provide:UpdatedlogService,useExisting:LogService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
