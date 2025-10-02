package EXCEPTION_HANDLING;

public class ExceptionEg {
    public static void main(String[] args) {
        int a = 10;
        int b = 0;

        try {
            int result = a / b; 
            System.out.println("Result: " + result);
        } catch (Exception e) {
            System.out.println("Cannot divide by zero");
        }

        System.out.println("Program continues");
    }
}
