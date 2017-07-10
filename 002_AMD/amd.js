/**
 * Created by progden on 2017/7/11.
 */
if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(function(){
    var exports = {};
    exports.sayHello = function(){
        console.log("Hello from modules: " + module.id);
    }
    return exports;
})