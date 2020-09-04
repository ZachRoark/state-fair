const contentTarget = document.querySelector(".games");
const eventHub = document.querySelector("#state-fair");

export const gameTicketHolders = () => {
    eventHub.addEventListener("gameTicketPurchased", clickEvent => {
        return contentTarget.innerHTML += `
            <div class="person player">
            </div>
    `
    })
}