Sort the numbers descending as in order with one of them at the beginning and one at the end.

Sample 1

Input: [4, 13, 8, 9, 7, 1, 6]

Output: [13, 8, 6, 1, 4, 7, 9]

Sample 2

Input: [16, 23, 7, 11, 3, 14]

Output: [23, 14, 7, 3, 11, 16]

/////////////////////////////////////////////////
let arr= [4, 13, 8, 9, 7, 1, 6];
arr.sort(function(a, b){return b - a}); //verilen diziyi sıralama [13,9,8,7,6,4,1]
let arrsort1=[]; //indisi çift olanları tutan dizi 
let arrsort2=[]; //indisi tek olanları tutan dizi
for(var i=0;i<arr.length;i++){
if(i%2==0){
arrsort1.push(arr[i]) //çift indisli sayıları ekleme [13,8,6,1]
}else{
arrsort2.push(arr[i]) //tek indisli sayıları ekleme [9,7,4]
}
arrsort2.sort(function(k,m){return k-m}) //tek indisli dizileri ters çevirme [4,7,9]

}
arr=arrsort1.concat(arrsort2) // dizileri birleştirme [13,8,6,1,4,7,9]
//console.log(arrsort1)
//console.log(arrsort2)
console.log(arr)
