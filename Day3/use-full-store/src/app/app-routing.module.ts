import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'machines',
  loadChildren: () => import('./features/machines/machines.module').then(m => m.MachinesModule)
},{path:'', pathMatch:'full', redirectTo:'machines'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
