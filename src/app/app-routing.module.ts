import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComoPartComponent } from './pages/como-part/como-part.component';
import { EquipComponent } from './pages/equip/equip.component';
import { ExpeActivoComponent } from './pages/expe-activo/expe-activo.component';
import { OrgComponent } from './pages/org/org.component';
import { SitComponent } from './pages/sit/sit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'como-part',
    component: ComoPartComponent,
  },
  {
    path: 'equip',
    component: EquipComponent,
  },
  {
    path:'expe-activo',
    component: ExpeActivoComponent,
  },
  {
    path:'org',
    component:OrgComponent,
  },
  {
    path:'sit',
    component: SitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
