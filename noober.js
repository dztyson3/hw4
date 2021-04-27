// NOTE - Had sent a note via Slack, but having a lot of trouble getting to show up on the page. Starting in line 32, it will gray out the HTML code. I've looked at the class notes and some different forums but could not figure out. Appreciate any guidane (and leniency!) you can provide1


window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // Writes the returned JSON to the console
  console.dir(json)
  
  // Return JSON array
   for (let i = 0; i < json.length; i++) { 
     let ride = json[i]
 
     for (let l = 0; l < ride.length; l++) { 
       let leg = ride[l]

    // Store and declare variables for customer information
      let passengerNumberOfPassengers = leg.numberOfPassengers
      let passengerName = `${leg.passengerDetails.first} ${order.passengerDetails.last}`
      let passengerPhone = leg.passengerDetails.phoneNumber
      let passengerPickupLine1 = leg.pickupLocation.address
      let passengerPickupLine2 = `${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}`
      let passengerDropoffLine1 = leg.dropffLocation.address
      let passengerDropoffLine2 = `${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}`
      
      // Formula for service type part 1 - if length of ride >1, then Noober Pool
      let serviceType
        if (ride.length > 1) {
          serviceType = "Noober Pool"
          let outputElement = document.querySelector(".rides")
          outputElement.insertAdjacentHTML("beforeend",
          `
            <h1 class ="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              <i class ="fas fa-car-side"></i>
              <span>${serviceType}</span>
            </h1>

            <div class="border-4 border-gray-900 p-4 my-4 text-left">
              <div class="flex">
                <div class="w-1/2">
                  <h2 class="text-2xl py-1">${passengerName}</h2>
                  <p class="font-bold text-gray-600">${passengerPhone}</p>
                </div>
                <div class="w-1/2 text-right">
                  <span class="rounded-xl bg-gray-600 text-white p-2">
                    ${passengerNumberOfPassengers}
                  </span>
                </div>
              </div>
              <div class="mt-4 flex">
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">PICKUP</div>
                  <p>${passengerPickupLine1}</p>
                  <p>${passengerPickupLine2}</p>
                </div>
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                  <p>${passengerDropoffLine1}</p>
                  <p>${passengerDropoffLine2}</p>
                </div>
              </div>
            </div>
            `
          )

      // Formula for service type part 2 - purpleRequested = Noober Purple 
      } else if (leg.purpleRequested == true) {
        serviceType = "Noober Purple"
        let outputElement = document.querySelector(".rides")
        outputElement.insertAdjacentHTML("beforeend",
        `
          <h1 class ="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            <i class ="fas fa-car-side"></i>
            <span>${serviceType}</span>
          </h1>

          <div class="border-4 border-gray-900 p-4 my-4 text-left">
            <div class="flex">
              <div class="w-1/2">
                <h2 class="text-2xl py-1">${passengerName}</h2>
                <p class="font-bold text-gray-600">${passengerPhone}</p>
              </div>
              <div class="w-1/2 text-right">
                <span class="rounded-xl bg-gray-600 text-white p-2">
                  ${passengerNumberOfPassengers}
                </span>
              </div>
            </div>
            <div class="mt-4 flex">
              <div class="w-1/2">
                <div class="text-sm font-bold text-gray-600">PICKUP</div>
                <p>${passengerPickupLine1}</p>
                <p>${passengerPickupLine2}</p>
              </div>
              <div class="w-1/2">
                <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                <p>${passengerDropoffLine1}</p>
                <p>${passengerDropoffLine2}</p>
              </div>
            </div>
          </div>
        `
        )

     
       // Formula for service type part 3 - more than 3 people = NooberXL
      } else if (leg.numberOfPassengers > 3) {
        serviceType = "Noober XL"
        let outputElement = document.querySelector(".rides")
        outputElement.insertAdjacentHTML("beforeend",
        `
          <h1 class ="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            <i class ="fas fa-car-side"></i>
            <span>${serviceType}</span>
          </h1>

          <div class="border-4 border-gray-900 p-4 my-4 text-left">
            <div class="flex">
              <div class="w-1/2">
                <h2 class="text-2xl py-1">${passengerName}</h2>
                <p class="font-bold text-gray-600">${passengerPhone}</p>
              </div>
              <div class="w-1/2 text-right">
                <span class="rounded-xl bg-gray-600 text-white p-2">
                  ${passengerNumberOfPassengers}
                </span>
              </div>
            </div>
            <div class="mt-4 flex">
              <div class="w-1/2">
                <div class="text-sm font-bold text-gray-600">PICKUP</div>
                <p>${passengerPickupLine1}</p>
                <p>${passengerPickupLine2}</p>
              </div>
              <div class="w-1/2">
                <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                <p>${passengerDropoffLine1}</p>
                <p>${passengerDropoffLine2}</p>
              </div>
            </div>
          </div>
        `
        )
      

      
      // Formula for service type part 3 - else then Noober X
      } else {
        serviceType = "Noober X"
        let outputElement = document.querySelector(".rides")
        outputElement.insertAdjacentHTML("beforeend",
        `
          <h1 class ="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            <i class ="fas fa-car-side"></i>
            <span>${serviceType}</span>
          </h1>

          <div class="border-4 border-gray-900 p-4 my-4 text-left">
            <div class="flex">
              <div class="w-1/2">
                <h2 class="text-2xl py-1">${passengerName}</h2>
                <p class="font-bold text-gray-600">${passengerPhone}</p>
              </div>
              <div class="w-1/2 text-right">
                <span class="rounded-xl bg-gray-600 text-white p-2">
                  ${passengerNumberOfPassengers}
                </span>
              </div>
            </div>
            <div class="mt-4 flex">
              <div class="w-1/2">
                <div class="text-sm font-bold text-gray-600">PICKUP</div>
                <p>${passengerPickupLine1}</p>
                <p>${passengerPickupLine2}</p>
              </div>
              <div class="w-1/2">
                <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                <p>${passengerDropoffLine1}</p>
                <p>${passengerDropoffLine2}</p>
              </div>
            </div>
          </div>
        `
        )
      }
     }
    }
  })
