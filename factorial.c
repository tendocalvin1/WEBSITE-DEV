#include<stdio.h>  // factorial calculation//
int main(){
    int n, factorial = 1;
    printf("enter a non negative integer: ");
    scanf("%d",&n);
    while (n > 0){
        factorial *= n;
        n--;
    }
    printf("factorial:%d\n",factorial);
    return 0;
}