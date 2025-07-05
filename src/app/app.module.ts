import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { EventComponent } from './event/event.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsComponent } from './products/products.component';
import { GardeningComponent } from './gardening/gardening.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { SeasonalComponent } from './seasonal/seasonal.component';
import { IndoorComponent } from './indoor/indoor.component';
import { OutdoorComponent } from './outdoor/outdoor.component';
import { PotsComponent } from './pots/pots.component';
import { SeedsComponent } from './seeds/seeds.component';
import { CompostComponent } from './compost/compost.component';
import { ApplyformComponent } from './applyform/applyform.component';
import { CompostDetailComponent } from './compost-detail/compost-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { WhishlistComponent } from './whishlist/whishlist.component';
import { FooterComponent } from './footer/footer.component';
// import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from './cart/services.service';
import { BuyitemComponent } from './buyitem/buyitem.component';
import {MatIconModule} from '@angular/material/icon';
import { NotfoundComponent } from './notfound/notfound.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { IndoorDetailComponent } from './indoor-detail/indoor-detail.component';
import { OutdoorDetailComponent } from './outdoor-detail/outdoor-detail.component';
import { PotsDetailComponent } from './pots-detail/pots-detail.component';
import { SeedsDetailComponent } from './seeds-detail/seeds-detail.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';
import { RouterModule } from '@angular/router';
// import { CartComponent } from './cart/cart.component';
import { SignupGuard } from './signup.guard';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RecentlyViewComponent } from './recently-view/recently-view.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { SeasonalDetailComponent } from './seasonal-detail/seasonal-detail.component';
import { CurrentItemComponent } from './current-item/current-item.component';
import { MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { OrderconfirmComponent } from './orderconfirm/orderconfirm.component';
import { OrderComponent } from './order/order.component';
import { SearchitemComponent } from './searchitem/searchitem.component';
import { SearchdetailComponent } from './searchdetail/searchdetail.component';
import { VideoplayComponent } from './videoplay/videoplay.component';
import { ProfileComponent } from './profile/profile.component';
import { ApplyservicesComponent } from './applyservices/applyservices.component';
import { SanitizerPipe } from './sanitizer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ProjectComponent,
    EventComponent,
    HeaderComponent,
    ProductListComponent,
    ProductsComponent,
    GardeningComponent,
    ServiceDetailComponent,
    SeasonalComponent,
    IndoorComponent,
    OutdoorComponent,
    PotsComponent,
    SeedsComponent,
    CompostComponent,
    ApplyformComponent,
    CompostDetailComponent,
    FooterComponent,
    BuyitemComponent,
    NotfoundComponent,
    IndoorDetailComponent,
    OutdoorDetailComponent,
    PotsDetailComponent,
    SeedsDetailComponent,
    LoginComponent,
    SignupComponent,
    RecentlyViewComponent,
    NewArrivalsComponent,
    SeasonalDetailComponent,
    CurrentItemComponent,
    OrderconfirmComponent,
    OrderComponent,
    SearchitemComponent,
    SearchdetailComponent,
    VideoplayComponent,
    ProfileComponent,
    ApplyservicesComponent,
    SanitizerPipe,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatInputModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    CarouselModule,
    MatRadioModule,
    MatDialogModule,
    MatSnackBarModule,

    RouterModule.forRoot([

    ])
  
  ],
  providers: [ServicesService,SanitizerPipe],
  bootstrap: [AppComponent],

})
export class AppModule { }



// https://preview.themeforest.net/item/flacio-plants-shop-woocommerce-theme/full_screen_preview/35448913?_ga=2.85245401.1194596833.1733826930-111403893.1733371918&_gac=1.142330374.1733371918.EAIaIQobChMIxYzLyOGPigMViAuDAx0RqgBUEAAYASAAEgL7LPD_BwE

// https://dtgardening.wpengine.com/home-ii/

// https://dtgardening.wpengine.com/