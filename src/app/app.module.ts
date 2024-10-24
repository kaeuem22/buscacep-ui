import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNGModule } from './primeng.module';
import { CepComponent } from './cep/cep.component';
import { CnpjComponent } from './cnpj/cnpj.component';

@NgModule({
  declarations: [		
    AppComponent,
      CepComponent,
      CnpjComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeNGModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
