import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsplashComponent } from './foodsplash.component';

describe('FoodsplashComponent', () => {
  let component: FoodsplashComponent;
  let fixture: ComponentFixture<FoodsplashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodsplashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodsplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
