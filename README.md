REVERSING A STRING
-------------------------------------------
public class mahi {
    public static void main(String[] args) {
        String str = "Infosys";
        String reverse = "";

        for (int i = str.length() - 1; i >= 0; i--) {
            reverse = reverse + str.charAt(i);
        }

        System.out.println(" " + reverse);
    }
}
output:-
sysofni
------------------------------------------
ARRAYS:-
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
output:-
largest 30
smallest 10
------------------------------------------------
LOOP:-
public class loop {
    public static void main(String[] args) {
        int n = 10;
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            sum = sum + i;
        }

        System.out.println(" " + sum);
    }
}
output:-
55
-------------------------------------------------
PALINDROME:-
public class PalindromeString {
    public static void main(String[] args) {
        String str = "madam";
        String rev = "";

        for (int i = str.length() - 1; i >= 0; i--) {
            rev = rev + str.charAt(i);
        }

        if (str.equals(rev))
            System.out.println("Palindrome");
        else
            System.out.println("Not Palindrome");
    }
}
OUTPUT:-
palindrome
