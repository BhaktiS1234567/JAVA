interface Musician {
    void playInstrument();
}

interface Athlete {
    void playSport();
}

class kunal implements Musician, Athlete {
    public void playInstrument() {
        System.out.println("Kunal plays guitar.");
    }
    public void playSport() {
        System.out.println("Kunal plays football.");
    }
}

public class MultipleInheritance {
    public static void main(String[] args) {
        kunal k = new kunal();
        k.playInstrument();
        k.playSport();
    }
}
