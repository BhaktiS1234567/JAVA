package MULTITHREADING;

public class StartMethod extends Thread {
    @Override
    public void run() {
        System.out.println("Thread started");
    }

    public static void main(String[] args) {
        StartMethod t = new StartMethod();
        t.start();
    }
}

