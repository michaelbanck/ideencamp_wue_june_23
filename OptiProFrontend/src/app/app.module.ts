import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {HttpClientModule} from "@angular/common/http";
import {DecimalPipe} from "@angular/common";
import {HomeComponent} from './view/home/home.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ScheduleComponent} from './view/schedule/schedule.component';
import {ChatBubbleComponent} from './component/chat-bubble/chat-bubble.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ProgressOverlayComponent} from "./component/progress-overlay/progress-overlay.component";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from "@angular/material/snack-bar";
import {ToolsComponent} from './view/tools/tools.component';
import {RecorderComponent} from "./component/recorder/recorder.component";
import {MatButtonModule} from "@angular/material/button";
import {TranslateComponent} from './view/translate/translate.component';
import {DocsComponent} from './view/docs/docs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScheduleComponent,
    ProgressOverlayComponent,
    ChatBubbleComponent,
    ToolsComponent,
    RecorderComponent,
    TranslateComponent,
    DocsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    NgxChartsModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    DecimalPipe,
    {provide: MatDialogRef, useValue: {}},
    {provide: MAT_DIALOG_DATA, useValue: {}},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}},
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
