public class Array {
    public static void main(String[] args) {
        int[] arr = {15, 10, 25, 28, 30};
        int max = arr[0];
        int min = arr[0];
        
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max)
                max = arr[i];
            if (arr[i] < min)
                min = arr[i];
        }

        System.out.println("largest " + max);
        System.out.println("smallest " + min);
    }
}
