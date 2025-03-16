// Code your solution in this file!
// Function to calculate the distance in blocks from HQ (42nd Street)
function distanceFromHqInBlocks(pickupLocation) {
    const hq = 42;
    return Math.abs(pickupLocation - hq);
}

// Function to calculate the distance in feet from HQ
function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264; // 1 block = 264 feet
}

// Function to calculate the distance traveled in feet
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

// Function to calculate the fare price based on distance traveled
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0;  // Free ride should return 0 instead of a string
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat rate of $25 for distances between 2000 and 2500 feet
    } else {
        return "cannot travel that far"; // Fix message to match test expectation
    }
}


