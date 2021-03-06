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
    services.innerHTML += `<span class="service-name">${rendrService[0].name}</span> <div><span class="dollar-font">$</span><span class="amount-0">${rendrService[0].price}</span></div>`
    currentTotal += 10 
    totalPrice.textContent = `\$${currentTotal}`
    } 
    else {
        console.log("already pressed")
    }
    rendrService[0].requested = true
})

mowLawn.addEventListener("click", function(){
    if (rendrService[1].requested === false) {
    services.innerHTML += `<span class="service-name">${rendrService[1].name}</span> <div><span class="dollar-font">$</span><span class="amount-1">${rendrService[1].price}</span></div>`
    currentTotal += 20 
    totalPrice.textContent = `\$${currentTotal}`
    }
    else {
        console.log("already pressed")
    }
    rendrService[1].requested = true
})

pullWeeds.addEventListener("click", function(){
    if (rendrService[2].requested === false) {
    services.innerHTML += `<span class="service-name">${rendrService[2].name}</span> <div><span class="dollar-font">$</span><span id="amount-2">${rendrService[2].price}<span></div>`
    currentTotal += 30
    totalPrice.textContent = `\$${currentTotal}`
    }
    else {
        console.log("already clicked")
    }
    rendrService[2].requested = true   
})

sendInvoice.addEventListener("click", function(){
    services.textContent = ""
    rendrService[0].requested = false
    rendrService[1].requested = false
    rendrService[2].requested = false
    currentTotal = 0
    totalPrice.textContent = `\$${currentTotal}`
})