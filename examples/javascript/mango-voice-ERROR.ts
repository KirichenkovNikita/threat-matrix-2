import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatSortModule } from '@angular/material/sort';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { CallingDialogComponent } from '@pe/mango-voice/components/calling-dialog/calling-dialog.component';
import { MomentModule } from 'ngx-moment';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { CallPopAnchorComponent } from '@pe/mango-voice/components/call-pop-anchor/call-pop-anchor.component';
import { CallPopDialogComponent } from '@pe/mango-voice/components/call-pop-dialog/call-pop-dialog.component';
import { SharedModule } from '@pe/shared/shared.module';
import { MangoVoiceCallButtonComponent } from './components/voice-call-button/mango-voice-call-button.component';
import { MangoVoiceCallSettingsDialogComponent } from './components/call-configuration-popup/mango-voice-call-configuration.component';
import { mangoVoiceEffects } from '@pe/mango-voice/store/effects';
import { MangoVoiceService } from './services/mango-voice.service';
import * as mangoVoiceState from '@pe/mango-voice/store';
import { MangoVoiceStorage } from './services/mango-voice-storage.service';
import {
  DialogContentModule, FormatGenderModule, FormatPhoneModule,
  LoadingSpinnerModule, FormatMillisecondModule, FormatDateModule
} from '@curve/curve-ui';

@NgModule({
    imports: [
        CommonModule,
        DialogContentModule,
        DragDropModule,
        EffectsModule.forFeature(mangoVoiceEffects),
        FormatDateModule,
        FormatGenderModule,
        FormatMillisecondModule,
        FormatPhoneModule,
        FormsModule,
        LoadingSpinnerModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatDividerModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSortModule,
        MatTableModule,
        MomentModule,
        ReactiveFormsModule,
        SharedModule,
        StoreModule.forFeature(mangoVoiceState.featureKey, mangoVoiceState.reducers),
        TranslateModule,
    ],
  declarations: [
    CallingDialogComponent,
    CallPopDialogComponent,
    CallPopAnchorComponent,
    MangoVoiceCallButtonComponent,
    MangoVoiceCallSettingsDialogComponent,
  ],
  providers: [
    MangoVoiceService,
    MangoVoiceStorage,
    { provide: 'Storage', useValue: window.localStorage },
  ],
  exports: [
    CallPopAnchorComponent,
    MangoVoiceCallButtonComponent,
    MangoVoiceCallSettingsDialogComponent,
  ],
  entryComponents: [
    CallingDialogComponent,
    CallPopDialogComponent,
    CallPopAnchorComponent,
    MangoVoiceCallSettingsDialogComponent,
  ],
})
export class MangoVoiceModule {
}
