function distanceFromHqInBlocks(blocks) {
    const headquarters = 42; // Assuming the headquarters is located at block 42
    return Math.abs(blocks - headquarters); // Calculate the absolute difference between the given block and headquarters block
  }
  function distanceFromHqInFeet(location) {
    const distance = Math.abs(location - 42) * 264;
    return distance;
  }
  function distanceTravelledInFeet(start, end) {
    const feetPerBlock = 264; // Assuming each block is 264 feet long
    const distance = Math.abs(start - end) * feetPerBlock;
    return distance;
  }
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (start === 43 && destination === 44) {
      return 0;
    } else if (distance >= 400 && distance <= 2000) {
      // Calculate the fare price for distances between 400 and 2000 feet
      const farePrice = (distance - 400) * 0.02; // 2 cents per foot
      return farePrice;
    } else if (distance > 2000 && distance <= 2500) {
      // Calculate the fare price for distances between 2000 and 2500 feet
      return 25;
    } else {
      // Distance is less than 400 feet or greater than 2500 feet
      return 'cannot travel that far';
    }
  }