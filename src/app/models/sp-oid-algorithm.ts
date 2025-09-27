//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

export const SpOidAlgorithm: Record<string, string> = {
  '1.2.840.10040.4.3': 'DSA with SHA1',

  '1.2.840.10045.2.1': 'EC Public Key',

  '1.2.840.10045.4.1': 'ECDSA with SHA1',

  '1.2.840.10045.4.3.1': 'ECDSA with SHA224',
  '1.2.840.10045.4.3.2': 'ECDSA with SHA256',
  '1.2.840.10045.4.3.3': 'ECDSA with SHA384',
  '1.2.840.10045.4.3.4': 'ECDSA with SHA512',

  '1.2.840.113549.1.1.1': 'RSA Encryption and Signing',
  '1.2.840.113549.1.1.2': 'MD2 with RSA Encryption',
  '1.2.840.113549.1.1.3': 'MD2 with RSA Encryption',
  '1.2.840.113549.1.1.4': 'MD5 with RSA Encryption',
  '1.2.840.113549.1.1.5': 'SHA1 with RSA Encryption',

  '1.2.840.113549.1.1.10': 'RSASSA-PSS',
  '1.2.840.113549.1.1.11': 'SHA256 with RSA Encryption (RSASSA-PKCS1-v1_5)',
  '1.2.840.113549.1.1.12': 'SHA384 with RSA Encryption',
  '1.2.840.113549.1.1.13': 'SHA512 with RSA Encryption',
  '1.2.840.113549.1.1.14': 'SHA224 with RSA Encryption',

  '1.3.14.3.2.24': 'MD2 with RSA Signature',
  '1.3.14.3.2.25': 'MD5 with RSA Signature',
  '1.3.14.3.2.26': 'SHA1',

  '1.3.36.3.3.2.8.1.1.1': 'brainpoolP160r1',
  '1.3.36.3.3.2.8.1.1.2': 'brainpoolP160t1',
  '1.3.36.3.3.2.8.1.1.3': 'brainpoolP192r1',
  '1.3.36.3.3.2.8.1.1.4': 'brainpoolP192t1',
  '1.3.36.3.3.2.8.1.1.5': 'brainpoolP224r1',
  '1.3.36.3.3.2.8.1.1.6': 'brainpoolP224t1',
  '1.3.36.3.3.2.8.1.1.7': 'brainpoolP256r1',
  '1.3.36.3.3.2.8.1.1.8': 'brainpoolP256t1',
  '1.3.36.3.3.2.8.1.1.9': 'brainpoolP320r1',
  '1.3.36.3.3.2.8.1.1.10': 'brainpoolP320t1',
  '1.3.36.3.3.2.8.1.1.11': 'brainpoolP160t1',
  '1.3.36.3.3.2.8.1.1.12': 'brainpoolP160t1',
  '1.3.36.3.3.2.8.1.1.13': 'brainpoolP160t1',
  '1.3.36.3.3.2.8.1.1.14': 'brainpoolP160t1',

  '1.3.101.112': 'EdDSA25519',

  '2.16.840.1.101.3.4.2.1': 'SHA256',
  '2.16.840.1.101.3.4.2.2': 'SHA384',
  '2.16.840.1.101.3.4.2.3': 'SHA512',
  '2.16.840.1.101.3.4.2.4': 'SA224',
  '2.16.840.1.101.3.4.2.5': 'SHA512-224',
  '2.16.840.1.101.3.4.2.6': 'SHA512-256',
  '2.16.840.1.101.3.4.2.7': 'SHA3-224',
  '2.16.840.1.101.3.4.2.8': 'SHA3-256',
  '2.16.840.1.101.3.4.2.9': 'SHA3-384',
  '2.16.840.1.101.3.4.2.10': 'SHA3-512',
  '2.16.840.1.101.3.4.2.11': 'SHAKE128',
  '2.16.840.1.101.3.4.2.12': 'SHAKE256',
};

export const SpOidBaseAlgorithmECDSA = '1.2.840.10045';
export const SpOidBaseAlgorithmRSA = '1.2.840.113549';
