import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { VetsModule } from './vets/vets.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { ResourcesModule } from './resources/resources.module';
import { AuthModule } from './auth/auth.module';

import { MaterialModule } from './material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  SharedModule,
  FooterComponent,
  HeaderComponent,
} from './shared';
import {AgrovetModule} from './agrovet/agrovet.module';
import {CheckoutModule} from './checkout/checkout.module';


// const rootRouting: ModuleWithProviders =RouterModule.forRoot([], { useHash: false });



@NgModule({
  declarations: [ AppComponent, FooterComponent, HeaderComponent ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    AboutModule,
    ContactModule,
    AgrovetModule,
    ResourcesModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    VetsModule,
    CheckoutModule,
    // rootRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
