package MULTITHREADING;

public class DeadLock {
    public static void main(String[] args) throws InterruptedException {
        
        Thread t = new Thread(() -> {
            System.out.println("Thread started");
            try {
                Thread.currentThread().join(); 
            } 
            catch (InterruptedException e) {
                System.out.println("Thread interrupted");
            }
            System.out.println("No print");
        });
        
        t.start();
        System.out.println("Main thread finished");
    }
}
