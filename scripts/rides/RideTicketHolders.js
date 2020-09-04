const contentTarget = document.querySelector(".rides");
const eventHub = document.querySelector("#state-fair");

// I'm a dingus that tried to nest the event listener in the function that 
// would be activated/called by the event listener instead of having the 
// event listener outside the function so as to call said function.
// dingus's get shamed for dumb things so it doesn't happen again.

// I'm a double dingus because i tried completely separating the event listener
// and the function, causing the function to immediately get called and render
// to the DOM when imported to main.js. 
// Terra saved me, remind me to bake her a paleo cake, so like, meatloaf or
// a steak with kale on it or something.

export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", clickEvent => {
        return contentTarget.innerHTML += `
            <div class="person rider">
            </div>
        `
    }) 
}



// Open the RideTicketHolder component file.

// Add an event listener to the event hub that listens for the custom 
// event that you dispatched from the TicketBooth component.

// In the body of the event listener callback function, add a new 
// <div> element to the content target that has the correct classes 
// on it (see above).