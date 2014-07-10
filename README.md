# generator-chromeapp-dart [![Build Status](https://secure.travis-ci.org/laco0416/generator-chromeapp-dart.png?branch=master)](https://travis-ci.org/laco0416/generator-chromeapp-dart)

> [Yeoman](http://yeoman.io) generator for Chrome App in Dart


## 使い方

### Yeomanとgenerator-chromeapp-dartのインストール

```bash
$ npm install -g grunt-cli bower yo generator-chrome-app-dart
``` 

### Dartのインストール

[Dart Editor](https://www.dartlang.org/tools/download.html)をインストールします。その後環境変数を追加してください。

```bash
export DART_SDK=path/to/dart/dart-sdk
export PATH=$PATH:path/to/dart/dart-sdk/bin
```

### アプリの新規作成

1. プロジェクトのルートディレクトリを作ります (/sample)
2. 作ったディレクトリに移動します  
```$ cd sample```
3. ジェネレータを起動します。  
```$ yo chromeapp-dart```
4. 実行します  
```$ grunt debug```
5. http://localhost:9000 を開きます。 **"Hello Dart!"**

### Chromeアプリとして実行

1. chrome://extensions を開き、`パッケージ化されていない拡張機能を読み込む`から、`/app`ディレクトリを読み込みます。
2. 起動してください。

### gruntタスクについて

- `grunt build`  
プロジェクトをビルドし、デバッグ可能な状態にします。

- `grunt debug`  
プロジェクトをビルドし、デバッグを開始します。プロジェクト内のファイルに変更があると自動でビルドしてChromeアプリを更新します。


## 今後の予定

- cca対応（Androidのみ）
- サンプルプロジェクトの種類を増やす

## License

MIT
