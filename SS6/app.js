//////// JS: Ngôn ngữ lập trình bậc cao

//// Khai báo biến (let/var/const)
// khai báo với let
// let a = 1;
// let b;


// // khai báo với var
// var c = "asdfasdklfja;sdk";

// // khai báo với const (hằng số)
// const Pi = 3.14;
// // Pi = 3; // Không được phép gán giá trị cho hằng số
// console.log(Pi);// ?? 3


// // So sánh về let vs var: khác nhau ở đâu??

// {
//   // trái đất
//   {
//     let vung2 = "Vùng 2"

//     {
//       var vung3 = "Vùng 3 được khai báo = var"
//     }
//   }
//   // console.log(vung2);
// }
// console.log(vung3);

// => Khuyến khích khai báo = "let"

////// Kiểu dữ liệu trong JS
/*
Kiểu DL
- Number: Số
- String: Chuỗi
- Boolean: true/false
- undefind: Không xác định
- Null: Kiểu dl Null
- Array: Mảng (Sử dụng: Array.isArray(arr))
- Object: Đối tượng. (sử dựng: typeof(obj))

=> cách xác định kiểu dl của 1 biến:
typeof(KDL)
*/


///// Toán tử so sánh: >,<,<=,>=,...&&, ||
/**
 *  &&: Toán tử có ít nhất 2 hoặc nhiều trường hợp
 *  (1>2 && 2<3): false && true
 * => console.log(1>2 && 2<3): false
 * NX: toán tử "&&" tìm kiếm kq "false" và trả về nó. Nếu như ko có kq nào là "false" thì trả về "true"
 *
 *
 * ||: Toán tử có ít nhất 2 hoặc nhiều trường hợp
 * (1>2 || 2<3): false || true
 * => console.log(1>2 && 2<3): false
 * NX: Toán tử "||" tìm kiếm kq "true" và trả về nó. Nếu như không có kq nào là "true" thì trả về "false"
 */


// ///////// Câu điều kiện: if - else if - else
// let diem = 10;
// /**
//  * 10->8: loại giỏi
//  * 8->6: loại khá
//  * 5-> 0: Loại trung bình
//  */
// if (diem > 8) {
//   console.log("Loại giỏi");
// }
// else if (diem <= 8 && diem >= 5) {
//   console.log("Loại khá");
// }
// else {
//   console.log("Loại trung bình");
// }


////// 3 vòng lặp cơ bản: while/ do - while /for
// : Sử dụng vòng lặp in ra từ 0 -> 10;

//while: Kiểm tra đk. "đúng" => chạy code và quay lại để ktđk. Nếu "sai" => thoát vòng lặp
// let i = 0;
// while (i <= 10) {
//   // sau mỗi lần lặp: cái gì thay đổi;
//   console.log(i);// 0,1,2,3,4,... 10
//   i++;// tăng i lên 1 đơn vị
// }

// do-while: Cho phép lặp lần đầu tiên. Sau đó bắt đầu kiểm tra đk giống hệt với while
// cho phép người dùng nhập vào số. Kiểm tra ko phải số thì bắt nhập lại.

// let input;
// do {
//   input = (prompt("Mời người dùng nhập vào 1 số bất kỳ"));// người dùng nhập.
//   console.log("Số người dùng vừa nhập là:", input);
// }
// while (input != Number(input));// kdl không phải là number => nhập lại

/**
 * != : Khác giá trị (so sánh tương đối)
 * !== : Khác kiểu dl (so sánh tuyệt đối)
 */

// Vòng lặp for: in ra từ 1-> 10
// Vòng lặp biết trước số lần lặp.
// for (let i = 1; i <= 10; i++) {
//   console.log(i);// 1, 2, 3, ....10

// }
// NX: kết quả cuối cùng i = 11; Và vòng lặp for in ra số từ 1 -> 10

///// Kiểu dl Array: mảng (sử dụng để lưu trữ 1 dãy dl khác nhau)
// khai báo mảng;
// let a = []; // Khai báo mảng rỗng
// let b = [1, 2, 3]; // khai báo mảng có x phần tử. 

