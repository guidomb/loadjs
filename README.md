LoadJS
======

[![Gem Version](https://badge.fury.io/rb/loadjs.png)](http://badge.fury.io/rb/loadjs)

**LoadJS** provides a way to load page-specific Javascript code in a Rails app without loosing the magic
provided by Sprockets. All your Javascript code will continue by minified in one Javascript file but
some portions of it will only be executed for certain pages.

## Installation

Add this line to your application's Gemfile:

    gem 'loadjs'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install loadjs
    
## Usage

After installing the gem, you need to modify your `application.html.erb` and add the following attributes to the `body`
tag:

```
<html>
  <head>
    ...
  </head>
  <body data-controller="<%= controller.controller_name %>" data-action="<%= controller.action_name %>">
    ...
  </body>
</html>
```

Then you need to require `loadjs` in your application manifest:

```
//= require loadjs
```

Finally if you want a block of code just to be excuted for a specific controller and action you must use the `load` 
function like this:

```javascript
load({controller: 'foo', action: 'bar'}, function (controller, action) {
  alert("Hello World!");
});
```

This piece of code will only be evaluated after the DOM has been loaded and only for the controller `foo` and action `bar`.
If you want to execute a piece of code for all the actions in a controller you can omit the `action` option. 

You can also use a shorter version like this:

```javascript
load("foo#bar", function (controller, action) {
  alert("Hello World!");
});
```

If you want a block of code to be executed for multiple controllers and multiple actions you can do it like this:

```javascript
load({
    controllers: {
        controller1: ['action1', 'action2', 'action3'],
        controller2: ['action2'],
        controller3: []
    }
}, function(controller, action) {
    alert("Hello " + controller + " and " + action);
});
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License ##

Copyright 2013 Guido Marucci Blas

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
