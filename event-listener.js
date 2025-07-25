// Callback-Based Event Listener Simulation

// Simulate an event system:

// onEvent('login', callback1);
// onEvent('logout', callback2);
// trigger('login');

// Implement onEvent and trigger so that events can register and trigger callbacks.

function Event(callback){
    console.log("I am on my way to attend the event");
    callback();
}      

function onEvent(callback){
    const login = 'I have my credentials';
    console.log("OnEvent:", login);
    
}

function onEvent1(){
    const logout = 'I have submitted my credentials even if I leave this event now';
    console.log("OnEvent:", logout);
  
}

Event(function() {
    onEvent();
    onEvent1();
});

