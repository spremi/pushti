//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

export const SpOidPolicyIdentifier: Record<string, string> = {
  '0.4.0.2042.1.1': 'NCP (Normalized Certificate Policy)',
  '0.4.0.2042.1.2': 'NCP+ (Normalized Certificate Policy requiring a secure user device)',
  '0.4.0.2042.1.3': 'LCP (Lightweight Certificate Policy)',
  '0.4.0.2042.1.4': 'EVCP (Extended Validation Certificate Policy)',
  '0.4.0.2042.1.5': 'EVCP+ (Extended Validation Certificate Policy requiring a secure user device)',

  '2.5.29.32.0': 'Any Policy',

  '2.16.840.1.114412.3.2': 'Object signing certificate',
};
