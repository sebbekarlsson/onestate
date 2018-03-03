# Creating the Context

## 1 - include onestate.js

    <script src='onestate.js'></script>

    or

    onestate = require('onestate')


## 2 - make sure the DOMContent is loaded

    document.addEventListener('DOMContentLoaded', function(e) {
        onestate.initialize();
    });

## 3 - start mounting components

    onestate.appendInitializer(() => {
        // mount components here
    });

> [More information on how to mount components](MOUNTING_COMPONENTS.md)

## 4 - Profit!!
