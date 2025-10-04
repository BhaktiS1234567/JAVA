package EXCEPTION_HANDLING;

public class FinallyEg {
    public static void main(String[] args) {
        try {
            int a = 10 / 2;
            System.out.println("Result: " + a);
        } 
        catch (ArithmeticException e) {
            System.out.println("Error");
        } 
        finally {
            System.out.println("This block always executes");
        }
    }
}
