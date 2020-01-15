import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { md5 } from '@dikman/md5';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { TrimExample } from 'src/app/shared/decorators/trim-example.decorator';

@Component({
  templateUrl: './md5.component.html'
})
export class MD5Component implements OnInit, OnDestroy {

  @TrimExample()
  public exampleCode = `
    import { md5 } from '@dikman/md5';

    console.log(md5('hello'));
    // "5d41402abc4b2a76b9719d911017c592"
  `;

  public exampleString = new FormControl('hello');

  public exampleChecksum: string;

  private exampleSubscription: Subscription;

  public ngOnInit(): void {
    this.exampleSubscription = this.exampleString
      .valueChanges
      .pipe(
        debounceTime(150),
        distinctUntilChanged()
      )
      .subscribe(() => this.invalidate());

    this.invalidate();
  }

  public ngOnDestroy(): void {
    this.exampleSubscription.unsubscribe();
  }

  private invalidate(): void {
    this.exampleChecksum = md5(this.exampleString.value);
  }

}
