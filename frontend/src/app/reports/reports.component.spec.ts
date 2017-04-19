import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReportsComponent} from './reports.component';
import {MaterialModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {CalendarModule, ChartModule} from 'primeng/primeng';
import {TempService} from '../services/temp/temp.service';
import {PhService} from '../services/ph/ph.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('ReportsComponent', () => {
  let component: ReportsComponent;
  let fixture: ComponentFixture<ReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReportsComponent],
      imports: [MaterialModule.forRoot(), FormsModule, ChartModule, CalendarModule, BrowserAnimationsModule],
      providers: [TempService, PhService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
