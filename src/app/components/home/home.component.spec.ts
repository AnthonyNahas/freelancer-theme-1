import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterTestingModule } from '@angular/router/testing';
import { Angulartics2Module } from 'angulartics2';

import { CoreModule } from '../../core';
import { SharedModule } from '../../shared';
import { MaterialModule } from '../../material.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';
import { ConfigToken, DEFAULT_CONFIG } from '../../../config';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        MaterialModule,
        RouterTestingModule,
        Angulartics2Module.forRoot(),
        CoreModule,
        SharedModule,
        HttpClientTestingModule
      ],
      declarations: [HomeComponent],
      providers: [
        QuoteService,
        {
          provide: ConfigToken,
          useValue: DEFAULT_CONFIG
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
