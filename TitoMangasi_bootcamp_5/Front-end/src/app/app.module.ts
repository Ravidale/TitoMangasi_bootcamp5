import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule} from "@angular/router";


import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { DenimComponent } from './denim/denim.component';
import { FootwearComponent } from './footwear/footwear.component';
import { JeansComponent } from './jeans/jeans.component';
import { OuterwearComponent } from './outerwear/outerwear.component';
import { PantsComponent } from './pants/pants.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { TshirtsComponent } from './tshirts/tshirts.component';
import { ShortsComponent } from './shorts/shorts.component';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductdetailsComponent,
    FileuploadComponent,
    AccessoriesComponent,
    DenimComponent,
    FootwearComponent,
    JeansComponent,
    OuterwearComponent,
    PantsComponent,
    ShirtsComponent,
    TshirtsComponent,
    ShortsComponent,
    DetailComponent,
    CartComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    HttpModule, HttpClientModule,
    RouterModule.forRoot([
      {path : '', component : ProductlistComponent},
      {path : 'detail/:id', component : DetailComponent},
      {path : 'productdetails', component : ProductdetailsComponent},
      {path : 'upload', component : FileuploadComponent},
      {path : 'accessories', component : AccessoriesComponent},
      {path : 'denim', component : DenimComponent},
      {path : 'footwear', component : FootwearComponent},
      {path : 'jeans', component : JeansComponent},
      {path : 'outerwear', component : OuterwearComponent},
      {path : 'pants', component : PantsComponent},
      {path : 'shirts', component : ShirtsComponent},
      {path : 'tshirts', component : TshirtsComponent},
      {path : 'shorts', component : ShortsComponent},
      {path : 'cart/:id', component : CartComponent}
 
      
  ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
