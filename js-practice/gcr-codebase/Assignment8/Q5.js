class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance < 0) {
            throw new Error("Invalid distance");
        }

        return this.distance * 10;
    }
}

let driver = new Driver("Rahul", 4.8, "Car");
let trip = new Trip("Mathura", "Agra", 50);

try {
    console.log(driver.name, driver.vehicle);
    console.log("Fare:", trip.calculateFare());
} catch (error) {
    console.log(error.message);
}

let trip2 = new Trip("Delhi", "Noida", -10);

try {
    console.log(trip2.calculateFare());
} catch (error) {
    console.log(error.message);
}