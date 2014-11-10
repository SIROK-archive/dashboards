Dashboard [![Build Status](https://travis-ci.org/SIROK/dashboard.svg?branch=master)](https://travis-ci.org/SIROK/dashboard) [![Dependency Status](https://gemnasium.com/SIROK/bootstrap-dashboard.svg)](https://gemnasium.com/SIROK/bootstrap-dashboard)
===================

The most popular HTML, CSS and JavaScript framework for developing responsive dashboard project on the web. Heavily inspired by [twbs/bootstrap](https://github.com/twbs/bootstrap). It will be used with  [csswizardry/inuit.css](https://github.com/csswizardry/inuit.css/). This project use [CSS Style Guide](http://cssguidelin.es/)

Read this in other languages: [日本語](README.ja.md)

## Table of Contents

- [Usage](#usage)
- [Todo](#todo)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [Author](#author)
- [Copyright and license](#copyright-and-license)

## Usage

### Easy useage:

    <link rel="stylesheet" href="/path/to/inuit.css">
    <link rel="stylesheet" href="/path/to/dist/css/dashboard.min.css">

### On existing SCSS project:

Add each library with submodule:

    $ git submodule add https://github.com/csswizardry/inuit.css.git /path/to/scss/
    $ git submodule add https://github.com/SIROK/dashboard.git /path/to/scss/

@import each libraries:

    @import "/path/to/inuit";
    @import "/path/to/dashboard";

    // Your original style code below


## Todo

- [ ] Delete `.gitkeep`
- [ ] Create page with **gh-page**
- [ ] Write test on TravisCI
- [ ] Write `CONTRIBUTING.md`
- [ ] Write `CHANGELOG.md`
- [ ] Write Documentation section
- [ ] Write Contributing section
- [ ] Write Versioning section

## Documentation

Todo

## Contributing

Before commiting messages, please read [Contributing](CONTRIBUTING.md).

1. Fork it ( https://github.com/[my-github-username]/cal_exporter/fork )
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create a new Pull Request

## Versioning

Todo

## Author

| [![twitter/sota0805](http://2.gravatar.com/avatar/1819ffcc36875ddbf8df81532d832a2b?s=70)](http://twitter.com/sota0805 "Follow @sota0805 on Twitter") |
|---|
| [Sota Yamashita](http://sota0805.github.io/) |

## Copyright and license

Dashboard and all content copyright 2014 SIROK, Inc.

Codes are released under [the MIT License](License).

Documents are released under <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Bootstrap Dashboard</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/SIROK/bootstrap-dashboard" property="cc:attributionName" rel="cc:attributionURL">SIROK, Inc</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
