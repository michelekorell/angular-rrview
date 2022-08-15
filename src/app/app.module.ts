import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { RunScriptsDirective } from './directives/run-script.directive';
import { RrViewComponent } from './features/rr-view/rr-view.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    SafeHtmlPipe,
    RunScriptsDirective,
    RrViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [
    SafeHtmlPipe,
  ],
  exports: [
    RunScriptsDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
