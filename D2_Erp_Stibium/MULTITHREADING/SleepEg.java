package MULTITHREADING;

public class SleepEg extends Thread {
    @Override
    public void run() {
        try {
            for (int i = 1; i <= 3; i++) {
                System.out.println("Count: " + i);
                Thread.sleep(500);
            }
        } 
        catch (InterruptedException e) {
            System.out.println("Interrupted");
        }
    }
    public static void main(String[] args) {
        SleepEg t = new SleepEg();
        t.start();
    }
}
