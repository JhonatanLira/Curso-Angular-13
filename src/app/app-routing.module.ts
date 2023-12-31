import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
const routes: Routes = [
  {path:'', component: FirstComponentComponent},
  {path:'list', component:ListRenderComponent},
  {path:'list/:id', component:ItemDetailComponent },
  {path:'change-number', component:ChangeNumberComponent},
  {path:'if-render', component:IfRenderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
