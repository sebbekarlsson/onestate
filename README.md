# onestate.js
> Sort of like `React` but not trying to be as smart.

## Usage
* [creating the context](CREATING_THE_CONTEXT.md)
* [writing components](WRITING_COMPONENTS.md)
* [mounting components](MOUNTING_COMPONENTS.md)

## Usage
> markup:

    <head>
        <!-- you should probably bundle these files -->
        <script src='lib/ElemenTailor/elementailor.js'></script> <!-- for creating elements -->
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
        this.element = ElemenTailor.create('input', {
            'id': 'inputComponent',
            'type': 'text'
        }); 

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
        this.element = ElemenTailor.create('div', {
            'class': 'textComponent',
            'id': 'textComponent'
        });

        this.tick = () => {
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
