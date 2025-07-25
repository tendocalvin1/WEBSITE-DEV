// Object to store event names and their registered callbacks
const eventRegistry = {};

// Register a callback for a specific event
function onEvent(eventName, callback) {
    // If the event doesn't exist in the registry, initialize an array for it
    if (!eventRegistry[eventName]) {
        eventRegistry[eventName] = [];
    }
    // Add the callback to the event's callback list
    eventRegistry[eventName].push(callback);
}

// Trigger all callbacks registered for a specific event
function trigger(eventName) {
    // Check if the event exists in the registry
    if (eventRegistry[eventName]) {
        // Execute each callback registered for this event
        eventRegistry[eventName].forEach(callback => {
            callback(`Event "${eventName}" triggered`);
        });
    } else {
        console.log(`No callbacks registered for event "${eventName}"`);
    }
}

// Example callbacks
function callback1(message) {
    console.log("Callback 1:", message);
}

function callback2(message) {
    console.log("Callback 2:", message);
}

// Example usage
onEvent('login', callback1); // Register callback1 for 'login'
onEvent('login', callback2); // Register callback2 for 'login'
onEvent('logout', callback1); // Register callback1 for 'logout'

trigger('login'); // Triggers both callback1 and callback2 for 'login'
trigger('logout'); // Triggers callback1 for 'logout'
trigger('unknown'); // No callbacks for this event


// Explanation of the Corrected Code:

//     Event Registry:
//         Used an eventRegistry object to store event names as keys and arrays of callbacks as values. This allows multiple callbacks to be registered for the same event.
//     onEvent Function:
//         Takes eventName (e.g., 'login') and callback as parameters.
//         Initializes an array for the event if it doesn't exist and appends the callback to that event's array.
//     trigger Function:
//         Takes an eventName and executes all callbacks registered for that event, passing a message to each callback.
//         If no callbacks are registered for the event, logs a message indicating so.
//     Asynchronous Consideration:
//         The current implementation is synchronous for simplicity, but it could be extended with setTimeout to simulate async events if needed.
//     Example Usage:
//         Demonstrates registering multiple callbacks for the same event (login) and different events (logout).
//         Shows how trigger executes the appropriate callbacks.