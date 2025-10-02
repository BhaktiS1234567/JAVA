package COLLECTIONS;

import java.util.Stack;

public class StackEg {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();
        stack.push(10);
        stack.push(20);
        stack.push(30);

        System.out.println(stack);      
        System.out.println("Popped: " + stack.pop()); 
        System.out.println(stack);
    }
}
