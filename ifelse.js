//  IF ELSE UCHUN MASALALAR

// 1) A butun son berilgan. Jumlani rostlikka tekshiring: A son musbat
// 2) A butun son berilgan. Jumlani rostlikka tekshiring: A toq son
// 3) A butun son berilgan. Junlani rostlikka tekshiring: A juft son
// 4) Ikkita butun son berilgan. Jumlani rostlikka tekshiring. M-s a > 0 && b > 0
// 5) 3 ta son berilgan a,b,c. a bdan katta b c dan katta rostlikka tekshiring
// 6) a, b, c, son berilgan. B son a va c sonlarni orasida yotadi.
// 7) a, b sonlar berilgan sonlarni toq songa tekshiring.
// 😍 a,b,c,d sonlar berilgan barchasi musbat
// 9) a,b,c sonlar berilgan kamida ikkitasi musbat berilgan
// 10) hafta kunlari berilgan raqamga qarab hafta kunlarini nomini chiqaring
// 11) Telefon nomer kodi orqali qaysi kompaniya ekanligini tekshiring
// 12) Butun son berilgan agar son musbat bo'lsa unda sonni bittaga oshiring aks xolda 1taga kamaytiring
// 13) Butun son berilgan agar son musbat bo'lsa sonni 3 ga oshiring manfiy bo'lsa unda 2ga kamaytiring
// 14) Ikkita butun son berilgan kattasin aniqlovchi dastur tuzing
// 15) 3 ta butun son berilgan eng kattasini aniqlovchi dastur tuzing
// 16) 3 ta son berilgan eng kichikin aniqlovchi dastur tuzing
// 17) Jinsga qarab rasm chiqivchi dastur tuzing!
// 18) Bahoga qarab stependiyani aniqlovchi dastur tuzing
// 19) Butun son berilgan shu songa qarab toq musbat, toq manfiy, juft musbat, juft manfiy deb chiqaruvchi dastur tuzing
// 20) Yilga qarab yoshin aniqlovchi dastur tuzing
// 21) 3 ta butun son berilgan jumlani rostlikkar tekshiring. A <= B <= C
// 22) ikki butun son berilgan ikki sondan faqat 1tasi toq son hisoblanadi
// 23) a,b,c sonlar berilgan har biri musbat son
// 24) a,b,c sonlardan biri musbat son
// 25) 3 xonali son berilgan har bir raqamlari har xil
// 26) 3 xonali son berilgan raqamlari ketma ket o'sib boruvchi joylashgan
// 27) Kompyuter nomiga qarab kompyuter summasini chiqaruvchi dastur yarating
// 28) Sonlar berilgan shu sonlar ichidan faqat murakkab sonlarni chiqaruvchi dastur tuzing (for)

// problem 1

// var a = 3;
// if(a >= 0){
//     console.log(`${a} soni musbat`);
// }
// else{
//     console.log(`${a} soni manfiy`);

// }

// problem 2

// var a = 101;
// if(a % 2 === 1){
//     console.log(`${a} soni toq `);
// }
// else{
//     console.log(`${a} soni juft`);

// }

// problem 3

// var a = 101;
// if(a % 2 === 0){
//     console.log(`${a} soni juft `);
// }
// else{
//     console.log(`${a} soni toq`);

// }

// problem 4

// var a = 4;
// var b = -1;
// if(a > 0 && b > 0)
// console.log(true);
// else console.log(false);


// problem 5

// var a = 4;
// var b = 3;
// var c = 1;
// if(a > b && b >c)
// console.log(true);
// else console.log(false);

// problem 6

// var a = 1;
// var b = 3;
// var c = 9;
// if(a < b < c || a > b > c)
// console.log(true);
// else  console.log(false);


// problem 7

// var a = 4;
// var b = 3;
// if(a  % 2 === 1 && b % 2 === 1)
// console.log(true);
// else console.log(false);

// problem 8

// var a = 2;
// var b = 6;
// var c = 1;
// var d = 10;
// if((a  % 2 === 0 && b % 2 === 0) && (c  % 2 === 0 && d % 2 === 0) )
// console.log(true);
// else console.log(false);

// problem 9

// var a = 2;
// var b = 1;
// var c = 6;
// if((a  % 2 === 0 && b % 2 === 0) && c  % 2 === 1  )
// console.log(true);
// else if((a  % 2 === 0 && c % 2 === 0) && b  % 2 === 1  )
//  console.log(true);
//  else if((b  % 2 === 0 && c % 2 === 0) && a  % 2 === 1  )
//  console.log(true);
//  else console.log(false);


