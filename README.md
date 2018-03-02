# onestate.js
> Sort of like `React` but not try to be as smart.

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

    let inputComponent = () => {
        // creating the element
        this.element = document.createElement('input');
        this.element.setAttribute('type', 'text');
        this.element.id = 'inputComponent';
        

        this.onMount = () => {
            this.onTyped = this.onTyped.bind(this);

            this.element.addEventListener('keyup', this.onTyped);
        }

        this.onTyped = (e) => {
            // change the current state, and bind it to this element id
            onestate.setState(this.element.id, {'text': this.element.value});
        }
    }
    
    // textComponent.js

    let textComponent = () => {
        // creating the element
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
