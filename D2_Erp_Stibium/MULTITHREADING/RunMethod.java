package MULTITHREADING;

public class RunMethod extends Thread {
    @Override
    public void run() {
        System.out.println("Run method executing");
    }

    public static void main(String[] args) {
        RunMethod t = new RunMethod();
        t.run();   
        t.start(); 
    }
}

