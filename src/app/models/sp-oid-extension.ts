//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

export const SpOidExtension: Record<string, string> = {
  '1.2.840.113583.1.1.9.1': 'Adobe Timestamp',
  '1.2.840.113583.1.1.9.2': 'Adobe Archive Revision',

  '2.5.29.1': 'Authority Key Identifier (Deprecated)',        // Use .35
  '2.5.29.2': 'Primary Key Attributes (Deprecated)',          // Use .15 or .37
  '2.5.29.3': 'Certificate Policies (Deprecated)',            // Use .32
  '2.5.29.4': 'Key Usage Restriction (Deprecated)',           // Use .15 or .37
  '2.5.29.5': 'Policy Mapping (Deprecated)',                  // Use .33
  '2.5.29.6': 'Subtrees Constraint (Deprecated)',             // Use .30
  '2.5.29.7': 'Subject Alternative Name (Deprecated)',        // Use .17
  '2.5.29.8': 'Issuer Alternative Name (Deprecated)',         // Use .18
  '2.5.29.9': 'Subject Directory Attributes',
  '2.5.29.10': 'Basic Constraints (Deprecated)',              // Use .19
  '2.5.29.11': 'Name Constraints (Deprecated)',               // Use .30
  '2.5.29.12': 'Policy Constraints (Deprecated)',             // Use .36
  '2.5.29.13': 'Basic Constraints (Deprecated)',              // Use .19
  '2.5.29.14': 'Subject Key Identifier',
  '2.5.29.15': 'Key Usage',
  '2.5.29.16': 'Private Key Usage Period',
  '2.5.29.17': 'Subject Alternative Name',
  '2.5.29.18': 'Issuer Alternative Name',
  '2.5.29.19': 'Basic Constraints',
  '2.5.29.20': 'CRL Number',
  '2.5.29.21': 'CRL Reason',
  '2.5.29.22': 'Expiration Date',
  '2.5.29.23': 'Instruction Code',
  '2.5.29.24': 'Invalidity Date',
  '2.5.29.25': 'CRL Distribution Points (Deprecated)',        // Use .31
  '2.5.29.26': 'Issuing Distribution Point (Deprecated)',     // Use .28
  '2.5.29.27': 'deltaCRLIndicator',
  '2.5.29.28': 'Issuing Distribution Point',
  '2.5.29.29': 'Certificate Issuer',
  '2.5.29.30': 'Name Constraints',
  '2.5.29.31': 'CRL Distribution Points',
  '2.5.29.32': 'Certificate Policies',
  '2.5.29.33': 'Policy Mappings',
  '2.5.29.35': 'Authority Key Identifier',
  '2.5.29.36': 'Policy Constraints',
  '2.5.29.37': 'Extended key usage',
  '2.5.29.46': 'Freshest CRL',
  '2.5.29.54': 'X.509 version 3 certificate extension Inhibit Any-policy',

  '1.3.6.1.4.1.52266.1': 'Legal Entity Identifier',
  '1.3.6.1.4.1.52266.2': 'Individual Role in the organization',

  '1.3.6.1.5.5.7.1.1': 'Certificate Authority Information Access',
  '1.3.6.1.5.5.7.1.2': 'Biometric Information',
  '1.3.6.1.5.5.7.1.3': 'Qualified Certificate Statements',
};
