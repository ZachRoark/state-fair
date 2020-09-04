const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
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
// o0o0o0o0o0o0o0o0o0o0o0oo0o0o00o0oo0o00oo0o0o0o00o0o0o0o0o0o0o
eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "foodTicket") {
        const foodEvent = new CustomEvent("foodTicketPurchased", {
            detail: {
                ticketsPurchased: event.target.value
            }
        })
        console.log("food ticket button has been clicked!")
        eventHub.dispatchEvent(foodEvent)
    }
})
// o0o0o0o0o0o0o0o0o0o0o0o00oo0o0o00oo00o0o0o0oo0o00o0o0o0o0oo0
eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "gameTicket") {
        const gameEvent = new CustomEvent("gameTicketPurchased", {
            detail: {
                ticketsPurchased: event.target.value
            }
        })
        console.log("games ticket button has been clicked!")
        eventHub.dispatchEvent(gameEvent)
    }
})
// o0o0o0o0o0o0o0o0o0o0o0o00oo0o0o00oo00o0o0o0oo0o00o0o0o0o0oo0
eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "sideshowTicket") {
        const sideshowEvent = new CustomEvent("sideshowTicketPurchased", {
            detail: {
                ticketsPurchased: event.target.value
            }
        })
        console.log("sideshow ticket button has been clicked!")
        eventHub.dispatchEvent(sideshowEvent)
    }
})
// o0o0o0o0o0o0o0o0o0o0o0o00oo0o0o00oo00o0o0o0oo0o00o0o0o0o0oo0


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
