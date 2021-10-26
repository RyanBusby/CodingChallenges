package com.revature;

public class Solution {

    private static int windowSum(int[] a, int start, int end) {
        int sum = 0;
        for (int i=start; i<end; i++) {
            sum += a[i];
        }
        return sum;
    }

    public static int[] findSubArray(int[] a, int sum) {
        for (int i=a.length; i > 0; i--) {
            int windowLength = a.length - (i-1);
            for (int ii = 0; ii<i; ii++) {
                if (windowSum(a, ii, ii+windowLength)==sum) {
                    int[] subArray = new int[windowLength];
                    System.arraycopy(a, ii, subArray, 0, windowLength);
                    return subArray;
                }
            }
        }
        return new int[0];
    }

}