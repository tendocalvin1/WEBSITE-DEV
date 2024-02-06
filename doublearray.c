# include<stdio.h>
int main(){
    // old testament 30 37 ..
    // programming 40 42 ..
    int marks[2][3];
    marks[0][0] =30;
    marks [0][1]= 37;
    marks[1][0] =40;
    marks [1][1]= 42;
    marks [0][2] = marks[0][0]  + marks[0][1] ;
    marks [1][2] = marks[1][0]  + marks [1][1] ;
    printf("CU\tCW\tEX\tFS\n");
    printf("OT\t%d\t%d\t%d\n",marks[0][0],marks[0][1],marks [0][2]);
    printf("SP\t%d\t%d\t%d\n",marks[1][0],marks [1][1],marks [1][2]);

    return 0;
}