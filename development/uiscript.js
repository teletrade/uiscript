/*
 * uiscript v0.1
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

    function parse(text) {
        var keys = ["action", "source", "reaction", "attribute", "value", "target"];
        var regexp = /on\s+(\w+)\s+"([^"]+)"\s+(\w+)\s+(\w+)\s+"([^"]+)"(?:\s+to\s+"([^"]+)")?/;
        var values = regexp.exec(text) || [];
        return toObject(keys, values.slice(1))
    }

    function instruction(text) {
        var params = parse(text);
      
        function react(element) {
            switch (params.attribute) {
                case "class":
                    params.value.split(" ").forEach(function (value) {
                      element.classList[params.reaction](value);
                    });
                    break;
                default:
                    break;
            }
        }

        forEach(params.source, function (element) {
            element.addEventListener(params.action, function (event) {
                switch (params.target) {
                    case undefined:
                        react(event.target);
                        break;
                    default:
                        forEach(params.target, react);
                        break;
                }
                if (event.target.nodeName == "A") {
                    event.preventDefault();
                }
            })
        })
    }

    forEach('script[type="text/uiscript"]', function (script) {
        script.text.trim().split("\n").forEach(function (line) {
            instruction(line.trim())
        })
    })
})
