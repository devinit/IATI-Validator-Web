import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './../shared/shared.module';
import { ValidateComponent } from './validate/validate.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { ValidateResultComponent } from './validate-result/validate-result.component';
import { FileUploadService } from './shared/file-upload.service';
import { MessagesService } from './shared/messages.service';
import { ValidatedIatiService } from './shared/validated-iati.service';
import { UploadUrlsComponent } from './upload-urls/upload-urls.component';

const routes: Routes = [
  { path: '', component: ValidateComponent },
  { path: ':id', component: ValidateResultComponent },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    ValidateComponent,
    UploadFileComponent,
    ValidateResultComponent,
    UploadUrlsComponent,
  ],
  providers: [
    FileUploadService,
    MessagesService,
    ValidatedIatiService
  ]
})
export class ValidateIatiModule { }
