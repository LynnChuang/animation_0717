/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { EmailPageComponent } from './email-page.component';

describe('Component: EmailPage', () => {
  it('should create an instance', () => {
    let component = new EmailPageComponent();
    expect(component).toBeTruthy();
  });
});
