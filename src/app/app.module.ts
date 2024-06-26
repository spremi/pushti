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
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OverlayModule } from '@angular/cdk/overlay';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FileDropDirective } from '@dictums/file-drop.directive';

import { ToHexPipe } from '@pipes/to-hex.pipe';
import { ToStrPipe } from '@pipes/to-str.pipe';

import { HomeComponent } from '@routes/home/home.component';
import { CertComponent } from '@routes/cert/cert.component';
import { PdfComponent } from '@routes/pdf/pdf.component';
import { AboutComponent } from '@routes/about/about.component';
import { LicenseComponent } from '@routes/license/license.component';
import { SettingsComponent } from '@routes/settings/settings.component';
import { E404Component } from '@routes/e404/e404.component';

import { HeaderComponent } from '@parts/header/header.component';
import { FooterComponent } from '@parts/footer/footer.component';
import { BodyComponent } from '@parts/body/body.component';
import { IconLinkComponent } from '@parts/icon-link/icon-link.component';
import { DropZoneComponent } from '@parts/drop-zone/drop-zone.component';
import { FillerComponent } from '@parts/filler/filler.component';

import { BoxComponent } from '@parts/box/box.component';
import { InputPemComponent } from '@parts/input-pem/input-pem.component';
import { ShowVersionComponent } from '@parts/show-version/show-version.component';
import { ShowSerialNumComponent } from '@parts/show-serial-num/show-serial-num.component';
import { ShowEntityComponent } from '@parts/show-entity/show-entity.component';
import { ShowValidityComponent } from '@parts/show-validity/show-validity.component';
import { ShowAlgorithmIdComponent } from '@parts/show-algorithm-id/show-algorithm-id.component';
import { ShowSubjectPublicKeyComponent } from '@parts/show-subject-public-key/show-subject-public-key.component';
import { ShowFingerprintsComponent } from '@parts/show-fingerprints/show-fingerprints.component';
import { ShowUniqueIdComponent } from '@parts/show-unique-id/show-unique-id.component';
import { ShowSignatureComponent } from '@parts/show-signature/show-signature.component';
import { ShowExtensionsComponent } from '@parts/show-extensions/show-extensions.component';
import { ShowExtnDefaultComponent } from '@parts/show-extn-default/show-extn-default.component';
import { ShowExtnBasicConstraintsComponent } from '@parts/show-extn-basic-constraints/show-extn-basic-constraints.component';
import { ShowExtnKeyUsageComponent } from '@parts/show-extn-key-usage/show-extn-key-usage.component';
import { ShowExtnExtendedKeyUsageComponent } from '@parts/show-extn-extended-key-usage/show-extn-extended-key-usage.component';
import { ShowExtnSubjectAltNameComponent } from '@parts/show-extn-subject-alt-name/show-extn-subject-alt-name.component';
import { ShowExtnIssuerAltNameComponent } from '@parts/show-extn-issuer-alt-name/show-extn-issuer-alt-name.component';
import { ShowExtnAuthorityKeyIdComponent } from '@parts/show-extn-authority-key-id/show-extn-authority-key-id.component';
import { ShowExtnCertPolicyComponent } from '@parts/show-extn-cert-policy/show-extn-cert-policy.component';
import { ShowExtnAuthorityInfoAccessComponent } from '@parts/show-extn-authority-info-access/show-extn-authority-info-access.component';
import { ShowExtnCrlDistroPointComponent } from '@parts/show-extn-crl-distro-point/show-extn-crl-distro-point.component';
import { ShowExtnNsCommentComponent } from '@parts/show-extn-ns-comment/show-extn-ns-comment.component';
import { ShowExtnSubjectKeyIdComponent } from '@parts/show-extn-subject-key-id/show-extn-subject-key-id.component';
import { ShowPdfSignComponent } from '@parts/show-pdf-sign/show-pdf-sign.component';
import { ShowPdfSignContainerComponent } from '@parts/show-pdf-sign-container/show-pdf-sign-container.component';

import { IconService } from '@services/icon.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowExtnAdobeTsComponent } from './parts/show-extn-adobe-ts/show-extn-adobe-ts.component';
import { ShowExtnAdobeRevComponent } from './parts/show-extn-adobe-rev/show-extn-adobe-rev.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CertComponent,
    PdfComponent,
    AboutComponent,
    LicenseComponent,
    SettingsComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    IconLinkComponent,
    ToHexPipe,
    ToStrPipe,
    FileDropDirective,
    ShowVersionComponent,
    ShowSerialNumComponent,
    ShowEntityComponent,
    ShowValidityComponent,
    ShowAlgorithmIdComponent,
    ShowSubjectPublicKeyComponent,
    ShowFingerprintsComponent,
    ShowUniqueIdComponent,
    ShowSignatureComponent,
    ShowExtensionsComponent,
    ShowExtnDefaultComponent,
    ShowExtnBasicConstraintsComponent,
    ShowExtnKeyUsageComponent,
    ShowExtnExtendedKeyUsageComponent,
    ShowExtnSubjectAltNameComponent,
    ShowExtnIssuerAltNameComponent,
    ShowExtnAuthorityKeyIdComponent,
    ShowExtnCertPolicyComponent,
    ShowExtnAuthorityInfoAccessComponent,
    ShowExtnCrlDistroPointComponent,
    ShowExtnNsCommentComponent,
    InputPemComponent,
    DropZoneComponent,
    BoxComponent,
    ShowExtnSubjectKeyIdComponent,
    FillerComponent,
    ShowPdfSignComponent,
    ShowPdfSignContainerComponent,
    E404Component,
    ShowExtnAdobeTsComponent,
    ShowExtnAdobeRevComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    OverlayModule,
    ClipboardModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatToolbarModule,
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 2500
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private iconSvc: IconService) {
    this.iconSvc.register();
  }
}
