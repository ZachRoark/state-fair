const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('what custom event did you dispatch in ConvictionSelect?', event => {
    // You remembered to add the id of the crime to the event detail, right?
    if ("crimeId" in event.detail.crimeThatWasChosen) {
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const matchingCriminals = appStateCriminals.filter(currentCriminal => {
            return currentCriminal
        })

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
    }
})

const render = criminalCollection => {
    contentTarget.innerHTML = you_fill_this_in
}


// Render ALL criminals initally
export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const appStateCriminals = useCriminals()
            render(appStateCriminals)
        })
}


const render = criminalCollection => {
    const domeElement = document.querySelector(".criminalContainer");
let HTMLArray = criminalCollection.map(singleCriminal => {
    return CriminalHTML(singleCriminal)
})
domeElement.innerHTML = HTMLArray.join("");
}