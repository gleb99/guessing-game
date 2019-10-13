class GuessingGame {
    constructor() {
        this.number = 0;
        }
    
      setRange(min, max) {
        this.min = min;
        this.max = max;
      }
    
      guess() {
        this.summ = this.max + this.min;
        this.number = Math.ceil(this.summ/2);
        return this.number;
      }
    
      lower() {
        this.max = this.number;
      }
    
      greater() {
        this.min = this.number;
      }
}

module.exports = GuessingGame;
