# uiscript 0.2 (fork from [uilang](https://github.com/bendc/uilang))

uiscript is a simple event-driven language for web designers, just write your code in plain English.

When click occurs change CSS classes to show, hide, animate and transform elements.

This simple logic lets you create most of the typical behaviours: tabs, popovers, overlays, sliding menus, etc.

## Getting started

Include [uiscript.js](https://rawgit.com/qweek/uiscript/master/uiscript.js) or [uiscript.min.js](https://rawgit.com/qweek/uiscript/master/uiscript.min.js) on your page (900 Bytes):

```html
<script src="uiscript.js"></script>
```

Insert a `<script>` element with a `type="text/x-uiscript"` attribute.

Write some uiscript:

```html
<script type="text/x-uiscript">
  on click "#source" add class "hidden" to ".target"
</script>
```
or more

```html
<script type="text/x-uiscript">
  on click ".hide" add class "hidden" to "#notification"
  on mouseenter #notification add class hover
  on mouseleave #notification remove class hover
</script>
```

## Syntax

Syntax is pretty simple:

```html
  on {event} {source} {action} {property} {value} // short syntax
  on {event} {source} {action} {property} {value} to {target} // full syntax
  on {event} "{source}, {source}" {action} {property} "{value} {value}" to "{target}, {target}" // multi-value syntax
```
1. Support different events: click (other in progress)
2. Source is any CSS selector.
3. Support simple class manipulations `add`, `remove` or `toggle` (other in progress)
4. Support different properties: class (other planned)
5. Target is any CSS selector or nothing (which apply reaction to current element)

You can add as many instructions as you want into your `<script>` element (and many `<script>` element as you want)
Comments is also supported:
```html
<script type="text/x-uiscript">
  // I'm a comment.
  on click ".hide" add class "hidden" to "div"
</script>
```

## Fork changelog

- [x] move `<code>` to `<script>`
- [x] change `<!--comments-->` to `//comments`
- [x] change syntax to rx-style `on {event} "{source}" {action} {property} "{value}" to "{target}"`
- [x] support multiple class values
- [x] optional quotes in syntax
- [x] add 'parent' target (https://github.com/bendc/uilang/pull/13/files)
  - [ ] add support for multiple ':parent' selector (http://api.jquery.com/parent-selector/)
- [x] add bower support (https://github.com/bendc/uilang/pull/2)
- [x] change script type to custom `type="text/x-uiscript"`
- [ ] adds support for more events and actions
```html
var mouseEvents = "click,context menu,mouse down,mouse enter,mouse leave,mouse move,mouse over,mouse out,mouse up";
var keyboardEvents = "key down,key press,key up";
var objectEvents = "abort,error,hash change,load,resize,scroll,unload";
var formEvents = "blur,change,focus,focus in,focus out,input,reset,search,select,submit";
var clipboardEvents = "copy,cut,paste";
var printEvents = "after print,before print";
var mediaEvents = "can play,can play through,duration change,emptied,ended,loaded data,loaded metadata,load start,pause,play,playing,progress,rate change,seeked,seeking,stalled,suspend,time update,volume change,waiting";
var defaults = { "double click": "dblclick" };
```
- [ ] add support to other properties
- [ ] optional values for properties
- [ ] pre-calculate params before addEventListener
- [ ] aliases for add(+), remove(-), toggle(!), to(at, @)
- [ ] alter syntax (also look to shorthand.js)
  - on? {event} {source} at? {target}? {action} {property} {value}
    - click #source at #source add class hidden
    - click #source @ #source + class hidden
    - click #source + class hidden
  - {event} {source}: {target}? {property} {action} {value}
    - click #source: #target class + hidden
    - click #source: class + hidden
  - default "class" attribute with ".class" value
    - click #source: + .hidden
    - click #source: #target + .hidden
    - click #source: + checked // attribute
    - click #source: + checked checked // attribute checked="checked"
  - on {source} {event} {target}? {action} {property} {value}
    - on #source click + .hidden
- [ ] add js api

## Examples ([original](http://uilang.com/))

* [jsFiddle: Simple notification banner](http://jsfiddle.net/L9kaoo62/1/)
* [jsFiddle: Simple notification banner with mouseenter, mouseleave](http://jsfiddle.net/f2g60hdu/)
* [jsFiddle: Animated switch] (http://jsfiddle.net/cm6uow15/1/)
* [jsFiddle: Navigation popover] (http://jsfiddle.net/tdwtLjbd/1/)
* [jsFiddle: Tabs] (http://jsfiddle.net/3bjoyk49/1/)
* [jsFiddle: Accordion] (http://jsfiddle.net/f1qjj6L5/1/)
* [jsFiddle: Overlay] (http://jsfiddle.net/mgn5ryjq/1/)

## Demos

* [jsFiddle: Simple gallery](http://jsfiddle.net/8n9hwrbj/1/) ([original] (http://demos.uilang.com/gallery/))
* [jsFiddle: Hamburger menu](http://jsfiddle.net/8xnp67g7/1/) ([original] (http://demos.uilang.com/hamburger-menu/))
* [jsFiddle: Looping Keynote-like presentation](http://jsfiddle.net/jf2Lxpat/1/) ([original] (http://demos.uilang.com/keynote/))
* [jsFiddle: Sliding panels](http://jsfiddle.net/exrjL8pt/1/) ([original] (http://demos.uilang.com/sliding-panels/))
