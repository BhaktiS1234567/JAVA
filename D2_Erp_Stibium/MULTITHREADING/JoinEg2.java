package MULTITHREADING;

public class JoinEg2 extends Thread {
    @Override
    public void run() {
        System.out.println("Child thread running.....");
    }

    public static void main(String[] args) throws InterruptedException {
        JoinEg2 t = new JoinEg2();
        t.start();
        t.join();
        System.out.println("Main thread completed");
    }
}

