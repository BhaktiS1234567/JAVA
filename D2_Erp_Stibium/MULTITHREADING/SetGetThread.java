package MULTITHREADING;

public class SetGetThread extends Thread {
    @Override
    public void run() {
        System.out.println("Thread name: " + getName());
    }

    public static void main(String[] args) {
        SetGetThread t = new SetGetThread();
        t.setName("Bhakti");
        t.start();
    }
}

