// Function to calculate the distance in blocks from the headquarters
function distanceFromHqInBlocks(location){
    return Math.abs(location - 42);
  }
  
  // Function to calculate the distance in feet from the headquarters
  function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
  }
  
  // Function to calculate the distance traveled in feet between two locations
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }
  
  // Function to calculate the fare price based on the distance traveled
  function calculatesFarePrice(start, destination) {
    const feetTraveled = distanceTravelledInFeet(start, destination);
  
    if (feetTraveled <= 400) {
      return 0; // The first 400 feet are free.
    } 
    else if (feetTraveled > 400 && feetTraveled <= 2000) {
      return (feetTraveled - 400) * 0.02; 
      // 2 cents per foot after the first 400 feet.
    }
     else if (feetTraveled > 2000 && feetTraveled <= 2500) {
      return 25; 
      // A flat rate of $25 for distances over 2000 feet.
    } 
    else {
      return 'cannot travel that far';
       // Cannot travel more than 2500 feet.
    }
  }
  
  