package MULTITHREADING;

public class YieldEg extends Thread {
    @Override
    public void run() {
        for (int i = 1; i <= 7; i++) {
            Thread.yield();
            System.out.println(Thread.currentThread().getName() + " : " + i);
        }
    }

    public static void main(String[] args) {
        YieldEg t1 = new YieldEg();
        YieldEg t2 = new YieldEg();
        t1.start();
        t2.start();
    }
}

