import type { PeriodData } from './types';

export const HISTORICAL_DATA: Record<string, PeriodData> = {
  // ============================================================
  // 1. AN DƯƠNG VƯƠNG VÀ NƯỚC ÂU LẠC (257 TCN - 208 TCN)
  // ============================================================
  "An Dương Vương và nước Âu Lạc (257 TCN - 208 TCN)": {
    summary: "An Dương Vương, tên thật là Thục Phán, là vị vua sáng lập nước Âu Lạc - một trong những quốc gia đầu tiên của người Việt cổ. Ông đã thống nhất các bộ lạc Văn Lang và Thục Phán, xây dựng kinh đô Cổ Loa với hệ thống thành luỹ kiên cố. Thời kỳ này đánh dấu bước phát triển quan trọng trong lịch sử dựng nước của dân tộc Việt Nam, với những tiến bộ về quân sự, kiến trúc và tổ chức xã hội.",
    events: [
      {
        name: "Thục Phán lập nước Âu Lạc",
        date: "257 TCN",
        description: "Thục Phán đánh bại vua Hùng Vương cuối cùng, sáp nhập Văn Lang và Thục Phán thành nước Âu Lạc, tự xưng là An Dương Vương.",
        imagePrompt: "Ancient Vietnamese warrior king Thuc Phan founding Au Lac kingdom, traditional bronze age armor, misty mountains background",
        location: { name: "Cổ Loa", lat: 40, lng: 55 }
      },
      {
        name: "Xây dựng thành Cổ Loa",
        date: "257-208 TCN",
        description: "An Dương Vương cho xây dựng kinh đô Cổ Loa với ba vòng thành luỹ hình ốc sên, một kỳ quan kiến trúc quân sự thời cổ đại.",
        imagePrompt: "Aerial view of ancient Co Loa citadel with spiral walls, Vietnamese bronze age architecture",
        location: { name: "Thành Cổ Loa", lat: 35, lng: 60 }
      },
      {
        name: "Chế tạo nỏ thần",
        date: "Khoảng 250 TCN",
        description: "Cao Lỗ - một thợ thủ công tài ba - được lệnh chế tạo nỏ thần, vũ khí oai hùng bảo vệ đất nước.",
        imagePrompt: "Ancient Vietnamese craftsman forging magical crossbow, mystical golden light, traditional workshop",
        location: { name: "Cổ Loa", lat: 38, lng: 58 }
      },
      {
        name: "Triệu Đà chiếm nước Âu Lạc",
        date: "208 TCN",
        description: "Triệu Đà từ phương Bắc kéo quân vào, dùng kế gả con gái Mị Châu cho Trọng Thủy để lấy được bí mật nỏ thần, từ đó đánh chiếm Âu Lạc.",
        imagePrompt: "Zhao Tuo army invading Au Lac kingdom, ancient battle scene, Vietnamese soldiers defending",
        location: { name: "Biên giới Âu Lạc", lat: 45, lng: 50 }
      }
    ],
    figures: [
      {
        name: "An Dương Vương (Thục Phán)",
        bio: "Vị vua anh hùng sáng lập nước Âu Lạc, người đã thống nhất các bộ lạc và xây dựng kinh đô Cổ Loa vững chắc.",
        significance: "Là một trong những vị vua đầu tiên trong lịch sử Việt Nam, đặt nền móng cho quốc gia độc lập.",
        imagePrompt: "Portrait of King An Duong Vuong, wise ancient Vietnamese king, traditional bronze age royal attire"
      },
      {
        name: "Cao Lỗ",
        bio: "Thợ rèn tài ba, người chế tạo nỏ thần - vũ khí thần kỳ giúp bảo vệ nước Âu Lạc.",
        significance: "Biểu tượng của trí tuệ và tài năng thủ công nghệ thuật Việt Nam thời cổ đại.",
        imagePrompt: "Ancient Vietnamese master craftsman Cao Lo, elderly skilled blacksmith, holding magical crossbow"
      },
      {
        name: "Mị Châu",
        bio: "Công chúa của An Dương Vương, người vợ của Trọng Thủy. Vì yêu chồng mà vô tình để lộ bí mật nỏ thần.",
        significance: "Nhân vật bi kịch trong truyền thuyết, tượng trưng cho tình yêu và sự hy sinh.",
        imagePrompt: "Princess Mi Chau, beautiful young Vietnamese princess, traditional ancient dress, sad expression"
      }
    ],
    quiz: [
      {
        question: "An Dương Vương đã xây dựng kinh đô nào?",
        options: { A: "Thăng Long", B: "Cổ Loa", C: "Hoa Lư", D: "Đại La" },
        correctAnswer: "B"
      },
      {
        question: "Vũ khí nào được chế tạo để bảo vệ nước Âu Lạc?",
        options: { A: "Kiếm thần", B: "Giáo thần", C: "Nỏ thần", D: "Cung thần" },
        correctAnswer: "C"
      },
      {
        question: "Ai đã chiếm nước Âu Lạc năm 208 TCN?",
        options: { A: "Tần Thủy Hoàng", B: "Hán Vũ Đế", C: "Triệu Đà", D: "Lưu Bang" },
        correctAnswer: "C"
      }
    ],
    jigsawPuzzle: {
      imagePrompt: "Epic panoramic painting of ancient Co Loa citadel with spiral walls, An Duong Vuong kingdom, Vietnamese bronze age civilization",
      relatedFact: "Thành Cổ Loa có hệ thống ba vòng thành hình xoắn ốc độc đáo, là một kỳ quan kiến trúc quân sự thời cổ đại."
    },
    mapData: {
      imagePrompt: "Ancient weathered map of Au Lac kingdom, showing Co Loa citadel, rivers and mountains, parchment texture",
      locations: [
        { name: "Kinh đô Cổ Loa", description: "Trung tâm chính trị của nước Âu Lạc.", lat: 40, lng: 55 },
        { name: "Sông Hồng", description: "Con sông lớn chảy qua vùng đất Âu Lạc.", lat: 35, lng: 50 },
        { name: "Núi Tản Viên", description: "Vùng núi thiêng liêng.", lat: 30, lng: 45 }
      ]
    }
  },

  // ============================================================
  // 2. THỜI KỲ BẮC THUỘC LẦN THỨ NHẤT (207 TCN - 39 SCN)
  // ============================================================
  "Thời kỳ Bắc thuộc lần thứ nhất (207 TCN - 39 SCN)": {
    summary: "Sau khi Triệu Đà chiếm Âu Lạc, ông lập nên nước Nam Việt với Phiên Ngung (nay là Quảng Châu) làm kinh đô. Thời kỳ này đánh dấu bước đầu tiên của ách thống trị phương Bắc đối với dân tộc Việt, kéo dài hơn 200 năm. Mặc dù chịu sự đô hộ, người Việt vẫn duy trì được nền văn hóa bản địa và không ngừng đấu tranh giành độc lập.",
    events: [
      {
        name: "Triệu Đà lập nước Nam Việt",
        date: "207 TCN",
        description: "Triệu Đà sáp nhập Âu Lạc vào lãnh thổ, lập nên nước Nam Việt, tự xưng là Nam Việt Vũ Vương.",
        imagePrompt: "Zhao Tuo establishing Nam Viet kingdom, ancient Vietnamese-Chinese emperor, royal throne scene",
        location: { name: "Phiên Ngung", lat: 55, lng: 65 }
      },
      {
        name: "Nhà Hán chiếm Nam Việt",
        date: "111 TCN",
        description: "Hán Vũ Đế sai tướng Lộ Bác Đức đem quân đánh chiếm Nam Việt, đặt làm quận thuộc, bắt đầu thời kỳ Bắc thuộc lần thứ nhất.",
        imagePrompt: "Han dynasty army conquering Nam Viet, ancient Chinese military invasion, Vietnamese resistance",
        location: { name: "Lĩnh Nam", lat: 45, lng: 55 }
      },
      {
        name: "Chia làm ba quận",
        date: "40 TCN",
        description: "Nhà Hán chia vùng đất Việt thành ba quận: Giao Chỉ, Cửu Chân và Nhật Nam để dễ dàng cai trị.",
        imagePrompt: "Ancient map showing three commanderies of Vietnam under Han rule, administrative divisions",
        location: { name: "Giao Chỉ", lat: 40, lng: 50 }
      }
    ],
    figures: [
      {
        name: "Triệu Đà (Zhao Tuo)",
        bio: "Tướng quân nhà Tần, sau lập nước Nam Việt và trở thành vị vua đầu tiên của triều đại này, trị vì gần 70 năm.",
        significance: "Mặc dù là người Trung Quốc, ông đã hòa nhập văn hóa Việt và tạo nền móng cho sự phát triển khu vực.",
        imagePrompt: "King Zhao Tuo of Nam Viet, elderly wise ruler, mixed Chinese-Vietnamese royal attire"
      },
      {
        name: "Lộ Bác Đức",
        bio: "Tướng nhà Hán được cử đi chinh phạt Nam Việt, đưa vùng đất này vào thời kỳ Bắc thuộc đầu tiên.",
        significance: "Người mở đầu cho hơn một nghìn năm đô hộ của phương Bắc.",
        imagePrompt: "General Lu Bode of Han dynasty, military commander, conquering expedition portrait"
      }
    ],
    quiz: [
      {
        question: "Triệu Đà lập nước Nam Việt vào năm nào?",
        options: { A: "257 TCN", B: "208 TCN", C: "207 TCN", D: "111 TCN" },
        correctAnswer: "C"
      },
      {
        question: "Nhà nào đã chiếm Nam Việt và đặt làm quận thuộc?",
        options: { A: "Nhà Tần", B: "Nhà Hán", C: "Nhà Đường", D: "Nhà Tống" },
        correctAnswer: "B"
      },
      {
        question: "Vùng đất Việt bị chia thành bao nhiêu quận?",
        options: { A: "Hai quận", B: "Ba quận", C: "Bốn quận", D: "Năm quận" },
        correctAnswer: "B"
      }
    ],
    jigsawPuzzle: {
      imagePrompt: "Historical painting of Nam Viet kingdom under Zhao Tuo rule, ancient citadel, Vietnamese-Chinese cultural fusion",
      relatedFact: "Triệu Đà trị vì Nam Việt suốt 67 năm, là một trong những vị vua có triều đại dài nhất lịch sử."
    },
    mapData: {
      imagePrompt: "Ancient map of Nam Viet kingdom and three commanderies, showing Giao Chi, Cuu Chan, Nhat Nam",
      locations: [
        { name: "Phiên Ngung (Quảng Châu)", description: "Kinh đô của nước Nam Việt.", lat: 55, lng: 65 },
        { name: "Quận Giao Chỉ", description: "Quận trung tâm, bao gồm vùng châu thổ Sông Hồng.", lat: 40, lng: 50 },
        { name: "Quận Cửu Chân", description: "Vùng miền Trung Việt Nam.", lat: 50, lng: 45 }
      ]
    }
  },

  // ============================================================
  // 3. HAI BÀ TRƯNG (40 - 43)
  // ============================================================
  "Hai Bà Trưng (40 - 43)": {
    summary: "Cuộc khởi nghĩa của Hai Bà Trưng là một trong những cuộc đấu tranh giải phóng dân tộc vĩ đại nhất lịch sử Việt Nam. Trưng Trắc và Trưng Nhị đã lãnh đạo nhân dân nổi dậy chống lại ách đô hộ của nhà Hán, giành lại độc lập trong ba năm. Dù cuộc khởi nghĩa thất bại, tinh thần anh dũng của Hai Bà đã trở thành biểu tượng bất diệt của ý chí tự chủ và tinh thần yêu nước của dân tộc Việt Nam.",
    events: [
      {
        name: "Tô Định giết Thi Sách",
        date: "40",
        description: "Tô Định - thái thú bạo ngược của nhà Hán giết hại Thi Sách - chồng của Trưng Trắc, khơi mào cho cuộc khởi nghĩa.",
        imagePrompt: "Ancient Vietnamese warrior Thi Sach martyrdom scene, dramatic historical moment, tragic atmosphere",
        location: { name: "Mê Linh", lat: 42, lng: 52 }
      },
      {
        name: "Hai Bà Trưng khởi nghĩa",
        date: "Tháng 2/40",
        description: "Trưng Trắc và Trưng Nhị cùng nhân dân Giao Chỉ nổi dậy, đánh đuổi quân Hán. Trưng Trắc tự xưng là Trưng Nữ Vương.",
        imagePrompt: "Two Trung Sisters on war elephants leading Vietnamese army, heroic women warriors, dramatic battle scene",
        location: { name: "Mê Linh", lat: 40, lng: 50 }
      },
      {
        name: "Giải phóng 65 thành trì",
        date: "40-42",
        description: "Trong hai năm, Hai Bà Trưng giải phóng 65 thành trì từ tay quân Hán, lãnh thổ trải dài từ Hợp Phố đến Nhật Nam.",
        imagePrompt: "Map showing liberated citadels, Trung Sisters kingdom expansion, victorious Vietnamese forces",
        location: { name: "Giao Chỉ", lat: 45, lng: 55 }
      },
      {
        name: "Mã Viện đàn áp khởi nghĩa",
        date: "43",
        description: "Nhà Hán cử Mã Viện đem quân đông đảo sang đàn áp. Sau nhiều trận chiến ác liệt, Hai Bà thất bại và tuẫn tiết trên sông Hát.",
        imagePrompt: "Final battle of Trung Sisters against Ma Yuan army, tragic defeat scene, heroic last stand",
        location: { name: "Sông Hát", lat: 38, lng: 48 }
      }
    ],
    figures: [
      {
        name: "Trưng Trắc",
        bio: "Chị của Hai Bà Trưng, vợ của Thi Sách. Sau khi chồng bị giết, bà đã lãnh đạo cuộc khởi nghĩa chống Hán và tự xưng là Trưng Nữ Vương.",
        significance: "Biểu tượng của tinh thần yêu nước và lòng dũng cảm của phụ nữ Việt Nam.",
        imagePrompt: "Queen Trung Trac on elephant, powerful Vietnamese warrior queen, determined expression, royal armor"
      },
      {
        name: "Trưng Nhị",
        bio: "Em gái của Trưng Trắc, cùng chị nổi dậy khởi nghĩa chống quân Hán. Hai chị em luôn sát cánh bên nhau đến phút cuối.",
        significance: "Tượng trưng cho tình chị em ruột thịt và tinh thần đoàn kết dân tộc.",
        imagePrompt: "Trung Nhi warrior princess, brave Vietnamese female general, traditional battle attire, fierce expression"
      },
      {
        name: "Thi Sách",
        bio: "Chồng của Trưng Trắc, lãnh chúa Chu Diên. Bị thái thú Tô Định giết hại vì không chịu khuất phục.",
        significance: "Người anh hùng có chí khí bất khuất, cái chết của ông là tia lửa thắp lên cuộc khởi nghĩa.",
        imagePrompt: "Thi Sach noble Vietnamese lord, brave warrior, traditional ancient clothing, martyrdom hero"
      }
    ],
    quiz: [
      {
        question: "Hai Bà Trưng khởi nghĩa vào năm nào?",
        options: { A: "39", B: "40", C: "41", D: "43" },
        correctAnswer: "B"
      },
      {
        question: "Ai là vị tướng nhà Hán đàn áp cuộc khởi nghĩa Hai Bà Trưng?",
        options: { A: "Tô Định", B: "Mã Viện", C: "Lưu Bị", D: "Tào Tháo" },
        correctAnswer: "B"
      },
      {
        question: "Hai Bà Trưng đã giải phóng bao nhiêu thành trì?",
        options: { A: "50 thành trì", B: "60 thành trì", C: "65 thành trì", D: "70 thành trì" },
        correctAnswer: "C"
      }
    ],
    jigsawPuzzle: {
      imagePrompt: "Epic battle painting of Trung Sisters on war elephants leading Vietnamese army against Han invaders, dramatic sky",
      relatedFact: "Hai Bà Trưng là những nữ tướng dũng cảm nhất lịch sử Việt Nam, đã cưỡi voi chỉ huy quân đội đánh đuổi quân Hán."
    },
    mapData: {
      imagePrompt: "Ancient map of Trung Sisters kingdom territory, showing 65 liberated citadels, rivers and mountains",
      locations: [
        { name: "Mê Linh - Nơi khởi nghĩa", description: "Quê hương của Hai Bà Trưng.", lat: 40, lng: 50 },
        { name: "Sông Hát", description: "Nơi Hai Bà tuẫn tiết.", lat: 38, lng: 48 },
        { name: "Cung Cấm Lãng", description: "Nơi Hai Bà lập triều đình.", lat: 42, lng: 52 }
      ]
    }
  },

  // ============================================================
  // 4. THỜI KỲ BẮC THUỘC LẦN THỨ HAI (43 - 544)
  // ============================================================
  "Thời kỳ Bắc thuộc lần thứ hai (43 - 544)": {
    summary: "Sau khi cuộc khởi nghĩa Hai Bà Trưng thất bại, Việt Nam trải qua thời kỳ Bắc thuộc lần thứ hai kéo dài 5 thế kỷ. Đây là giai đoạn dân tộc Việt Nam chịu áp lực đồng hóa nặng nề từ các triều đại phong kiến Trung Quốc (Hán, Ngô, Tấn, Tống, Tề, Lương). Tuy nhiên, người Việt vẫn kiên cường bảo tồn bản sắc văn hóa và có nhiều cuộc khởi nghĩa chống đô hộ như Bà Triệu, Lý Bí.",
    events: [
      {
        name: "Sĩ Nhiếp trị Giao Châu",
        date: "187-226",
        description: "Sĩ Nhiếp cai trị Giao Châu trong 40 năm, chính sách nhân từ, phát triển văn hóa, giáo dục, được dân chúng kính trọng.",
        imagePrompt: "Shi Xie governing Jiaozhi, benevolent Chinese governor, peaceful administration scene, cultural development",
        location: { name: "Giao Châu", lat: 42, lng: 52 }
      },
      {
        name: "Bà Triệu khởi nghĩa",
        date: "248",
        description: "Triệu Thị Trinh lãnh đạo nghĩa quân khởi nghĩa chống quân Ngô, chiến đấu anh dũng trên lưng voi trong sáu tháng.",
        imagePrompt: "Lady Trieu on war elephant, heroic Vietnamese female warrior, yellow tunic, fierce battle scene",
        location: { name: "Cửu Chân", lat: 50, lng: 45 }
      },
      {
        name: "Lý Bí khởi nghĩa",
        date: "542",
        description: "Lý Bí nổi dậy chống nhà Lương, giành độc lập, lập nước Vạn Xuân, kết thúc thời kỳ Bắc thuộc lần thứ hai.",
        imagePrompt: "Ly Bi leading rebellion against Liang dynasty, Vietnamese independence war, victorious army",
        location: { name: "Giao Châu", lat: 40, lng: 50 }
      }
    ],
    figures: [
      {
        name: "Sĩ Nhiếp",
        bio: "Thái thú Giao Châu người Trung Quốc, cai trị vùng đất Việt trong 40 năm với chính sách nhân từ, được dân chúng yêu mến.",
        significance: "Mặc dù là quan lại phương Bắc nhưng có công trong việc phát triển văn hóa, giáo dục vùng Giao Châu.",
        imagePrompt: "Shi Xie scholar-official, wise elderly Chinese governor, Confucian robes, peaceful demeanor"
      },
      {
        name: "Bà Triệu (Triệu Thị Trinh)",
        bio: "Nữ anh hùng dân tộc, cưỡi voi chỉ huy quân đội chống quân Ngô. Sau sáu tháng chiến đấu anh dũng, bà tuẫn tiết.",
        significance: "Biểu tượng của lòng dũng cảm và tinh thần bất khuất của phụ nữ Việt Nam.",
        imagePrompt: "Lady Trieu warrior queen, powerful Vietnamese heroine on elephant, yellow robes, fierce expression"
      },
      {
        name: "Lý Bí",
        bio: "Người lãnh đạo khởi nghĩa chống nhà Lương, giành độc lập và lập nên nước Vạn Xuân năm 544.",
        significance: "Kết thúc 500 năm Bắc thuộc lần thứ hai, mở đầu thời kỳ tự chủ ngắn ngủi.",
        imagePrompt: "Ly Bi revolutionary leader, determined Vietnamese general, founding new kingdom portrait"
      }
    ],
    quiz: [
      {
        question: "Thời kỳ Bắc thuộc lần thứ hai kéo dài bao lâu?",
        options: { A: "300 năm", B: "400 năm", C: "Hơn 500 năm", D: "600 năm" },
        correctAnswer: "C"
      },
      {
        question: "Ai là nữ anh hùng khởi nghĩa chống quân Ngô năm 248?",
        options: { A: "Trưng Trắc", B: "Trưng Nhị", C: "Bà Triệu", D: "Mị Châu" },
        correctAnswer: "C"
      },
      {
        question: "Ai đã lập nước Vạn Xuân năm 544?",
        options: { A: "Lý Bí", B: "Triệu Việt Vương", C: "Sĩ Nhiếp", D: "Lý Phục Man" },
        correctAnswer: "A"
      }
    ],
    jigsawPuzzle: {
      imagePrompt: "Lady Trieu on war elephant leading rebellion, heroic Vietnamese scene, dramatic battlefield, yellow robes flowing",
      relatedFact: "Bà Triệu cao 9 tấc (khoảng 2m7), có tiếng nói vang như chuông, là biểu tượng của sức mạnh phụ nữ Việt."
    },
    mapData: {
      imagePrompt: "Ancient map of Giao Chau under Chinese rule, showing rebellion sites, Lady Trieu's territory",
      locations: [
        { name: "Giao Châu", description: "Trung tâm hành chính thời Bắc thuộc.", lat: 42, lng: 52 },
        { name: "Cửu Chân", description: "Nơi Bà Triệu khởi nghĩa.", lat: 50, lng: 45 },
        { name: "Sông Đáy", description: "Nơi quân Lý Bí đánh bại quân Lương.", lat: 38, lng: 48 }
      ]
    }
  },

  // ============================================================
  // 5. NHÀ TIỀN LÝ VÀ NƯỚC VẠN XUÂN (544 - 602)
  // ============================================================
  "Nhà Tiền Lý và nước Vạn Xuân (544 - 602)": {
    summary: "Sau khi đánh đuổi quân Lương, Lý Bí lập nước Vạn Xuân, mở đầu thời kỳ độc lập ngắn ngủi của dân tộc. Triều đại Tiền Lý trải qua nhiều biến động với sự kế vị của các vị vua như Triệu Việt Vương, Lý Phật Tử. Mặc dù chỉ tồn tại 58 năm và phải đối mặt với nhiều thách thức, thời kỳ này vẫn có ý nghĩa quan trọng trong việc khẳng định ý chí độc lập của dân tộc Việt Nam.",
    events: [
      {
        name: "Lập nước Vạn Xuân",
        date: "544",
        description: "Lý Bí lập nước Vạn Xuân, tự xưng là Lý Nam Đế, đặt niên hiệu Thiên Đức, kết thúc thời kỳ Bắc thuộc lần hai.",
        imagePrompt: "Ly Bi establishing Van Xuan kingdom, Vietnamese independence celebration, founding ceremony",
        location: { name: "Long Biên", lat: 40, lng: 50 }
      },
      {
        name: "Triệu Quang Phục khởi nghĩa",
        date: "543-548",
        description: "Triệu Quang Phục cùng Lý Bí đánh đuổi quân Lương, được phong làm Triệu Việt Vương, tiếp tục kháng chiến.",
        imagePrompt: "Trieu Quang Phuc warrior king, Vietnamese resistance leader, battle against Chinese invasion",
        location: { name: "Cửu Chân", lat: 48, lng: 45 }
      },
      {
        name: "Nhà Tùy xâm lược",
        date: "602",
        description: "Nhà Tùy sai Lưu Phương đem quân sang xâm lược, đánh chiếm Vạn Xuân, kết thúc triều đại Tiền Lý.",
        imagePrompt: "Sui dynasty invasion of Van Xuan, Chinese army conquering Vietnamese kingdom, end of independence",
        location: { name: "Long Biên", lat: 42, lng: 52 }
      }
    ],
    figures: [
      {
        name: "Lý Bí (Lý Nam Đế)",
        bio: "Người sáng lập nước Vạn Xuân và triều đại Tiền Lý, vị vua đầu tiên của thời kỳ độc lập sau 500 năm Bắc thuộc.",
        significance: "Khẳng định ý chí giành và giữ độc lập của dân tộc Việt Nam.",
        imagePrompt: "Emperor Ly Bi founding monarch, Vietnamese independence hero, royal ceremonial attire"
      },
      {
        name: "Triệu Việt Vương (Triệu Quang Phục)",
        bio: "Tướng giỏi của Lý Bí, sau khi Lý Bí mất tiếp tục lãnh đạo kháng chiến chống quân Lương.",
        significance: "Kiên trì bảo vệ nền độc lập non trẻ của đất nước.",
        imagePrompt: "King Trieu Viet Vuong, determined Vietnamese warrior king, military leadership portrait"
      },
      {
        name: "Lý Phật Tử",
        bio: "Con trai của Lý Bí, kế vị cha cai trị nước Vạn Xuân trong thời kỳ khó khăn.",
        significance: "Duy trì nền độc lập trong hoàn cảnh nhiều thách thức.",
        imagePrompt: "Ly Phat Tu young emperor, Vietnamese prince inheriting throne, royal court scene"
      }
    ],
    quiz: [
      {
        question: "Nước Vạn Xuân được lập vào năm nào?",
        options: { A: "542", B: "543", C: "544", D: "545" },
        correctAnswer: "C"
      },
      {
        question: "Ai là người sáng lập triều đại Tiền Lý?",
        options: { A: "Lý Bí", B: "Lý Phật Tử", C: "Triệu Quang Phục", D: "Lý Thái Tổ" },
        correctAnswer: "A"
      },
      {
        question: "Triều đại nào đã xâm lược và kết thúc nước Vạn Xuân?",
        options: { A: "Nhà Lương", B: "Nhà Tùy", C: "Nhà Đường", D: "Nhà Tống" },
        correctAnswer: "B"
      }
    ],
    jigsawPuzzle: {
      imagePrompt: "Founding of Van Xuan kingdom, Ly Bi proclaiming independence, Vietnamese celebration, historical monument",
      relatedFact: "Nước Vạn Xuân là quốc gia độc lập đầu tiên sau 500 năm Bắc thuộc, dù chỉ tồn tại 58 năm."
    },
    mapData: {
      imagePrompt: "Map of Van Xuan kingdom 544-602, showing territory, capital Long Bien, resistance areas",
      locations: [
        { name: "Long Biên", description: "Kinh đô nước Vạn Xuân.", lat: 40, lng: 50 },
        { name: "Cửu Chân", description: "Vùng kháng chiến của Triệu Quang Phục.", lat: 48, lng: 45 },
        { name: "Giao Châu", description: "Vùng trung tâm của nước Vạn Xuân.", lat: 42, lng: 52 }
      ]
    }
  },

  // ============================================================
  // 6. THỜI KỲ BẮC THUỘC LẦN THỨ BA (602 - 905)
  // ============================================================
  "Thời kỳ Bắc thuộc lần thứ ba (602 - 905)": {
    summary: "Thời kỳ Bắc thuộc lần thứ ba kéo dài hơn 300 năm dưới sự cai trị của các triều đại Tùy và Đường. Đây là thời kỳ dài nhất và có nhiều biến động nhất trong lịch sử đô hộ. Người Việt phải đối mặt với chính sách đồng hóa mạnh mẽ, nhưng vẫn kiên cường bảo tồn bản sắc dân tộc. Nhiều cuộc khởi nghĩa nổ ra như Mai Thúc Loan, Phùng Hưng, chuẩn bị cho thời kỳ tự chủ sắp tới.",
    events: [
      {
        name: "Nhà Tùy cai trị",
        date: "602-618",
        description: "Nhà Tùy đặt An Nam đô hộ phủ, thực hiện chính sách đồng hóa khắc nghiệt, áp đặt thuế khóa nặng nề.",
        imagePrompt: "Sui dynasty rule over Vietnam, oppressive Chinese administration, Vietnamese people suffering",
        location: { name: "An Nam Đô Hộ Phủ", lat: 42, lng: 52 }
      },
      {
        name: "Mai Thúc Loan khởi nghĩa",
        date: "722",
        description: "Mai Thúc Loan tự xưng là Hắc Y Thiên Vương, lãnh đạo nghĩa quân khởi nghĩa chống nhà Đường.",
        imagePrompt: "Mai Thuc Loan Black Emperor rebellion, Vietnamese uprising against Tang dynasty, heroic resistance",
        location: { name: "Hoan Châu", lat: 55, lng: 48 }
      },
      {
        name: "Phùng Hưng khởi nghĩa",
        date: "791-802",
        description: "Phùng Hưng đánh đuổi quan Đường, tự xưng là Bố Cái Đại Vương, cai trị độc lập trong 11 năm.",
        imagePrompt: "Phung Hung Bo Cai Great King, Vietnamese independence leader, driving out Tang officials",
        location: { name: "Đại La", lat: 40, lng: 50 }
      },
      {
        name: "Cao Biền cai trị",
        date: "866-882",
        description: "Cao Biền được cử làm An Nam đô hộ, xây thành Đại La, cải cách hành chính, phát triển kinh tế.",
        imagePrompt: "Gao Pian building Dai La citadel, Tang dynasty administrator, fortress construction scene",
        location: { name: "Thành Đại La", lat: 40, lng: 52 }
      }
    ],
    figures: [
      {
        name: "Mai Thúc Loan",
        bio: "Lãnh đạo khởi nghĩa lớn nhất thời Đường, tự xưng là Hắc Y Thiên Vương, chiến đấu chống quân Đường trong 10 năm.",
        significance: "Biểu tượng của tinh thần không khuất phục, quyết tâm giành độc lập.",
        imagePrompt: "Mai Thuc Loan Black Emperor, rebellious Vietnamese warlord, dark armor, fierce warrior"
      },
      {
        name: "Phùng Hưng",
        bio: "Người lãnh đạo khởi nghĩa thành công, tự xưng Bố Cái Đại Vương, cai trị độc lập 11 năm.",
        significance: "Duy trì độc lập trong thời gian nhà Đường suy yếu, chuẩn bị tiền đề cho nền tự chủ.",
        imagePrompt: "Phung Hung Bo Cai King, powerful Vietnamese independence leader, royal throne, respected ruler"
      },
      {
        name: "Cao Biền",
        bio: "Đô hộ An Nam người Trung Quốc, có công xây dựng thành Đại La (Hà Nội), phát triển kinh tế xã hội.",
        significance: "Mặc dù là quan lại Đường nhưng đã đóng góp vào sự phát triển của vùng đất Việt.",
        imagePrompt: "Gao Pian Tang dynasty governor, wise administrator, building great citadel, historical figure"
      }
    ],
    quiz: [
      {
        question: "Thời kỳ Bắc thuộc lần thứ ba kéo dài bao lâu?",
        options: { A: "Hơn 200 năm", B: "Hơn 300 năm", C: "Hơn 400 năm", D: "Hơn 500 năm" },
        correctAnswer: "B"
      },
      {
        question: "Ai tự xưng là Hắc Y Thiên Vương?",
        options: { A: "Phùng Hưng", B: "Mai Thúc Loan", C: "Cao Biền", D: "Lý Bí" },
        correctAnswer: "B"
      },
      {
        question: "Ai đã xây dựng thành Đại La?",
        options: { A: "Phùng Hưng", B: "Mai Thúc Loan", C: "Cao Biền", D: "Ngô Quyền" },
        correctAnswer: "C"
      }
    ],
    jigsawPuzzle: {
      imagePrompt: "Phung Hung leading independence movement, Vietnamese rebellion against Tang dynasty, heroic uprising scene",
      relatedFact: "Thành Đại La do Cao Biền xây dựng sau này trở thành kinh đô Thăng Long của nhà Lý."
    },
    mapData: {
      imagePrompt: "Map of Vietnam under Tang dynasty rule, showing An Nam protectorate, rebellion locations",
      locations: [
        { name: "An Nam Đô Hộ Phủ", description: "Trung tâm hành chính thời Đường.", lat: 42, lng: 52 },
        { name: "Thành Đại La", description: "Thành trì do Cao Biền xây dựng.", lat: 40, lng: 52 },
        { name: "Hoan Châu", description: "Nơi Mai Thúc Loan khởi nghĩa.", lat: 55, lng: 48 }
      ]
    }
  },

  // ============================================================
  // 7. THỜI KỲ TỰ CHỦ (905 - 938)
  // ============================================================
  "Thời kỳ tự chủ (905 - 938)": {
    summary: "Sau khi nhà Đường suy yếu, Việt Nam bước vào thời kỳ tự chủ với các họ Khúc cai trị. Đây là giai đoạn chuyển tiếp quan trọng, người Việt dần giành quyền tự quyết mặc dù vẫn danh nghĩa thuộc Trung Quốc. Các vị lãnh đạo như Khúc Thừa Dụ, Khúc Hạo, Dương Đình Nghệ đã xây dựng nền móng cho cuộc đấu tranh giành độc lập hoàn toàn dưới thời Ngô Quyền.",
    events: [
      {
        name: "Khúc Thừa Dụ cai trị",
        date: "905-907",
        description: "Khúc Thừa Dụ lợi dụng nhà Đường suy yếu, tự xưng là Tiết độ sứ, thực tế cai trị độc lập vùng Giao Châu.",
        imagePrompt: "Khuc Thua Du governing independently, Vietnamese autonomous rule beginning, wise administrator",
        location: { name: "Giao Châu", lat: 40, lng: 50 }
      },
      {
        name: "Khúc Hạo kháng chiến",
        date: "917-930",
        description: "Khúc Hạo kế vị, đánh đuổi quân Nam Hán xâm lược, bảo vệ vùng đất tự trị.",
        imagePrompt: "Khuc Hao defending against Southern Han invasion, Vietnamese resistance battle, heroic defense",
        location: { name: "Biên giới", lat: 48, lng: 55 }
      },
      {
        name: "Dương Đình Nghệ cai trị",
        date: "931-937",
        description: "Dương Đình Nghệ trở thành Tiết độ sứ, tiếp tục củng cố nền tự trị, chuẩn bị điều kiện cho độc lập hoàn toàn.",
        imagePrompt: "Duong Dinh Nghe governance period, Vietnamese autonomous development, preparing for independence",
        location: { name: "Đại La", lat: 40, lng: 52 }
      },
      {
        name: "Kiều Công Tiễn phản loạn",
        date: "937",
        description: "Kiều Công Tiễn giết Dương Đình Nghệ, đầu hàng Nam Hán, gây ra cuộc khủng hoảng chính trị.",
        imagePrompt: "Kieu Cong Tien betrayal scene, Vietnamese political crisis, treacherous assassination",
        location: { name: "Đại La", lat: 40, lng: 52 }
      }
    ],
    figures: [
      {
        name: "Khúc Thừa Dụ",
        bio: "Người mở đầu thời kỳ tự chủ, lợi dụng sự suy yếu của nhà Đường để giành quyền cai trị độc lập.",
        significance: "Đặt nền móng cho nền tự trị của Việt Nam sau hơn 1000 năm Bắc thuộc.",
        imagePrompt: "Khuc Thua Du founding autonomous rule, wise Vietnamese leader, beginning independence era"
      },
      {
        name: "Khúc Hạo",
        bio: "Con trai Khúc Thừa Dụ, anh hùng chống quân Nam Hán xâm lược, bảo vệ nền tự trị.",
        significance: "Khẳng định quyết tâm bảo vệ độc lập của người Việt.",
        imagePrompt: "Khuc Hao military hero, Vietnamese defender against invasion, brave warrior leader"
      },
      {
        name: "Dương Đình Nghệ",
        bio: "Tiết độ sứ tài ba, thầy của Ngô Quyền, chuẩn bị điều kiện cho cuộc chiến giành độc lập.",
        significance: "Chuẩn bị nền tảng cho sự nghiệp giành độc lập của Ngô Quyền.",
        imagePrompt: "Duong Dinh Nghe wise governor, mentor of Ngo Quyen, preparing for independence"
      }
    ],
    quiz: [
      {
        question: "Ai là người mở đầu thời kỳ tự chủ?",
        options: { A: "Khúc Thừa Dụ", B: "Khúc Hạo", C: "Dương Đình Nghệ", D: "Ngô Quyền" },
        correctAnswer: "A"
      },
      {
        question: "Thời kỳ tự chủ kéo dài trong khoảng bao nhiêu năm?",
        options: { A: "Khoảng 20 năm", B: "Khoảng 30 năm", C: "Khoảng 40 năm", D: "Khoảng 50 năm" },
        correctAnswer: "B"
      },
      {
        question: "Ai đã giết Dương Đình Nghệ và đầu hàng Nam Hán?",
        options: { A: "Khúc Hạo", B: "Ngô Quyền", C: "Kiều Công Tiễn", D: "Đinh Bộ Lĩnh" },
        correctAnswer: "C"
      }
    ],
    jigsawPuzzle: {
      imagePrompt: "Autonomous period of Vietnam, Khuc family rule, Vietnamese self-governance, transitional era painting",
      relatedFact: "Thời kỳ tự chủ là bước chuyển tiếp quan trọng, chuẩn bị cho Việt Nam giành độc lập hoàn toàn."
    },
    mapData: {
      imagePrompt: "Map of autonomous Vietnam under Khuc family, showing territories, Southern Han border",
      locations: [
        { name: "Giao Châu", description: "Trung tâm quyền lực thời tự chủ.", lat: 40, lng: 50 },
        { name: "Đại La", description: "Thành trì quan trọng.", lat: 40, lng: 52 },
        { name: "Biên giới Nam Hán", description: "Nơi xảy ra các trận chiến với Nam Hán.", lat: 48, lng: 55 }
      ]
    }
  },

  // ============================================================
  // 8. NHÀ NGÔ (939 - 967)
  // ============================================================
  "Nhà Ngô (939 - 967)": {
    summary: "Năm 938, Ngô Quyền đại phá quân Nam Hán trên sông Bạch Đằng, kết thúc hơn 1000 năm Bắc thuộc. Nhà Ngô là triều đại đầu tiên của Việt Nam độc lập, đánh dấu mốc son chói lọi trong lịch sử dân tộc. Mặc dù triều đại chỉ tồn tại 28 năm và trải qua nhiều biến loạn, nhưng chiến thắng Bạch Đằng đã khẳng định quyền độc lập và tự chủ của Việt Nam.",
    events: [
      {
        name: "Chiến thắng Bạch Đằng",
        date: "938",
        description: "Ngô Quyền dùng kế đóng cọc ngầm trên sông Bạch Đằng, đại phá quân Nam Hán, giành độc lập cho Việt Nam.",
        imagePrompt: "Battle of Bach Dang River 938, Ngo Quyen naval victory, wooden stakes trap, defeated Chinese fleet",
        location: { name: "Sông Bạch Đằng", lat: 45, lng: 58 }
      },
      {
        name: "Ngô Quyền lên ngôi",
        date: "939",
        description: "Ngô Quyền xưng vương, đặt đô ở Cổ Loa, chính thức mở đầu thời kỳ độc lập của Việt Nam.",
        imagePrompt: "Ngo Quyen coronation ceremony, first independent Vietnamese king, founding new dynasty",
        location: { name: "Cổ Loa", lat: 40, lng: 55 }
      },
      {
        name: "Thời kỳ Loạn 12 Sứ Quân",
        date: "944-968",
        description: "Sau khi Ngô Quyền mất, đất nước rơi vào tình trạng chia cắt với 12 sứ quân cát cứ.",
        imagePrompt: "Period of 12 warlords, Vietnamese fragmentation era, chaos and conflict, divided territories",
        location: { name: "Toàn quốc", lat: 42, lng: 50 }
      }
    ],
    figures: [
      {
        name: "Ngô Quyền",
        bio: "Anh hùng dân tộc, người đã đánh tan quân Nam Hán tại Bạch Đằng, lập ra triều đại Ngô - triều đại độc lập đầu tiên.",
        significance: "Kết thúc 1000 năm Bắc thuộc, mở đầu kỷ nguyên độc lập của Việt Nam.",
        imagePrompt: "King Ngo Quyen hero, Vietnamese independence founder, victorious warrior, royal portrait"
      },
      {
        name: "Ngô Xương Văn",
        bio: "Con trai Ngô Quyền, kế vị cha nhưng qua đời sớm, để lại đất nước rối loạn.",
        significance: "Triều đại ngắn ngủi không thể duy trì sự thống nhất.",
        imagePrompt: "Ngo Xuong Van young king, short-lived reign, Vietnamese prince, tragic ruler"
      },
      {
        name: "Dương Tam Kha",
        bio: "Em vợ Ngô Quyền, chiếm ngôi và tự xưng là vua, nhưng không được lòng dân.",
        significance: "Gây ra cuộc khủng hoảng chính trị dẫn đến thời kỳ Loạn 12 Sứ Quân.",
        imagePrompt: "Duong Tam Kha usurper, controversial Vietnamese ruler, palace intrigue scene"
      }
    ],
    quiz: [
      {
        question: "Ngô Quyền đánh bại quân Nam Hán ở đâu?",
        options: { A: "Sông Như Nguyệt", B: "Sông Bạch Đằng", C: "Sông Hồng", D: "Sông Đáy" },
        correctAnswer: "B"
      },
      {
        question: "Chiến thắng Bạch Đằng diễn ra năm nào?",
        options: { A: "936", B: "937", C: "938", D: "939" },
        correctAnswer: "C"
      },
      {
        question: "Sau khi Ngô Quyền mất, có bao nhiêu sứ quân cát cứ?",
        options: { A: "10", B: "11", C: "12", D: "13" },
        correctAnswer: "C"
      }
    ],
    jigsawPuzzle: {
      imagePrompt: "Epic Battle of Bach Dang River, Ngo Quyen's naval victory, wooden stakes destroying Chinese fleet, dramatic historical painting",
      relatedFact: "Chiến thắng Bạch Đằng 938 là mốc son chói lọi, kết thúc hơn 1000 năm đô hộ của phương Bắc."
    },
    mapData: {
      imagePrompt: "Map of early independent Vietnam under Ngo dynasty, showing Bach Dang River, Co Loa capital",
      locations: [
        { name: "Sông Bạch Đằng", description: "Nơi diễn ra chiến thắng lịch sử.", lat: 45, lng: 58 },
        { name: "Cổ Loa", description: "Kinh đô triều Ngô.", lat: 40, lng: 55 },
        { name: "12 vùng cát cứ", description: "Các vùng đất của 12 sứ quân.", lat: 42, lng: 50 }
      ]
    }
  },

  // ============================================================
  // 9. NHÀ ĐINH (968 - 980)
  // ============================================================
  "Nhà Đinh (968 - 980)": {
    summary: "Đinh Bộ Lĩnh dẹp loạn 12 Sứ Quân, thống nhất đất nước, lập ra nhà Đinh với quốc hiệu Đại Cồ Việt. Đây là thời kỳ quan trọng trong việc xây dựng nền tảng cho nhà nước phong kiến độc lập, với việc thiết lập bộ máy chính quyền, quân đội và ngoại giao với các nước láng giềng. Mặc dù triều đại chỉ tồn tại 12 năm, nhưng đã đặt nền móng vững chắc cho sự phát triển của các triều đại sau.",
    events: [
      {
        name: "Đinh Bộ Lĩnh dẹp loạn",
        date: "968",
        description: "Đinh Bộ Lĩnh đánh dẹp 12 Sứ Quân, thống nhất đất nước, xưng Hoàng Đế, lập quốc hiệu Đại Cồ Việt.",
        imagePrompt: "Dinh Bo Linh unifying Vietnam, defeating 12 warlords, establishing Dai Co Viet kingdom, imperial coronation",
        location: { name: "Hoa Lư", lat: 42, lng: 48 }
      },
      {
        name: "Đặt đô tại Hoa Lư",
        date: "968",
        description: "Đinh Tiên Hoàng đặt đô tại Hoa Lư (Ninh Bình), xây dựng cung điện, thiết lập bộ máy nhà nước.",
        imagePrompt: "Hoa Lu ancient capital construction, Vietnamese imperial palace, mountain fortress citadel",
        location: { name: "Hoa Lư", lat: 42, lng: 48 }
      },
      {
        name: "Lập quan hệ với Tống",
        date: "971",
        description: "Đinh Tiên Hoàng sai sứ sang Tống, thiết lập quan hệ ngoại giao, được phong là Giao Chỉ Quận Vương.",
        imagePrompt: "Diplomatic mission to Song dynasty, Vietnamese envoys, peaceful foreign relations establishment",
        location: { name: "Biền Kinh", lat: 65, lng: 70 }
      },
      {
        name: "Đinh Tiên Hoàng bị sát hại",
        date: "979",
        description: "Đinh Tiên Hoàng và thái tử Đinh Liễn bị Đỗ Thích sát hại, triều đình rối loạn.",
        imagePrompt: "Assassination of Dinh Tien Hoang, palace tragedy, Vietnamese political crisis, dramatic scene",
        location: { name: "Hoa Lư", lat: 42, lng: 48 }
      }
    ],
    figures: [
      {
        name: "Đinh Tiên Hoàng (Đinh Bộ Lĩnh)",
        bio: "Người thống nhất đất nước sau loạn 12 Sứ Quân, lập nhà Đinh với quốc hiệu Đại Cồ Việt.",
        significance: "Đặt nền móng cho nhà nước phong kiến độc lập, tổ chức bộ máy nhà nước, quân đội.",
        imagePrompt: "Emperor Dinh Tien Hoang, powerful unifier of Vietnam, imperial robes, majestic throne portrait"
      },
      {
        name: "Đinh Liễn",
        bio: "Thái tử của Đinh Tiên Hoàng, tài năng nhưng bị sát hại cùng cha trong một âm mưu cung đình.",
        significance: "Người kế vị tiềm năng, cái chết bi thảm làm đất nước rơi vào khủng hoảng.",
        imagePrompt: "Prince Dinh Lien crown prince, talented young heir, tragic Vietnamese royal figure"
      },
      {
        name: "Lê Hoàn",
        bio: "Tướng giỏi dưới thời Đinh, sau khi Đinh Tiên Hoàng mất đã lên ngôi, mở đầu triều đại Tiền Lê.",
        significance: "Cứu vãn tình thế, bảo vệ đất nước trước hiểm họa xâm lược.",
        imagePrompt: "Le Hoan military general, Vietnamese commander, later founding Tien Le dynasty, warrior portrait"
      }
    ],
    quiz: [
      {
        question: "Đinh Bộ Lĩnh lập quốc hiệu gì?",
        options: { A: "Đại Việt", B: "Đại Cồ Việt", C: "An Nam", D: "Vạn Xuân" },
        correctAnswer: "B"
      },
      {
        question: "Kinh đô của nhà Đinh đặt ở đâu?",
        options: { A: "Thăng Long", B: "Cổ Loa", C: "Hoa Lư", D: "Đại La" },
        correctAnswer: "C"
      },
      {
        question: "Nhà Đinh tồn tại trong bao nhiêu năm?",
        options: { A: "10 năm", B: "12 năm", C: "15 năm", D: "20 năm" },
        correctAnswer: "B"
      }
    ],
    jigsawPuzzle: {
      imagePrompt: "Dinh Bo Linh unifying Vietnam, defeating warlords, establishing Dai Co Viet, imperial founding ceremony, majestic scene",
      relatedFact: "Đinh Bộ Lĩnh là người đầu tiên dùng quốc hiệu 'Việt', khẳng định bản sắc dân tộc."
    },
    mapData: {
      imagePrompt: "Map of Dai Co Viet under Dinh dynasty, showing Hoa Lu capital, unified territories",
      locations: [
        { name: "Hoa Lư", description: "Kinh đô Đại Cồ Việt.", lat: 42, lng: 48 },
        { name: "Biên giới phía Bắc", description: "Nơi có quan hệ ngoại giao với Tống.", lat: 55, lng: 60 },
        { name: "Đất 12 Sứ Quân", description: "Vùng đất được thống nhất.", lat: 40, lng: 50 }
      ]
    }
  },

  // ============================================================
  // 10. NHÀ TIỀN LÊ (980 - 1009)
  // ============================================================
  "Nhà Tiền Lê (980 - 1009)": {
    summary: "Sau cái chết của Đinh Tiên Hoàng, Lê Hoàn lên ngôi, lập ra triều đại Tiền Lê. Đây là thời kỳ đất nước phải đối mặt với nhiều thách thức, đặc biệt là cuộc xâm lược của quân Tống. Lê Đại Hành đã anh dũng đánh thắng quân Tống, bảo vệ nền độc lập. Tuy nhiên, sau ông, triều đại suy yếu và cuối cùng nhường ngôi cho Lý Công Uẩn.",
    events: [
      {
        name: "Lê Hoàn lên ngôi",
        date: "980",
        description: "Lê Hoàn được suy tôn lên ngôi, lập triều đại Tiền Lê, tự xưng là Lê Đại Hành.",
        imagePrompt: "Le Hoan coronation, founding Tien Le dynasty, Vietnamese imperial ceremony, new emperor",
        location: { name: "Hoa Lư", lat: 42, lng: 48 }
      },
      {
        name: "Đánh thắng quân Tống",
        date: "981",
        description: "Lê Đại Hành đại phá quân Tống xâm lược tại Bạch Đằng, bảo vệ vững chắc nền độc lập.",
        imagePrompt: "Le Dai Hanh defeating Song invasion, Vietnamese victory, battle at Chi Lang pass, heroic defense",
        location: { name: "Bạch Đằng", lat: 45, lng: 58 }
      },
      {
        name: "Xây dựng đất nước",
        date: "980-1005",
        description: "Lê Đại Hành tổ chức bộ máy nhà nước, phát triển kinh tế, văn hóa, thiết lập quan hệ với các nước láng giềng.",
        imagePrompt: "Le Dai Hanh governance period, Vietnamese national development, peaceful prosperity",
        location: { name: "Hoa Lư", lat: 42, lng: 48 }
      },
      {
        name: "Triều đại suy yếu",
        date: "1005-1009",
        description: "Sau khi Lê Đại Hành mất, các vua kế vị yếu kém, triều đình tranh chấp quyền lực.",
        imagePrompt: "Decline of Tien Le dynasty, Vietnamese court intrigue, political instability",
        location: { name: "Hoa Lư", lat: 42, lng: 48 }
      }
    ],
    figures: [
      {
        name: "Lê Đại Hành (Lê Hoàn)",
        bio: "Người sáng lập triều đại Tiền Lê, anh hùng đánh thắng quân Tống, bảo vệ đất nước.",
        significance: "Khẳng định nền độc lập, phát triển đất nước trong thời kỳ đầu tự chủ.",
        imagePrompt: "Emperor Le Dai Hanh, heroic Vietnamese ruler, military commander, victorious king portrait"
      },
      {
        name: "Lê Long Đĩnh",
        bio: "Vị vua cuối cùng của nhà Tiền Lê, tàn bạo và yếu đuối, làm triều đại suy vong.",
        significance: "Vì sự yếu kém của ông, triều thần đã suy tôn Lý Công Uẩn lên ngôi.",
        imagePrompt: "Le Long Dinh last emperor, weak Vietnamese ruler, declining dynasty, tragic king"
      },
      {
        name: "Phạm Cự Lạng",
        bio: "Đại tướng dưới thời Lê Đại Hành, có công đánh đuổi quân Tống xâm lược.",
        significance: "Anh hùng bảo vệ biên cương, góp phần giữ vững độc lập.",
        imagePrompt: "Pham Cu Lang general, Vietnamese military hero, defending against invasion, warrior commander"
      }
    ],
    quiz: [
      {
        question: "Ai là người sáng lập triều đại Tiền Lê?",
        options: { A: "Lê Hoàn", B: "Lê Long Đĩnh", C: "Đinh Bộ Lĩnh", D: "Lý Công Uẩn" },
        correctAnswer: "A"
      },
      {
        question: "Lê Đại Hành đánh thắng quân nước nào năm 981?",
        options: { A: "Hán", B: "Đường", C: "Tống", D: "Nguyên" },
        correctAnswer: "C"
      },
      {
        question: "Triều đại Tiền Lê tồn tại trong bao lâu?",
        options: { A: "Khoảng 20 năm", B: "Khoảng 30 năm", C: "Khoảng 40 năm", D: "Khoảng 50 năm" },
        correctAnswer: "B"
      }
    ],
    jigsawPuzzle: {
      imagePrompt: "Le Dai Hanh defeating Song dynasty invasion, Vietnamese victory at Chi Lang, heroic battle scene, triumphant army",
      relatedFact: "Lê Đại Hành đã đánh bại quân Tống hùng hậu, khẳng định quyết tâm bảo vệ độc lập của Việt Nam."
    },
    mapData: {
      imagePrompt: "Map of Vietnam under Tien Le dynasty, showing Hoa Lu capital, Song border conflicts",
      locations: [
        { name: "Hoa Lư", description: "Kinh đô nhà Tiền Lê.", lat: 42, lng: 48 },
        { name: "Bạch Đằng", description: "Nơi đánh thắng quân Tống.", lat: 45, lng: 58 },
        { name: "Biên giới phía Bắc", description: "Nơi xảy ra xung đột với Tống.", lat: 55, lng: 60 }
      ]
    }
  },

  // ============================================================
  // 11. NHÀ LÝ (1009 - 1225) - ĐÃ CÓ PHÍA TRÊN
  // ============================================================
  "Nhà Lý (1009 - 1225)": {
    summary: "Nhà Lý là triều đại phong kiến lâu dài và thịnh vượng nhất trong lịch sử Việt Nam trung đại. Khởi nguồn từ Lý Công Uẩn, triều đại này đã xây dựng nền móng vững chắc cho quốc gia độc lập với nhiều thành tựu xuất sắc về chính trị, kinh tế, văn hóa và giáo dục. Thời Lý đánh dấu sự phát triển rực rỡ của Phật giáo, nghệ thuật kiến trúc và hệ thống quản lý nhà nước hiện đại.",
    events: [
      {
        name: "Lý Công Uẩn lên ngôi",
        date: "1009",
        description: "Lý Công Uẩn được suy tôn lên ngôi vua, lập ra triều đại Lý, mở đầu thời kỳ hưng thịnh cho đất nước.",
        imagePrompt: "Emperor Ly Cong Uan coronation ceremony, grand Vietnamese royal court, traditional imperial robes",
        location: { name: "Hoa Lư", lat: 45, lng: 50 }
      },
      {
        name: "Dời đô về Thăng Long",
        date: "1010",
        description: "Lý Thái Tổ dời đô từ Hoa Lư về Đại La, đổi tên thành Thăng Long (nay là Hà Nội). Đây là quyết định chiến lược quan trọng.",
        imagePrompt: "Ancient Thang Long citadel construction, Vietnamese workers building royal palace, dragon flying above",
        location: { name: "Thăng Long", lat: 40, lng: 55 }
      },
      {
        name: "Xây Chùa Một Cột",
        date: "1049",
        description: "Vua Lý Thái Tông cho xây dựng Chùa Một Cột - một kiệt tác kiến trúc Phật giáo độc đáo của Việt Nam.",
        imagePrompt: "One Pillar Pagoda construction, unique Vietnamese Buddhist architecture, lotus-shaped temple, serene pond",
        location: { name: "Thăng Long", lat: 38, lng: 53 }
      },
      {
        name: "Chiến thắng quân Tống",
        date: "1075-1077",
        description: "Lý Thường Kiệt đánh tan quân Tống xâm lược, bảo vệ vững chắc biên cương đất nước. Trận Như Nguyệt River là chiến thắng lừng lẫy.",
        imagePrompt: "Ly Thuong Kiet victorious battle against Song dynasty, Vietnamese army defeating Chinese invaders",
        location: { name: "Như Nguyệt River", lat: 48, lng: 52 }
      },
      {
        name: "Mở khoa thi Đại học đầu tiên",
        date: "1070",
        description: "Vua Lý Thánh Tông mở khoa thi Đại học đầu tiên, khởi đầu cho nền giáo dục Nho học ở Việt Nam.",
        imagePrompt: "First imperial examination in Vietnam, scholars taking tests in traditional court, educational system",
        location: { name: "Thăng Long", lat: 40, lng: 54 }
      }
    ],
    figures: [
      {
        name: "Lý Công Uẩn (Lý Thái Tổ)",
        bio: "Vị vua khai quốc triều Lý, người đã thống nhất đất nước và dời đô về Thăng Long, đặt nền móng cho triều đại kéo dài hơn 200 năm.",
        significance: "Nhà lãnh đạo sáng suốt, tạo dựng nền tảng cho một trong những triều đại thịnh vượng nhất lịch sử Việt Nam.",
        imagePrompt: "Emperor Ly Thai To, wise founding emperor of Ly dynasty, imperial dragon robes, serene dignified expression"
      },
      {
        name: "Lý Thường Kiệt",
        bio: "Danh tướng đời Lý, người đã chỉ huy quân đội đánh bại quân Tống xâm lược, bảo vệ độc lập dân tộc.",
        significance: "Anh hùng dân tộc, chiến lược gia xuất sắc, tác giả bài thơ 'Nam quốc sơn hà' - tuyên ngôn độc lập đầu tiên.",
        imagePrompt: "General Ly Thuong Kiet on horseback, heroic Vietnamese military commander, traditional armor, battlefield background"
      },
      {
        name: "Lý Nhân Tông",
        bio: "Vua thứ 5 của nhà Lý, trị vì trong thời kỳ thịnh trị của triều đại, chú trọng phát triển văn hóa và Phật giáo.",
        significance: "Vị vua sáng suốt, tạo điều kiện cho Phật giáo và văn hóa phát triển rực rỡ.",
        imagePrompt: "Emperor Ly Nhan Tong, peaceful Buddhist emperor, meditating in royal robes, lotus flowers, serene palace"
      }
    ],
    quiz: [
      {
        question: "Nhà Lý được thành lập vào năm nào?",
        options: { A: "1009", B: "1010", C: "1054", D: "1070" },
        correctAnswer: "A"
      },
      {
        question: "Ai là người dời đô về Thăng Long?",
        options: { A: "Lý Thường Kiệt", B: "Lý Thánh Tông", C: "Lý Công Uẩn", D: "Lý Nhân Tông" },
        correctAnswer: "C"
      },
      {
        question: "Chùa Một Cột được xây dựng dưới thời vua nào?",
        options: { A: "Lý Thái Tổ", B: "Lý Thái Tông", C: "Lý Thánh Tông", D: "Lý Nhân Tông" },
        correctAnswer: "B"
      }
    ],
    jigsawPuzzle: {
      imagePrompt: "Panoramic view of ancient Thang Long capital during Ly dynasty golden age, imperial citadel, pagodas, bustling markets",
      relatedFact: "Triều đại Lý kéo dài 216 năm (1009-1225), là một trong những triều đại lâu dài và thịnh vượng nhất lịch sử Việt Nam."
    },
    mapData: {
      imagePrompt: "Ancient map of Dai Viet during Ly Dynasty, showing Thang Long capital, major rivers, pagodas, trade routes",
      locations: [
        { name: "Kinh đô Thăng Long", description: "Trung tâm chính trị, kinh tế, văn hóa của đất nước thời Lý.", lat: 40, lng: 55 },
        { name: "Chùa Một Cột", description: "Kiệt tác kiến trúc Phật giáo độc đáo.", lat: 38, lng: 53 },
        { name: "Sông Hồng", description: "Con sông quan trọng, là trục giao thông và nguồn sống.", lat: 35, lng: 50 },
        { name: "Biên giới phía Bắc", description: "Nơi diễn ra các trận chiến chống quân Tống.", lat: 48, lng: 52 }
      ]
    }
  },

  // ============================================================
  // 12. NHÀ TRẦN (1225 - 1400)
  // ============================================================
  "Nhà Trần (1225 - 1400)": {
    summary: "Nhà Trần là triều đại anh hùng trong lịch sử Việt Nam, nổi tiếng với ba lần đánh thắng quân Nguyên-Mông xâm lược. Dưới sự lãnh đạo của các vị vua tài ba như Trần Thái Tông, Trần Nhân Tông và các danh tướng như Trần Hưng Đạo, đất nước đã vượt qua thử thách lớn nhất, bảo vệ vững chắc nền độc lập. Thời Trần cũng là thời kỳ văn hóa, giáo dục phát triển cao.",
    events: [
      {
        name: "Trần Thủ Độ lập nhà Trần",
        date: "1225",
        description: "Trần Thủ Độ lập kế buộc vua Lý Chiêu Hoàng nhường ngôi cho Trần Cảnh, mở đầu triều đại Trần.",
        imagePrompt: "Tran Thu Do establishing Tran dynasty, Vietnamese court transition, founding new royal house",
        location: { name: "Thăng Long", lat: 40, lng: 55 }
      },
      {
        name: "Lần thứ nhất chống Nguyên-Mông",
        date: "1258",
        description: "Quân Mông Cổ xâm lược, Trần Thái Tông và Trần Quốc Tuấn tổ chức kháng chiến, đánh đuổi quân thù.",
        imagePrompt: "First Mongol invasion repelled, Vietnamese resistance, Tran dynasty defending nation, heroic battle",
        location: { name: "Thăng Long", lat: 42, lng: 55 }
      },
      {
        name: "Lần thứ hai chống Nguyên-Mông",
        date: "1285",
        description: "Quân Nguyên do Thoát Hoan chỉ huy xâm lược lần hai, bị quân Trần đánh bại tại nhiều trận địa.",
        imagePrompt: "Second Mongol invasion defeat, Vietnamese army victorious, Tran Hung Dao commanding, epic warfare",
        location: { name: "Vạn Kiếp", lat: 45, lng: 52 }
      },
      {
        name: "Lần thứ ba chống Nguyên-Mông",
        date: "1287-1288",
        description: "Trận Bạch Đằng lần thứ hai, Trần Hưng Đạo dùng kế đóng cọc ngầm, đại phá hạm đội Nguyên-Mông.",
        imagePrompt: "Third Mongol invasion, Battle of Bach Dang River, Tran Hung Dao naval victory, wooden stakes destroying fleet",
        location: { name: "Sông Bạch Đằng", lat: 45, lng: 58 }
      },
      {
        name: "Hồ Quý Ly cướp ngôi",
        date: "1400",
        description: "Hồ Quý Ly cướp ngôi nhà Trần, lập nên nhà Hồ, kết thúc triều đại Trần sau 175 năm.",
        imagePrompt: "Ho Quy Ly usurping Tran throne, Vietnamese court coup, end of Tran dynasty, palace intrigue",
        location: { name: "Thăng Long", lat: 40, lng: 55 }
      }
    ],
    figures: [
      {
        name: "Trần Hưng Đạo",
        bio: "Đại tướng vĩ đại nhất lịch sử Việt Nam, người đã ba lần lãnh đạo quân dân đánh thắng quân Nguyên-Mông xâm lược.",
        significance: "Anh hùng dân tộc, biểu tượng của lòng dũng cảm và trí tuệ quân sự.",
        imagePrompt: "General Tran Hung Dao, greatest Vietnamese military hero, commanding army, legendary warrior portrait"
      },
      {
        name: "Trần Nhân Tông",
        bio: "Vua thứ ba của nhà Trần, người lãnh đạo hai cuộc kháng chiến chống Nguyên-Mông (1285 và 1288).",
        significance: "Vua anh minh, vừa là nhà lãnh đạo vừa là danh tướng, sau này xuất gia tu hành.",
        imagePrompt: "Emperor Tran Nhan Tong, warrior-king and Buddhist monk, dual nature portrait, wise ruler"
      },
      {
        name: "Trần Quốc Tuấn",
        bio: "Tên thật của Trần Hưng Đạo, xuất thân hoàng tộc, được phong làm Quốc Công Tiết Chế.",
        significance: "Chiến lược gia xuất sắc, tác giả 'Hịch tướng sĩ' - bài văn khích lệ tinh thần chiến đấu.",
        imagePrompt: "Tran Quoc Tuan Hung Dao, noble Vietnamese prince-general, strategic military leader, heroic pose"
      }
    ],
    quiz: [
      {
        question: "Nhà Trần đánh bại quân Nguyên-Mông bao nhiêu lần?",
        options: { A: "Một lần", B: "Hai lần", C: "Ba lần", D: "Bốn lần" },
        correctAnswer: "C"
      },
      {
        question: "Ai là danh tướng ba lần đánh thắng quân Nguyên-Mông?",
        options: { A: "Trần Thái Tông", B: "Trần Hưng Đạo", C: "Trần Nhân Tông", D: "Trần Quang Khải" },
        correctAnswer: "B"
      },
      {
        question: "Trận Bạch Đằng lần thứ hai diễn ra năm nào?",
        options: { A: "1285", B: "1287", C: "1288", D: "1290" },
        correctAnswer: "C"
      }
    ],
    jigsawPuzzle: {
      imagePrompt: "Epic Battle of Bach Dang River 1288, Tran Hung Dao's greatest victory, wooden stakes destroying Mongol fleet, triumphant Vietnamese forces",
      relatedFact: "Nhà Trần đã ba lần đánh thắng đế chế Nguyên-Mông hùng mạnh, ghi tên vào lịch sử thế giới."
    },
    mapData: {
      imagePrompt: "Map of Dai Viet under Tran dynasty, showing Mongol invasion routes, battle sites, defensive positions",
      locations: [
        { name: "Kinh đô Thăng Long", description: "Trung tâm chính trị nhà Trần.", lat: 40, lng: 55 },
        { name: "Sông Bạch Đằng", description: "Nơi diễn ra chiến thắng vĩ đại năm 1288.", lat: 45, lng: 58 },
        { name: "Vạn Kiếp", description: "Chiến trường quan trọng trong cuộc kháng chiến.", lat: 45, lng: 52 },
        { name: "Tây Kết", description: "Nơi quân Trần tập kết lực lượng.", lat: 38, lng: 50 }
      ]
    }
  },

// ============================================================
// TIẾP TỤC TỪ NHÀ TRẦN - THÊM VÀO OBJECT HISTORICAL_DATA
// ============================================================

  // ============================================================
  // 13. NHÀ HỒ (1400 - 1407)
  // ============================================================
  "Nhà Hồ (1400 - 1407)": {
    summary: "Nhà Hồ là triều đại ngắn ngủi chỉ tồn tại 7 năm, được thành lập sau khi Hồ Quý Ly cướp ngôi nhà Trần. Mặc dù thời gian ngắn, triều đại này đã thực hiện nhiều cải cách táo bạo về kinh tế, xã hội và quân sự. Tuy nhiên, chính sách cải cách quá mạnh và việc cướp ngôi đã tạo ra sự bất ổn, dẫn đến sự can thiệp của quân Minh và mở đầu cho thời kỳ Bắc thuộc lần thứ tư.",
    events: [
      {
        name: "Hồ Quý Ly cướp ngôi",
        date: "1400",
        description: "Hồ Quý Ly truất phế vua Trần Thiếu Đế, tự xưng là Hồ Hán Thương Hoàng Đế, lập triều đại Hồ.",
        imagePrompt: "Ho Quy Ly usurping throne, Vietnamese court coup, establishing Ho dynasty, dramatic palace scene",
        location: { name: "Thăng Long", lat: 40, lng: 55 }
      },
      {
        name: "Dời đô về Tây Đô",
        date: "1397",
        description: "Hồ Quý Ly dời đô từ Thăng Long về Tây Đô (Thanh Hóa), xây dựng thành đá kiên cố.",
        imagePrompt: "Building Tay Do citadel, stone fortress construction, Vietnamese architectural marvel",
        location: { name: "Tây Đô", lat: 48, lng: 48 }
      },
      {
        name: "Cải cách hành chính",
        date: "1400-1407",
        description: "Hồ Quý Ly thực hiện nhiều cải cách: phát hành tiền giấy, đo đạc ruộng đất, cải tổ quân đội.",
        imagePrompt: "Ho Quy Ly reforms, Vietnamese administrative changes, paper money introduction, historical scene",
        location: { name: "Tây Đô", lat: 48, lng: 48 }
      },
      {
        name: "Quân Minh xâm lược",
        date: "1407",
        description: "Vua Minh sai Trương Phụ đem 80 vạn quân sang, đánh chiếm Tây Đô, bắt Hồ Quý Ly và Hồ Hán Thương.",
        imagePrompt: "Ming invasion of Vietnam, Chinese army conquering Ho dynasty, massive military campaign",
        location: { name: "Tây Đô", lat: 48, lng: 48 }
      }
    ],
    figures: [
      {
        name: "Hồ Quý Ly",
        bio: "Người sáng lập nhà Hồ sau khi cướp ngôi nhà Trần, nhà cải cách táo bạo nhưng gây tranh cãi.",
        significance: "Mặc dù là người cướp ngôi, ông đã thực hiện nhiều cải cách tiến bộ về kinh tế và xã hội.",
        imagePrompt: "Ho Quy Ly reformist emperor, controversial Vietnamese ruler, determined expression, imperial robes"
      },
      {
        name: "Hồ Hán Thương",
        bio: "Con trai Hồ Quý Ly, được cha truyền ngôi sau khi lập triều đại Hồ.",
        significance: "Vị vua kế vị không thể cứu vãn triều đại trước cuộc xâm lược của quân Minh.",
        imagePrompt: "Ho Han Thuong emperor, son of Ho Quy Ly, young Vietnamese ruler, tragic king"
      },
      {
        name: "Trần Ngỗi",
        bio: "Hậu duệ nhà Trần, được quân Minh dựng lên làm bù nhìn khi xâm lược Đại Việt.",
        significance: "Nhân vật bi kịch bị lợi dụng trong cuộc xâm lược của quân Minh.",
        imagePrompt: "Tran Ngoi puppet king, manipulated Vietnamese royal figure, tragic historical character"
      }
    ],
    quiz: [
      {
        question: "Nhà Hồ tồn tại trong bao lâu?",
        options: { A: "5 năm", B: "7 năm", C: "10 năm", D: "12 năm" },
        correctAnswer: "B"
      },
      {
        question: "Hồ Quý Ly đã dời đô về đâu?",
        options: { A: "Hoa Lư", B: "Thăng Long", C: "Tây Đô", D: "Huế" },
        correctAnswer: "C"
      },
      {
        question: "Triều đại nào đã xâm lược và kết thúc nhà Hồ?",
        options: { A: "Nhà Tống", B: "Nhà Nguyên", C: "Nhà Minh", D: "Nhà Thanh" },
        correctAnswer: "C"
      }
    ],
    jigsawPuzzle: {
      imagePrompt: "Ho Quy Ly era reforms, Vietnamese paper money introduction, Tay Do stone citadel, historical transformation scene",
      relatedFact: "Hồ Quý Ly là người đầu tiên ở Việt Nam phát hành tiền giấy, trước cả nhiều nước châu Âu."
    },
    mapData: {
      imagePrompt: "Map of Vietnam under Ho dynasty, showing Tay Do capital, Ming invasion routes",
      locations: [
        { name: "Tây Đô (Thanh Hóa)", description: "Kinh đô mới của nhà Hồ với thành đá kiên cố.", lat: 48, lng: 48 },
        { name: "Thăng Long", description: "Kinh đô cũ được bỏ lại.", lat: 40, lng: 55 },
        { name: "Biên giới phía Bắc", description: "Nơi quân Minh tiến vào.", lat: 55, lng: 60 }
      ]
    }
  },

  // ============================================================
  // 14. THỜI KỲ BẮC THUỘC LẦN THỨ TƯ (1407 - 1427)
  // ============================================================
  "Thời kỳ Bắc thuộc lần thứ tư (1407 - 1427)": {
    summary: "Thời kỳ Bắc thuộc lần thứ tư là giai đoạn ngắn nhất nhưng khốc liệt nhất trong lịch sử đô hộ. Nhà Minh thực hiện chính sách đồng hóa dã man, cướp bóc tài sản, đàn áp văn hóa Việt Nam. Tuy nhiên, dân tộc Việt đã nhanh chóng phản kháng dưới sự lãnh đạo của Lê Lợi và Nguyễn Trãi, giành lại độc lập sau 20 năm kháng chiến kiên cường.",
    events: [
      {
        name: "Nhà Minh đô hộ",
        date: "1407",
        description: "Quân Minh chiếm Đại Việt, đặt làm Giao Chỉ Thừa Tuyên Bố Chính Sứ Ty, thực hiện đồng hóa khắc nghiệt.",
        imagePrompt: "Ming occupation of Vietnam, brutal Chinese rule, Vietnamese people suffering, oppressive administration",
        location: { name: "Giao Chỉ", lat: 40, lng: 50 }
      },
      {
        name: "Lê Lợi khởi nghĩa",
        date: "1418",
        description: "Lê Lợi cùng Nguyễn Trãi tại Lam Sơn (Thanh Hóa) khởi nghĩa, mở đầu cuộc kháng chiến 10 năm.",
        imagePrompt: "Le Loi beginning rebellion at Lam Son, Vietnamese independence movement, gathering resistance army",
        location: { name: "Lam Sơn", lat: 48, lng: 45 }
      },
      {
        name: "Chiến thắng Chi Lăng",
        date: "1427",
        description: "Quân Lam Sơn đại phá quân Minh tại Chi Lăng, buộc quân Minh phải rút về nước.",
        imagePrompt: "Battle of Chi Lang victory, Le Loi defeating Ming army, decisive Vietnamese victory, epic warfare",
        location: { name: "Chi Lăng", lat: 52, lng: 55 }
      },
      {
        name: "Giành lại độc lập",
        date: "1427",
        description: "Lê Lợi tiễn quân Minh về nước, giành lại độc lập hoàn toàn cho Đại Việt.",
        imagePrompt: "Vietnam regaining independence 1427, Le Loi triumphant, Ming forces retreating, celebration scene",
        location: { name: "Thăng Long", lat: 40, lng: 55 }
      }
    ],
    figures: [
      {
        name: "Lê Lợi (Lê Thái Tổ)",
        bio: "Lãnh tụ cuộc khởi nghĩa Lam Sơn, người đã lãnh đạo 10 năm kháng chiến và đánh đuổi quân Minh, lập nên nhà Hậu Lê.",
        significance: "Anh hùng giải phóng dân tộc, người sáng lập triều đại Hậu Lê vĩ đại.",
        imagePrompt: "Emperor Le Loi heroic founder, Vietnamese independence hero, victorious warrior king, majestic portrait"
      },
      {
        name: "Nguyễn Trãi",
        bio: "Quân sư tài ba của Lê Lợi, nhà thơ, nhà văn lớn, tác giả 'Bình Ngô đại cáo' - tuyên ngôn độc lập bất hủ.",
        significance: "Trí tuệ Việt Nam, chiến lược gia xuất sắc và văn hào lớn của dân tộc.",
        imagePrompt: "Nguyen Trai brilliant strategist, Vietnamese scholar-advisor, writing proclamation, wise counselor portrait"
      },
      {
        name: "Lê Lai",
        bio: "Tướng giỏi của Lê Lợi, người đã hy sinh để che chở cho chủ tướng trong trận Tốt Động.",
        significance: "Biểu tượng của lòng trung thành và tinh thần hy sinh cao cả.",
        imagePrompt: "Le Lai heroic general, Vietnamese warrior sacrificing for leader, loyal commander, tragic hero"
      }
    ],
    quiz: [
      {
        question: "Lê Lợi khởi nghĩa tại đâu?",
        options: { A: "Thăng Long", B: "Lam Sơn", C: "Hoa Lư", D: "Tây Đô" },
        correctAnswer: "B"
      },
      {
        question: "Thời kỳ Bắc thuộc lần thứ tư kéo dài bao lâu?",
        options: { A: "10 năm", B: "15 năm", C: "20 năm", D: "25 năm" },
        correctAnswer: "C"
      },
      {
        question: "Ai là quân sư của Lê Lợi?",
        options: { A: "Nguyễn Trãi", B: "Lê Lai", C: "Trần Nguyên Hãn", D: "Nguyễn Xí" },
        correctAnswer: "A"
      }
    ],
    jigsawPuzzle: {
      imagePrompt: "Le Loi leading Lam Son uprising, Vietnamese peasant army defeating Ming forces, heroic independence war, dramatic battle scene",
      relatedFact: "Cuộc khởi nghĩa Lam Sơn là một trong những cuộc kháng chiến vĩ đại nhất, với chiến lược 'địch tiến ta tránh, địch mỏi ta đánh'."
    },
    mapData: {
      imagePrompt: "Map of Lam Son uprising area, showing rebellion base, Chi Lang pass, major battles against Ming",
      locations: [
        { name: "Lam Sơn", description: "Căn cứ khởi nghĩa của Lê Lợi.", lat: 48, lng: 45 },
        { name: "Chi Lăng", description: "Nơi diễn ra trận chiến quyết định.", lat: 52, lng: 55 },
        { name: "Thăng Long", description: "Kinh đô được giải phóng.", lat: 40, lng: 55 }
      ]
    }
  },

  // ============================================================
  // 15. NHÀ HẬU LÊ (1428 - 1789)
  // ============================================================
  "Nhà Hậu Lê (1428 - 1789)": {
    summary: "Nhà Hậu Lê là triều đại dài nhất trong lịch sử Việt Nam với 361 năm, trải qua nhiều thăng trầm. Thời kỳ đầu dưới các vua Lê Thánh Tông, Lê Thái Tổ rất hưng thịnh với nhiều cải cách về luật pháp, giáo dục, quân sự. Tuy nhiên, sau đó triều đại suy yếu, quyền lực rơi vào tay họ Mạc, họ Trịnh và họ Nguyễn, dẫn đến tình trạng chia cắt Nam-Bắc.",
    events: [
      {
        name: "Lê Lợi lên ngôi",
        date: "1428",
        description: "Lê Lợi lên ngôi Hoàng đế, lập triều đại Hậu Lê, mở đầu thời kỳ phục hưng đất nước.",
        imagePrompt: "Le Loi coronation as emperor, founding Hau Le dynasty, Vietnamese independence celebration",
        location: { name: "Thăng Long", lat: 40, lng: 55 }
      },
      {
        name: "Lê Thánh Tông cải cách",
        date: "1460-1497",
        description: "Vua Lê Thánh Tông thực hiện nhiều cải cách vĩ đại, ban hành bộ luật Hồng Đức, phát triển kinh tế, văn hóa.",
        imagePrompt: "Le Thanh Tong golden age, Vietnamese renaissance, legal reforms, cultural prosperity",
        location: { name: "Thăng Long", lat: 40, lng: 55 }
      },
      {
        name: "Họ Mạc soán ngôi",
        date: "1527",
        description: "Mạc Đăng Dung cướp ngôi nhà Lê, tự xưng là Hoàng đế, lập nên nhà Mạc.",
        imagePrompt: "Mac Dang Dung usurping throne, Vietnamese dynastic conflict, court intrigue",
        location: { name: "Thăng Long", lat: 40, lng: 55 }
      },
      {
        name: "Trịnh - Nguyễn phân tranh",
        date: "1545-1787",
        description: "Họ Trịnh ở Bắc, họ Nguyễn ở Nam, danh nghĩa phò Lê nhưng thực chất chia cắt đất nước.",
        imagePrompt: "Trinh-Nguyen division, Vietnam split North-South, two rival lords, fragmented nation",
        location: { name: "Sông Gianh", lat: 50, lng: 50 }
      },
      {
        name: "Nhà Tây Sơn lật đổ Lê",
        date: "1789",
        description: "Nguyễn Huệ tiến vào Thăng Long, truất phế vua Lê Chiêu Thống, chấm dứt triều đại Hậu Lê.",
        imagePrompt: "Tay Son overthrowing Le dynasty, Nguyen Hue conquering Thang Long, end of Hau Le era",
        location: { name: "Thăng Long", lat: 40, lng: 55 }
      }
    ],
    figures: [
      {
        name: "Lê Thánh Tông",
        bio: "Vị vua vĩ đại nhất nhà Hậu Lê, nhà cải cách xuất sắc, nhà thơ tài ba, người đưa đất nước lên đỉnh cao thịnh trị.",
        significance: "Được mệnh danh là 'Khổng Tử của Đại Việt', tạo dựng thời kỳ Hồng Đức thịnh trị.",
        imagePrompt: "Emperor Le Thanh Tong greatest Vietnamese ruler, scholar-king, renaissance monarch, majestic portrait"
      },
      {
        name: "Nguyễn Trãi",
        bio: "Quân sư của Lê Lợi, nhà thơ, nhà văn lớn, tác giả nhiều tác phẩm văn học bất hủ.",
        significance: "Danh nhân văn hóa Việt Nam, được UNESCO vinh danh là danh nhân văn hóa thế giới.",
        imagePrompt: "Nguyen Trai great poet-strategist, Vietnamese cultural hero, literary genius, wise scholar"
      },
      {
        name: "Trịnh Kiểm",
        bio: "Người sáng lập họ Trịnh, nắm quyền thực tế ở Bắc Hà trong khi vua Lê chỉ là bù nhìn.",
        significance: "Mở đầu thời kỳ Trịnh - Nguyễn phân tranh kéo dài 200 năm.",
        imagePrompt: "Trinh Kiem warlord, Northern Vietnamese lord, powerful regent, authoritarian ruler"
      }
    ],
    quiz: [
      {
        question: "Nhà Hậu Lê tồn tại trong bao lâu?",
        options: { A: "200 năm", B: "300 năm", C: "Hơn 350 năm", D: "400 năm" },
        correctAnswer: "C"
      },
      {
        question: "Ai là vị vua vĩ đại nhất nhà Hậu Lê?",
        options: { A: "Lê Lợi", B: "Lê Thánh Tông", C: "Lê Thái Tổ", D: "Lê Chiêu Thống" },
        correctAnswer: "B"
      },
      {
        question: "Bộ luật nổi tiếng thời Lê Thánh Tông là gì?",
        options: { A: "Quốc triều hình luật", B: "Hồng Đức bản đồ", C: "Luật Hồng Đức", D: "Gia Long luật lệ" },
        correctAnswer: "C"
      }
    ],
    jigsawPuzzle: {
      imagePrompt: "Le Thanh Tong golden age of Vietnam, Hong Duc era prosperity, scholars studying, peaceful development, cultural renaissance",
      relatedFact: "Thời Lê Thánh Tông được coi là thời kỳ Phục Hưng của Việt Nam với bộ luật Hồng Đức tiến bộ."
    },
    mapData: {
      imagePrompt: "Map of Dai Viet under Later Le dynasty, showing Trinh-Nguyen division, Thang Long capital",
      locations: [
        { name: "Kinh đô Thăng Long", description: "Trung tâm chính trị thời Hậu Lê.", lat: 40, lng: 55 },
        { name: "Sông Gianh", description: "Ranh giới chia cắt Trịnh - Nguyễn.", lat: 50, lng: 50 },
        { name: "Phú Xuân (Huế)", description: "Trung tâm của chúa Nguyễn.", lat: 52, lng: 45 }
      ]
    }
  },

  // ============================================================
  // 16. NHÀ TÂY SƠN (1778 - 1802)
  // ============================================================
  "Nhà Tây Sơn (1778 - 1802)": {
    summary: "Nhà Tây Sơn là triều đại nông dân do ba anh em họ Nguyễn ở Tây Sơn (Bình Định) khởi nghĩa lập nên. Nguyễn Huệ (Quang Trung) là vị anh hùng vĩ đại, đã thống nhất đất nước và đánh tan 29 vạn quân Thanh xâm lược trong trận Ngọc Hồi - Đống Đa. Mặc dù triều đại chỉ tồn tại 24 năm, nhưng đã để lại dấu ấn sâu đậm trong lịch sử dân tộc.",
    events: [
      {
        name: "Khởi nghĩa Tây Sơn",
        date: "1771",
        description: "Ba anh em Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ khởi nghĩa tại Tây Sơn, đánh đổ chúa Nguyễn.",
        imagePrompt: "Tay Son uprising, three Nguyen brothers rebellion, Vietnamese peasant revolution, heroic beginning",
        location: { name: "Tây Sơn", lat: 55, lng: 45 }
      },
      {
        name: "Tiêu diệt chúa Trịnh",
        date: "1786",
        description: "Nguyễn Huệ tiến ra Bắc, tiêu diệt họ Trịnh, thống nhất miền Bắc.",
        imagePrompt: "Nguyen Hue conquering North, defeating Trinh lords, Vietnamese reunification campaign",
        location: { name: "Thăng Long", lat: 40, lng: 55 }
      },
      {
        name: "Chiến thắng Ngọc Hồi - Đống Đa",
        date: "Tết 1789",
        description: "Quang Trung đánh tan 29 vạn quân Thanh trong 7 ngày Tết, một trong những chiến thắng vĩ đại nhất lịch sử.",
        imagePrompt: "Battle of Ngoc Hoi-Dong Da, Quang Trung defeating Qing invasion, epic Tet victory, legendary warfare",
        location: { name: "Ngọc Hồi - Đống Đa", lat: 40, lng: 54 }
      },
      {
        name: "Thống nhất đất nước",
        date: "1788",
        description: "Nguyễn Huệ lên ngôi Hoàng đế, lấy hiệu là Quang Trung, thống nhất cả nước sau hơn 200 năm chia cắt.",
        imagePrompt: "Emperor Quang Trung unifying Vietnam, coronation ceremony, national reunification celebration",
        location: { name: "Phú Xuân", lat: 52, lng: 45 }
      },
      {
        name: "Nguyễn Ánh lật đổ Tây Sơn",
        date: "1802",
        description: "Nguyễn Ánh với sự giúp đỡ của Pháp đánh bại Tây Sơn, lập nên triều đại Nguyễn.",
        imagePrompt: "Fall of Tay Son, Nguyen Anh with French support conquering, end of peasant dynasty",
        location: { name: "Phú Xuân", lat: 52, lng: 45 }
      }
    ],
    figures: [
      {
        name: "Quang Trung (Nguyễn Huệ)",
        bio: "Vị hoàng đế anh hùng của nhà Tây Sơn, danh tướng xuất sắc, người đã đánh tan quân Thanh và thống nhất đất nước.",
        significance: "Một trong những anh hùng vĩ đại nhất lịch sử Việt Nam, thiên tài quân sự thời phong kiến.",
        imagePrompt: "Emperor Quang Trung heroic ruler, greatest Vietnamese military genius, victorious warrior king, legendary portrait"
      },
      {
        name: "Nguyễn Nhạc",
        bio: "Anh cả trong ba anh em Tây Sơn, người khởi xướng cuộc khởi nghĩa, tự xưng là Thái Đức Hoàng đế.",
        significance: "Người mở đầu phong trào Tây Sơn, có công lớn trong việc lật đổ chúa Nguyễn.",
        imagePrompt: "Nguyen Nhac eldest Tay Son brother, founding rebel leader, Vietnamese revolutionary emperor"
      },
      {
        name: "Ngô Văn Sở",
        bio: "Mưu sĩ tài ba của Quang Trung, người đã đề xuất chiến lược đánh nhanh thắng nhanh trong trận Ngọc Hồi - Đống Đa.",
        significance: "Chiến lược gia xuất sắc, góp phần tạo nên chiến thắng vĩ đại.",
        imagePrompt: "Ngo Van So brilliant strategist, Tay Son advisor, wise military counselor, tactical genius"
      }
    ],
    quiz: [
      {
        question: "Quang Trung đánh tan bao nhiêu quân Thanh trong trận Ngọc Hồi - Đống Đa?",
        options: { A: "20 vạn", B: "25 vạn", C: "29 vạn", D: "30 vạn" },
        correctAnswer: "C"
      },
      {
        question: "Chiến thắng Ngọc Hồi - Đống Đa diễn ra vào dịp nào?",
        options: { A: "Tết Nguyên Đán", B: "Tết Trung Thu", C: "Lễ Quốc Khánh", D: "Tết Đoan Ngọ" },
        correctAnswer: "A"
      },
      {
        question: "Ai đã lật đổ nhà Tây Sơn?",
        options: { A: "Nguyễn Ánh", B: "Lê Chiêu Thống", C: "Trịnh Sâm", D: "Hồ Quý Ly" },
        correctAnswer: "A"
      }
    ],
    jigsawPuzzle: {
      imagePrompt: "Epic Battle of Ngoc Hoi-Dong Da, Quang Trung leading Tet offensive, Vietnamese army destroying Qing forces, legendary victory scene",
      relatedFact: "Chiến thắng Ngọc Hồi - Đống Đa được UNESCO công nhận là một trong những chiến thắng vĩ đại nhất thế giới."
    },
    mapData: {
      imagePrompt: "Map of Vietnam under Tay Son dynasty, showing battle locations, unified territory, Qing invasion route",
      locations: [
        { name: "Tây Sơn", description: "Nơi khởi đầu cuộc khởi nghĩa.", lat: 55, lng: 45 },
        { name: "Ngọc Hồi - Đống Đa", description: "Nơi diễn ra chiến thắng vĩ đại.", lat: 40, lng: 54 },
        { name: "Phú Xuân", description: "Kinh đô nhà Tây Sơn.", lat: 52, lng: 45 }
      ]
    }
  },

  // ============================================================
  // 17. NHÀ NGUYỄN (1802 - 1945)
  // ============================================================
  "Nhà Nguyễn (1802 - 1945)": {
    summary: "Nhà Nguyễn là triều đại phong kiến cuối cùng của Việt Nam, được Nguyễn Ánh (Gia Long) sáng lập sau khi thống nhất cả nước. Triều đại này trải qua nhiều thăng trầm, từ thời kỳ thịnh trị đầu với việc xây dựng kinh đô Huế, ban hành bộ luật Gia Long, đến giai đoạn suy yếu và bị thực dân Pháp xâm lược, biến Việt Nam thành thuộc địa.",
    events: [
      {
        name: "Nguyễn Ánh lên ngôi",
        date: "1802",
        description: "Nguyễn Ánh lên ngôi Hoàng đế, lấy hiệu là Gia Long, đặt quốc hiệu Việt Nam, đóng đô tại Phú Xuân (Huế).",
        imagePrompt: "Emperor Gia Long coronation, founding Nguyen dynasty, Vietnam naming ceremony, imperial grandeur",
        location: { name: "Phú Xuân (Huế)", lat: 52, lng: 45 }
      },
      {
        name: "Xây dựng kinh đô Huế",
        date: "1802-1820",
        description: "Gia Long xây dựng kinh thành Huế theo kiểu Trung Hoa, với Hoàng thành, Tử Cấm Thành và các lăng tẩm.",
        imagePrompt: "Building Hue Imperial City, magnificent Vietnamese citadel construction, traditional architecture masterpiece",
        location: { name: "Huế", lat: 52, lng: 45 }
      },
      {
        name: "Pháp xâm lược Đà Nẵng",
        date: "1858",
        description: "Thực dân Pháp mở đầu cuộc xâm lược, tấn công Đà Nẵng, sau đó chiếm Gia Định (Sài Gòn).",
        imagePrompt: "French invasion of Vietnam, colonial warships attacking Da Nang, beginning of colonization",
        location: { name: "Đà Nẵng", lat: 50, lng: 50 }
      },
      {
        name: "Ký Hòa ước Nhâm Tuất",
        date: "1862",
        description: "Tự Đức ký hiệp ước nhượng ba tỉnh miền Đông Nam Kỳ cho Pháp, mở đầu cho sự mất nước.",
        imagePrompt: "Signing Treaty of 1862, Vietnamese emperor forced to cede territory, colonial subjugation beginning",
        location: { name: "Huế", lat: 52, lng: 45 }
      },
      {
        name: "Bảo Đại thoái vị",
        date: "1945",
        description: "Vua Bảo Đại thoái vị, chấm dứt chế độ quân chủ kéo dài hàng nghìn năm ở Việt Nam.",
        imagePrompt: "Emperor Bao Dai abdication, end of Vietnamese monarchy, historic transition, last emperor",
        location: { name: "Huế", lat: 52, lng: 45 }
      }
    ],
    figures: [
      {
        name: "Gia Long (Nguyễn Ánh)",
        bio: "Người sáng lập triều đại Nguyễn, thống nhất đất nước, xây dựng kinh đô Huế và ban hành bộ luật Gia Long.",
        significance: "Vị vua khai quốc, người đặt tên nước là 'Việt Nam' - tên gọi chính thức cho đến ngày nay.",
        imagePrompt: "Emperor Gia Long founding monarch, Vietnamese unifier, imperial robes, dignified ruler portrait"
      },
      {
        name: "Tự Đức",
        bio: "Vị vua trị vì lâu nhất nhà Nguyễn (36 năm), phải đối mặt với cuộc xâm lược của thực dân Pháp.",
        significance: "Vua hiếu học, yêu văn chương nhưng yếu đuối trong việc bảo vệ đất nước.",
        imagePrompt: "Emperor Tu Duc scholar-king, Vietnamese ruler during French invasion, tragic monarch, literary emperor"
      },
      {
        name: "Phan Đình Phùng",
        bio: "Nhà nho yêu nước, lãnh đạo phong trào Cần Vương chống Pháp, chiến đấu kiên cường ở Hương Sơn.",
        significance: "Biểu tượng của tinh thần yêu nước và khí tiết sĩ phu Việt Nam.",
        imagePrompt: "Phan Dinh Phung patriotic mandarin, Vietnamese resistance leader, heroic scholar-warrior, Can Vuong movement"
      }
    ],
    quiz: [
      {
        question: "Ai là người sáng lập nhà Nguyễn?",
        options: { A: "Nguyễn Huệ", B: "Nguyễn Ánh", C: "Nguyễn Nhạc", D: "Nguyễn Phúc Ánh" },
        correctAnswer: "B"
      },
      {
        question: "Kinh đô của nhà Nguyễn đặt ở đâu?",
        options: { A: "Thăng Long", B: "Sài Gòn", C: "Huế", D: "Đà Nẵng" },
        correctAnswer: "C"
      },
      {
        question: "Pháp bắt đầu xâm lược Việt Nam năm nào?",
        options: { A: "1858", B: "1862", C: "1883", D: "1884" },
        correctAnswer: "A"
      }
    ],
    jigsawPuzzle: {
      imagePrompt: "Hue Imperial City panorama, magnificent Nguyen dynasty capital, royal palaces, traditional Vietnamese architecture, golden era",
      relatedFact: "Vua Gia Long là người đặt tên nước là 'Việt Nam', tên gọi chính thức được sử dụng cho đến ngày nay."
    },
    mapData: {
      imagePrompt: "Map of Vietnam under Nguyen dynasty, showing Hue capital, French colonial invasion routes, loss of territory",
      locations: [
        { name: "Kinh đô Huế", description: "Trung tâm chính trị nhà Nguyễn.", lat: 52, lng: 45 },
        { name: "Đà Nẵng", description: "Nơi Pháp tấn công đầu tiên.", lat: 50, lng: 50 },
        { name: "Sài Gòn", description: "Thành phố quan trọng ở miền Nam.", lat: 58, lng: 42 }
      ]
    }
  },

  // ============================================================
  // 18. PHÁP THUỘC (1858 - 1945)
  // ============================================================
  "Pháp thuộc (1858 - 1945)": {
    summary: "Thời kỳ Pháp thuộc là giai đoạn đen tối trong lịch sử Việt Nam khi đất nước rơi vào ách thống trị của thực dân Pháp gần 90 năm. Người Việt phải chịu đựng sự bóc lột tàn khốc về kinh tế, đàn áp về chính trị và văn hóa. Tuy nhiên, tinh thần yêu nước không bao giờ tắt, với nhiều phong trào đấu tranh từ Cần Vương, Đông Du đến phong trào công nhân và cuộc Cách mạng Tháng Tám 1945.",
    events: [
      {
        name: "Pháp chiếm Nam Kỳ",
        date: "1858-1867",
        description: "Pháp dần dần chiếm toàn bộ Nam Kỳ, biến thành thuộc địa trực tiếp.",
        imagePrompt: "French colonization of Cochinchina, Vietnamese territory loss, colonial occupation, military conquest",
        location: { name: "Nam Kỳ", lat: 58, lng: 42 }
      },
      {
        name: "Phong trào Cần Vương",
        date: "1885-1896",
        description: "Sau khi Pháp chiếm Kinh thành Huế, các sĩ phu phát động phong trào Cần Vương chống Pháp.",
        imagePrompt: "Can Vuong movement, Vietnamese scholars resisting French colonialism, patriotic uprising, armed resistance",
        location: { name: "Toàn quốc", lat: 45, lng: 50 }
      },
      {
        name: "Phong trào Đông Du",
        date: "1905-1908",
        description: "Phan Bội Châu tổ chức thanh niên sang Nhật Bản học tập để chuẩn bị giải phóng đất nước.",
        imagePrompt: "Dong Du movement, Vietnamese students going to Japan, Phan Boi Chau modernization efforts",
        location: { name: "Nhật Bản", lat: 75, lng: 80 }
      },
      {
        name: "Thành lập Đảng Cộng sản Việt Nam",
        date: "1930",
        description: "Nguyễn Ái Quốc thành lập Đảng Cộng sản Việt Nam tại Hương Cảng, định hướng cách mạng mới.",
        imagePrompt: "Founding of Vietnamese Communist Party, Nguyen Ai Quoc Ho Chi Minh, revolutionary organization",
        location: { name: "Hương Cảng", lat: 70, lng: 75 }
      },
      {
        name: "Cách mạng Tháng Tám",
        date: "1945",
        description: "Dưới sự lãnh đạo của Đảng Cộng sản, nhân dân nổi dậy giành chính quyền, lập nước Việt Nam Dân chủ Cộng hòa.",
        imagePrompt: "August Revolution 1945, Vietnamese people uprising, independence celebration, red flags waving",
        location: { name: "Hà Nội", lat: 40, lng: 55 }
      }
    ],
    figures: [
      {
        name: "Phan Bội Châu",
        bio: "Nhà yêu nước, nhà cách mạng tiền bối, người sáng lập phong trào Đông Du và Duy Tân.",
        significance: "Biểu tượng của phong trào cứu nước đầu thế kỷ 20, người thầy của nhiều thế hệ cách mạng.",
        imagePrompt: "Phan Boi Chau patriotic revolutionary, Vietnamese independence pioneer, scholar-activist, elderly hero"
      },
      {
        name: "Phan Chu Trinh",
        bio: "Nhà nho yêu nước, chủ trương đấu tranh bằng con đường cải cách, dân quyền và dân chủ.",
        significance: "Người đại diện cho khuynh hướng cải cách ôn hòa trong phong trào yêu nước.",
        imagePrompt: "Phan Chu Trinh reformist scholar, Vietnamese democratic activist, peaceful resistance advocate"
      },
      {
        name: "Hồ Chí Minh",
        bio: "Lãnh tụ của Đảng Cộng sản Việt Nam và dân tộc Việt Nam, người lãnh đạo Cách mạng Tháng Tám thành công.",
        significance: "Anh hùng giải phóng dân tộc, người sáng lập nước Việt Nam Dân chủ Cộng hòa.",
        imagePrompt: "Ho Chi Minh national liberation leader, Vietnamese revolutionary icon, founding father, beloved president"
      }
    ],
    quiz: [
      {
        question: "Pháp bắt đầu xâm lược Việt Nam từ vùng nào?",
        options: { A: "Bắc Kỳ", B: "Trung Kỳ", C: "Nam Kỳ", D: "Tây Nguyên" },
        correctAnswer: "C"
      },
      {
        question: "Ai là người sáng lập phong trào Đông Du?",
        options: { A: "Phan Chu Trinh", B: "Phan Bội Châu", C: "Nguyễn Ái Quốc", D: "Phan Đình Phùng" },
        correctAnswer: "B"
      },
      {
        question: "Cách mạng Tháng Tám thành công vào năm nào?",
        options: { A: "1940", B: "1943", C: "1945", D: "1946" },
        correctAnswer: "C"
      }
    ],
    jigsawPuzzle: {
      imagePrompt: "August Revolution 1945, Vietnamese people celebrating independence, red flags everywhere, end of French colonialism, triumphant crowd",
      relatedFact: "Cách mạng Tháng Tám 1945 là cuộc cách mạng giành độc lập thành công, lập nên nước Việt Nam Dân chủ Cộng hòa."
    },
    mapData: {
      imagePrompt: "Map of French Indochina, showing colonial administrative divisions, resistance movement areas",
      locations: [
        { name: "Hà Nội", description: "Trung tâm hành chính Bắc Kỳ.", lat: 40, lng: 55 },
        { name: "Huế", description: "Cố đô, nơi triều đình Nguyễn.", lat: 52, lng: 45 },
        { name: "Sài Gòn", description: "Trung tâm kinh tế Nam Kỳ.", lat: 58, lng: 42 }
      ]
    }
  },

  // ============================================================
  // 19. KHÁNG CHIẾN CHỐNG PHÁP (1945 - 1954)
  // ============================================================
  "Kháng chiến chống Pháp (1945 - 1954)": {
    summary: "Sau Cách mạng Tháng Tám, thực dân Pháp quay lại xâm lược, cố gắng tái thiết lập chế độ thuộc địa. Dân tộc Việt Nam đã tiến hành cuộc kháng chiến trường kỳ, gian khổ nhưng anh dũng. Dưới sự lãnh đạo của Chủ tịch Hồ Chí Minh và Đảng Cộng sản, cuộc kháng chiến đã kết thúc với chiến thắng Điện Biên Phủ lừng lẫy năm 1954.",
    events: [
      {
        name: "Toàn quốc kháng chiến",
        date: "19/12/1946",
        description: "Sau Lời kêu gọi toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh, nhân dân cả nước nổi dậy chống Pháp.",
        imagePrompt: "Beginning of resistance war 1946, Vietnamese people rising up, Ho Chi Minh's call to arms, national mobilization",
        location: { name: "Toàn quốc", lat: 45, lng: 50 }
      },
      {
        name: "Chiến dịch Biên giới",
        date: "1950",
        description: "Quân đội ta đại thắng Pháp ở Biên giới, mở đầu thời kỳ từ thế phòng ngự chuyển sang phản công.",
        imagePrompt: "Border Campaign victory, Vietnamese army defeating French, strategic turning point, mountain warfare",
        location: { name: "Cao Bằng - Lạng Sơn", lat: 55, lng: 60 }
      },
      {
        name: "Chiến dịch Điện Biên Phủ",
        date: "13/3 - 7/5/1954",
        description: "Đại thắng Điện Biên Phủ, tiêu diệt tập đoàn cứ điểm mạnh nhất của Pháp, buộc Pháp phải ký Hiệp định Genève.",
        imagePrompt: "Battle of Dien Bien Phu, epic Vietnamese victory, French defeat, artillery in mountains, historic triumph",
        location: { name: "Điện Biên Phủ", lat: 35, lng: 45 }
      },
      {
        name: "Ký Hiệp định Genève",
        date: "21/7/1954",
        description: "Hiệp định Genève được ký kết, thừa nhận độc lập của Việt Nam, tạm chia đất nước ở vĩ tuyến 17.",
        imagePrompt: "Geneva Accords signing, Vietnamese independence recognized, diplomatic victory, international conference",
        location: { name: "Genève", lat: 80, lng: 85 }
      }
    ],
    figures: [
      {
        name: "Hồ Chí Minh",
        bio: "Chủ tịch nước Việt Nam Dân chủ Cộng hòa, người lãnh đạo cuộc kháng chiến chống Pháp thành công.",
        significance: "Lãnh tụ vĩ đại của dân tộc, biểu tượng của độc lập và tự do.",
        imagePrompt: "President Ho Chi Minh wartime leader, Vietnamese independence icon, beloved Uncle Ho, wise leader"
      },
      {
        name: "Võ Nguyên Giáp",
        bio: "Đại tướng, Tổng Tư lệnh quân đội nhân dân Việt Nam, người chỉ huy chiến dịch Điện Biên Phủ.",
        significance: "Thiên tài quân sự, người tạo nên chiến thắng 'lừng lẫy năm châu, chấn động địa cầu'.",
        imagePrompt: "General Vo Nguyen Giap military genius, Vietnamese commander at Dien Bien Phu, legendary strategist"
      },
      {
        name: "Hoàng Văn Thái",
        bio: "Tướng lĩnh tài ba, Tham mưu trưởng trong chiến dịch Điện Biên Phủ, cánh tay phải của Đại tướng Võ Nguyên Giáp.",
        significance: "Người góp phần quan trọng vào chiến thắng lịch sử.",
        imagePrompt: "General Hoang Van Thai chief of staff, Vietnamese military strategist, Dien Bien Phu planner"
      }
    ],
    quiz: [
      {
        question: "Cuộc kháng chiến chống Pháp bắt đầu năm nào?",
        options: { A: "1945", B: "1946", C: "1947", D: "1950" },
        correctAnswer: "B"
      },
      {
        question: "Chiến thắng Điện Biên Phủ diễn ra năm nào?",
        options: { A: "1952", B: "1953", C: "1954", D: "1955" },
        correctAnswer: "C"
      },
      {
        question: "Ai là Tổng Tư lệnh chỉ huy chiến dịch Điện Biên Phủ?",
        options: { A: "Hồ Chí Minh", B: "Võ Nguyên Giáp", C: "Hoàng Văn Thái", D: "Trần Đăng Ninh" },
        correctAnswer: "B"
      }
    ],
    jigsawPuzzle: {
      imagePrompt: "Victory at Dien Bien Phu, Vietnamese soldiers celebrating, captured French stronghold, red flag on hill, epic historical moment",
      relatedFact: "Chiến thắng Điện Biên Phủ được coi là 'lừng lẫy năm châu, chấn động địa cầu', kết thúc 80 năm đô hộ."
    },
    mapData: {
      imagePrompt: "Map of First Indochina War, showing major battles, Dien Bien Phu location, Ho Chi Minh trail",
      locations: [
        { name: "Điện Biên Phủ", description: "Nơi diễn ra chiến thắng lịch sử.", lat: 35, lng: 45 },
        { name: "Hà Nội", description: "Trung tâm chỉ huy kháng chiến.", lat: 40, lng: 55 },
        { name: "Vĩ tuyến 17", description: "Ranh giới tạm thời theo Hiệp định Genève.", lat: 50, lng: 50 }
      ]
    }
  },

  // ============================================================
  // 20. KHÁNG CHIẾN CHỐNG MỸ (1954 - 1975)
  // ============================================================
  "Kháng chiến chống Mỹ (1954 - 1975)": {
    summary: "Sau Hiệp định Genève, đất nước bị chia cắt tạm thời. Miền Bắc xây dựng chủ nghĩa xã hội, miền Nam tiếp tục đấu tranh giải phóng. Đế quốc Mỹ can thiệp quân sự, gây ra cuộc chiến tranh tàn khốc. Với tinh thần bất khuất và ý chí thép, nhân dân Việt Nam đã chiến thắng đế quốc Mỹ, thống nhất đất nước vào mùa xuân 1975, viết nên trang sử vẻ vang.",
    events: [
      {
        name: "Mỹ đưa quân vào miền Nam",
        date: "1965",
        description: "Mỹ chính thức đưa quân chiến đấu vào miền Nam Việt Nam, leo thang chiến tranh xâm lược.",
        imagePrompt: "US military intervention Vietnam, American troops landing, beginning of American War, escalation",
        location: { name: "Đà Nẵng", lat: 50, lng: 50 }
      },
      {
        name: "Chiến thắng Tết Mậu Thân",
        date: "1968",
        description: "Cuộc tổng tiến công và nổi dậy Tết Mậu Thân, bước ngoặt quan trọng của cuộc kháng chiến.",
        imagePrompt: "Tet Offensive 1968, Vietnamese forces attacking cities, turning point of war, dramatic urban warfare",
        location: { name: "Sài Gòn", lat: 58, lng: 42 }
      },
      {
        name: "Hiệp định Paris",
        date: "27/1/1973",
        description: "Hiệp định Paris về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam được ký kết.",
        imagePrompt: "Paris Peace Accords signing, ending American involvement, diplomatic victory, international agreement",
        location: { name: "Paris", lat: 85, lng: 80 }
      },
      {
        name: "Chiến dịch Hồ Chí Minh",
        date: "26/4 - 30/4/1975",
        description: "Chiến dịch Hồ Chí Minh giải phóng hoàn toàn miền Nam, thống nhất đất nước.",
        imagePrompt: "Ho Chi Minh Campaign, liberation of Saigon, tanks at Independence Palace, victory celebration, reunification",
        location: { name: "Sài Gòn", lat: 58, lng: 42 }
      },
      {
        name: "Thống nhất đất nước",
        date: "30/4/1975",
        description: "Ngày giải phóng miền Nam, thống nhất đất nước, kết thúc hơn 20 năm chiến tranh.",
        imagePrompt: "Liberation Day April 30 1975, Vietnamese celebrating reunification, red flags everywhere, joyous victory",
        location: { name: "Sài Gòn", lat: 58, lng: 42 }
      }
    ],
    figures: [
      {
        name: "Hồ Chí Minh",
        bio: "Chủ tịch nước, lãnh tụ của dân tộc, người đã dẫn dắt cuộc kháng chiến chống Mỹ cho đến năm 1969.",
        significance: "Biểu tượng của ý chí độc lập, tự do và thống nhất đất nước.",
        imagePrompt: "President Ho Chi Minh elderly leader, Vietnamese national father, beloved Uncle Ho, wise statesman"
      },
      {
        name: "Võ Nguyên Giáp",
        bio: "Đại tướng, Bộ trưởng Quốc phòng, người chỉ huy các chiến dịch lớn trong cuộc kháng chiến chống Mỹ.",
        significance: "Thiên tài quân sự thế giới, người lãnh đạo chiến thắng đế quốc Mỹ.",
        imagePrompt: "General Vo Nguyen Giap wartime commander, defeating American empire, legendary military genius"
      },
      {
        name: "Nguyễn Thị Định",
        bio: "Nữ tướng đầu tiên của quân đội nhân dân Việt Nam, anh hùng của phong trào du kích miền Nam.",
        significance: "Biểu tượng của phụ nữ Việt Nam trong kháng chiến, người mẹ của phong trào 'ba bầu'.",
        imagePrompt: "General Nguyen Thi Dinh female commander, Vietnamese woman warrior, southern resistance hero"
      }
    ],
    quiz: [
      {
        question: "Mỹ chính thức đưa quân vào Việt Nam năm nào?",
        options: { A: "1964", B: "1965", C: "1966", D: "1967" },
        correctAnswer: "B"
      },
      {
        question: "Cuộc tổng tiến công Tết Mậu Thân diễn ra năm nào?",
        options: { A: "1965", B: "1967", C: "1968", D: "1970" },
        correctAnswer: "C"
      },
      {
        question: "Ngày giải phóng miền Nam thống nhất đất nước là ngày nào?",
        options: { A: "30/4/1975", B: "1/5/1975", C: "2/9/1945", D: "19/12/1946" },
        correctAnswer: "A"
      }
    ],
    jigsawPuzzle: {
      imagePrompt: "Liberation of Saigon April 30 1975, North Vietnamese tanks entering Presidential Palace, reunification celebration, historic victory",
      relatedFact: "Chiến thắng 30/4/1975 đánh dấu sự kết thúc 30 năm chiến tranh và thống nhất đất nước sau 21 năm chia cắt."
    },
    mapData: {
      imagePrompt: "Map of Vietnam War, showing DMZ at 17th parallel, Ho Chi Minh trail, major battles, final campaign routes",
      locations: [
        { name: "Vĩ tuyến 17", description: "Ranh giới chia cắt Nam - Bắc.", lat: 50, lng: 50 },
        { name: "Hà Nội", description: "Thủ đô miền Bắc.", lat: 40, lng: 55 },
        { name: "Sài Gòn", description: "Thủ phủ miền Nam, nơi kết thúc chiến tranh.", lat: 58, lng: 42 },
        { name: "Đường Hồ Chí Minh", description: "Huyết mạch của cuộc kháng chiến.", lat: 48, lng: 48 }
      ]
    }
  }

};

