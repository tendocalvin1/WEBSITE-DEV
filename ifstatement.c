#include<stdio.h>
int main(){
    int x;
   
    printf("Enter the number:");
    scanf("%d",&x);
    if(x==1){
        printf("GIKWATAKO\nGIKWATAKO\nGIKWATAKO\n");
    }else if(x==2){
        printf("TOGOKWATAKO\nTOGOKWATAKO\nTOGOKWATAKO\n");
    }else{
        printf("Invalid output!");
    }
    return 0;

}