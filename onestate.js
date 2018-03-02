var onestate = {
    'initializers': [],
    'state': {},
    'components': [],

    /**
     * Add initializer to onestate
     * 
     * @param {function} func
     */
    'appendInitializer': function(func) {
        this.initializers.push(func);
    },

    /**
     * Initialize onestate
     */
    'initialize': function () {
        for (var i = 0; i < this.initializers.length; i++)
            this.initializers[i]();
    },

    /**
     * Add a component to the document
     */
    'instantiate': function(component, selector) {
        if (typeof component.element === 'undefined')
            return console.error('component needs an element.');

        document.querySelector(selector).appendChild(component.element);
        
        component.id = component.element.hasAttribute('id') ?
            component.element.getAttribute('id') : this.components.length;
        
        component.element.setAttribute('id', component.id);
        this.state[component.id] = {};
        component.state = this.state[component.id];

        if (typeof component.onMount !== 'undefined')
            component.onMount();

        this.components.push(component);
        this.tick();
    },

    /**
     * Update all components
     */
    'tick': function() {
        for (var i = 0; i < this.components.length; i++)
            if (typeof this.components[i].tick !== 'undefined')
               this.components[i].tick();
    },
    
    /**
     * Get current application state
     */
    'getState': function() {
        return this.state;
    },
    
    /**
     * Update or change a value in the current application state
     */
    'setState': function(componentId, data) {
        for (var property in data)
            this.state[componentId][property] = data[property];

        this.tick();

        return this.state[componentId];
    }
}

if (typeof window !== 'undefined')
    window.onestate = onestate;

if (typeof module !== 'undefined' && module.exports)
    module.exports = onestate;
