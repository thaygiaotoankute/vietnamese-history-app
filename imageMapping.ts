/**
 * File mapping giữa tên sự kiện/nhân vật với đường dẫn ảnh cố định
 * 
 * Hướng dẫn sử dụng:
 * 1. Đặt ảnh vào thư mục public/images/
 * 2. Thêm mapping vào các object bên dưới
 * 3. Import và sử dụng trong components
 */

// ============================================
// HÌNH ẢNH SỰ KIỆN
// ============================================
export const EVENT_IMAGES: Record<string, string> = {
  // An Dương Vương và nước Âu Lạc
  "Thục Phán lập nước Âu Lạc": "/images/events/thuc-phan-lap-nuoc.jpg",
  "Xây dựng thành Cổ Loa": "/images/events/xay-dung-co-loa.jpg",
  "Chế tạo nỏ thần": "/images/events/che-tao-no-than.jpg",
  "Triệu Đà chiếm nước Âu Lạc": "/images/events/trieu-da-chiem-au-lac.jpg",
  
  // Hai Bà Trưng
  "Tô Định giết Thi Sách": "/images/events/to-dinh-giet-thi-sach.jpg",
  "Hai Bà Trưng khởi nghĩa": "/images/events/hai-ba-trung-khoi-nghia.jpg",
  "Giải phóng 65 thành trì": "/images/events/giai-phong-65-thanh-tri.jpg",
  "Mã Viện đàn áp khởi nghĩa": "/images/events/ma-vien-dan-ap.jpg",
  
  // Nhà Lý
  "Lý Công Uẩn lên ngôi": "/images/events/ly-cong-uan-len-ngoi.jpg",
  "Dời đô về Thăng Long": "/images/events/doi-do-ve-thang-long.jpg",
  "Xây Chùa Một Cột": "/images/events/xay-chua-mot-cot.jpg",
  "Chiến thắng quân Tống": "/images/events/chien-thang-quan-tong.jpg",
  "Mở khoa thi Đại học đầu tiên": "/images/events/khoa-thi-dai-hoc-dau-tien.jpg",
  
  // TODO: Thêm các thời kỳ khác...
};

// ============================================
// HÌNH ẢNH NHÂN VẬT
// ============================================
export const FIGURE_IMAGES: Record<string, string> = {
  // An Dương Vương và nước Âu Lạc
  "An Dương Vương (Thục Phán)": "/images/figures/an-duong-vuong.jpg",
  "Cao Lỗ": "/images/figures/cao-lo.jpg",
  "Mị Châu": "/images/figures/mi-chau.jpg",
  
  // Hai Bà Trưng
  "Trưng Trắc": "/images/figures/trung-trac.jpg",
  "Trưng Nhị": "/images/figures/trung-nhi.jpg",
  "Thi Sách": "/images/figures/thi-sach.jpg",
  
  // Nhà Lý
  "Lý Công Uẩn (Lý Thái Tổ)": "/images/figures/ly-cong-uan.jpg",
  "Lý Thường Kiệt": "/images/figures/ly-thuong-kiet.jpg",
  "Lý Nhân Tông": "/images/figures/ly-nhan-tong.jpg",
  
  // TODO: Thêm các thời kỳ khác...
};

