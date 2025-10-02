package COLLECTIONS;

import java.util.LinkedList;
import java.util.Queue;

public class QueueEg {
    public static void main(String[] args) {
        Queue<String> Q = new LinkedList<>();
        Q.add("A");
        Q.add("B");
        Q.add("C");

        System.out.println(Q); 
        System.out.println("Remove: " + Q.remove()); 
        System.out.println(Q);
    }
}
