import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLOveSalmComponent } from './my-love-salm.component';

describe('MyLOveSalmComponent', () => {
  let component: MyLOveSalmComponent;
  let fixture: ComponentFixture<MyLOveSalmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLOveSalmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLOveSalmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
