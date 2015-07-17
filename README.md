# jQuery.rhythmPlease

A jQuery library for maintaining a vertical rhythm with responsive blocks and images.

#### Install with npm:

```sh
$ npm install jquery-rhythmplease
```

### Usage
Include after jQuery.

```html
<script src="jquery.js" type="text/javascript"></script>
<script src="jquery.rhythmPlease.js" type="text/javascript"></script>
```

Call the plugin on onDocumentReady in your JavaScript.

```javascript
$(function() {
    $(".block").rhythmPlease(
        'property': 'margin-bottom', /* Property for compensating.
                                        Consider using 'height' for blocks,
                                        'margin-bottom' for images. */

        'base': 28,                  // Rhythm base, assume "px".

        'resize': true               // Resize with the screen width.
    );
});
```

### Licence
The jQuery.hythmPlease plugin is licensed under the MIT license:
http://en.wikipedia.org/wiki/MIT_License
