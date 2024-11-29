// /*let num=5
// for(i=1; i<=10; i++){
//     console.log(num + "x"+ i + "=" +(num*i))
// }*/

// /*let num1 = 5;
// for (i = 10; i>=1; i--) {
//   console.log(num1 + "x" + i + "=" + num1 * i);
// }*/

// // let a=500
// //     b=600
// //     c=900
// //     d=1100
// //     e=a+b+c+d
// // console.log(a+b+c+d);
// // console.log(e/4)

// //let age=18;
// // if(age<=18){
// //     console.log("can vote");
// // }
// // else console.log("can not vote")

// // let age=18;
// // if(age<=18)
// //     {console.log("can vote");
// // }
// // else console.log("can not vote")

// // for( let i=0; i<=100; i++){
// //     if( i% 2==0)
// //         console.log(i);
// // }

// // for( let i=0; i<=100; i++){
// //     if( i% 2!=0)
// //         console.log(i);
// // }


let arr = [2, 5, 6, 7, 1, 2, 3];
let even = 0;
let odd = 0;
for (let i = 0; i <= arr.length; i++) {
  if (arr[i] % 2 == 0) {
    even++;
  } else {
    odd++;
  }
}
console.log("total Even number is: ", even);
console.log("total Odd number is: ", odd);
