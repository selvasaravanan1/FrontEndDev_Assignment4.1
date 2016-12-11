/**
* Created by maddie on 12/4/16.
*/
/*
 1. Create a Class with name ‘Greeter’ in greeter.ts and define Constructor
 and one ‘greet()’ method which will return some greeting message,
 then create a greeter.html, add compiled file into this html like(greeter.js).
 Output should display as greeting message.
 */
var Greeter = (function () {
    function Greeter(message) {
        this.message = message;
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('Hello World! This is Madhavi!!');
$(document).ready(function () {
    document.getElementById('status').innerHTML = greeter.greet();
});
