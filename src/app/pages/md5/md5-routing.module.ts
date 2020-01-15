import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MD5Component } from './md5.component';

const routes: Routes = [
  {
    path: '',
    component: MD5Component
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MD5RoutingModule { }
