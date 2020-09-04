const contentTarget = document.querySelector(".sideshow");
const eventHub = document.querySelector("#state-fair");

export const sideShowTicketHolders = () => {
    eventHub.addEventListener("sideshowTicketPurchased", clickEvent => {
        return contentTarget.innerHTML += `
            <div class="person gawker">
            </div>
    `
    })
}