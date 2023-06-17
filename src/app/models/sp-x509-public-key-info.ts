//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { SpOidBaseAlgorithmECDSA, SpOidBaseAlgorithmRSA } from './sp-oid-algorithm';
import { SpX509AlgorithmId } from './sp-x509-algorithm-id';

export enum SpPublicKeyType {
  KEY_NONE = 0,
  KEY_EC = 1,
  KEY_RSA = 2,
}

export interface SpRsaPublicKey {
  size: number;
  n: Uint8Array;
  e: number;
}

export interface SpEcPublicKey {
  isCompressed: boolean;
  curve: string;
  x: Uint8Array;
  y: Uint8Array;
}

export class SpX509PublicKeyInfo {

  private algoId: SpX509AlgorithmId;

  private keyType: SpPublicKeyType;
  private ecKey: SpEcPublicKey;
  private rsaKey: SpRsaPublicKey;

  public constructor() {
    this.algoId = new SpX509AlgorithmId();

    this.ecKey = {
      isCompressed: false,
      curve: '',
      x: new Uint8Array(),
      y: new Uint8Array(),
    };

    this.rsaKey = {
      n: new Uint8Array(),
      e: 0,
      size: 0,
    };

    this.keyType = SpPublicKeyType.KEY_NONE;
  }

  public getAlgorithmId(): SpX509AlgorithmId {
    return this.algoId;
  }

  public getRsaKey(): SpRsaPublicKey {
    return this.rsaKey;
  }

  public setRsaKey(key: SpRsaPublicKey): void {
    this.rsaKey = key;
  }

  public getEcKey(): SpEcPublicKey {
    return this.ecKey;
  }

  public setEcKey(key: SpEcPublicKey): void {
    this.ecKey = key;
  }

  public setAlgorithmId(arg: SpX509AlgorithmId): void {
    this.algoId = arg;

    if (arg.getOid().indexOf(SpOidBaseAlgorithmRSA) !== -1) {
      this.keyType = SpPublicKeyType.KEY_RSA;
    }

    if (arg.getOid().indexOf(SpOidBaseAlgorithmECDSA) !== -1) {
      this.keyType = SpPublicKeyType.KEY_EC;
    }
  }

  public isRSA(): boolean {
    return this.keyType === SpPublicKeyType.KEY_RSA;
  }

  public isEC(): boolean {
    return this.keyType === SpPublicKeyType.KEY_EC;
  }

  public setModulus(key: Uint8Array): void {
    if (this.keyType == SpPublicKeyType.KEY_RSA) {
      this.rsaKey.n = key;
    }
  }

  public setModulusBits(value: number): void {
    if (this.keyType == SpPublicKeyType.KEY_RSA) {
      this.rsaKey.size = value;
    }
  }

  public setExponent(exponent: number): void {
    if (this.keyType == SpPublicKeyType.KEY_RSA) {
      this.rsaKey.e = exponent;
    }
  }
}
