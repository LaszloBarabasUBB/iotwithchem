import {SidenavComponent} from './sidenav/sidenav.component';
import {LoginComponent} from './login/login.component';
import {ReportsComponent} from './reports/reports.component';
import {SettingsDialogComponent} from './dialogs/settings-dialog/settings-dialog.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {JustgageModule} from 'angular2-justgage';
import {MaterialModule, MdIconRegistry} from '@angular/material';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {CalendarModule, ProgressBarModule} from 'primeng/primeng';
import {TempService} from './services/temp/temp.service';
import {AuthService} from './services/auth/auth.service';
import {AuthGuardService} from './services/auth-guard/auth-guard.service';
import {DialogService} from './services/dialog/dialog.service';
import {ChartModule} from 'primeng/components/chart/chart';
import {PhService} from './services/ph/ph.service';
import {ExperimentComponent} from './experiment/experiment.component';
import {JobService} from './services/job/job.service';
import {JobDialogComponent} from './dialogs/job-dialog/job-dialog.component';
import {CountDown} from 'angular2-simple-countdown/lib/countdown';
import {FeedbackComponent} from './feedback/feedback.component';
import {FeedbackService} from './services/feedback/feedback.service';
import {ConfirmDialogComponent} from './dialogs/confirm-dialog/confirm-dialog.component';
import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalibrationComponent} from './calibration/calibration.component';
import {CalibrationService} from './services/calibration/calibration.service';


@NgModule({
  declarations: [
    ExperimentComponent,
    SidenavComponent,
    LoginComponent,
    ReportsComponent,
    FeedbackComponent,
    SettingsDialogComponent,
    JobDialogComponent,
    CountDown,
    FeedbackComponent,
    ConfirmDialogComponent,
    CalibrationComponent
  ],
  entryComponents: [
    SettingsDialogComponent,
    JobDialogComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JustgageModule,
    MaterialModule,
    AppRoutingModule,
    CalendarModule,
    ChartModule,
    ProgressBarModule
  ],
  providers: [
    TempService,
    PhService,
    MdIconRegistry,
    AuthService,
    AuthGuardService,
    DialogService,
    JobService,
    FeedbackService,
    CalibrationService,
    {provide: LOCALE_ID, useValue: 'ro-RO'}
  ],
  bootstrap: [SidenavComponent]
})
export class AppModule {
}