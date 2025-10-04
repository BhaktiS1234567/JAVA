package MULTITHREADING;

public class Join extends Thread {
    @Override
    public void run() {
        System.out.println("Thread running: " + getName());
    }

    public static void main(String[] args) throws InterruptedException {
        Join t1 = new Join();
        t1.start();
        t1.join();
        System.out.println("Main thread finished after join");
    }
}