// // C2: khai báo mảng với từ khóa "new"
// let c = new Array();
// console.log(Array.isArray(c)); // true => đây là biến mảng, flase: đây ko phải biến Mảng


////// Thao tác với mảng. C,R,U,D;
/*
C:Create: Thêm phần tử vào trong mảng (danh sách) 
R:Read: Đọc mảng
U:Update: Cập nhật, sửa mảng
D:Delete: Xóa phần tử trong mảng

*/

// let animals = ["dog", 'cat', 'fish'];
// //// C: Create: Thêm x phần tử vào cuối mảng
// animals.push("bear", "mouse"); // thêm 2 phần tử
// console.log("Phần tử mảng sau khi thêm 2 là: ", animals);

// // Thêm "horse" vào vị trí ngay sau "dog" trong mảng;
// animals.splice(1, 0, "horse");
// console.log("Phần tử mảng sau khi thêm 'horse' vào sau 'dog' là: ", animals);

// //// R: Read: đọc mảng => sử dụng alert(...), console.log(.) 

// //// U: Update: cập nhật, sửa nội dung của mảng.
// // Sửa "dog"=> "tiger";
// animals[0] = 'tiger';
// console.log("Phần tử mảng sau khi sửa 'dog' thành 'tiger' là: ", animals);
// // sửa 'cat', 'fish' thành 'panter','bird'

// let indexCat = animals.indexOf('cat');// tìm vị trí của "cat" trong mảng
// animals.splice(indexCat, 2, 'panter', 'bird');
// console.log("Phần tử mảng sau khi sửa 'cat', 'fish' thành 'panter','bird' là: ", animals);

// ///D: Delete phần tử trong mảng: 
// // Xóa 2 phần tử cuối cùng trong mảng;
// animals.splice(animals.length - 2, 2); // mảng còn 4 phần tử

// // Xóa phần tử nào là 'panter' ra khỏi mảng;
// let indexPanter = animals.indexOf('panter'); // Tìm đc vị trí của panter
// animals.splice(indexPanter, 1);
// console.log("Mảng sau khi xóa phần tử 'panter' là: ", animals);


////// Object: Đối tượng (Tên đối tượng, luôn viết hoa chữ cái đầu tiên)
//// khai báo 1 đối tượng
let Animals = {};

// kiểm tra kdl có phải là đối tượng hay không:
console.log(typeof (obj));

//// thao tác C,R,U,D với Object;
//C: Thêm 1 thuộc tính vào trong mảng;
Animals.legs = 4
console.log("Số chân động vật là: ", Animals.legs);

// thêm 3 động vật có bốn chân vào đây:
Animals.animals4Legs = ['lion', 'panter', 'dog'];
console.log("Động vật có 4 chân là ", Animals.animals4Legs);

// Thêm 1 phương thức là 'go' vào trong đối tượng Animals
Animals.go = function () {
  alert('Chúng tôi là động vật 4 chân và chúng tôi đi = 4 chân giống như Phúc nói!!');

}

//// R: đọc đối tượng. Sử dụng console.log, alert, ....

//// U: Cập nhật giá trị của thuộc tính.
// Thêm 'mouse', 'horse' vào trong số động vật có 4 chân của đối tượng Animals
Animals.animals4Legs.push('mouse', 'horse'); // Thêm 2 phần tử vào mảng qua phương thức .push();
console.log("Động vật có 4 chân sau khi thêm 'mouse', 'horse' là: ", Animals.animals4Legs);
// Cập nhật phương thức 'go' trong đối tượng Animals thành: câu nói: 'Chúng ta đi = 4 chân'
Animals.go = function () {
  alert('Chúng ta đi = 4 chân')
}



//// D: Delete thuộc tính trong đối tượng.
// Xóa thuộc tính 'legs' trong đối tượng Animals
delete Animals.legs; // xóa thuộc tính "legs" trong đối tượng.


