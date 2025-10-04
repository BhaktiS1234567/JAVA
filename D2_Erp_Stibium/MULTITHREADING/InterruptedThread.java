package MULTITHREADING;

public class InterruptedThread extends Thread {
    @Override
    public void run() {
        try {
            for (int i = 1; i <= 5; i++) {
                System.out.println(i);
                Thread.sleep(500);
            }
        } 
        catch (InterruptedException e) {
            System.out.println("Thread interrupted");
        }
    }

    public static void main(String[] args) {
        InterruptedThread t = new InterruptedThread();
        t.start();
        t.interrupt();
    }
}

