let cars=["Audi","BMW","Merc","Honda","Ferrari"]

let carsOrdereredListElement=document.getElementById("cars-list")

let ul=""

cars.forEach(
    (car)=>
    {
        ul+=`<li>${car}</li>`
    }
)

carsOrdereredListElement.innerHTML=ul