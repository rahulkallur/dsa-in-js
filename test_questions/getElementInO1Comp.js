class RandomSet {
    constructor() {
        this.data = [];
        this.dataMap = new Map();
    }

    insert(val) {
        if(this.dataMap.has(val)){
            return false;
        }

        this.dataMap.set(val,this.data.length);
        this.data.push(val);
        return true;
    }

    delete(val) {
        if(!this.dataMap.has(val)){
            return false;
        }

        const index = this.dataMap.get(val);
        console.log("Index: " + index);
        console.log("Date: " + this.data);
        this.data[index] = this.data[this.data.length - 1];
        console.log("Date: " + this.data);
        this.data.pop();
        this.dataMap.set(this.data[index],index);
        this.dataMap.delete(val);
        return true;
    }

    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.data.length);
        return this.data[randomIndex];
    }
}

const randomSet = new RandomSet();

console.log(randomSet.insert(10)); // true
console.log(randomSet.insert(20)); // true
console.log(randomSet.insert(30)); // true
console.log(randomSet.delete(20)); // true
console.log(randomSet.getRandom()); // Randomly returns 10 or 30
console.log(randomSet.insert(20)); // true (reinsert 20)
console.log(randomSet.getRandom()); // Randomly returns 10, 30, or 20
console.log(randomSet.getRandom());