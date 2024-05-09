class stack {
    constructor() {
        this.array = []
        this.reversearray = []
        this.size = 5
    }

    addElement(element) {
        if (this.array.length < 5) {
            this.array.push(element)
        }
        else{
            console.log("overflow");
        }
    }

    print(){
        this.array.map((val,ind)=>{
            console.log(val);
        })
    }

    reverse(){

        console.log("reverse aaray");
        for (let i = 0; i < this.array.length; i++) {
          this.reversearray[i] = this.array[this.array.length - 1 -i]            
        }

        this.array.length = this.array.length - 1

        console.log(this.reversearray);
    }

    lastElement(){
        console.log("Last Element",this.array[0]);
    }

    lastSecondElement(){
        console.log("last Second Element",this.array[1]);
    }

    firstElement(){
        console.log("First Element",this.array[this.array.length -1]);
    }
}

let s1 = new stack()
s1.addElement(32)
s1.addElement(21)
s1.addElement(5)
s1.addElement(66)

s1.print()

s1.lastElement()
s1.lastSecondElement()
s1.firstElement()

s1.reverse()