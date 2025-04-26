# Pushti

Pushti (पुष्टि) in Hindi means verification or confirmation.

## Introduction

**OpenSSL** remains my preferred tool for everything related to
certificates. But for the command-line-challenged folks, typing
commands continues to be in _huge effort_ and _unfriendly_ zone.

**Pushti** is based on [Angular Material](https://material.angular.io/)
and [PKI.js](https://github.com/PeculiarVentures/PKI.js) to provide
hierarchical view of the digital certificates and signatures within
comforts of your favorite browser.

**All operations are completed in your browser. No server is involved.**

## Features

* Decode X.509 certificates in PEM and DER files.
* Decode signatures from PDF files.
  * Uses PDF reader embedded in browser.
  * Quickly view certificates included in the digital signature as well.
* Copy decoded contents as plain text.
  * Copy includes entire tree below selected node.
* Modern responsive UI.
  * Supports drag-n-drop.
  * Supports pasting certificates from clipboard.
* Build application as containers based on these platformsL
  * alpine
  * debian

### Planned

* Parse LTV blob in PDF signature.
* Validate certificates via OCSP.

## Build

### Local build

Build as any typical Angular application. For build in production mode:
```
ng build --configuration=production
```

### Docker containers

To build image based on **alpine**:
```
docker compose build pushti-alpine
```
To build image based on **debian**:
```
docker compose build pushti-debian
```

## Limitations

* PDF files that cannot be loaded by the browser cannot be parsed.
* Password protected PDF files are not supported.
* Not all extensions are currently supported.
* Slow progress.
  * This is one of many personal projects. Updates would be slow.

## History

This project started as a quick tool to view certificate details
without having to save the clipboard contents to a file and run
`openssl` on command-line.

As I was encountering more diverse certificate, need to support
more extensions arose.

Support for digital signatures in PDF was based on immediate need.
The _hurry_ should be evident in the related sources.

Starting with my own BER parser, there were many _personal_ versions
of this tool over ~3 years (incl. Jupyter Notebook). Finally, settled
with browser as it has least resistance for adoption.

## License
Copyright (c) 2023-2024, Sanjeev Premi.

Source available under the terms of BSD-3-Clause license.
