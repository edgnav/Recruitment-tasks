package com.first_task;

import java.util.Arrays;
import java.util.HashMap;

public class Main {

    public static void main(String[] args) {
        // write your code here


        int A[] = {1,4,1,5,8,1,3,5,1,4,1,3,7,2};
        int length=A.length;
        int min=Arrays.stream(A).min().getAsInt();
        int max = Arrays.stream(A).max().getAsInt();
        int[] frequencies=CountFrequencies(A,length);
        PrintFrequencies(frequencies,min,max);
        //-----------------------bonus------------------------
        int rows = Arrays.stream(frequencies).max().getAsInt();
        int cols=max-min+1;
        String[][]matrix=MakeMatrix(frequencies,min,max,rows,cols);
        PrintMatrix(matrix,rows,cols);

    }
    public static int [] CountFrequencies(int[]A,int length){

        int frequencies[]=new int[length];
        for(int i=0;i<A.length;i++){
            frequencies[A[i]]++;
        }
        return frequencies;
    }

    public static void PrintFrequencies(int[] frequencies,int min, int max){

        System.out.print("frequency:");
        for(int i=min;i<=max;i++){
            System.out.print(" "+frequencies[i]);
            if(i!=max){
                System.out.print(",");
            }
        }
        System.out.println("");

        System.out.print("number   :");
        for(int i=min;i<=max;i++){
            System.out.print(" "+i);
            if(i!=max){
                System.out.print(",");
            }
        }
        System.out.println("");
        System.out.println("");
    }

    public static String [][] MakeMatrix(int[] frequencies,int min,int max,int rows,int cols){

        String[][] matrix=new String[rows+1][cols];
        int j=0;
        for(int i=rows;i>=0;i--){
            j=0;
            for(int c=min;c<=max;c++)
                if(i==rows&&j<cols){
                    matrix[i][j]=" "+ String.valueOf(c)+" ";
                    j++;
                }
                else{
                    if(frequencies[c]>0&&j<cols){
                        matrix[i][j]=" * ";
                        frequencies[c]--;
                        j++;
                    }
                    else if(frequencies[c]==0&&j<cols){
                        matrix[i][j]="   ";
                        j++;
                    }
                }
        }
        return matrix;
    }

    public static void PrintMatrix(String[][]matrix,int rows,int cols){
        for(int i=0;i<=rows;i++){
            for(int c=0;c<cols;c++){
                System.out.print(matrix[i][c]);
            }
            System.out.print("\n");
        }

    }

}