import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MD5RoutingModule } from './md5-routing.module';
import { MD5Component } from './md5.component';

@NgModule({
  declarations: [
    MD5Component
  ],
  imports: [
    SharedModule,
    MD5RoutingModule
  ]
})
export class MD5Module { }
