import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { MD5Component } from './md5.component';

describe('md5Component', () => {
  let component: MD5Component;
  let fixture: ComponentFixture<MD5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MD5Component
      ],
      imports: [
        SharedModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MD5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
