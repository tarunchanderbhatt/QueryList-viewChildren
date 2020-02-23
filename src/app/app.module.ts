import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ParentCounterComponent } from './parent-counter/parent-counter.component';
import { ChangecolorDirective } from './changecolor.directive';
import { ParentchangecolorComponent } from './parentchangecolor/parentchangecolor.component';
import { ThemeComponent } from './theme/theme.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ParentCounterComponent,
    ChangecolorDirective,
    ParentchangecolorComponent,
    ThemeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
