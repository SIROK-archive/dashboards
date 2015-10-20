> ## :warning: Deprecation Notice

> It will be depricated because we are developing new thing below: 
> * [bdash](https://github.com/SIROK/bdash)

# Dashboards

[![Bower version](https://badge.fury.io/bo/dashboards.svg)](http://badge.fury.io/bo/dashboards)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/SIROK/dashboards/master/LICENSE)

The most popular HTML and CSS framework for developing responsive dashboard project on the web. Heavily inspired by [twbs/bootstrap](https://github.com/twbs/bootstrap). It will be used with  [csswizardry/inuit.css](https://github.com/csswizardry/inuit.css/) now. This project use [CSS Style Guide](http://cssguidelin.es/)

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

## Copyright and license
Dashboard and all content copyright 2014 - 2015 [SIROK, Inc](http://sirok.co.jp/). Code released under [the MIT License](LICENSE). Docs are released under [Creative Commons](http://creativecommons.org/licenses/by-nc/4.0/).


