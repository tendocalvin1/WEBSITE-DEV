#include<stdio.h>
int main(){
    int index = 0;
    while(index < 15){
        if (index == 6){
            index ++;
            continue;
        }
        printf("%d\n",index);
        index ++;
    }
    return 0; 
}