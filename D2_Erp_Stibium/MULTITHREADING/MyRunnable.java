package MULTITHREADING;

public class MyRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println("Thread is running using Runnable interface");
    }

    public static void main(String[] args) {
        Thread t = new Thread(new MyRunnable());
        t.start();
    }
}

