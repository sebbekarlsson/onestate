var inputComponent = function() {
    this.element = ElemenTailor.create('input', {
        'id': 'inputComponent',
        'type': 'text'
    });
    
    this.onMount = function() {
        this.onTyped = this.onTyped.bind(this);

        this.element.addEventListener('keyup', this.onTyped);
    }

    this.onTyped = function(e) {
        onestate.setState(this.element.id, {'text': this.element.value});
    }
};
