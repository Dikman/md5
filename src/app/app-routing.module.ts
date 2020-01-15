import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'md5',
    loadChildren: () => import('./pages/md5/md5.module').then(m => m.MD5Module)
  },
  {
    path: '**',
    redirectTo: 'md5'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
