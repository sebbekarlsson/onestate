var textComponent = function() {
    this.element = ElemenTailor.create('div', {
        'class': 'textComponent',
        'id': 'textComponent'
    });

    this.tick = function() {
        var text = onestate.getState()['inputComponent'].text;

        if (typeof text != 'undefined')
            this.element.innerHTML = text;
    };
};
