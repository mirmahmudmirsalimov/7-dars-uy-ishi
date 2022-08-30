// 1) k va n butun son berilgan. K ni n marta chiqaruvchi dastur tuzing
// 2) a, b sonlar beilgan. A b dan katta a va b orasidagi butun sonlarni chiqaruvchi dastur tuzing. A va B ni ozi ham chiqsin
// 3) a,b sonlar berilgan a b dan katta a va b orasidagi barcha butun sonlarni kamayish tartibida chiqaring a va b kirmasin 
// 4) 1kg konfet 10000so'm berilgan. 1 kgdan 10 kggacha barchasin narxini chiqaruvchi dastur tuzing
// 5) 1kg konfet 10000so'm. 0,1 kg dan 1 kg gacha bo'lgan konfet narxin toping
// 6) 1kg konfet 10000so'm. 1,2kg, 1,4, 1,6, 1,8, 2kg konfetlarni narxini toping
// 7) a,b sonlar berilgan. A dan b gacha barcha butun sonlarni yig'indisin topuvchi dastur yozing
// 😍 a,b sonlar berilgan. A dan b gacha barcha butun sonlarni ko'paytmasin topuvchi dastur yozing
// 9) a,b sonlar berilgan a dan b gacha bo'lgan sonlarni kvadratlarini yig'indisin topuvchi dastur toping
// 10) n soni berilgan quydagi yig'indini hisoblang. S = 1/1 + 1/2 + …. + 1/n
// 11) n soni berilgan shu soni ichidan toqlarin ko'ruvchi dastur yozing
// 12) n soni berilgan shu sonlarni ichidan juftlarini koruvchi dastur yozing
// 13) n soni berilgan shu son ichidan faqat murakkab sonlarni aniqlovchi dastur yozing
// 14) n soni berilgan shu sonlarni ichidan jufat va toq sonlarni kvadratlarini chiqaring
// 15) n son berilgan n sonidan kamayish tartibida sonlar chiqarilsin
// 16) n son berilgan 0 va ngacha sonlar orasida 5 ga karralisini tashlab o'tib ketuvchi dastur tuzing
// 17) n butun son berilgan ngacha butun sonlarni ko'paytmasini topuvchi dastur tuzing
// 18) n butun son berilgan 1 sikldan foydalanib quydagi yigindini hisoblovchi dastur tuzing. 1!+2!+..+n!
// 19) n butun son va x haqiqiy sonlar berilgan (n>0) Quydagi yig'indi hisoblang.1+x+x2/2!+x3/3!+..+xn/n!
// 20) n va x sonlar berilgan 0 dan n gacha sonlar orasida x ga bo'linadigan sonlarni topuvchi dastur tuzing
// 21) n va x sonlar berilgan quydagi yigindini topuvchi dastur tuzing. 1(1,2,3…x) + 2(1,2,3..x) + .. + n(1,2,3,..x)

// problem 1

// let k = 9
// let n = 10;
// for (let i = 0; i < n; i++) {
//     console.log(k);
// }

// problem 2

// let a = 12
// let b = 1;
// let sum = []
// if (a > b) {
//     for (let i = b; i <= a; i++) {
//        console.log(sum.push(i));
//     }
// } else console.log(`${a} son ${b} sondan kichik`);

// problem 7

// let a = 12
// let b = 1;
// let sum = 1;
// for (let i = b; i <= a; i++) {
//     sum +=i
// }
// console.log(sum);

// problem 8

// let a = 12
// let b = 1;
// let sum = 1;
// for (let i = b; i <= a; i++) {
//     sum *=i
// }
// console.log(sum);

// problem 9

// let a = 3
// let b = 1;
// let sum = 1;
// for (let i = b; i <= a; i++) {
//     sum *=i**2
// }
// console.log(sum);

// problem 11

// let n = 1234567;
// let sum  = 0;

// while (n > 0){
//     sum = n % 10;
//     if(sum % 2 !== 0){
//         console.log(sum);
//     }
//     n = Math.trunc(n / 10);
    
// }

// problem 12


// let n = 1234567;
// let sum  = 0;

// while (n > 0){
//     sum = n % 10;
//     if(sum % 2 == 0){
//         console.log(sum);
//     }
//     n = Math.trunc(n / 10);
    
// }


// problem 13


// let n = 9;
// let sum  = 0;

// while (n > 0){
//     sum = n % 10;
//     if(sum % 2 == 0 && sum > 2){
//         console.log(sum);
//     }
//     else console.log("bu son ichida murakkab son yuq");
//     n = Math.trunc(n / 10);
    
// }

// problem 14


// let n = 2435;
// let sum  = 0;
// let juft  = 0;
// let toq  = 0;

// while (n > 0){
//     sum = n % 10;
//     if(sum % 2 == 0 ){
//         juft += sum**2
//     }
//     else if(sum % 2 == 1 ){
//         toq += sum**2
       
//     }
    
//     n = Math.trunc(n / 10);
    
// }
// console.log(juft,toq);


// problem 16

// let n = 10;
// let sum  = 0;

// while (n > 0){
//     sum = n % 10;
//     if(sum % 5 == 0){
//         console.log(sum);
//     }
// }

for(let i = 1; i <= 9; i++){
    for(let j = 1; j <= 9; j++){
        console.log(i + "x" + j + "="+ i*j);
    }
    console.log("");
}


 
   
 
 
   
