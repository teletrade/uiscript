/*
 * uiscript v0.1
 * on {event} "{source}" {action} {property} "{value}" to "{target}"
 *
 * var events = Object.getOwnPropertyNames(document).filter(function (e) {
 *   return !e.indexOf('on') && (document[e] == null || typeof document[e] == 'function')  
 * }) // ondblclick, etc.
 * var s = '\\s+'; // space
 * var e = '(' + Object.keys(events).join('|') + ')'; // events
 * var w = '(\\w+)'; // word
 * var v = '"([^"]+)"'; // value
 * var c = '(?:\\s*\/\/.*)?';
 * var regexp = new RegExp('on' + s + e + s + v + s + w + s + w + s + v + '(?:' + s + 'to' + s + v + ')?') + c;
 * var simple = /on\s+(\w+)\s+"([^"]+)"\s+(\w+)\s+(\w+)\s+"([^"]+)"(?:\s+to\s+"([^"]+)")?/;
 */

document.addEventListener("DOMContentLoaded", function () {
    "use strict"

    function forEach(selector, callback) {
        Array.prototype.forEach.call(document.querySelectorAll(selector), callback)
    }

    function toObject(keys, values) {
        return keys.reduce(function (obj, key, index) {
            return obj[key] = values[index] && values[index].replace(/^"|"$/g, ""), obj
        }, {})
    }
    
    /* function getEvents() {
        var mouseEvents = "click|context menu|mouse down|mouse enter|mouse leave|mouse move|mouse over|mouse out|mouse up";
        var keyboardEvents = "key down|key press|key up";
        var objectEvents = "abort|error|hash change|load|resize|scroll|unload";
        var formEvents = "blur|change|focus|focus in|focus out|input|reset|search|select|submit";
        var clipboardEvents = "copy|cut|paste";
        var printEvents = "after print|before print";
        var mediaEvents = "can play|can play through|duration change|emptied|ended|loaded data|loaded metadata|load start|pause|play|playing|progress|rate change|seeked|seeking|stalled|suspend|time update|volume change|waiting";
        var events = [mouseEvents, keyboardEvents, formEvents].join("|");
        
        var defaults = { "double click": "dblclick" };
    
        return events.split("|").reduce(function (obj, event) {
            return obj[event] = event.replace(/\s+/g, ''), obj
        }, defaults);
    } */

    function parse(instruction) {
        var keys = "event source action property value target";
        var s = '\\s+'; // space
        var w = '(\\w+)'; // word
        var v = '("[^"]+"|[^\\s]+)'; // value
        var regexp = new RegExp('on' + s + w + s + v + s + w + s + w + s + v + '(?:' + s + 'to' + s + v + ')?');
        var values = regexp.exec(instruction);
        if (!values) throw new Error("Invalid instruction '" + instruction + "'")
        return toObject(keys.split(" "), values.slice(1))
    }

    function evaluate(text) {
        if (!text || text.indexOf("//") == 0) return;
        
        var params = parse(text);
         
        function update(element) {
            switch (params.property) {
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
                switch (params.target) {
                    case undefined:
                        update(event.target);
                        break;
                    case "parent":
                        update(event.target.parentNode);
                        break;
                    default:
                        forEach(params.target, update);
                }
                if (event.target.nodeName == "A") {
                    event.preventDefault();
                }
            })
        })
    }

    forEach('script[type="text/x-uiscript"]', function (script) {
        script.text.trim().split("\n").forEach(function (line) {
            evaluate(line.trim())
        })
    })
})
