/*
*    ------ BEGIN LICENSE ATTRIBUTION ------
*    
*    Portions of this file have been appropriated or derived from the following project(s) and therefore require attribution to the original licenses and authors.
*    
*    Repositories:
*     - repo: https://github.com/sillsdev/web-xforge release version: SF-QAv409  asset relative path: src/SIL.XForge.Scripture/ClientApp/src/xforge-common/ui-common.module.ts
*    
*    Copyrights:
*    
*    
*    Licenses:
*     - MIT License
*       SPDXId: MIT
*    
*    Auto-attribution by Threatrix, Inc.
*    
*    ------ END LICENSE ATTRIBUTION ------
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';

import { ExpansionPanelModule, LoadingSpinnerModule } from '@curve/curve-ui';
import { FormTemplateListComponent } from '@aberlour/forms/components/form-template-list/form-template-list.component';

@NgModule({
  declarations: [
    FormTemplateListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forChild(),
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    ExpansionPanelModule,
    LoadingSpinnerModule,
  ],
  exports: [
    FormTemplateListComponent,
  ]
})

export class FormTemplateListModule { }
