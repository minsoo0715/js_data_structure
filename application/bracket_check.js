

import {NewStack, stack} from "../src/stack.js"

var st = NewStack(100);


var str = "[1+{1+1+(3+4)}]";

function bracket_check(str) {
    for(var i = 0; i<str.length; i++) {
        var ch = str.charAt(i);
    
        if(ch === "[" || ch === "{" || ch === "(") {
            st.push(ch);
        }else if(ch === "]") {
           if(st.pop() != "[") {
                return false;
           }        
        } else if(ch === "}") {
            if(st.pop() != "{") {
                return false;
           }
       }  else if(ch === ")") {

        if(st.pop() != "(") {
            return false;
       }     
    }
        
        
    }
    return true;
}


console.log(bracket_check(str));
