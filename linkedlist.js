

var Node = function(value) {
    this.data = value === undefined ? null:value; 
    this.next = null;
}

var LinkedList = function() {    
    this.head = null;
    
   LinkedList.prototype.print = function() {
       var temp = this.head;
       var output = '';
       while(temp != null) {
           
           output = output + `| ${temp.data} | `
           temp = temp.next;
       }
       console.log(output);
   }


    LinkedList.prototype.append = function(newNode, p) {
        
        if(this.head === null) {
          this.head = newNode;
        }else if(p === undefined || p === null ) {
           var temp = new Node();
           temp = this.head;
           while(temp.next != null) {
               temp = temp.next;
           }
           temp.next = newNode;           
        }else {
          var temp = new Node();
          var temp2 = new Node();
          temp = this.head;

          if(p == 0) {
              newNode.next = temp;
              this.head = newNode;
          }
         else {
          for(i = 0; i<p-1; i++) {
            temp = temp.next;
          }
          temp2 = temp.next;
          temp.next = newNode;
          newNode.next = temp2; 
        }
        }
    }
    
    LinkedList.prototype.delete = function (p) {
        if(p == 0) {
            this.head = this.head.next;
        }
        else {
          var temp = new Node();
          temp = this.head;


        }
    }
}

var list = new LinkedList();
list.head = new Node(1);
list.append(new Node(2));
list.append(new Node(3))
list.append(new Node(4))
list.append(new Node(5))
list.append(new Node(6))
list.append(new Node(0), 0);
list.print()

