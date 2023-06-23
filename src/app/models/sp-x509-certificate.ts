//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { SpX509AlgorithmId } from './sp-x509-algorithm-id';
import { SpX509Entity } from './sp-x509-entity';
import { SpX509Extension } from './sp-x509-extension';
import { SpX509Fingerprints } from './sp-x509-fingerprints';
import { SpX509PublicKeyInfo } from './sp-x509-public-key-info';
import { SpX509SerialNumber } from './sp-x509-serial-number';
import { SpX509Signature } from './sp-x509-signature';
import { SpX509UniqueId } from './sp-x509-unique-id';
import { SpX509Validity } from './sp-x509-validity';
import { SpX509Version } from './sp-x509-version';

export class SpX509Certificate {
  //
  // TBS Certificate
  //
  private tbsVersion: SpX509Version;
  private tbsSerialNumber: SpX509SerialNumber;
  private tbsSignature: SpX509AlgorithmId;
  private tbsIssuer: SpX509Entity;
  private tbsValidity: SpX509Validity;
  private tbsSubject: SpX509Entity;
  private tbsSubjectPublicKeyInfo: SpX509PublicKeyInfo;
  private tbsIssuerUid: SpX509UniqueId;
  private tbsSubjectUid: SpX509UniqueId;
  private tbsExtensions: SpX509Extension[];

  //
  // Signature
  //
  private certSignature: SpX509Signature;

  //
  // Fingerprints
  //
  private certFingerprints: SpX509Fingerprints;

  public constructor() {
    this.tbsVersion = new SpX509Version();
    this.tbsSerialNumber = new SpX509SerialNumber();
    this.tbsSignature = new SpX509AlgorithmId();
    this.tbsIssuer = new SpX509Entity();
    this.tbsValidity = new SpX509Validity();
    this.tbsSubject = new SpX509Entity();

    this.tbsSubjectPublicKeyInfo = new SpX509PublicKeyInfo();
    this.tbsIssuerUid = new SpX509UniqueId();
    this.tbsSubjectUid = new SpX509UniqueId();
    this.tbsExtensions = [];

    this.certSignature = new SpX509Signature();

    this.certFingerprints = new SpX509Fingerprints();
  }

  public getVersion(): SpX509Version {
    return this.tbsVersion;
  }

  public setVersion(version: SpX509Version): void {
    this.tbsVersion = version;
  }

  public getSerialNumber(): SpX509SerialNumber {
    return this.tbsSerialNumber;
  }

  public setSerialNumber(serialNumber: SpX509SerialNumber): void {
    this.tbsSerialNumber = serialNumber;
  }

  public getSignature(): SpX509AlgorithmId {
    return this.tbsSignature;
  }

  public setSignature(signature: SpX509AlgorithmId): void {
    this.tbsSignature = signature;
  }

  public getIssuer(): SpX509Entity {
    return this.tbsIssuer;
  }

  public setIssuer(issuer: SpX509Entity): void {
    this.tbsIssuer = issuer;
  }

  public getValidity(): SpX509Validity {
    return this.tbsValidity;
  }

  public setValidity(validity: SpX509Validity): void {
    this.tbsValidity = validity;
  }

  public getSubject(): SpX509Entity {
    return this.tbsSubject;
  }

  public setSubject(subject: SpX509Entity): void {
    this.tbsSubject = subject;
  }

  public getSubjectPublicKeyInfo(): SpX509PublicKeyInfo {
    return this.tbsSubjectPublicKeyInfo;
  }

  public setSubjectPublicKeyInfo(publicKeyInfo: SpX509PublicKeyInfo): void {
    this.tbsSubjectPublicKeyInfo = publicKeyInfo;
  }

  public getIssuerUID(): SpX509UniqueId {
    return this.tbsIssuerUid;
  }

  public setIssuerUID(uniqueId: SpX509UniqueId): void {
    this.tbsIssuerUid = uniqueId;
  }

  public getSubjectUID(): SpX509UniqueId {
    return this.tbsSubjectUid;
  }

  public setSubjectUID(uniqueId: SpX509UniqueId): void {
    this.tbsSubjectUid = uniqueId;
  }

  public hasExtensions(): boolean {
    return this.tbsExtensions && (this.tbsExtensions.length > 0);
  }

  public getExtensions(): SpX509Extension[] {
    return this.tbsExtensions;
  }

  public addExtension(extension: SpX509Extension): void {
    this.tbsExtensions.push(extension);
  }

  public getCertSignature(): SpX509Signature {
    return this.certSignature;
  }

  public setCertSignature(signature: SpX509Signature) {
    this.certSignature = signature;
  }

  public getCertFingerprints(): SpX509Fingerprints {
    return this.certFingerprints;
  }

  public setCertFingerprints(fingerprints: SpX509Fingerprints) {
    this.certFingerprints = fingerprints;
  }
}
