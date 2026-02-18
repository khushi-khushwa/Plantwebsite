import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';
import { ProductListComponent } from './product-list/product-list.component';
import { GardeningComponent } from './gardening/gardening.component';
import { ProductsComponent } from './products/products.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { PotsComponent } from './pots/pots.component';
import { IndoorComponent } from './indoor/indoor.component';
import { OutdoorComponent } from './outdoor/outdoor.component';
import { SeedsComponent } from './seeds/seeds.component';
import { CompostComponent } from './compost/compost.component';
import { ApplyformComponent } from './applyform/applyform.component';
import { SeasonalComponent } from './seasonal/seasonal.component';
import { CompostDetailComponent } from './compost-detail/compost-detail.component';
import { WhishlistComponent } from './whishlist/whishlist.component';
import { CartComponent } from './cart/cart.component';
import { BuyitemComponent } from './buyitem/buyitem.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { IndoorDetailComponent } from './indoor-detail/indoor-detail.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';

import { SignupGuard } from './signup.guard';
import { PotsDetailComponent } from './pots-detail/pots-detail.component';
import { SeedsDetailComponent } from './seeds-detail/seeds-detail.component';
import { OutdoorDetailComponent } from './outdoor-detail/outdoor-detail.component';
import { SeasonalDetailComponent } from './seasonal-detail/seasonal-detail.component';
import { OrderComponent } from './order/order.component';
import { SearchitemComponent } from './searchitem/searchitem.component';
import { SearchdetailComponent } from './searchdetail/searchdetail.component';
import { ProfileComponent } from './profile/profile.component';
import { ApplyservicesComponent } from './applyservices/applyservices.component';
import { ToolsComponent } from './tools/tools.component';
import { ToolsDetailsComponent } from './tools-details/tools-details.component';
// import { CanActivate } from '@angular/router';

const routes: Routes = [
  // {path:'',component:HomeComponent},
  {path:'', redirectTo:'/login', pathMatch:'full', },
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent  },

  {path:'home', component:HomeComponent, canActivate:[AuthGuard] 
  },
  {path:"gardening", component:GardeningComponent, },
  {path:'product', component:ProductsComponent, canActivate:[AuthGuard] },
  {path:'indoor',component:IndoorComponent, canActivate:[AuthGuard] },
  {path: 'about', component:AboutComponent,},
  {path: 'seasonal', component:SeasonalComponent,canActivate:[AuthGuard] },
  {path: 'seasonal-detail/:id', component:SeasonalDetailComponent, },
  {path:'service-detail/:id', component:ServiceDetailComponent},
  {path:'profile',component:ProfileComponent},
  {path:'checkservice',component:ApplyservicesComponent},
  {path:'pots', component:PotsComponent, canActivate:[AuthGuard] },
  {path:'seasonal', component:SeasonalComponent, canActivate:[AuthGuard] },
  {path:'indoor-detail/:id', component:IndoorDetailComponent},
  {path:'outdoor', component:OutdoorComponent,canActivate:[AuthGuard] },
  {path:'outdoor-detail/:id', component:OutdoorDetailComponent},
  {path:'seeds', component:SeedsComponent, canActivate:[AuthGuard] },
  {path:'seeds-detail/:id', component:SeedsDetailComponent},
  {path:'compost',component:CompostComponent, canActivate:[AuthGuard] },
  {path:'applyform', component:ApplyformComponent, canActivate:[AuthGuard] },
  {path:'compost-detail/:id', component:CompostDetailComponent},
  {path:'pots-detail/:id', component:PotsDetailComponent},
  {path:'searchitem', component:SearchitemComponent},
  {path:'search-detail/:id', component:SearchdetailComponent},
  {path:'tools', component:ToolsComponent,canActivate:[AuthGuard] },
  {path:'tools-detail/:id', component:ToolsDetailsComponent},
  // {path:'wishlist', component:whishlistComponent},
  // {path:'cart', component:CartComponent},
  {path:'buyitem/:id', component:BuyitemComponent},
{path:'order', component:OrderComponent},
  { path: 'wishlist', loadChildren: () => import('./whishlist/whishlist.module').then(m => m.WhishlistModule) , canActivate:[AuthGuard] },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule), canActivate:[AuthGuard]  },
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard,SignupGuard]
})
export class AppRoutingModule { }
