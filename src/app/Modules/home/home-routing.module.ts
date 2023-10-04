import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ChildGuard } from 'src/app/core/Guard/child.guard';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { RoleGuard } from 'src/app/core/Guard/role.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/list',
    pathMatch: 'full'
  },
  {
    path: '',
    canActivateChild: [ChildGuard],
    children: [
      {
        path: 'list',
        canActivate:[RoleGuard],
        component: ListComponent
      },
      {
        path: 'add',
        canActivate:[RoleGuard],
        component: AddComponent
      },
      {
        path: 'edit',
        canActivate:[RoleGuard],
        component: EditComponent
      },
      {
        path: 'delete',
        canActivate:[RoleGuard],
        component: DeleteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
