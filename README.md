Dashboards
==========

The most popular HTML, CSS and JavaScript framework for developing responsive dashboard project on the web. Heavily inspired by [twbs/bootstrap](https://github.com/twbs/bootstrap). It will be used with  [csswizardry/inuit.css](https://github.com/csswizardry/inuit.css/) now. This project use [CSS Style Guide](http://cssguidelin.es/)

## いつdashboardsを使用するのか？

dashboardのレイアウトのもののほとんどは**何かを分析したり** **分析結果を見るため**に使用すると考える。情報の分析を行うのは体外がプロジェクトマネージャーと呼ばれる人たちで
その人の多くが技術者ではない。また彼らの役割は情報を集めて情報を分析することだが、その際に大きなウィンドウいっぱいにブラウザを開くのではなく半分にdashboardでその半分がメモのようなものだと考える。その場合にdashboardsはレスポンシブウェブデザインであるべきだと考える。またdashboardsの情報量は多くウィンドウが小さければスクロールする部分が多くなる。その場合に簡単にナビゲーションする方法を考える必要がある。

導入（開発）するのはエンジニア・データを見るのはプロジェクト・マネージャー。グロースハッカーなら両方をエンジニアが担当する。その場合にrubyなどで簡単にデータを習得できるAPIが必要。

必要なこと:

- dashboardはレスポンシブウェブデザイン
- より簡単なナビゲーション
- ありふれたもの（出れでも扱える）

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

## Authors

Developed with LOVE by SIROK, Inc.

## Copyright and license

Dashboard and all content copyright 2014 - 2015 [SIROK, Inc](http://sirok.co.jp/). Code released under [the MIT License](LICENSE). Docs are released under [Creative Commons](http://creativecommons.org/licenses/by-nc/4.0/).
