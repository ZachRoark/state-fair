const contentTarget = document.querySelector(".food");
const eventHub = document.querySelector("#state-fair");

export const foodTicketHolders = () => {
    eventHub.addEventListener("foodTicketPurchased", clickEvent => {
        return contentTarget.innerHTML += `
            <div class="person eater">
            </div>
    `
    })
}
    
// Create a new button in the ticket booth for people to buy food 
// tickets.

// Create a FoodTicketHolder component file, and add an event listener 
// to the event hub that listens for the food ticket custom event that 
// you will dispatch from the TicketBooth component.

// In the body of the event listener callback function, add a new <div> 
// element to the content target that has the correct classes on it 
// (see above).