document.addEventListener('DOMContentLoaded', function(e) {
    onestate.initialize();
});


onestate.appendInitializer(function(){
    onestate.instantiate(new inputComponent(), '#root');
    onestate.instantiate(new textComponent(), '#root1');
});
