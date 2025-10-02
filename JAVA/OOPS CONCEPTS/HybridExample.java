class Person {
    void sleep() {
        System.out.println("Person sleeps at night");
    }
}
interface Teacher {
    void teach();
}

interface Researcher {
    void research();
}
class Professor extends Person implements Teacher, Researcher {
    public void teach() {
        System.out.println("Professor teaches students");
    }
    public void research() {
        System.out.println("Professor does research");
    }
}
public class HybridExample {
    public static void main(String[] args) {
        Professor p = new Professor();
        p.sleep();      
        p.teach();      
        p.research();   
    }
}
