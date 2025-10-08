import type { PeriodData } from './types';

// Dữ liệu lịch sử cố định cho từng thời kỳ
export const HISTORICAL_DATA: Record<string, PeriodData> = {
  "An Dương Vương và nước Âu Lạc (257 TCN - 208 TCN)": {
    summary: "An Dương Vương, tên thật là Thục Phán, là vị vua sáng lập nước Âu Lạc - một trong những quốc gia đầu tiên của người Việt cổ. Ông đã thống nhất các bộ lạc Văn Lang và Thục Phán, xây dựng kinh đô Cổ Loa với hệ thống thành luỹ kiên cố. Thời kỳ này đánh dấu bước phát triển quan trọng trong lịch sử dựng nước của dân tộc Việt Nam, với những tiến bộ về quân sự, kiến trúc và tổ chức xã hội.",
    events: [
      {
        name: "Thục Phán lập nước Âu Lạc",
        date: "257 TCN",
        description: "Thục Phán đánh bại vua Hùng Vương cuối cùng, sáp nhập Văn Lang và Thục Phán thành nước Âu Lạc, tự xưng là An Dương Vương.",
        imagePrompt: "Ancient Vietnamese warrior king Thuc Phan founding Au Lac kingdom, traditional bronze age armor, misty mountains background, epic historical painting style",
        location: { name: "Cổ Loa", lat: 40, lng: 55 }
      },
      {
        name: "Xây dựng thành Cổ Loa",
        date: "257-208 TCN",
        description: "An Dương Vương cho xây dựng kinh đô Cổ Loa với ba vòng thành luỹ hình ốc sên, một kỳ quan kiến trúc quân sự thời cổ đại.",
        imagePrompt: "Aerial view of ancient Co Loa citadel with spiral walls, Vietnamese bronze age architecture, workers building massive earthworks, historical illustration",
        location: { name: "Thành Cổ Loa", lat: 35, lng: 60 }
      },
      {
        name: "Chế tạo nỏ thần",
        date: "Khoảng 250 TCN",
        description: "Cao Lỗ - một thợ thủ công tài ba - được lệnh chế tạo nỏ thần, vũ khí oai hùng bảo vệ đất nước.",
        imagePrompt: "Ancient Vietnamese craftsman forging magical crossbow, mystical golden light, traditional workshop, dramatic lighting, detailed historical art",
        location: { name: "Cổ Loa", lat: 38, lng: 58 }
      },
      {
        name: "Triệu Đà chiếm nước Âu Lạc",
        date: "208 TCN",
        description: "Triệu Đà từ phương Bắc kéo quân vào, dùng kế gả con gái Mị Châu cho Trọng Thủy để lấy được bí mật nỏ thần, từ đó đánh chiếm Âu Lạc.",
        imagePrompt: "Zhao Tuo army invading Au Lac kingdom, ancient battle scene, Vietnamese soldiers defending with crossbows, dramatic warfare painting",
        location: { name: "Biên giới Âu Lạc", lat: 45, lng: 50 }
      }
    ],
    figures: [
      {
        name: "An Dương Vương (Thục Phán)",
        bio: "Vị vua anh hùng sáng lập nước Âu Lạc, người đã thống nhất các bộ lạc và xây dựng kinh đô Cổ Loa vững chắc.",
        significance: "Là một trong những vị vua đầu tiên trong lịch sử Việt Nam, đặt nền móng cho quốc gia độc lập.",
        imagePrompt: "Portrait of King An Duong Vuong, wise ancient Vietnamese king, traditional bronze age royal attire, dignified expression, historical painting style"
      },
      {
        name: "Cao Lỗ",
        bio: "Thợ rèn tài ba, người chế tạo nỏ thần - vũ khí thần kỳ giúp bảo vệ nước Âu Lạc.",
        significance: "Biểu tượng của trí tuệ và tài năng thủ công nghệ thuật Việt Nam thời cổ đại.",
        imagePrompt: "Ancient Vietnamese master craftsman Cao Lo, elderly skilled blacksmith, holding magical crossbow, workshop setting, wise expression"
      },
      {
        name: "Mị Châu",
        bio: "Công chúa của An Dương Vương, người vợ của Trọng Thủy. Vì yêu chồng mà vô tình để lộ bí mật nỏ thần.",
        significance: "Nhân vật bi kịch trong truyền thuyết, tượng trưng cho tình yêu và sự hy sinh.",
        imagePrompt: "Princess Mi Chau, beautiful young Vietnamese princess, traditional ancient dress, sad expression, pearl tears, tragic romantic painting"
      }
    ],
    quiz: [
      {
        question: "An Dương Vương đã xây dựng kinh đô nào?",
        options: {
          A: "Thăng Long",
          B: "Cổ Loa",
          C: "Hoa Lư",
          D: "Đại La"
        },
        correctAnswer: "B"
      },
      {
        question: "Vũ khí nào được chế tạo để bảo vệ nước Âu Lạc?",
        options: {
          A: "Kiếm thần",
          B: "Giáo thần",
          C: "Nỏ thần",
          D: "Cung thần"
        },
        correctAnswer: "C"
      },
      {
        question: "Ai đã chiếm nước Âu Lạc năm 208 TCN?",
        options: {
          A: "Tần Thủy Hoàng",
          B: "Hán Vũ Đế",
          C: "Triệu Đà",
          D: "Lưu Bang"
        },
        correctAnswer: "C"
      }
    ],
    jigsawPuzzle: {
      imagePrompt: "Epic panoramic painting of ancient Co Loa citadel with spiral walls, An Duong Vuong kingdom, Vietnamese bronze age civilization, warriors training, traditional architecture, golden sunset, detailed historical illustration",
      relatedFact: "Thành Cổ Loa có hệ thống ba vòng thành hình xoắn ốc độc đáo, là một kỳ quan kiến trúc quân sự thời cổ đại."
    },
    mapData: {
      imagePrompt: "Ancient weathered map of Au Lac kingdom, showing Co Loa citadel, rivers and mountains, parchment texture, Vietnamese bronze age era, calligraphic Vietnamese labels",
      locations: [
        {
          name: "Kinh đô Cổ Loa",
          description: "Trung tâm chính trị của nước Âu Lạc với hệ thống thành luỹ kiên cố.",
          lat: 40,
          lng: 55
        },
        {
          name: "Sông Hồng",
          description: "Con sông lớn chảy qua vùng đất Âu Lạc, nguồn sống của người dân.",
          lat: 35,
          lng: 50
        },
        {
          name: "Núi Tản Viên",
          description: "Vùng núi thiêng liêng, nơi thờ Tản Viên Sơn Thánh.",
          lat: 30,
          lng: 45
        }
      ]
    }
  },

  "Hai Bà Trưng (40 - 43)": {
    summary: "Cuộc khởi nghĩa của Hai Bà Trưng là một trong những cuộc đấu tranh giải phóng dân tộc vĩ đại nhất lịch sử Việt Nam. Trưng Trắc và Trưng Nhị đã lãnh đạo nhân dân nổi dậy chống lại ách đô hộ của nhà Hán, giành lại độc lập trong ba năm. Dù cuộc khởi nghĩa thất bại, tinh thần anh dũng của Hai Bà đã trở thành biểu tượng bất diệt của ý chí tự chủ và tinh thần yêu nước của dân tộc Việt Nam.",
    events: [
      {
        name: "Tô Định giết Thi Sách",
        date: "40",
        description: "Tô Định - thái thú bạo ngược của nhà Hán giết hại Thi Sách - chồng của Trưng Trắc, khơi mào cho cuộc khởi nghĩa.",
        imagePrompt: "Ancient Vietnamese warrior Thi Sach martyrdom scene, dramatic historical moment, traditional clothing, tragic atmosphere, historical painting",
        location: { name: "Mê Linh", lat: 42, lng: 52 }
      },
      {
        name: "Hai Bà Trưng khởi nghĩa",
        date: "Tháng 2/40",
        description: "Trưng Trắc và Trưng Nhị cùng nhân dân Giao Chỉ nổi dậy, đánh đuổi quân Hán. Trưng Trắc tự xưng là Trưng Nữ Vương.",
        imagePrompt: "Two Trung Sisters on war elephants leading Vietnamese army, heroic women warriors, traditional armor, dramatic battle scene, epic historical painting",
        location: { name: "Mê Linh", lat: 40, lng: 50 }
      },
      {
        name: "Giải phóng 65 thành trì",
        date: "40-42",
        description: "Trong hai năm, Hai Bà Trưng giải phóng 65 thành trì từ tay quân Hán, lãnh thổ trải dài từ Hợp Phố (Quảng Tây) đến Nhật Nam (Quảng Nam).",
        imagePrompt: "Map showing liberated citadels, Trung Sisters kingdom expansion, victorious Vietnamese forces, ancient Vietnam landscape, strategic military illustration",
        location: { name: "Giao Chỉ", lat: 45, lng: 55 }
      },
      {
        name: "Mã Viện đàn áp khởi nghĩa",
        date: "43",
        description: "Nhà Hán cử Mã Viện đem quân đông đảo sang đàn áp. Sau nhiều trận chiến ác liệt, Hai Bà thất bại và tuẫn tiết trên sông Hát.",
        imagePrompt: "Final battle of Trung Sisters against Ma Yuan army, tragic defeat scene, Vietnamese warriors fighting bravely, dramatic historical war painting",
        location: { name: "Sông Hát", lat: 38, lng: 48 }
      }
    ],
    figures: [
      {
        name: "Trưng Trắc",
        bio: "Chị của Hai Bà Trưng, vợ của Thi Sách. Sau khi chồng bị giết, bà đã lãnh đạo cuộc khởi nghĩa chống Hán và tự xưng là Trưng Nữ Vương.",
        significance: "Biểu tượng của tinh thần yêu nước và lòng dũng cảm của phụ nữ Việt Nam.",
        imagePrompt: "Queen Trung Trac on elephant, powerful Vietnamese warrior queen, determined expression, royal armor, leading army, heroic portrait"
      },
      {
        name: "Trưng Nhị",
        bio: "Em gái của Trưng Trắc, cùng chị nổi dậy khởi nghĩa chống quân Hán. Hai chị em luôn sát cánh bên nhau đến phút cuối.",
        significance: "Tượng trưng cho tình chị em ruột thịt và tinh thần đoàn kết dân tộc.",
        imagePrompt: "Trung Nhi warrior princess, brave Vietnamese female general, traditional battle attire, fierce expression, standing beside sister"
      },
      {
        name: "Thi Sách",
        bio: "Chồng của Trưng Trắc, lãnh chúa Chu Diên. Bị thái thú Tô Định giết hại vì không chịu khuất phục.",
        significance: "Người anh hùng có chí khí bất khuất, cái chết của ông là tia lửa thắp lên cuộc khởi nghĩa.",
        imagePrompt: "Thi Sach noble Vietnamese lord, brave warrior, traditional ancient clothing, dignified stance, martyrdom hero portrait"
      }
    ],
    quiz: [
      {
        question: "Hai Bà Trưng khởi nghĩa vào năm nào?",
        options: {
          A: "39",
          B: "40",
          C: "41",
          D: "43"
        },
        correctAnswer: "B"
      },
      {
        question: "Ai là vị tướng nhà Hán đàn áp cuộc khởi nghĩa Hai Bà Trưng?",
        options: {
          A: "Tô Định",
          B: "Mã Viện",
          C: "Lưu Bị",
          D: "Tào Tháo"
        },
        correctAnswer: "B"
      },
      {
        question: "Hai Bà Trưng đã giải phóng bao nhiêu thành trì?",
        options: {
          A: "50 thành trì",
          B: "60 thành trì",
          C: "65 thành trì",
          D: "70 thành trì"
        },
        correctAnswer: "C"
      }
    ],
    jigsawPuzzle: {
      imagePrompt: "Epic battle painting of Trung Sisters on war elephants leading Vietnamese army against Han invaders, dramatic sky, traditional armor, dynamic composition, heroic historical art style",
      relatedFact: "Hai Bà Trưng là những nữ tướng dũng cảm nhất lịch sử Việt Nam, đã cưỡi voi chỉ huy quân đội đánh đuổi quân Hán."
    },
    mapData: {
      imagePrompt: "Ancient map of Trung Sisters kingdom territory, showing 65 liberated citadels, rivers and mountains of ancient Vietnam, parchment style, calligraphic labels",
      locations: [
        {
          name: "Mê Linh - Nơi khởi nghĩa",
          description: "Quê hương của Hai Bà Trưng, nơi cuộc khởi nghĩa bắt đầu.",
          lat: 40,
          lng: 50
        },
        {
          name: "Sông Hát",
          description: "Nơi Hai Bà tuẫn tiết, trở thành biểu tượng bất diệt của tinh thần yêu nước.",
          lat: 38,
          lng: 48
        },
        {
          name: "Cung Cấm Lãng",
          description: "Nơi Hai Bà lập triều đình sau khi giải phóng đất nước.",
          lat: 42,
          lng: 52
        }
      ]
    }
  },

  "Nhà Lý (1009 - 1225)": {
    summary: "Nhà Lý là triều đại phong kiến lâu dài và thịnh vượng nhất trong lịch sử Việt Nam trung đại. Khởi nguồn từ Lý Công Uẩn, triều đại này đã xây dựng nền móng vững chắc cho quốc gia độc lập với nhiều thành tựu xuất sắc về chính trị, kinh tế, văn hóa và giáo dục. Thời Lý đánh dấu sự phát triển rực rỡ của Phật giáo, nghệ thuật kiến trúc và hệ thống quản lý nhà nước hiện đại.",
    events: [
      {
        name: "Lý Công Uẩn lên ngôi",
        date: "1009",
        description: "Lý Công Uẩn được suy tôn lên ngôi vua, lập ra triều đại Lý, mở đầu thời kỳ hưng thịnh cho đất nước.",
        imagePrompt: "Emperor Ly Cong Uan coronation ceremony, grand Vietnamese royal court, traditional imperial robes, majestic atmosphere, historical painting",
        location: { name: "Hoa Lư", lat: 45, lng: 50 }
      },
      {
        name: "Dời đô về Thăng Long",
        date: "1010",
        description: "Lý Thái Tổ dời đô từ Hoa Lư về Đại La, đổi tên thành Thăng Long (nay là Hà Nội). Đây là quyết định chiến lược quan trọng.",
        imagePrompt: "Ancient Thang Long citadel construction, Vietnamese workers building royal palace, dragon flying above, golden era atmosphere, detailed historical illustration",
        location: { name: "Thăng Long", lat: 40, lng: 55 }
      },
      {
        name: "Xây Chùa Một Cột",
        date: "1049",
        description: "Vua Lý Thái Tông cho xây dựng Chùa Một Cột - một kiệt tác kiến trúc Phật giáo độc đáo của Việt Nam.",
        imagePrompt: "One Pillar Pagoda construction, unique Vietnamese Buddhist architecture, lotus-shaped temple, serene pond, traditional craftsmen working, artistic rendering",
        location: { name: "Thăng Long", lat: 38, lng: 53 }
      },
      {
        name: "Chiến thắng quân Tống",
        date: "1075-1077",
        description: "Lý Thường Kiệt đánh tan quân Tống xâm lược, bảo vệ vững chắc biên cương đất nước. Trận Như Nguyệt River là chiến thắng lừng lẫy.",
        imagePrompt: "Ly Thuong Kiet victorious battle against Song dynasty, Vietnamese army defeating Chinese invaders, dramatic warfare scene, heroic general portrait",
        location: { name: "Như Nguyệt River", lat: 48, lng: 52 }
      },
      {
        name: "Mở khoa thi Đại học đầu tiên",
        date: "1070",
        description: "Vua Lý Thánh Tông mở khoa thi Đại học đầu tiên, khởi đầu cho nền giáo dục Nho học ở Việt Nam.",
        imagePrompt: "First imperial examination in Vietnam, scholars taking tests in traditional court, Ly dynasty educational system, historical academic scene",
        location: { name: "Thăng Long", lat: 40, lng: 54 }
      }
    ],
    figures: [
      {
        name: "Lý Công Uẩn (Lý Thái Tổ)",
        bio: "Vị vua khai quốc triều Lý, người đã thống nhất đất nước và dời đô về Thăng Long, đặt nền móng cho triều đại kéo dài hơn 200 năm.",
        significance: "Nhà lãnh đạo sáng suốt, tạo dựng nền tảng cho một trong những triều đại thịnh vượng nhất lịch sử Việt Nam.",
        imagePrompt: "Emperor Ly Thai To, wise founding emperor of Ly dynasty, imperial dragon robes, serene dignified expression, traditional Vietnamese court portrait"
      },
      {
        name: "Lý Thường Kiệt",
        bio: "Danh tướng đời Lý, người đã chỉ huy quân đội đánh bại quân Tống xâm lược, bảo vệ độc lập dân tộc.",
        significance: "Anh hùng dân tộc, chiến lược gia xuất sắc, tác giả bài thơ 'Nam quốc sơn hà' - tuyên ngôn độc lập đầu tiên.",
        imagePrompt: "General Ly Thuong Kiet on horseback, heroic Vietnamese military commander, traditional armor, battlefield background, determined warrior expression"
      },
      {
        name: "Lý Nhân Tông",
        bio: "Vua thứ 5 của nhà Lý, trị vì trong thời kỳ thịnh trị của triều đại, chú trọng phát triển văn hóa và Phật giáo.",
        significance: "Vị vua sáng suốt, tạo điều kiện cho Phật giáo và văn hóa phát triển rực rỡ.",
        imagePrompt: "Emperor Ly Nhan Tong, peaceful Buddhist emperor, meditating in royal robes, lotus flowers, serene palace setting, spiritual portrait"
      }
    ],
    quiz: [
      {
        question: "Nhà Lý được thành lập vào năm nào?",
        options: {
          A: "1009",
          B: "1010",
          C: "1054",
          D: "1070"
        },
        correctAnswer: "A"
      },
      {
        question: "Ai là người dời đô về Thăng Long?",
        options: {
          A: "Lý Thường Kiệt",
          B: "Lý Thánh Tông",
          C: "Lý Công Uẩn",
          D: "Lý Nhân Tông"
        },
        correctAnswer: "C"
      },
      {
        question: "Chùa Một Cột được xây dựng dưới thời vua nào?",
        options: {
          A: "Lý Thái Tổ",
          B: "Lý Thái Tông",
          C: "Lý Thánh Tông",
          D: "Lý Nhân Tông"
        },
        correctAnswer: "B"
      }
    ],
    jigsawPuzzle: {
      imagePrompt: "Panoramic view of ancient Thang Long capital during Ly dynasty golden age, imperial citadel, pagodas, bustling markets, Vietnamese traditional architecture, peaceful prosperity, detailed historical painting",
      relatedFact: "Triều đại Lý kéo dài 216 năm (1009-1225), là một trong những triều đại lâu dài và thịnh vượng nhất lịch sử Việt Nam."
    },
    mapData: {
      imagePrompt: "Ancient map of Dai Viet during Ly Dynasty, showing Thang Long capital, major rivers, pagodas, trade routes, parchment texture, calligraphic Vietnamese labels",
      locations: [
        {
          name: "Kinh đô Thăng Long",
          description: "Trung tâm chính trị, kinh tế, văn hóa của đất nước thời Lý.",
          lat: 40,
          lng: 55
        },
        {
          name: "Chùa Một Cột",
          description: "Kiệt tác kiến trúc Phật giáo độc đáo, biểu tượng của Hà Nội.",
          lat: 38,
          lng: 53
        },
        {
          name: "Sông Hồng",
          description: "Con sông quan trọng, là trục giao thông và nguồn sống của kinh đô.",
          lat: 35,
          lng: 50
        },
        {
          name: "Biên giới phía Bắc",
          description: "Nơi diễn ra các trận chiến chống quân Tống xâm lược.",
          lat: 48,
          lng: 52
        }
      ]
    }
  }
};

// Hàm helper để lấy dữ liệu theo tên thời kỳ
export const getHistoricalDataByPeriod = (periodName: string): PeriodData | null => {
  return HISTORICAL_DATA[periodName] || null;
};

// Hàm tạo dữ liệu mặc định cho các thời kỳ chưa có dữ liệu
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
        question: "Câu hỏi về thời kỳ này?",
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
      relatedFact: "Thông tin thú vị về thời kỳ này đang được cập nhật."
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
