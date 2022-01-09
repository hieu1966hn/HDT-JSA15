Website hoàn chỉnh

Front-end (giao diện)    ----      Back-end (server)    ----    APP (ứng dụng)  
ReactJS:                           NodeJS                       Electron, React Native
(Facebook, instargram, shoppee )                                Messenger, VScode
JS                                   JS                         JS


Responsive web là gì?

- Công cụ Web development tool: resizer chrome extension
- Khái niệm Responsive web: Thiết kế Website đáp ứng  là cách tiếp cận tập chung vào môi trường của người dùng trang web (Môi trường người dùng phụ thuộc vào thiết bị họ đã kết nối với internet)
- Những yếu tố tác động không nhỏ tới việc Responsive website như:
+ Kết nối mạng: 
+ Kích thước màn hình: 
+ Loại tương tác
+ Độ phân giải đồ họa


Giới thiệu về "Media query" trong CSS:
- Media query: là chuỗi truy vấn giúp người dùng dễ dàng lựa chọn ra được kích thước màn hình cụ thể. VD: đâu là máy tính, đâu là điện thoại hoặc tablet
- Giới thiệu cú pháp cho Media query:

@media not|only mediatype and (mediafeature and|or|not mediafeature){
    CSS-code
}

Giải thích cú pháp:
- keywords: 
+ not: loại trừ
+ only: Chỉ duy nhất với
+ and: và
+ or: hoặc

- Mediatypes: Chế độ màn hình
+ print: Màn hình máy in
+ screen: Màn hình hiện tại đang sử dụng (điện thoại, máy tính,..)
+ speech: Màn hình nói được (sử dụng cho người khuyết tật)
+ all - default: Mặc định tất cả (gộp cả 3 màn hình)

- Media Feature: Đối tượng phân giải cụ thể để CSS:
+ min-width: Chiều rộng tối thiểu
+ max-width: Chiều rộng tối đa





Khái niệm Breakpoint:
- Là những điểm, vị trí mà bố cục website sẽ thay đổi - thích ứng để tạo nên giao diện đa thiết bị(hay còn gọi là Responsive).
- Trang web thường sẽ có 3 điểm Breakpoint như sau: 
+ Mobile: width: < 740px
+ Tablet: 740px <= width <= 1024px
+ PC: width >= 1024px

