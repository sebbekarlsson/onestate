# Mounting components

## instantiate
> Mounting components should always be done inside an initializer like this:

    onestate.appendInitializer(() => {
        onestate.instantiate(new inputComponent(), '#root');
    });

> Mounting is done by calling the `instantiate` method:
    
    onestate.instantiate(
        new <component>, // component to mount
        <css-selector> // where to mount
    );
