package com.CodeWithMosh;

import java.util.Arrays;
import java.util.HashMap;

public class Main {

    public static void main(String[] args) {
	// write your code here


        int A[] = {1,4,1,5,8,1,3,5,1,4,1,3,7,2};;
        int min=Arrays.stream(A).min().getAsInt();
        int max = Arrays.stream(A).max().getAsInt();
        int Fr[]=new int[A.length];

        for(int i=0;i<Fr.length;i++){
            Fr[i]=-1;
        }
        for(int i=0;i<A.length;i++){
            Fr[A[i]]++;
        }
        for(int i=min;i<=max;i++){
            Fr[i]++;
            System.out.println(i + " " +Fr[i] );
        }
        System.out.println("");
        //-----------------------bonus------------------------
        int rows = Arrays.stream(Fr).max().getAsInt();
        int cols=max-min+1;
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
                    if(Fr[c]>0&&j<cols){
                        matrix[i][j]=" * ";
                        Fr[c]--;
                        j++;
                    }
                    else if(Fr[c]==0&&j<cols){
                        matrix[i][j]="   ";
                        j++;
                    }
                }
        }
        for(int i=0;i<=rows;i++){
            for(int c=0;c<cols;c++){
                System.out.print(matrix[i][c]);
            }
            System.out.print("\n");
        }



    }
}