// ============================================
// HÌNH ẢNH BẢN ĐỒ
// ============================================
export const MAP_IMAGES: Record<string, string> = {
  "An Dương Vương và nước Âu Lạc (257 TCN - 208 TCN)": "/images/maps/au-lac-map.jpg",
  "Thời kỳ Bắc thuộc lần thứ nhất (207 TCN - 39 SCN)": "/images/maps/bac-thuoc-1.jpg",
  "Hai Bà Trưng (40 - 43)": "/images/maps/hai-ba-trung-map.jpg",
  "Thời kỳ Bắc thuộc lần thứ hai (43 - 544)": "/images/maps/bac-thuoc-2.jpg",
  "Nhà Tiền Lý và nước Vạn Xuân (544 - 602)": "/images/maps/van-xuan-map.jpg",
  "Thời kỳ Bắc thuộc lần thứ ba (602 - 905)": "/images/maps/bac-thuoc-3.jpg",
  "Thời kỳ tự chủ (905 - 938)": "/images/maps/tu-chu-map.jpg",
  "Nhà Ngô (939 - 967)": "/images/maps/nha-ngo-map.jpg",
  "Nhà Đinh (968 - 980)": "/images/maps/nha-dinh-map.jpg",
  "Nhà Tiền Lê (980 - 1009)": "/images/maps/tien-le-map.jpg",
  "Nhà Lý (1009 - 1225)": "/images/maps/nha-ly-map.jpg",
  "Nhà Trần (1225 - 1400)": "/images/maps/nha-tran-map.jpg",
  "Nhà Hồ (1400 - 1407)": "/images/maps/nha-ho-map.jpg",
  "Thời kỳ Bắc thuộc lần thứ tư (1407 - 1427)": "/images/maps/bac-thuoc-4.jpg",
  "Nhà Hậu Lê (1428 - 1789)": "/images/maps/hau-le-map.jpg",
  "Nhà Tây Sơn (1778 - 1802)": "/images/maps/tay-son-map.jpg",
  "Nhà Nguyễn (1802 - 1945)": "/images/maps/nha-nguyen-map.jpg",
  "Pháp thuộc (1858 - 1945)": "/images/maps/phap-thuoc-map.jpg",
  "Kháng chiến chống Pháp (1945 - 1954)": "/images/maps/khang-chien-phap.jpg",
  "Kháng chiến chống Mỹ (1954 - 1975)": "/images/maps/khang-chien-my.jpg",
  
  // Ảnh mặc định nếu không có map cụ thể
  "default": "/images/maps/vietnam-default-map.jpg"
};

// ============================================
// HÌNH ẢNH CHO JIGSAW PUZZLE
// ============================================
export const PUZZLE_IMAGES: Record<string, string> = {
  "An Dương Vương và nước Âu Lạc (257 TCN - 208 TCN)": "/images/puzzles/au-lac-puzzle.jpg",
  "Hai Bà Trưng (40 - 43)": "/images/puzzles/hai-ba-trung-puzzle.jpg",
  "Nhà Lý (1009 - 1225)": "/images/puzzles/nha-ly-puzzle.jpg",
  
  // TODO: Thêm các thời kỳ khác...
  
  // Ảnh mặc định
  "default": "/images/puzzles/default-puzzle.jpg"
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Lấy URL ảnh của event, trả về placeholder nếu không tìm thấy
 */
export const getEventImage = (eventName: string): string => {
  return EVENT_IMAGES[eventName] || "/images/placeholder-event.jpg";
};

/**
 * Lấy URL ảnh của figure, trả về placeholder nếu không tìm thấy
 */
export const getFigureImage = (figureName: string): string => {
  return FIGURE_IMAGES[figureName] || "/images/placeholder-figure.jpg";
};

/**
 * Lấy URL ảnh bản đồ theo thời kỳ
 */
export const getMapImage = (periodName: string): string => {
  return MAP_IMAGES[periodName] || MAP_IMAGES["default"];
};

/**
 * Lấy URL ảnh puzzle theo thời kỳ
 */
export const getPuzzleImage = (periodName: string): string => {
  return PUZZLE_IMAGES[periodName] || PUZZLE_IMAGES["default"];
};

/**
 * Kiểm tra xem một ảnh có tồn tại hay không
 */
export const checkImageExists = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

// ============================================
// PLACEHOLDER IMAGES
// ============================================
// Tạo các file placeholder trong public/images/:
// - placeholder-event.jpg (800x600)
// - placeholder-figure.jpg (600x800)
// - vietnam-default-map.jpg (1000x800)
// - default-puzzle.jpg (800x800)
