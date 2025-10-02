package COLLECTIONS;

import java.util.ArrayList;
import java.util.List;

public class ListEg {
    public static void main(String[] args) {
        List<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");
        fruits.add("Apple");  //duplcate allowed

        System.out.println(fruits);
    }
}
