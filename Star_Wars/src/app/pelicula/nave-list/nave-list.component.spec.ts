/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NaveListComponent } from './nave-list.component';

describe('NaveListComponent', () => {
  let component: NaveListComponent;
  let fixture: ComponentFixture<NaveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