// ============================================================
// HELPER FUNCTIONS
// ============================================================

export const getHistoricalDataByPeriod = (periodName: string): PeriodData | null => {
  return HISTORICAL_DATA[periodName] || null;
};

export const getDefaultPeriodData = (periodName: string): PeriodData => {
  return {
    summary: `Thông tin chi tiết về ${periodName} đang được cập nhật. Đây là một thời kỳ quan trọng trong lịch sử Việt Nam.`,
    events: [
      {
        name: "Sự kiện quan trọng",
        date: "Đang cập nhật",
        description: "Mô tả chi tiết đang được bổ sung.",
        imagePrompt: "Historical Vietnamese scene, traditional style painting"
      }
    ],
    figures: [
      {
        name: "Nhân vật lịch sử",
        bio: "Tiểu sử đang được cập nhật.",
        significance: "Vai trò lịch sử đang được nghiên cứu.",
        imagePrompt: "Historical Vietnamese figure portrait, traditional clothing"
      }
    ],
    quiz: [
      {
        question: `Câu hỏi về ${periodName}?`,
        options: {
          A: "Đáp án A",
          B: "Đáp án B",
          C: "Đáp án C",
          D: "Đáp án D"
        },
        correctAnswer: "A"
      }
    ],
    jigsawPuzzle: {
      imagePrompt: `Historical painting of ${periodName}, Vietnamese traditional art style, epic scene`,
      relatedFact: `Thông tin thú vị về ${periodName} đang được cập nhật.`
    },
    mapData: {
      imagePrompt: `Ancient map of Vietnam during ${periodName}, parchment style, calligraphic labels`,
      locations: [
        {
          name: "Địa điểm quan trọng",
          description: "Mô tả đang được cập nhật",
          lat: 50,
          lng: 50
        }
      ]
    }
  };
};
