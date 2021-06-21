class Stack {
    constructor() {
        this.data = new Array();
    }

    push(item) {
        this.data.push(item);
    }

    pop() {
        if(this.isEmpty()) {
            return;
        }
        
        return this.data.pop();
    }

    peek() {
        console.log(this.data[this.data.length-1]);
    }

    isEmpty() {
        return this.data.length == 0;
    }


    print() {
     let temp = new Array();
     temp = this.data;

     temp.reverse();

     temp.forEach(element => {
         console.log(element);
     })

    }
}

var stack = new Stack();

stack.push(1);
stack.push(2);
stack.peek();
