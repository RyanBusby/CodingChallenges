package com.revature;

import java.util.Arrays;

public class Main {

    public static void run(int[] a, int sum) {

        int[] subArray = Solution.findSubArray(a, sum);
        if (subArray.length > 0) {
            System.out.print("Sum of [");
            Arrays.stream(subArray).forEach(entry->System.out.printf("%d, ", entry));
            System.out.printf("\b\b] = %d\n", sum);
        } else {
            System.out.println("No such sub array exists");
        }

    }

    public static void main(String[] args) {

        int[] a = {14, 12, 70, 15, 99, 65, 21, 90};
        int[] b = {100, -100, 5, 5};

        int[] sumsA = {97, 179, 74};
        int[] sumsB = {0, 10, -95};

        for(int sum: sumsA) run(a, sum);
        for(int sum: sumsB) run(b, sum);

    }
}
