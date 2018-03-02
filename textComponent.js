var textComponent = function() {
    this.element = document.createElement('div');
    this.element.className += 'textComponent';

    this.tick = function() {
        var text = onestate.getState()['inputComponent'].text;

        if (typeof text != 'undefined')
            this.element.innerHTML = text;
    }
}
