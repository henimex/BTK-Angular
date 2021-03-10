/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProductAddForms1Component } from './product-add-forms1.component';

describe('ProductAddForms1Component', () => {
  let component: ProductAddForms1Component;
  let fixture: ComponentFixture<ProductAddForms1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAddForms1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddForms1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
