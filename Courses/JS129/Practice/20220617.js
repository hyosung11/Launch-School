class ParkingLot {
  slots = [];

  constructor(parkkingSize) {
    this.slots = new Array(parkkingSize).fill(null);
  }

  park(carId) {
    console.log(`Parking car: ${carId}`);
    if (this.slots.every((slot) => slot !== null)) {
      return false;
    }

    for (let idx = 0; idx <= this.slots.length; idx += 1) {
      const slot = this.slots[idx];

      if (slot === null) {
        this.slots[idx] = carId;
        return true;
      }
    }
  }

  remove(carId) {
    console.log(`Leaving car: ${carId}`);
    if (this.slots.every((slot) => slot !== carId)) {
      return false;
    }
  }


}