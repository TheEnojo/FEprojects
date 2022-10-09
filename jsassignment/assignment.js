//CLASS
/**
 * A container of integers that should support
 * addition, removal, and search for the median integer
 */
 class Container {
    constructor(arr) {
      this.array = arr;
    }
    /**
     * Adds the specified value to the container
     */
    add(value) {
      // TODO: implement this method
      this.array.push(value)
    }
   
    /**
     * Attempts to delete one item of the specified value from the container
     *
     *  @return {boolean} true, if the value has been deleted, or
     *                   false, otherwise.
     */
    delete(value) {
      // TODO: implement this method
      if (value){
        this.array.splice(indexOf(value), value);
      }
      return false;
    }
   
    /**
     * Finds the container's median integer value, which is
     * the middle integer when the all integers are sorted in order.
     * If the sorted array has an even length,
     * the leftmost integer between the two middle
     * integers should be considered as the median.
     *
     * @return {number} the median if the array is not empty, or
     * @throws {Error} a runtime exception, otherwise.
     */
    getMedian() {
      // TODO: implement this method
      return 0;
    }
  }   

    