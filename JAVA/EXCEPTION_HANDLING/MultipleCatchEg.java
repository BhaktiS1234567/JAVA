package EXCEPTION_HANDLING;

public class MultipleCatchEg {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3};
        int a = 10, b = 0;

        try {
            System.out.println(arr[5]); 
            int result = a / b;         
        } 
        catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index error");
        } 
        catch (Exception e) {
            System.out.println("Arithmetic error");
        }

        System.out.println("Program continues...");
    }
}
