abstract class Bird {
    abstract void fly(); 
}

class Sparrow extends Bird {
    void fly() {
        System.out.println("Sparrow can fly");
    }
}

public class AbstractBird {
    public static void main(String[] args) {
        Sparrow s = new Sparrow();
        s.fly();
    }
}
