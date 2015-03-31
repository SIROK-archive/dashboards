Dashboards
==========

HTML and CSS framework for developing responsive dashboard project on the web. Heavily inspired by [twbs/bootstrap](https://github.com/twbs/bootstrap). This code is written with [CSS Style Guide](http://cssguidelin.es/)

## Table of Contents

- [Installation](#installation)
- [What's included](what's-included)
- [Basic template](#basic-template)
- [Fonts](#fonts)
- [Tools](#tools)
- [Browser and device support](browser-and-device-support)
- [Contributing](#contributing)
- [Copyright and license](#copyright-and-license)

## Installation

### Transpile SCSS file

    $ [sudo] npm install
    $ npm run build

### Install with Bower

    $ bower install dashboards

## What's included

This framework is based on ITCSS.

    .
    ├── settings
    ├── base
    ├── tools
    ├── generic
    ├── components
    ├── objects
    ├── layout
    ├── trumps
    └── dashboard.scss


## Basic template

Start with this basic HTML template. We hope you'll customize our templates and examples, adapting them to suit your needs.

```html
<div class="dashboard__wrapper">
  <div class="dashboard__aside"></div>
  <div class="dashboard__main">
      <div class="dashboard__content"></div>
      <div class="dashboard__footer"></div>
  </div>
</div>
```

## Fonts

It use Google Fonts below:

    @import url(http://fonts.googleapis.com/css?family=Lato:300,400,700,700italic|Hammersmith+One);
    font-family: 'Lato', 'ヒラギノ角ゴ Pro W3','Hiragino Kaku Gothic Pro','HiraKakuPro-W3' ;
    font-family: 'Hammersmith One', 'ヒラギノ角ゴ Pro W3','Hiragino Kaku Gothic Pro','HiraKakuPro-W3';

## Tools

comming soon.

## Browser and device support

comming soon.

## Contributing

### Git Commit Messages

Note: This **Git Commit Messages** is quoted by [atom/atom/CONTRIBUTING.md](https://github.com/atom/atom/blob/master/CONTRIBUTING.md) because I think it is amazing. Thanks to atom project.

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally
* Consider starting the commit message with an applicable emoji:
    * :lipstick: `:lipstick:` when improving the format/structure of the code
    * :racehorse: `:racehorse:` when improving performance
    * :non-potable_water: `:non-potable_water:` when plugging memory leaks
    * :memo: `:memo:` when writing docs
    * :penguin: `:penguin:` when fixing something on Linux
    * :apple: `:apple:` when fixing something on Mac OS
    * :checkered_flag: `:checkered_flag:` when fixing something on Windows
    * :bug: `:bug:` when fixing a bug
    * :fire: `:fire:` when removing code or files
    * :green_heart: `:green_heart:` when fixing the CI build
    * :white_check_mark: `:white_check_mark:` when adding tests
    * :lock: `:lock:` when dealing with security
    * :arrow_up: `:arrow_up:` when upgrading dependencies

## Copyright and license

Dashboards and all content copyright 2015 SIROK, Inc., Code released under [the MIT License](LICENSE) and Docs are released under [Creative Commons](http://creativecommons.org/licenses/by-nc/4.0/).
