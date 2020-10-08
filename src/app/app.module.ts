import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//  Added
import { FormsModule} from '@angular/forms';
import { MyfirstComponent } from './myfirst/myfirst.component';
import { CalculationComponent } from './calculation/calculation.component';
import { DataItrationComponent } from './data-itration/data-itration.component'




@NgModule({
  declarations: [
    AppComponent,
    MyfirstComponent,
    CalculationComponent,
    DataItrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
