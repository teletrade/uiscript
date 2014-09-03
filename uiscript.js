/*
 * uiscript v0.1
 * on {event} "{source}" {action} {attribute} "{value}" to "{target}"
 *
 * var s = '\\s+'; // space
 * var w = '(\\w+)'; // word
 * var v = '"([^"]+)"'; // value
 * var regexp = new RegExp('on' + s + w + s + v + s + w + s + w + s + v + '(?:' + s + 'to' + s + v + ')?');
 */

document.addEventListener("DOMContentLoaded", function () {
    "use strict"

    function forEach(selector, callback) {
        Array.prototype.forEach.call(document.querySelectorAll(selector), callback)
    }

    function toObject(keys, values) {
        return keys.reduce(function (obj, key, index) {
            return obj[key] = values[index], obj
        }, {})
    }

    function parse(instruction) {
        var keys = "event source action attribute value target";
        var regexp = /on\s+(\w+)\s+"([^"]+)"\s+(\w+)\s+(\w+)\s+"([^"]+)"(?:\s+to\s+"([^"]+)")?/;
        var values = regexp.exec(instruction);
        if (!values) throw new Error("Invalid instruction '" + instruction + "'")
        return toObject(keys.split(" "), values.slice(1))
    }

    function evaluate(text) {
        if (!text || text.indexOf("//") == 0) return;
        
        var params = parse(text);
         
        function update(element) {
            switch (params.attribute) {
                case "class":
                    params.value.split(" ").forEach(function (value) {
                      element.classList[params.action](value);
                    });
                    break;
                default:
                    break;
            }
        }

        forEach(params.source, function (element) {
            element.addEventListener(params.event, function (event) {
                if (event.target.nodeName == "A") {
                    event.preventDefault();
                }
                if (!params.target) {
                    update(event.target); 
                } else {
                    forEach(params.target, update);
                }
            })
        })
    }

    forEach('script[type="text/uiscript"]', function (script) {
        script.text.trim().split("\n").forEach(function (line) {
            evaluate(line.trim())
        })
    })
})
