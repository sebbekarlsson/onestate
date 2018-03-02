# onestate.js
> Sort of like `React` but does not render anything.

## Usage
> markup:

    <head>
        <!-- you should probably bundle these files -->
        <script src='onestate.js'></script>
        <script src='inputComponent.js'></script>
        <script src='textComponent.js'></script>
        <script src='app.js'></script>
    </head>
    <body>
        <div id='root'></div>
        <div id='root1'></div>
    </body>

> writing components:

    // inputComponent.js

    var inputComponent = function() {
        this.element = document.createElement('input');
        this.element.setAttribute('type', 'text');
        this.element.id = 'inputComponent';
        

        this.onMount = function() {
            this.onTyped = this.onTyped.bind(this);

            this.element.addEventListener('keyup', this.onTyped);
        }

        this.onTyped = function(e) {
            onestate.setState(this.element.id, {'text': this.element.value});
        }
    }
    
    // textComponent.js

    var textComponent = function() {
        this.element = document.createElement('div');
        this.element.className += 'textComponent';

        this.tick = function() {
            var text = onestate.getState()['inputComponent'].text;

            if (typeof text != 'undefined')
                this.element.innerHTML = text;
        }
    }    

> Intialization code:

    // app.js

    document.addEventListener('DOMContentLoaded', function(e) {
        onestate.initialize();
    });


    onestate.appendInitializer(function(){
        onestate.instantiate(new inputComponent(), '#root'); // mounting
        onestate.instantiate(new textComponent(), '#root1'); // mounting 
    });
