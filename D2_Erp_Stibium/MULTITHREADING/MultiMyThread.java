package MULTITHREADING;

public class MultiMyThread extends Thread {

    @Override
    public void run() {
        for (int i = 1; i <= 7; i++) {
            System.out.println(i);
        }
    }

    public static void main(String[] args) {
        MultiMyThread t1 = new MultiMyThread();
        MultiMyThread t2 = new MultiMyThread();

        t1.start();
        t2.start();
    }
}

