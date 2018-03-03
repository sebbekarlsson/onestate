## Writing components

## Components are functions
> All components are functions, they can be defined like this:

    var inputComponent = () => {};

> You will get an error if you try to mount this component, because it has
> no `element`.

## All components needs an element to be mounted
> You have to specify an element:

    var inputComponent = () => {
        this.element = document.createElement('input');
        this.element.id = 'mainInput'; // the state will be bound to this id
        this.element.type = 'text';
    };

> You should now be able to mount this component without any problems.

## Callbacks
### onMount
> onMount is called when a component is mounted, below is an example where
> I add an eventListener to the element once mounted:

    var inputComponent = () => {
        ...

        this.onMount = () => {
            this.element.addEventListener('keyup', (e) => {
                console.log(e);    
            });    
        };
    };

## The state
> Writing and reading the state is easy, below I will save the value of the
> input element in the state:

    var inputComponent = () => {
        ...

        this.onMount = () => {
            this.onTyped = this.onTyped.bind(this);

            this.element.addEventListener('keyup', this.onTyped);    
        };

        this.onTyped = (e) => {
            // saving data in the global state
            onestate.setstate(
                this.element.id, // data will be mapped to this id
                {'text': this.element.value} // data to save in the state
            );    
        };
    };

 > Other components can now access this data like this:

    ...
    () => {
        //                             id of component
        var text = onestate.getState()['mainInput'].text;
        console.log(text);   
    }
    ...

> Here, `mainInput` is the id of the component we are trying to access.
