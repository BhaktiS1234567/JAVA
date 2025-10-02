interface Appliance {
    void turnOn();
}

class Fan implements Appliance {
    public void turnOn() {
        System.out.println("Fan is turned on");
    }
}

public class InterfaceAppliance {
    public static void main(String[] args) {
        Fan f = new Fan();
        f.turnOn();
    }
}
