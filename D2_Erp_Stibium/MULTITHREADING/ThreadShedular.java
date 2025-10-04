package MULTITHREADING;

public class ThreadShedular extends Thread {
    @Override
    public void run() {
        System.out.println("Running: " + getName());
    }

    public static void main(String[] args) {
        ThreadShedular t1 = new ThreadShedular();
        ThreadShedular t2 = new ThreadShedular();
        ThreadShedular t3 = new ThreadShedular();
        t1.start();
        t2.start();
        t3.start();
    }
}
