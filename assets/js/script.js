// TODO: Declare any global variables we need
let headsFlip = 0
let tailsFlip = 0


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('flip').addEventListener('click', () => {
        let flippedHeads = Math.random() <0.5
        if(flippedHeads){
            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
            document.getElementById('message').textContent = 'You Flipped Heads!'
            headsFlip += 1
        }
        else {
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = 'you flipped Tails!'
            tailsFlip += 1
        }
    

    // update scoreboard 

    let total = headsFlip + tailsFlip
    let percentHeads = 0
    let percentTails = 0

    if (total > 0) {
        percentHeads = Math.round((headsFlip / total) * 100)
        percentTails = Math.round((tailsFlip / total) * 100)
    }

    // Update scoreboard totals
    document.getElementById('heads').textContent = headsFlip
    document.getElementById('heads-percent').textContent = percentHeads + '%'
    document.getElementById('tails').textContent = tailsFlip
    document.getElementById('tails-percent').textContent = percentTails + '%'
})
document.getElementById('clear').addEventListener('click', function () {
    // reset to zero
    headsFlip = 0
    tailsFlip = 0

    // update user message
    document.getElementById('message').textContent = 'Lets Get Rolling!'

    let total = headsFlip + tailsFlip
    let percentHeads = 0
    let percentTails = 0 

    if (total > 0) {
        percentHeads = Math.round((headsFlip / total) * 100)
        percentTails = Math.round((TailsFlip / total) * 100)
    }
    document.getElementById('heads').textContent = headsFlip
    document.getElementById('heads-percent').textContent = percentHeads + '%'
    document.getElementById('tails').textContent = tailsFlip
    document.getElementById('tails-percent').textContent = percentTails + '%'
})

})