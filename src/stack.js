var stack = function() {
    var top;
    var data;
    var size;


    stack.prototype.push = data => {

        if(this.isFull()) {
            console.log('Full!!!');
        }else {
            this.data[++this.top] = data;
        }
    }

    stack.prototype.print = () => {
        var output = "";
       for(i = 0; i<=this.top; i++) {
           output += ` |  ${this.data[i]}  |  `
       }
       console.log(output);
    }

    stack.prototype.peek = () => {
        if(this.isEmpty()) {
            console.log('Empty!!!')
        }
        else console.log(this.data[this.top]);
    }

    stack.prototype.pop = () => {

        if(this.isEmpty()) {
            console.log('Empty!!!');
            return;
        }
        else console.log(this.data[this.top--]);
    }
    
    stack.prototype.isEmpty = () => {
        return this.top == -1;
    }

    stack.prototype.isFull = () => {
        return this.top == this.size-1;
    }
}

function NewStack(size) {
    var s = new stack();
    s.top = -1;
    s.data = new Array();
    s.size = size;
    return s;

}

