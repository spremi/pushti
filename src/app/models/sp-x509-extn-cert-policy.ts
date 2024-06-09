//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { SpOidPolicyIdentifier } from '@models/sp-oid-policy-identifier';
import { SpOidPolicyQualifier } from '@models/sp-oid-policy-qualifier';
import { CertificatePolicies } from 'pkijs';

export interface SpCertificatePolicyQualifier {
  oid: string;
  name: string;
  value: string;
}

export interface SpCertificatePolicy {
  oid: string;
  name: string;
  qualifiers: SpCertificatePolicyQualifier[];
}

export class SpX509ExtnCertPolicy {
  private policies: SpCertificatePolicy[] = [];

  public constructor() {
  }

  public setValue(value: Uint8Array): void {
    const certPolicies = CertificatePolicies.fromBER(value);

    certPolicies.certificatePolicies.forEach(policy => {
      const policyObj: SpCertificatePolicy = {
        oid: policy.policyIdentifier,
        name: SpOidPolicyIdentifier[policy.policyIdentifier] ?? 'Unknown policy',
        qualifiers: []
      };

      // console.log(policy.policyIdentifier);
      // console.log(policy.policyQualifiers);

      if (policy.policyQualifiers) {
        policy.policyQualifiers.forEach(q => {
          const qualifierObj = {
            oid: q.policyQualifierId,
            name: SpOidPolicyQualifier[q.policyQualifierId] ?? 'Unknown qualifier',
            value: q.qualifier.toJSON()?.valueBlock?.value,
          };

          policyObj.qualifiers.push(qualifierObj);
        });
      }

      this.policies.push(policyObj);
    });
  }

  public getPolicies(): SpCertificatePolicy[] {
    return this.policies;
  }
}
