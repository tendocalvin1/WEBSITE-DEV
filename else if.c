#include<stdio.h>
int main(){
    int number;
    printf("Enter the number:");
    scanf("%d", &number);
    if(number == 0){
        printf("number is zero\n");
    }else if (number > 0){
        printf("number is positive\n");
    }else{
        printf("number is negative\n");
    }
    return 0;
}