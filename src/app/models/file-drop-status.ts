//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//


export enum FileDropCode {
  Success = 1,
  ErrGeneral = -100,
  ErrMultipleFiles = -101,
  ErrNotSupported = -102,
  ErrReading = -103,
  ErrParsing = -104,
}

export enum FileDropType {
  FileUnknown = 0,
  FileCertificate = 1,
  FilePDF = 2,
}

export interface FileDropStatus {
  code: FileDropCode;
  type: FileDropType;
  desc: string;
}

/**
 * Initializer for 'FileDropStatus'.
 */
export const initFileDropStatus = (
  argCode: FileDropCode,
  argType: FileDropType,
  argDesc: string): FileDropStatus => ({
    code: argCode ? argCode : FileDropCode.ErrGeneral,
    type: argType ? argType : FileDropType.FileUnknown,
    desc: argDesc ? argDesc : '',
  });
