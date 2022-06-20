const washCar = document.getElementById("wash-car")
const mowLawn = document.getElementById("mow-lawn")
const pullWeeds = document.getElementById("pull-weeds")
const sendInvoice = document.getElementById("send-invoice")
const services = document.getElementById("services")
const totalPrice = document.getElementById("total-price")
const rendrService = [
    {
        name: "Wash Car",
        id: "wash-car",
        price: 10,
        requested: false
    }, 
    {
        name: "Mow Lawn",
        id: "mow-lawn",
        price: 20,
        requested: false
    }, 
    {
        name: "Pull Weeds",
        id: "pull-weeds",
        price: 30,
        requested: false
    }]

currentTotal = 0
totalPrice.textContent = `\$${currentTotal}`

washCar.addEventListener("click", function(){
    if (rendrService[0].requested === false) {
    services.innerHTML += `<span class="wash-name">${rendrService[0].name}</span> <span class="dollar-0">$</span><span class="amount-0">${rendrService[0].price}</span>`
    } 
    else {
        console.log("already pressed")
    }
    rendrService[0].requested = true
    currentTotal += 10 
    totalPrice.textContent = `\$${currentTotal}`
})

mowLawn.addEventListener("click", function(){
    if (rendrService[1].requested === false) {
    services.innerHTML += `<span class="mow-name">${rendrService[1].name}</span> <span class="dollar-1">$</span><span class="amount-1">${rendrService[1].price}</span>`
    }
    else {
        console.log("already pressed")
    }
    rendrService[1].requested = true
    currentTotal += 20 
    totalPrice.textContent = `\$${currentTotal}`
})

pullWeeds.addEventListener("click", function(){
    if (rendrService[2].requested === false) {
    services.innerHTML += `<span class="pull-name">${rendrService[2].name}</span> <span>$</span><span id="amount-2">${rendrService[2].price}<span>`
    }
    else {
        console.log("already clicked")
    }
    rendrService[2].requested = true
    currentTotal += 30
    totalPrice.textContent = `\$${currentTotal}`
})

sendInvoice.addEventListener("click", function(){
    services.textContent = ""
    rendrService[0].requested = false
    rendrService[1].requested = false
    rendrService[2].requested = false
    currentTotal = 0
    totalPrice.textContent = `\$${currentTotal}`
})