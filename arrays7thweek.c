# include<stdio.h>
int main(){
     int marks[4] = {37,68,56,78};
    printf("coursework:%d\n", marks[3]);
    printf("exam:%d\n", marks[2]);
    int finalscore = marks[3] + marks[2];
    printf("finalscore:%d\n",finalscore);
return 0;

}