// problem 10

// var a = 7;

// if( a === 1)console.log("dushanba");
// else if( a === 2)console.log("seshanba");
// else if( a === 3)console.log("chorshnaba");
// else if( a === 4)console.log("payshanba");
// else if( a === 5)console.log("juma");
// else if( a === 6)console.log("shanba");
// else if( a === 7)console.log("yakshanba");
// else console.log("Bu raqam ostida hafta kunlari yo'q");


// problem 11

// var a = 97;

// if( a === 97)console.log("MobiUz");
// else if( a === 99)console.log("UzMobili");
// else if( a === 93 || a === 94)console.log("Usel");
// else if( a === 90 && a === 91)console.log("Beline");
// else if( a === 33)console.log("Hummans");
// else console.log("Bu raqam ostida kompaniyalar  yo'q");


// problem 12

//  var a = -101;
// if(a > 0){
//     console.log(a+1);
// }
// else{
//     console.log(a-1);
// }

// problem 13

// var a = 2;
// var b = 3;
// if(a > b)
// console.log(`${a} soni ${b} sonidan katta`);
// else if(a < b)
// console.log(`${b} soni ${a} sonidan katta`);

// problem 13

// var a = -101;
// if(a > 0){
//     console.log(a+3);
// }
// else{
//     console.log(a-2);
// }


// amalitotcha 

// problem 20

// const hozirgiYil = 2022
// const meniYilim = document.querySelector("#input")
// const text = document.querySelector("#text")
// const btn = document.querySelector("#btn")



// btn.addEventListener("click", function (evt) {
//     // evt.defaultPrevented();
//     if (meniYilim.value < 2022) {
//         const result = hozirgiYil - meniYilim.value
//         text.textContent = result
//     }
//     else {
//         text.textContent = "hali bu yil kelmadi bro"

//     }
    
// })


// problem 15

// let a = 4;
// let b = 99;
// let c  = 10;
// if (a < b && c < b)console.log("b katta son");
// else if (b < c && a < c)console.log("c katta son");
// else if (c < b && b < a)console.log("a katta son");


// problem 16

// let a = 4;
// let b = 99;
// let c  = 10;
// if (b < a && b < c)console.log("b kichik son");
// else if (c < b && c < a)console.log("c kichik son");
// else if (a < c && a < b)console.log("a kichik son");


// problem 18

// let baho = 2;

// FUNCTION BILAN YECHILISHI/////////////////////////////////////////////////////////////

// const stependiya = 200
// function sum (baho){
//     const result = (stependiya * baho)/2
//     console.log("sizning stependiyangiz "  + (Math.floor(result) + " ming so'm"));
// }
// sum(5)

// IF ELSE BILAN YECHILISHI/////////////////////////////////////////////////////////////////

// if (baho === 2){
//     console.log(`siz ${baho} oldingiz stependiyangiz 200 ming`);
// }
// else if (baho === 3){
//     console.log(`siz ${baho} oldingiz stependiyangiz 300 ming`);
// }
// else if (baho === 4){
//     console.log(`siz ${baho} oldingiz stependiyangiz 400 ming`);
// }
// if (baho === 5){
//     console.log(`siz ${baho} oldingiz stependiyangiz 500 ming`);
// }

// problem 19

// const int =  -11;
// if(int > 0 && int % 2 === 0) console.log("juft musbat");
// else if(int > 0 && int % 2 === 1) console.log("toq musbat");
// else if(int < 0 && int % 2 === -1) console.log("toq manfiy");
// else if(int < 0 && int % 2 === 0) console.log("juft manfiy");

// problem 25

// let a = 446;
// let b = a  % 10
// let d = a - b;
// let c = d / 10;
// let e = c % 10;
// let i = c - e;
// let f = i / 10;
// if(f !== e && e !== b){
//     console.log("bu son teng emas");
// }
// else console.log("bu son  teng");



// problem 26

// let a = 456;
// let b = a  % 10
// let d = a - b;
// let c = d / 10;
// let e = c % 10;
// let i = c - e;
// let f = i / 10;
// if(f < e && e < b){
//     console.log("bu son o'sish tartibida joylashgan");
// }
// else console.log("bu son  tartibsiz joylashgan");