//CLASS AND OBJECTS

class Dog {
    String name;
    int age;

    void bark() {
        System.out.println(name + " is barking!");
    }
}
public class DogDemo {
    public static void main(String[] args) {
        Dog d1 = new Dog();  
        d1.name = "Tommy";
        d1.age = 3;

        d1.bark(); 
    }
}

