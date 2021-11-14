// Khai báo biến: let/var/const
// let a = "hi"
// console.log(a);

// var b = "Đây là biến b"
// console.log(b);


// Khai báo hằng số.
// const Pi = 3.14;
// // Pi = 4;
// console.log(3 * Pi);


// so sánh var và let:
// {
//   {
//     var vong2 = "vòng 2"
//     {
//     }
//   }
//   console.log(vong2);
// }


// khai báo mảng (dùng để: lưu trữ nhiều kiểu dữ liệu bên trong dưới dạng danh sách )
// let animals = [];

// ////// C,R,U,D với mảng.

// // Create: thêm 1 phần tử vào mảng: push('dfsa')
// animals.push('dog');
// animals.push('cat');


// // R: Read: đọc mảng
// console.log(animals);


// // U: Update: cập nhật, sửa đổi phần tử trong mảng
// animals[1] = "fish"
// console.log("mảng sau khi update là", animals);

// // D: Delete: xóa 1 hoặc nhiều phần tử trong mảng
// animals.splice(0, 1);
// console.log("mảng sau khi Delete vị trí 0 là", animals);

////////// KHai báo đối tượng (Khi cần lưu trữ thong tin dưới dạng từ khóa)

let Human = {
  name: "Hiếu",
  age: 24,
  address: "Hà Nội",
  cmt: "0123456789",
  vaccine: "Đã tiêm 2 mũi",
}

console.log(Human.cmt);

// so sánh với mảng:
let HumanArray = [
  "Hiếu",
  24,
  "Hà Nội",
  "0123456789",
  "Đã tiêm 2 mũi",
]

console.log(Human.cmt);
