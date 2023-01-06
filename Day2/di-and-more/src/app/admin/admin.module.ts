import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRootComponent } from './admin-root/admin-root.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { KefelBoardComponent } from './components/kefel-board/kefel-board.component';

const routes: Route[] = [
  { path: '', component: AdminRootComponent },
  { path: 'kefel/:sizeInRule', component: KefelBoardComponent },

];

@NgModule({
  declarations: [
    AdminRootComponent,
    KefelBoardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
