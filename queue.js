class queue {
    constructor() {
        this.array = []
        this.size = 5
    }

    push(element) {
        if (this.array.length < 5) {
            this.array.push(element)
        }
        else {
            console.log("overflow");
        }
    }

    print() {
        this.array.map((val, ind) => {
            console.log(val);
        })
    }

    removeElement(index) {
        for (let i = index; i < this.array.length; i++) {
            this.array[i] = this.array[i + 1]
        }
        this.array.length = this.array.length - 1

        // console.log(this.array);
    } 
    
    addElement(index, element) {
        for (let i = this.array.length - 1; i >= index; i--) {
            this.array[i + 1] = this.array[i]
        }
        this.array[index] = element

        console.log(this.array);
    }

}

let q1 = new queue()
q1.push(78)
q1.push(45)
q1.push(23)
q1.push(19)
q1.push(8)

q1.print()

q1.removeElement(2)
q1.addElement(1,49)