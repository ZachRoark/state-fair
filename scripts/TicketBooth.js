const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}


eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased", {
            detail: {
                ticketsPurchased: event.target.value
            }
        })
        console.log("ride ticket button has been clicked!")
        eventHub.dispatchEvent(rideEvent)
    }
})


// In the TicketBooth.js component, add the following 
// button as a child of the ticket booth <div>

// Add a click event listener on the content target 
// element reference. Some starter code below

// In the body of the event listener callback function, 
// check if the user clicked on the Ride Ticket button.

// If so, create a custom event that describes what happened. 
// For example:


// Dispatch that event to the event hub.

// Import and invoke the TicketBooth component function in main
