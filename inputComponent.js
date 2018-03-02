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
