import 'dart:html';

class Greeter {

  static const GREETING_MESSAGE = "Hello Dart!";

  greet() {
    querySelector("#title").text = GREETING_MESSAGE;
  }
}

void main() {
  new Greeter().greet();
}