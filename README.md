Dashboards
==========

The most popular HTML, CSS and JavaScript framework for developing responsive dashboard project on the web. Heavily inspired by [twbs/bootstrap](https://github.com/twbs/bootstrap). It will be used with  [csswizardry/inuit.css](https://github.com/csswizardry/inuit.css/) now. This project use [CSS Style Guide](http://cssguidelin.es/)

## Table of Contents

- [Usage](#usage)
- [Todo](#todo)
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

- [x] Delete `.gitkeep`
- [ ] Create page with **gh-page**
- [ ] Write `CONTRIBUTING.md`
- [ ] Write `CHANGELOG.md`
- [ ] Write Documentation section
- [ ] Write Contributing section
- [ ] Write Versioning section

## Author

| [![twitter/sota0805](http://2.gravatar.com/avatar/1819ffcc36875ddbf8df81532d832a2b?s=70)](http://twitter.com/sota0805 "Follow @sota0805 on Twitter") |
|---|
| [Sota Yamashita](http://sota0805.github.io/) |

## Copyright and license

Dashboard and all content copyright 2014 - 2015 [SIROK, Inc](http://sirok.co.jp/). Code released under [the MIT License](LICENSE). Docs are released under [Creative Commons](http://creativecommons.org/licenses/by-nc/4.0/).
