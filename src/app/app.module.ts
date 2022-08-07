import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockUIModule } from 'primeng/blockui'
import { BlockableDivComponent } from './blockable-div/blockable-div.component';
import { BlockableContainerDivComponent } from './blockable-container-div/blockable-container-div.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockableDivComponent,
    BlockableContainerDivComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlockUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
