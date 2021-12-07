import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompNavbarComponent } from './components/comp-navbar/comp-navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ComoPartComponent } from './pages/como-part/como-part.component';
import { OrgComponent } from './pages/org/org.component';
import { EquipComponent } from './pages/equip/equip.component';
import { ExpeActivoComponent } from './pages/expe-activo/expe-activo.component';
import { SitComponent } from './pages/sit/sit.component';
import { CompFootComponent } from './components/comp-foot/comp-foot.component';


@NgModule({
  declarations: [
    AppComponent,
    CompNavbarComponent,
    HomeComponent,
    ComoPartComponent,
    OrgComponent,
    EquipComponent,
    ExpeActivoComponent,
    SitComponent,
    CompFootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
