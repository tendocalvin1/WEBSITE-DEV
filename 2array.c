#include<stdio.h>
int main(){
    // monthly earning 500000,900000,650000;
    // monthly rent 55000,200000,160000;
    int values [3][3];
    values[0][0]= 500000;
    values[0][1]=55000;
    values[1][0]= 900000;
    values[1][1]= 200000;
    values[2][0] = 650000;
    values[2][1]= 160000;
    values[0][2]= values[0][0]- values[0][1];
    values[1][2]= values[1][0]- values[1][1];
    values[2][2]= values[2][0] - values[2][1];
    printf("Biz\tME\tMR\tMS\n");
    printf("DB\t%d\t%d\t%d\n",values[0][0],values[0][1],values[0][2]);
    printf("PB\t%d\t%d\t%d\n",values[1][0],values[1][1],values[1][2]);
    printf("MMB\t%d\t%d\t%d\n",values[2][0],values[2][1],values[2][2]);
    int sum= values[0][2] + values[1][2] + values[2][2];
    printf("Solomon's total saving is %d\n", sum);
    
    
    



    return 0;
}