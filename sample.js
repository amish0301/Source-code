// // class Complex {
// //   constructor(real, imaginary) {
// //     this.real = real;
// //     this.imaginary = imaginary;
// //   }

// //   add(num) {
// //     this.real += num.real;
// //     this.imaginary += num.imaginary;
// //   }
// // }

// // let a = new Complex(2, 4);
// // let b = new Complex(7, 6);
// // a.add(b);
// // console.log(`after adding complex number become : ${a.real} + ${a.imaginary}i`);

// // Q.2
// // class Human {
// //   constructor(name, favFood) {
// //     this.name = name;
// //     this.food = favFood;
// //   }
// //   walk() {
// //     console.log(`${this.name} Student is walking`);
// //   }
// // }

// // class Student extends Human {
// //   walk() {
// //     console.log(`${this.name} Student is walking`);
// //   }
// //   favFood() {
// //     console.log(`${this.name} has favourite food : ${this.food}`);
// //   }
// // }

// // let a = new Student("amish","Maggie");
// // a.walk();
// // a.favFood();
// // console.log(Student instanceof Human);

// // Task : Make Password Generator

// let chars = "abcde";
// let uppchar = "ABCDE";
// let nums = "1234567890";
// let special = "!@#$%^&*()";

// class Password {
//   /*
//     // There are Three func
//     1.weak pass
//     2.strong pass
//     3. super strong
//   */

//   constructor() {
//     this.wps = "";
//     this.sps = "";
//   }

//   weakPassword(sz) {
//     // we just keep it lower and upper case

//     if (sz < 3) console.log("your password should be atleast three charcaters");
//     else {
//       let i = 0;
//       while (i < sz) {
//         this.wps += uppchar[Math.floor(Math.random() * uppchar.length)];
//         this.wps += chars[Math.floor(Math.random() * chars.length)];
//         this.wps += nums[Math.floor(Math.random() * nums.length)];
//         i += 3;
//       }
//     }

//     console.log(this.wps.substring(0, 7));
//   }

//   strongPassword(sz) {
//     const arr = [chars, nums, uppchar, special];

//     for (let i = 0; i < sz; i++) {
//       let rand1 = arr[Math.floor(Math.random() * 4)];
//       let rand2 = rand1[Math.floor(Math.random() * rand1.length)];

//       this.sps += rand2;
//     }

//     console.log(this.sps);
//   }

//   // 3rd func
//   superStrongPassword() {}
// }

// let obj = new Password();
// obj.weakPassword(7);
// obj.strongPassword(7);


// // CLOSURES CONCEPT:

// function func() {
//     let a = 1;
//     console.log(a);

//     const y = () => {

//         console.log(`inside y : ${a}`);
//         const z = () => {
//             console.log(`inside z : ${a}`);
//         }
//         z();
//     }
//     console.log('direct next to func');
//     a = 999;
//     return y();
// }

// func();

console.log('hello world');