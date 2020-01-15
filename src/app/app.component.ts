import { MediaMatcher } from '@angular/cdk/layout';
import { Component } from '@angular/core';

interface MenuItem {
  link: string;
  title?: string;
  category: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public menu: Array<MenuItem> = [
    {
      link: 'md5',
      title: 'MD5',
      category: 'helper'
    }
  ];

  public mobile: MediaQueryList;

  constructor(media: MediaMatcher) {
    this.mobile = media.matchMedia('(max-width: 599px)');
  }

}
