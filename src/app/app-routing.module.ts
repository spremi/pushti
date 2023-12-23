//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from '@routes/about/about.component';
import { CertComponent } from '@routes/cert/cert.component';
import { E404Component } from '@routes/e404/e404.component';
import { HomeComponent } from '@routes/home/home.component';
import { LicenseComponent } from '@routes/license/license.component';
import { PdfComponent } from '@routes/pdf/pdf.component';
import { SettingsComponent } from '@routes/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cert',
    component: CertComponent,
    children: [
      {
        path: 'pdf/:id',
        component: CertComponent,
      }
    ]
  },
  {
    path: 'pdf',
    component: PdfComponent,
  },
  {
    path: 'license',
    component: LicenseComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: '**',
    component: E404Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
