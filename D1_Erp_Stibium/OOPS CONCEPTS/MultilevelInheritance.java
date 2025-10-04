class Vehicle {
    void start() { 
        System.out.println("Vehicle starts"); 
    }
}
class Bike extends Vehicle {
    void ride() { 
        System.out.println("Bike is riding");
     }
}
class SportsBike extends Bike {
    void turbo() { 
        System.out.println("SportsBike turbo boost!"); 
    }
}
public class MultilevelInheritance {
    public static void main(String[] args) {
        SportsBike sb = new SportsBike();
        sb.start();  
        sb.ride();   
        sb.turbo();  
    }
}
