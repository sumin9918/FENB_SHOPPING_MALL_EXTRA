const { v4: uuidv4 } = require('uuid');

let products = [
  {
    id: 1,
    favorites: 123,
    brand: 0,
    category: 1,
    gender: 1,
    name: '[나이키] 에어맥스 솔',
    price: 229000,
    color: 10,
    imgURL: 'http://localhost:8000/images/nike/sandal/nike_beige_female_sandal.png',
    description: `화창한 날 에어맥스 솔로 과감한 스니커즈 스타일을 연출해 보세요.
    미드솔와 노출된 에어 유닛의 커다란 폼이 인기 있는 스트리트웨어 스타일을 연출하며 해변에서 시내까지 가벼운 편안함을 선사합니다.
    갑피의 메쉬가 통기성을 유지하고, 조절 가능한 스트랩과 버클이 맞춤 핏을 제공합니다.
    스트랩을 착용하고 나면 즐길 시간입니다.
    상품 특징
    아이코닉한 스니커즈 스타일과 오래가는 편안함을 선사하는 뒤꿈치의 투명 나이키 에어 쿠셔닝
    버클이 달린 탈부착 스트랩으로 이동 중에도 맞춤형 모던 룩 연출 가능
    발을 제자리에 고정해 주는 크래들 구조의 풋베드
    접지력과 내구성을 더해주는 고무 밑창`,
    dateOfManufacture: new Date('2022-12'),
    feature: '여성 샌달',
  },
  {
    id: 2,
    favorites: 124,
    brand: 0,
    category: 0,
    gender: 0,
    name: '[나이키] 덩크 로우 레트로',
    price: 330000,
    color: 1,
    imgURL: 'http://localhost:8000/images/nike/sneakers/nike_black_male_sneakers.png',
    description: `진정한 팀워크를 위해
      하드우드를 위해 태어나 스트리트로 무대를 옮겨온 나이키 덩크 로우 레트로가 산뜻한 오버레이와 오리지널 팀 컬러로 돌아왔습니다.
      신을수록 부드러워지는 멋진 룩의 프리미엄 가죽 갑피가 특징인 이 농구 아이콘은 80년대 분위기를 한껏 발산합니다. 여기에 현대의 풋웨어 기술로 21세기의 편안함을 구현했습니다.
      상품 특징
      길들이면서 더욱 아름다워지는 완벽한 광택의 프리미엄 가죽 갑피
      현대적인 폼 중창으로 가볍고 반응성이 우수한 쿠셔닝 선사
      로우 컷 패딩 카라로 편안한 느낌의 날렵한 룩 완성
      스쿨 팀 컬러의 과감한 컬러 블로킹으로 오리지널 컬러웨이 감성 재현
      클래식 농구 피벗 서클이 새겨진 고무 밑창이 내구성과 접지력, 헤리티지 스타일 선사
      상품 상세 정보
      로우 컷 카라
      폼 안창
      토의 천공 디테일`,
    dateOfManufacture: new Date('2022-12'),
    feature: '남성 운동화',
  },
  {
    id: 3,
    favorites: 66,
    brand: 0,
    category: 3,
    gender: 0,
    name: '[나이키] 알파플라이 2',
    price: 350000,
    color: 3,
    imgURL: 'http://localhost:8000/images/nike/walking/nike_orange_male_walking.png',
    description: `
      이 나이키 에어 줌 알파플라이 넥스트% 2를 신고 몇 걸음을 내디디면, 가장 좋아하던 오래된 레이싱화도 이전과는 다르게 느껴질 것입니다.
      이 로켓선은 완주에 필요한 기본 기능은 포기하지 않으면서 개인 기록을 단축시킬 수 있게 도와줍니다.
      러닝을 위해 두꺼우면서 가벼운 서포트 시스템이 편안함과 속도를 동시에 잡았습니다.
      개인 기록에 도전하면서 나이키의 모든 레이싱화 중에서 가장 탁월한 에너지 반환력을 즐기세요.
비트에 탄력을 더하다
줌 에어 유닛과 전체적으로 적용된 줌X 폼이 나이키 최고의 에너지 반환 쿠셔닝 시스템으로 걸음마다 탄력을 더해줍니다.
얇은 고무 밑창이 접지력을 강화하고 줌 에어 쿠셔닝 아래에 줌X를 더 많이 적용할 수 있게 합니다.
폼을 추가해 반응성뿐만 아니라 뒤꿈치에서 앞꿈치로의 전환도 향상했습니다.

오랫동안 지속되는 상쾌함
전체적으로 적용된 줌X 폼이 초경량의 반응성 좋은 착화감을 선사합니다.
스피드를 위해 탄생했지만 쿠셔닝이 더해져 마라톤 후반부에도 산뜻함을 유지해 줍니다.
필요한 부위에 편안함을 제공합니다.

계속 전진하세요
전체적으로 적용된 탄소 섬유 플레이트 덕분에 다음 단계로 전진하는 듯한 느낌을 선사합니다.
이를 통해 추진력을 더하고 발걸음을 매끄럽게 전환해 줍니다.
발 앞부분과 뒤꿈치 모두 약간 더 넓은 베이스를 적용, 안정감 있는 플랫폼을 구현해 코스에서 보다 자신감 있게 동작을 전환할 수 있습니다.

추가 특징
플라이니트 패밀리에 속한 갑피의 아톰니트 소재는 발의 윤곽을 살린 핏을 선사하며 가볍고 통기성이 뛰어남
특별히 디자인된 로프트 힐 포드에는 플라이니트 원사가 사용되어 안정적이고 확장된 편안함을 선사하며, 가벼운 느낌으로 힐을 고정
트임 있는 신발 끈이 안정적이고 부드러운 느낌 두툼한 패딩이 적용된 일체형 니트 설포가 안정적이고 반복적으로 핏을 완성하여 신발 끈의 압박감을 감소
수백 명의 러너 데이터를 활용하여 밑창을 디자인 필요한 곳에 다양한 각도의 접지력을 배치하여 착지 부위부터 앞꿈치까지 그립력을 제공
      `,
    dateOfManufacture: new Date('2020-12'),
    feature: '남성 워킹화',
  },
  {
    id: 4,
    favorites: 30,
    brand: 0,
    category: 3,
    gender: 1,
    name: '[나이키] 페가수스 40',
    price: 339000,
    color: 12,
    imgURL: 'http://localhost:8000/images/nike/walking/nike_pink_female_walking.png',
    description: `
      어떤 러닝에도 탄력 있는 착화감을 선사하는 페가수스가 여러분의 목표 달성을 돕기 위해 나만을 위한 친숙한 감각으로 돌아왔습니다.
      이번 버전은 많은 사랑을 받아온 반응성과 중간 정도의 지지력은 그대로 유지하면서도 아치와 발가락 같은 민감한 부위에 편안함을 더했습니다.
      마라톤 러닝을 하든, 해지기 전 잠시 시간을 내어 스피드 세션에 참여하든, 즉흥적으로 짧은 단체 여행을 떠나든,
      매일매일 러닝을 이어가며 믿음을 쌓을 수 있는 로드 러너로서의 자리를 지키고 있습니다.
지지력: 보통
신발의 지지력이 높을수록 안정성이 높아지고 발걸음도 자연스러워집니다.
튜닝된 지지력과 의도적으로 배치된 쿠셔닝의 조합으로 걸음마다 안정감을 느낄 수 있습니다.
Peg 40은 중간 정도의 지지력을 제공합니다. 뒤꿈치 또는 앞꿈치로 착지할 때 균형감을 더해 줍니다.
장거리 및 단거리 러닝에도 적합하며 뒤꿈치에서 발끝까지 매끄럽게 이어지는 착화감을 느낄 수 있습니다.

쿠셔닝: 보통
발 아래에 쿠션이 더 많을수록 러닝이 더 부드럽고 편안해집니다.
쿠셔닝은 발이 지면에 닿는 순간 충격을 완화합니다.
나이키 리액트 기술을 적용하여 편안하고 반응성이 뛰어난 착화감을 선사하는 내구성 좋은 경량 폼으로 지면과 연결된 듯한 감각을 느껴 보세요.
계속되는 러닝에도 형태를 그대로 유지하며 한결같은 착용감을 선사합니다.

반응성: 높음
신발의 반응성이 높을수록 발을 디딜 때마다 반환되는 에너지가 많아집니다.
좀 더 빠르게 달리고 싶을 때도, 보다 수월하게 달리고 싶을 때도 반응성이 뛰어난 신발은 발걸음에 탄력을 더해 러닝에서
더 많은 것을 얻을 수 있습니다.
나이키 리액트 기술과 앞꿈치와 뒤꿈치에 1개씩 총 2개의 줌 에어 유닛을 결합해 발을 지면에서 떼는 순간
탄력 있는 반응성과 충만한 에너지가 느껴집니다.

매력적인 핏과 착용감
섬세하게 조정된 단일 레이어 메쉬가 매력적인 착용감과 핏을 선사합니다.
새로운 디자인의 중족부 스트랩이 모든 사이즈의 아치에 맞는 형태로 발에 맞춘 듯한 몰드 핏을 형성합니다.

페가수스 40은 무엇이 달라졌을까요?
페가수스 40의 디자인은 말 그대로 인사이드 아웃 접근 방식을 취했습니다.
먼저 중족부 밴드는 마치 페가수스가 아치를 부드럽게 안아 환영하듯 안정적이면서도 편안한 느낌을 주도록 구현되었습니다.
발에서 가장 민감한 발가락, 아치, 뒤꿈치가 있는 신발 내부의 가장자리를 편안하고 쾌적하면서도 넉넉하게 만들기 위해 발 모양에 꼭 맞는 원형 패턴을 제작했습니다.
      `,
    dateOfManufacture: new Date('2019-12'),
    feature: '여성 워킹화',
  },
  {
    id: 5,
    favorites: 60,
    brand: 1,
    category: 3,
    gender: 1,
    name: '[아디다스] 아디제로 아디오스 프로 3',
    price: 215000,
    color: 7,
    imgURL: 'http://localhost:8000/images/adidas/walking/adidas_green_female_walking.png',
    description: `친환경 재생 소재가 사용된 초경량 장거리 러닝화
      더 빠른 스피드를 위해 탄생한 아디제로 아디오스 3 프로 러닝화와 함께 레이스 당일의 최고 기록을 향해 자신 있는 질주를 시작해보세요. 10K부터 마라톤 코스까지 탄력적인 삼중 라이트스트라이크 쿠셔닝이 보다 편안한 움직임을 이끌고, 단단한 강성을 가진 가벼운 에너지로드가 힘 손실을 줄여 추진력을 더해줍니다. 모든 지형에 최적화된 컨티넨탈™ 러버 아웃솔이 어떤 환경에서도 안정적인 접지력을 선사합니다.`,
    dateOfManufacture: new Date('2022-12'),
    feature: '여성 워킹화',
  },
  {
    id: 6,
    favorites: 70,
    brand: 1,
    category: 0,
    gender: 0,
    name: '[아디다스] 가젤 85',
    price: 189000,
    color: 0,
    imgURL: 'http://localhost:8000/images/adidas/sneakers/adidas_purple_male_sneakers.png',
    description: `1985년에 출시된 가젤의 프리미엄 버전
      시대를 초월하는 아이콘의 귀환. 축구 팬부터 스케이트보더와 클러버까지 전 세계를 사로잡은 가젤이 다시 돌아왔습니다. 다른 버전에 비해 잘 알려지지 않은 1985년 모델을 되살린 아디다스 가젤 85을 만나보세요. 각도와 형태에 가벼운 변화를 준 토 오버레이와 3-스트라이프, 높아진 폭싱 테이프를 새롭게 더해 클래식 스타일의 진화를 선보입니다. 부드러운 프리미엄 스웨이드 갑피와 가죽 안감이 기분 좋은 착용감을 제공합니다.`,
    dateOfManufacture: new Date('2012-12'),
    feature: '남성 운동화',
  },
  {
    id: 7,
    favorites: 90,
    brand: 1,
    category: 2,
    gender: 0,
    name: '[아디다스] 아딜렛 컴포트 슬라이드',
    price: 82000,
    color: 2,
    imgURL: 'http://localhost:8000/images/adidas/slipper/adidas_red_male_slipper.png',
    description: `아이코닉한 스타일의 편안하고 실용적인 슬라이드
      클래식이 클래식인 이유. 실용성과 편안함의 완벽한 균형을 담아낸 아딜렛 슬라이드입니다. 신고 벗기 편한 슬립온 구조와 꼭 맞는 핏으로 언제 어디서나 자유롭게 이동할 수 있습니다. 아이코닉한 룩과 캐주얼한 스타일의 조화로 모든 아웃핏과 어울리는 무한한 실용성을 제공합니다. 양말을 신고 트랙 팬츠와 매치하거나 스윔 트렁크와 함께 맨발로 착용할 수 있습니다.`,
    dateOfManufacture: new Date('2011-12'),
    feature: '남성 슬리퍼',
  },
  {
    id: 8,
    favorites: 12,
    brand: 1,
    category: 1,
    gender: 1,
    name: '[아디다스] 스텔라 샌달',
    price: 150000,
    color: 8,
    imgURL: 'http://localhost:8000/images/adidas/sandal/adidas_yellow_female_sandal.png',
    description: `모든 모험을 위해 준비된 친환경 하이킹 샌달
     탁 트인 들판과 울창한 숲, 굴곡진 언덕에서 매 스텝을 흔들림 없이 받쳐주고 기분 좋은 여정을 이끄는 아디다스 by 스텔라 맥카트니 샌달을 만나보세요. 과감한 볼륨감이 돋보이는 푹신한 폼의 완벽한 쿠셔닝으로 도시부터 아웃도어까지 모두 가볍게 착용할 수 있습니다. 아늑한 EVA 미드솔과 인조 가죽 갑피가 조화를 이루며 발 전체를 보호하는 안정적인 편안함 속에서 마지막까지 집중력을 유지하고 자유롭게 움직일 수 있습니다.
     한정된 자원을 절약하고 플라스틱 폐기물을 줄이기 위해 천연 원료와 재생 소재를 사용한 친환경 제품입니다.`,
    dateOfManufacture: new Date('2022-12'),
    feature: '여성 샌달',
  },
  {
    id: 9,
    favorites: 224,
    brand: 2,
    category: 3,
    gender: 0,
    name: '[뉴발] 프레쉬폼 아리쉬',
    price: 180000,
    color: 11,
    imgURL: 'http://localhost:8000/images/newBalance/walking/newbal_gray_male_walking.png',
    description: `프레쉬폼 아리쉬(중립 쿠셔닝)
      최초의 N로고 러닝화였던 M320은 가볍고, 컬러풀하고, 뛰어난 성능을 자랑했습니다.
      전통적인 뉴발란스 신발 요소인 긴 뱀프와 새들 구조를 가지고 있었고 새로운 Asttrocrepe 아웃솔과 나일론 어퍼로 더 뛰어난 기능을 제공하였습니다.
      
      동시에 가볍기도 하고 편안한 착화감을 제공하면서도 소비자들에게 합리적 가격으로 제공하는 브랜드의 기조가 엿보였습니다.
      프레쉬폼 아리쉬는 M320처럼 뛰어난 기능을 합리적인 가격으로 제안하는 러닝화입니다.`,
    dateOfManufacture: new Date('2000-12'),
    feature: '남성 워킹화',
  },
  {
    id: 10,
    favorites: 13,
    brand: 2,
    category: 0,
    gender: 0,
    name: '[뉴발] 프레쉬폼 엑스 880',
    price: 229000,
    color: 9,
    imgURL: 'http://localhost:8000/images/newBalance/sneakers/newbal_navy_male_sneakers.png',
    description: `프레쉬폼x 880 V12
      프레쉬폼x 880은 다재다능한 러닝화입니다.
      까다로운 러너들의 욕구를 프레쉬폼x 880 V12는 만족시켜 줄 것입니다.
      필요한 쿠셔닝도, 러너에게 필요한 반발력도 그리고 디자인까지 말이죠.
      미국 현지에서의 수 많은 러너들을 통해 프레쉬폼x 880을 대상으로 테스트가 시행 되었고
      테스트를 통해 러닝화 프레쉬폼x 880의 12번째 버전도 탄생하였습니다.
      `,
    dateOfManufacture: new Date('2022-12'),
    feature: '남성 운동화',
  },
  {
    id: 11,
    favorites: 0,
    brand: 2,
    category: 3,
    gender: 1,
    name: '[뉴발] 퓨어셀 에스씨 엘리트 버전 3 뉴욕 마라톤팩',
    price: 109000,
    color: 3,
    imgURL: 'http://localhost:8000/images/newBalance/walking/newbal_orange_female_walking.png',
    description: `2022년 뉴욕 시티 마라톤을 기념하여 2023년 발매 예정인
      퓨어셀 S.C Elite V3가 뉴욕 시티 마라톤 기념판으로 선출시 됩니다.
      뉴발란스는 2017년부터 현재까지 뉴욕시티 마라톤의 공식
      메인파트너로 대회 의류와 신발을 후원하고 있습니다.
      뿐만 아니라 뉴욕 시티 마라톤 주최인 NYRR(뉴욕 로드 러너스)의
      러닝 자선 활동에 함께 기여하며 건강한 파트너십을 지속해오고 있습니다.
      `,
    dateOfManufacture: new Date('2019-12'),
    feature: '여성 워킹화',
  },
  {
    id: 12,
    favorites: 13,
    brand: 2,
    category: 2,
    gender: 1,
    name: '[뉴발] 리바운드',
    price: 87000,
    color: 10,
    imgURL: 'http://localhost:8000/images/newBalance/slipper/newbal_beige_female_slipper.png',
    description: `NB 리바운드 FLIPFLOP / SD5601v2
      22년 많은 사랑을 받았던 SD5601 플립플랍이 V2로 버전업 되었습니다
      탄성쿠셔닝 기능성을 가진 소재가 사용되어 편안한 쿠셔닝 뿐만 아니라 보행 시 탄성이 추가되어 발의 피로감을 덜어줍니다.
      보다 안정감 있는 디자인 설계가 적용되어 발이 뒤틀리지 않도록 잘 잡아줍니다.
      피부컬러와 잘 어울리는 Pale Earthy tone이 적용되어 캐쥬얼한 착장 어디든 잘 어울려 코디에 용이합니다.
      `,
    dateOfManufacture: new Date('2022-10'),
    feature: '여성 슬리퍼',
  },
  {
    id: 13,
    favorites: 13,
    brand: 3,
    category: 0,
    gender: 0,
    name: '[스케쳐스] 딜라이트 익스트림',
    price: 127000,
    color: 1,
    imgURL: 'http://localhost:8000/images/sketchers/sneakers/skechers_black_male_sneakers.png',
    description: `2015년 런칭했던 딜라이트 다크 팬더 시리즈 재 발매
      Memory Foam 쿠셔닝 인솔로 편안한 착화감 제공
      기모로 라이닝 처리가 되어있어 높은 보온 효과
      유연하고 접지력 높은 고무 아웃솔`,
    dateOfManufacture: new Date('2021-12'),
    feature: '남성 운동화',
  },
  {
    id: 14,
    favorites: 13,
    brand: 3,
    category: 4,
    gender: 1,
    name: '[스케쳐스] 클레오',
    price: 92000,
    color: 6,
    imgURL: 'http://localhost:8000/images/sketchers/shoes/skechers_brown_female_shoes.png',
    description: `ARCH FIT 기능이 더해져 발의 피로도를 낮춘 플랫 슈즈
      ARCH FIT 기능: 인체 공학적으로 설계된 인솔로, 편안한 보행과 균형 잡힌 자세 유지를 도움 / 발의 충격을 분산시켜 피로도 완화
      STRETCH FIT니트 소재로 양말을 신은 듯 부드럽게 발에 감기는 착화감 제공
      고무 트랙션 아웃솔: 우수한 내구성, 유연성 제공
      `,
    dateOfManufacture: new Date('2017-12'),
    feature: '여성 구두',
  },
  {
    id: 15,
    favorites: 13,
    brand: 3,
    category: 1,
    gender: 1,
    name: '[스케쳐스] 하트 라이트샌달',
    price: 118000,
    color: 12,
    imgURL: 'http://localhost:8000/images/sketchers/sandal/skechers_pink_female_sandal.png',
    description: `나염 프린트 된 부드러운 패브릭 스트랩이 포인트 샌달
      풋베드에 엑스트라 폼이 더해져 편안한 착화감
      경량성 3D 하트 모양 아웃솔에서 걸을 때 마다 컬러풀한 라이트 효과 제공
      배터리 수명 약 3개월 / 연속 60시간 / ON & OFF 스위치 없음 / 배터리 교체 불가`,
    dateOfManufacture: new Date('2022-12'),
    feature: '여성 샌달',
  },
  {
    id: 16,
    favorites: 13,
    brand: 4,
    category: 0,
    gender: 1,
    name: '[에코] 그루브',
    price: 350000,
    color: 4,
    imgURL: 'http://localhost:8000/images/ecco/sneakers/ecco_blue_female_sneakers.png',
    description: `편안한 워킹을 경험할 수 있는 프리미엄 디자인과 오래가는 신발을 고민끝에 탄생한 그루브 스니커즈
      장소에 상관없이 발을 쉽게 움직일 수 있도록 유연하게 구부러지는 솔 디자인
      ECCO의 버터처럼 부드러운 가죽으로 제작
      가죽 태닝 과정에서 발생하는 물과 화학 물질 사용량을 줄이는 ECCO DriTan™ (드라이탄)공법으로 생산된 가죽
      반사 트리밍 디테일과 아일렛을 대신하는 루프디자인의 신끈고리, 신축성이 있는 신끈으로 신고벗기가 쉬움
      탈부착이 가능한 듀얼 핏 컴포트 폼 인솔은 통기성이 뛰어난 텍스타일 소재
      부드럽고 유연한 움직임을 선사하는 시그니처 ECCO FLUIDFORM™(플루이드폼) 공법을 사용한 부드러운 PU 미드솔
      접지력뿐 아니라 어떤 각도에서도 발을 완전 자유롭게 사용할 수 있는 역동적인 양방향 플렉스 고무 아웃솔
      인솔이 2장으로 구성된 상품으로 인솔 2장 모두 분리 가능한 형태
      발볼이 타이트할 경우 인솔 1장을 제거하면 여유롭게 착화 가능`,
    dateOfManufacture: new Date('2022-12'),
    feature: '여성 운동화',
  },
  {
    id: 17,
    favorites: 13,
    brand: 4,
    category: 4,
    gender: 0,
    name: '[에코] 시티 트레이 라이트',
    price: 89000,
    color: 9,
    imgURL: 'http://localhost:8000/images/ecco/shoes/ecco_naby_male_shoes.png',
    description: `프리미엄 스웨이드 소재와 클래식한 페니 로퍼 스타일링이 맨발에도 최고의 편안함을 제공
     ECCO의 자체 가죽 공장에서 생산된 프리미엄 스웨이드에 컬러감을 더함
     섬세한 스티치 디테일의 갑피에 탄성이 있는 밴딩을 보강해 신고 벗기가 용이
     혁신적인 ECCO FLUIDFORM™(플루이드폼) 다이렉트 컴포트 기술을 통해 우수한 유연성과 가벼운 솔
     ECCO TRAYTECH™ 기술에 경량 고무아웃솔로 탁월한 접지력을 제공
     인솔이 가죽으로 마감되어 업그레이드된 편안함 제공(탈착 가능)`,
    dateOfManufacture: new Date('2022-12'),
    feature: '남성 구두',
  },
  {
    id: 18,
    favorites: 13,
    brand: 4,
    category: 3,
    gender: 0,
    name: '[에코] 바이옴',
    price: 150000,
    color: 5,
    imgURL: 'http://localhost:8000/images/ecco/walking/ecco_white_male_walking.png',
    description: `ECCO 기술을 통해 아웃도어와 모던패션이 결합된 바이옴2.0라인은 운동 선수들의 도움을 받아 개발된 퍼포먼스 스니커즈
      가죽공정에 사용되는 물과 화학 물질의 양을 줄이는 ECCO Dritan™(드라이탄) 기술 적용
      아웃도어에서 영감을 받은 라운드형 신발끈으로 색상이 선명하고 발의 편안함을 더함
      발을 자연스럽고 효율적으로 움직일 수 있게 하는BIOM ® NATURAL MOTION ®(바이옴 내츄럴 모션)기술과 인체공학적 핏 적용
      가벼운 ECCO PHORENE™(포렌) 미드솔이 충격흡수와 유연한 워킹을 선사
      재활용 고무를 사용하여 독특한 패턴의 고무 아웃솔이 지면과 완전히 접촉하여 뛰어난 트랙션을 제공`,
    dateOfManufacture: new Date('2022-12'),
    feature: '남성 워킹화',
  },
  {
    id: 19,
    favorites: 19,
    brand: 5,
    category: 1,
    gender: 0,
    name: '[크록스] 클래식',
    price: 49000,
    color: 10,
    imgURL: 'http://localhost:8000/images/crocs/sandal/crocs_beige_male_sandal.png',
    description: `참신하게. 자유롭게. 편안하게.
     전 세계에 편안함의 혁명을 탄생시킨 아이코닉한 클로그! 활동성과 편안함으로 날이 갈수록 더욱 사랑에 빠지게 될 슈즈입니다. 크록스 클래식 클로그는 가벼운 무게의 Iconic Crocs Comfort™와 모두에게 어울리는 컬러가 특징이며 편안한 착용감을 지속적으로 선사합니다.
     클래식 디테일
     놀랍도록 가벼운 무게와 착용의 즐거움
     물에 닿아도 안전한 소재와 물에 뜨는 가벼운 무게
     통기성을 향상하고 물기와 먼지를 배출해주는 통풍구
     간편한 세척과 빠른 건조
     발을 단단히 고정시키는 피벗식 힐 스트랩
     Jibbitz™ 참으로 맞춤형 장식 가능
     Iconic Crocs Comfort™: 가벼움. 유연함. 360도의 편안함.`,
    dateOfManufacture: new Date('2022-12'),
    feature: '남성 샌달',
  },
  {
    id: 20,
    favorites: 75,
    brand: 5,
    category: 1,
    gender: 1,
    name: '[크록스] 클래식',
    price: 49000,
    color: 12,
    imgURL: 'http://localhost:8000/images/crocs/sandal/crocs_pink_female_sandal.png',
    description: `참신하게. 자유롭게. 편안하게.
     전 세계에 편안함의 혁명을 탄생시킨 아이코닉한 클로그! 활동성과 편안함으로 날이 갈수록 더욱 사랑에 빠지게 될 슈즈입니다. 크록스 클래식 클로그는 가벼운 무게의 Iconic Crocs Comfort™와 모두에게 어울리는 컬러가 특징이며 편안한 착용감을 지속적으로 선사합니다.
     클래식 디테일
     놀랍도록 가벼운 무게와 착용의 즐거움
     물에 닿아도 안전한 소재와 물에 뜨는 가벼운 무게
     통기성을 향상하고 물기와 먼지를 배출해주는 통풍구
     간편한 세척과 빠른 건조
     발을 단단히 고정시키는 피벗식 힐 스트랩
     Jibbitz™ 참으로 맞춤형 장식 가능
     Iconic Crocs Comfort™: 가벼움. 유연함. 360도의 편안함.`,
    dateOfManufacture: new Date('2022-12'),
    feature: '여성 샌달',
  },
  {
    id: 21,
    favorites: 80,
    brand: 5,
    category: 1,
    gender: 0,
    name: '[크록스] 클래식',
    price: 49000,
    color: 4,
    imgURL: 'http://localhost:8000/images/crocs/sandal/crocs_blue_male_sandal.png',
    description: `참신하게. 자유롭게. 편안하게.
     전 세계에 편안함의 혁명을 탄생시킨 아이코닉한 클로그! 활동성과 편안함으로 날이 갈수록 더욱 사랑에 빠지게 될 슈즈입니다. 크록스 클래식 클로그는 가벼운 무게의 Iconic Crocs Comfort™와 모두에게 어울리는 컬러가 특징이며 편안한 착용감을 지속적으로 선사합니다.
     클래식 디테일
     놀랍도록 가벼운 무게와 착용의 즐거움
     물에 닿아도 안전한 소재와 물에 뜨는 가벼운 무게
     통기성을 향상하고 물기와 먼지를 배출해주는 통풍구
     간편한 세척과 빠른 건조
     발을 단단히 고정시키는 피벗식 힐 스트랩
     Jibbitz™ 참으로 맞춤형 장식 가능
     Iconic Crocs Comfort™: 가벼움. 유연함. 360도의 편안함.`,
    dateOfManufacture: new Date('2022-12'),
    feature: '남성 샌달',
  },
  {
    id: 22,
    favorites: 92,
    brand: 5,
    category: 1,
    gender: 1,
    name: '[크록스] 클래식',
    price: 49000,
    color: 3,
    imgURL: 'http://localhost:8000/images/crocs/sandal/crocs_orange_female_sandal.png',
    description: `참신하게. 자유롭게. 편안하게.
     전 세계에 편안함의 혁명을 탄생시킨 아이코닉한 클로그! 활동성과 편안함으로 날이 갈수록 더욱 사랑에 빠지게 될 슈즈입니다. 크록스 클래식 클로그는 가벼운 무게의 Iconic Crocs Comfort™와 모두에게 어울리는 컬러가 특징이며 편안한 착용감을 지속적으로 선사합니다.
     클래식 디테일
     놀랍도록 가벼운 무게와 착용의 즐거움
     물에 닿아도 안전한 소재와 물에 뜨는 가벼운 무게
     통기성을 향상하고 물기와 먼지를 배출해주는 통풍구
     간편한 세척과 빠른 건조
     발을 단단히 고정시키는 피벗식 힐 스트랩
     Jibbitz™ 참으로 맞춤형 장식 가능
     Iconic Crocs Comfort™: 가벼움. 유연함. 360도의 편안함.`,
    dateOfManufacture: new Date('2022-12'),
    feature: '여성 샌달',
  },
  {
    id: 23,
    favorites: 70,
    brand: 6,
    category: 3,
    gender: 0,
    name: '[아식스] 젤카야노 28',
    price: 136000,
    color: 1,
    imgURL: 'http://localhost:8000/images/asics/walking/asics_black_male_walking.png',
    description: `
    젤-카야노 28(4E)는 슈퍼 와이드 버전으로 발볼이 넓어 매우 편안하며 대표 안정화로서 안정감 있는 런닝을 구연하며 과내전 방지함과 동시에 쿠셔닝이 매우 뛰어납니다.
    기능 설명
    FLYTEFOAM BLAST 미드솔 소재를 활용하여 뛰어난 반발력과 경량성을 자랑함
    ORTHOLITE™ X-55 인솔을 활용하여 뛰어난 반발력과 쿠셔닝 그리고 항균성을 제공
    DYNAMIC DUOMAX™ 기능이 있어 런닝시 발생하는 과내전을 방지
    전후족부 GEL™ 기술을 적용하여 런닝시 충격을 완화
    FULL-GROUND CONTACT 와 TRUSSTIC 기술을 적용하여 런닝시 뒤틀림을 방지
    엔지니어드 메쉬를 활용하여 보다 편안하고 가벼우며 뛰어난 통기성을 제공`,
    dateOfManufacture: new Date('2000-09'),
    feature: '남성 워킹화',
  },
  {
    id: 24,
    favorites: 780,
    brand: 6,
    category: 3,
    gender: 0,
    name: '[아식스] 젤님버스 24',
    price: 168900,
    color: 7,
    imgURL: 'http://localhost:8000/images/asics/walking/asics_green_male_walking.png',
    description: `
    MD 코멘트
    젤 님버스 24는 아식스 쿠셔닝 사일로 안에서 가장 진보된 쿠셔닝을 자랑하는 아이템입니다.
    기존 시리즈보다 중량감을 덜어 경량성을 강조 하였고, 어퍼 부분에는 부드러운 엔지니어스 메쉬를 사용하여 장거리 러닝에도  부드러운 착화감을 제공합니다. 
    플라이트폼 블라스트 플러스 (FF BLAST PLUS™ ) 라는 기능을 탑재하여 쿠셔닝은 유지하면서 경량성을 자랑하고 매 스텝에 부드러운 착지를 선사합니다. 
   기능 설명
   FlyteFoam Blast+ (플라이트폼 블라스트 플러스)라는 신규 소재를 활용하여 경량성과 부드러운 쿠셔닝을 제공하며 활기찬 토오프 (Toe-off) 를 선사합니다. 
   Ortholite 소재를 활용한 라스팅 기법으로 항균성과 쿠셔닝을 제공
   전족부와 후족부에 젤이 탑재되어 뛰어난 쿠셔닝 제공
   니트 소재의 설포 구조가 발을 더 부드럽고 안정감 있게 잡아줌  
   아식스 라이트(ASICS LITE) 고무소재의 아웃솔이 경량성과 내구성을 제공하여 주며 반발력을 선사
   리사이클링 소재 사용
   `,
    dateOfManufacture: new Date('2000-09'),
    feature: '남성 워킹화',
  },
  {
    id: 25,
    favorites: 88,
    brand: 6,
    category: 3,
    gender: 1,
    name: '[아식스] 젤펀 워커',
    price: 168900,
    color: 11,
    imgURL: 'http://localhost:8000/images/asics/walking/asics_gray_female_walking.png',
    description: `
    MD 코멘트
GEL FUNWALKER는 트레일 컨셉이지만 경량성이 강조된 패션성을 가미한 워킹화 입니다.
슈즈 후족부에 GEL(젤)을 탑재하여 높은 쿠션성을 제공합니다.
워킹시 그립성 및 안정성을 제공합니다.
   `,
    dateOfManufacture: new Date('2023-02'),
    feature: '여성 워킹화',
  },
  {
    id: 26,
    favorites: 369,
    brand: 6,
    category: 3,
    gender: 1,
    name: '[아식스] 이엑스 89',
    price: 450000,
    color: 2,
    imgURL: 'http://localhost:8000/images/asics/walking/asics_red_female_walking.png',
    description: `
    MD 코멘트
    EX89는 80년대 실제 농구 선수들이 착용했었던 아식스 농구화를
    SPORTSTYLE로 재해석 한 상품이며 레트로한 감성이 돋보이는 BASKETBALL-INSPIRED 코트화 입니다.
    
   `,
    dateOfManufacture: new Date('2023-01'),
    feature: '여성 워킹화',
  },
  {
    id: 27,
    favorites: 39,
    brand: 7,
    category: 0,
    gender: 1,
    name: '[데상트] 버디 스탠다드',
    price: 273000,
    color: 1,
    imgURL: 'http://localhost:8000/images/descente/sneakers/descente_black_female_sneakers.png',
    description: `
    에코 캠버스 소재가 사용된 기본 스니커즈입니다.
    치노한경 소재 라벨과 코르크 인솔이 적용되었고,
    파일론 쿠셔닝으로 편안한 착화감까지 챙겨
    심플하지만 특별한 데일리용 신발입니다.
    
    친환경 적용
    지구환경을 고려하여 리사이클 캔버스와 코르크 인솔이 적용되었습니다.
    
    유니크한 포인트
    심플하면서 측면에 타이백 소재가 들어가 유니크한 포인트를 표현합니다.
    
    편안한 착화감
    파일론 쿠셔닝이 적용되어 스니커즈지만, 편안한 쿠셔닝을 느끼실 수 있습니다.
   `,
    dateOfManufacture: new Date('2023-03'),
    feature: '여성 운동화',
  },
  {
    id: 28,
    favorites: 98,
    brand: 7,
    category: 0,
    gender: 0,
    name: '[데상트] 영 코트',
    price: 273000,
    color: 1,
    imgURL: 'http://localhost:8000/images/descente/sneakers/descente_black_male_sneakers.png',
    description: `
    에코 캠버스 소재가 사용된 기본 스니커즈입니다.
    치노한경 소재 라벨과 코르크 인솔이 적용되었고,
    파일론 쿠셔닝으로 편안한 착화감까지 챙겨
    심플하지만 특별한 데일리용 신발입니다.
    
    데일리 스니커즈
    군더더기 없는 깔끔한 디자인으로 일상에서 매일 착화하기 용이합니다.
    
    아이코닉 디자인
    토 캡의 패턴이 오염 방지에 뛰어날 뿐더러 유니크한 포인트를 제공합니다.
    
    슬림한 실루엣
    기존 데상트 코트화 대비 슬림한 실루엣으로 트렌디한 핏을 적용하였습니다.
   `,
    dateOfManufacture: new Date('2023-03'),
    feature: '남성 운동화',
  },
  {
    id: 29,
    favorites: 92,
    brand: 7,
    category: 0,
    gender: 1,
    name: '[데상트] 크론 스트라다',
    price: 220100,
    color: 5,
    imgURL: 'http://localhost:8000/images/descente/sneakers/descente_white_female_sneakers.png',
    description: `
    이탈리아 프리미엄 바이크 두카티와 데상트의 썸머 콜라보레이션 크론 스니커즈입니다.
    경량성 IP솔을 적용한 디자인으로 가볍고 경쾌한 착화감을 선사합니다.
    힐축에 두카티 로고 포인트를 적용하여 유니크하고 대담한 두카티 인스파이어드를 담았습니다.
   `,
    dateOfManufacture: new Date('2023-03'),
    feature: '여성 운동화',
  },
  {
    id: 30,
    favorites: 25,
    brand: 7,
    category: 2,
    gender: 1,
    name: '[데상트] 클라우디 슬라이드',
    price: 221000,
    color: 12,
    imgURL: 'http://localhost:8000/images/descente/slipper/descente_pink_female_slipper.png',
    description: `
    우수한 쿠셔닝과 착화감을 자랑하는 슬라이드입니다.
    업그레이드된 풋베드로 발을 감싸는 듯한 착화감과 푹신한 쿠셔닝이 특징입니다.
    최적의 쿠셔닝을 지닌 제품을 찾는다면 클라우디 슬라이드를 추천드려요.
    
    우수한 쿠셔닝
    발에 닿는 풋베드의 물성을 새롭게 개발하여, 기존 슬라이드보다 우수한 쿠셔닝을 제공합니다.
    
    편한 착화감
    발이 감싸지도록 풋베드 구조를 개선하여 보다 편한 착화감을 제공합니다.
    
    데일리 활용성
    심플한 디자인과 기본 컬러 구성으로 데일리 착화가 용이합니다.
   `,
    dateOfManufacture: new Date('2023-04'),
    feature: '여성 슬리퍼',
  },
  {
    id: 31,
    favorites: 48,
    brand: 8,
    category: 0,
    gender: 0,
    name: '[컨버스] 런 스타 하이크 레더 블랙',
    price: 98000,
    color: 1,
    imgURL: 'http://localhost:8000/images/converse/sneakers/converse_black_male_sneakers.png',
    description: `
    우아한 표현에 현대적 디테일들이 융합되어 활기 넘치고 누구나 탐내는 런 스타 하이크 스니커즈입니다.
편안한 레더 어퍼를 더하고, 혹한을 견디도록 구성된 혁신적인 플랫폼은 특유의 개성도 놓치지 않습니다.
멈추지 말고 나아가 보세요!
   `,
    dateOfManufacture: new Date('2023-04'),
    feature: '남성 운동화',
  },
  {
    id: 32,
    favorites: 58,
    brand: 8,
    category: 0,
    gender: 0,
    name: '[컨버스] 척 테일러 올스타',
    price: 98000,
    color: 6,
    imgURL: 'http://localhost:8000/images/converse/sneakers/converse_brown_male_sneakers.png',
    description: `
    항상 변화를 꾀하고 있는 척테일러 올스타가 이번에는 트렌디한 스프링 컬러와 미래를 생각하는 캔버스로 재해석됩니다.
다이아몬드 패턴 아웃솔과 클래식 스타 앵클 패치 등 농구코트에서 시작된 디테일은 이미 많은 사람들에게 익숙합니다.
오솔라이트 쿠셔닝이 하루 종일 기분 좋게 발을 받쳐줍니다.
러버 토 범퍼와 아이코닉한 스타 앵클 패치 같은 헤리티지 디자인 구성요소들을 더하여 클래식 스타일을 완성합니다.
   `,
    dateOfManufacture: new Date('2023-02'),
    feature: '남성 운동화',
  },
  {
    id: 33,
    favorites: 68,
    brand: 8,
    category: 0,
    gender: 1,
    name: '[컨버스] 척 70 마르퀴스 너티컬 오션 스트릿',
    price: 98000,
    color: 4,
    imgURL: 'http://localhost:8000/images/converse/sneakers/converse_blue_female_sneakers.png',
    description: `
    척70 마르퀴스는 편안함과 스타일에 대한 기대치를 높이도록 구성됐습니다.
    솔기 없는 편안함과 업그레이드 된 소재 사이의 간극을 메운 마르퀴스 스니커즈는 컨버스의 창시자 마르퀴스 컨버스를 연상시킵니다.
    게임체인저로서 획기적인 쓰리-피스 라이닝 구조에 세련된 컬러를 더하여 이전과 분명히 다른 스타일을 보여줍니다.
    척70 마르퀴스 에디션은 바다를 연상시키는 클래식 마리타임 컬러를 사용하여 바다 또는 거리에서 자연스러운 스타일을 완성합니다.
   `,
    dateOfManufacture: new Date('2023-01'),
    feature: '여성 운동화',
  },
  {
    id: 34,
    favorites: 78,
    brand: 8,
    category: 0,
    gender: 1,
    name: '[컨버스] 척 70 정글 클로즈 엘리게이터 프렌드',
    price: 98000,
    color: 7,
    imgURL: 'http://localhost:8000/images/converse/sneakers/converse_green_female_sneakers.png',
    description: `
    매력적으로 강인하게 해석된 프리미엄 척 70 스니커즈에서 실용성을 고려한 소재와 스트리트 스타일이 연상됩니다.
자연 또는 도시 탐험에 적합하도록 내구성 높은 아웃도어 전용 스타일의 정글 클로스 어퍼로 구성됩니다.
여름에 어울리는 색조에 내구성 높은 스티치가 더해져 완성된 견고하게 오래 지속되는 스타일로 나만의 세상을 탐험할 수 있습니다.
   `,
    dateOfManufacture: new Date('2023-01'),
    feature: '여성 운동화',
  },
  {
    id: 35,
    favorites: 88,
    brand: 9,
    category: 4,
    gender: 0,
    name: '[금강] 리갈 남성 스트레이트 팁 정장화',
    price: 170000,
    color: 1,
    imgURL: 'http://localhost:8000/images/kumkang/shoes/kumkang_black_male_shoes.png',
    description: `
    금강제화만의 천연 가죽
가죽 장인의 손길을 거쳐 탄생한 국내 최고급 가죽은 최고의 품질을 위한 금강제화의 끊임없는 연구에서 비롯됩니다.

탄탄한 소가죽 소재
소가죽으로 제작되어 탄탄한 소재감으로 한결같이 유지되는 핏감
내피에도 천연소가죽 사용으로 통기성 우수

이태리 비브람 아웃솔
경량감과 뛰어난 쿠션감으로 편안한 착화감을 주는 이태리 비브람창 사용
   `,
    dateOfManufacture: new Date('2021-12'),
    feature: '남성 구두',
  },
  {
    id: 36,
    favorites: 98,
    brand: 9,
    category: 4,
    gender: 0,
    name: '[금강] 바이오소프 남성 메쉬 컴포트 슬립온',
    price: 175000,
    color: 1,
    imgURL: 'http://localhost:8000/images/kumkang/shoes/kumkang_black_male_shoes_2.png',
    description: `
    금강제화만의 천연 가죽
가죽 장인의 손길을 거쳐 탄생한 국내 최고급 가죽은 최고의 품질을 위한 금강제화의 끊임없는 연구에서 비롯됩니다.

탄탄한 소가죽 소재
소가죽으로 제작되어 탄탄한 소재감으로 한결같이 유지되는 핏감
내피에도 천연소가죽 사용으로 통기성 우수

이태리 비브람 아웃솔
경량감과 뛰어난 쿠션감으로 편안한 착화감을 주는 이태리 비브람창 사용
   `,
    dateOfManufacture: new Date('2021-11'),
    feature: '남성 구두',
  },
  {
    id: 37,
    favorites: 108,
    brand: 9,
    category: 4,
    gender: 0,
    name: '[금강] 리갈 남성 캐주얼 유팁 더비온',
    price: 192000,
    color: 6,
    imgURL: 'http://localhost:8000/images/kumkang/shoes/kumkang_brown_male_shoes.png',
    description: `
    금강제화만의 천연 가죽
가죽 장인의 손길을 거쳐 탄생한 국내 최고급 가죽은 최고의 품질을 위한 금강제화의 끊임없는 연구에서 비롯됩니다.

탄탄한 소가죽 소재
소가죽으로 제작되어 탄탄한 소재감으로 한결같이 유지되는 핏감
내피에도 천연소가죽 사용으로 통기성 우수

이태리 비브람 아웃솔
경량감과 뛰어난 쿠션감으로 편안한 착화감을 주는 이태리 비브람창 사용
   `,
    dateOfManufacture: new Date('2021-10'),
    feature: '남성 구두',
  },
  {
    id: 38,
    favorites: 118,
    brand: 9,
    category: 4,
    gender: 0,
    name: '[금강] 리갈 남성 클래식 윙팁 드레스',
    price: 202000,
    color: 6,
    imgURL: 'http://localhost:8000/images/kumkang/shoes/kumkang_brown_male_shoes_2.png',
    description: `
    금강제화만의 천연 가죽
가죽 장인의 손길을 거쳐 탄생한 국내 최고급 가죽은 최고의 품질을 위한 금강제화의 끊임없는 연구에서 비롯됩니다.

탄탄한 소가죽 소재
소가죽으로 제작되어 탄탄한 소재감으로 한결같이 유지되는 핏감
내피에도 천연소가죽 사용으로 통기성 우수

이태리 비브람 아웃솔
경량감과 뛰어난 쿠션감으로 편안한 착화감을 주는 이태리 비브람창 사용
   `,
    dateOfManufacture: new Date('2021-09'),
    feature: '남성 구두',
  },
  {
    id: 39,
    favorites: 28,
    brand: 10,
    category: 4,
    gender: 1,
    name: '[바바라] 세븐플로어 패브릭 보석장식 여성 펌프스',
    price: 214000,
    color: 1,
    imgURL: 'http://localhost:8000/images/babara/shoes/babara_black_female_shoes.png',
    description: `
    베이직한 스틸레토 힐디자인에 이번 신상 보석장식을 더한 펌프스로
    잔잔한 줄빤짝이를 사용하여 빤짝이의 떨어짐이 없고 골드 도금굽을 디자인하여
    고급스럽고 세련된 힐 디자인으로 웨딩이나 파티장소에 제격인 아이템
   `,
    dateOfManufacture: new Date('2021-09'),
    feature: '여성 구두',
  },
  {
    id: 40,
    favorites: 135,
    brand: 10,
    category: 4,
    gender: 1,
    name: '[바바라] 세븐플로어 경량 여성 페니로퍼',
    price: 227000,
    color: 6,
    imgURL: 'http://localhost:8000/images/babara/shoes/babara_brown_female_shoes.png',
    description: `
    몰드를 사용하여 착화감이 좋은 베이직한 청키 로퍼 소프트한 소재에 세련되고 캐주얼이나 정장에 스타일링하기 편안한 데일리 로퍼
   `,
    dateOfManufacture: new Date('2021-09'),
    feature: '여성 구두',
  },
  {
    id: 41,
    favorites: 155,
    brand: 10,
    category: 4,
    gender: 1,
    name: '[바바라] 세븐플로어 큐빅포인트 여성 메리제인 펌프스',
    price: 187000,
    color: 12,
    imgURL: 'http://localhost:8000/images/babara/shoes/babara_pink_female_shoes.png',
    description: `
    기본 힐 디자인에 고급스런 장식을 포인트로 스웨이드 주름 디테일에 장식을 더하여
    엘레강스한 느낌의 펌프스로 캐주얼이나 정장에 스타일링하기 좋은 아이템,
    7CM의 클래식한 굽을 사용하여 안정감 있게 스타일을 완성시켜주는 비죠 장식 펌프스
   `,
    dateOfManufacture: new Date('2022-12'),
    feature: '여성 구두',
  },
  {
    id: 42,
    favorites: 172,
    brand: 11,
    category: 4,
    gender: 1,
    name: '[새라] 라운드솔 카우레더 스트랩',
    price: 109800,
    color: 10,
    imgURL: 'http://localhost:8000/images/saera/shoes/saera_beige_female_shoes.png',
    description: `
    감각적인 디자인을 담아낸 슈즈 하나로 여성스러운 분위기 연출 가능
안정적인 굽 디자인으로 오랜 착화에도 발에 무리가 작고 자연스러운 키높이 효과로 다리라인이 정말 예뻐져요.
입체적인 푹신한 인솔로 착화감을 높여 주었어요.
자유로운 워킹을 제공합니다.
   `,
    dateOfManufacture: new Date('2022-12'),
    feature: '여성 구두',
  },
  {
    id: 43,
    favorites: 182,
    brand: 11,
    category: 4,
    gender: 1,
    name: '[새라] 데일리 스트랩 소가죽 샌달',
    price: 109800,
    color: 6,
    imgURL: 'http://localhost:8000/images/saera/shoes/saera_brown_female_shoes.png',
    description: `
    감각적인 디자인을 담아낸 슈즈 하나로 여성스러운 분위기 연출 가능
안정적인 굽 디자인으로 오랜 착화에도 발에 무리가 작고 자연스러운 키높이 효과로 다리라인이 정말 예뻐져요.
입체적인 푹신한 인솔로 착화감을 높여 주었어요.
자유로운 워킹을 제공합니다.
   `,
    dateOfManufacture: new Date('2022-01'),
    feature: '여성 구두',
  },
  {
    id: 44,
    favorites: 12,
    brand: 11,
    category: 4,
    gender: 1,
    name: '[새라] 스퀘어토 고트레더 발목스트랩',
    price: 119800,
    color: 0,
    imgURL: 'http://localhost:8000/images/saera/shoes/saera_pruple_female_shoes.png',
    description: `
    감각적인 디자인을 담아낸 슈즈 하나로 여성스러운 분위기 연출 가능
안정적인 굽 디자인으로 오랜 착화에도 발에 무리가 작고 자연스러운 키높이 효과로 다리라인이 정말 예뻐져요.
입체적인 푹신한 인솔로 착화감을 높여 주었어요.
자유로운 워킹을 제공합니다.
   `,
    dateOfManufacture: new Date('2022-02'),
    feature: '여성 구두',
  },
  {
    id: 45,
    favorites: 39,
    brand: 11,
    category: 4,
    gender: 1,
    name: '[새라] 스퀘어솔 새틴원단 골드링 포인트',
    price: 132300,
    color: 2,
    imgURL: 'http://localhost:8000/images/saera/shoes/saera_red_female_shoes.png',
    description: `
    감각적인 디자인을 담아낸 슈즈 하나로 여성스러운 분위기 연출 가능
안정적인 굽 디자인으로 오랜 착화에도 발에 무리가 작고 자연스러운 키높이 효과로 다리라인이 정말 예뻐져요.
입체적인 푹신한 인솔로 착화감을 높여 주었어요.
자유로운 워킹을 제공합니다.
   `,
    dateOfManufacture: new Date('2023-01'),
    feature: '여성 구두',
  },
  {
    id: 46,
    favorites: 285,
    brand: 12,
    category: 0,
    gender: 0,
    name: '[텐디] 소가죽 스니커즈',
    price: 110000,
    color: 10,
    imgURL: 'http://localhost:8000/images/tandy/sneakers/tandy_beige_male_sneakers.png',
    description: `
    다양한 활동을 위한 스니커즈입니다.
조깅이나 각종 활동 시 가이드 라인을 따라 무게 중심을 이동해주어 자연스러운 움직임을 도와줍니다.
2중 경도 EVA와 뒷꿈치 충격흡수, 아치를 잡아주어 안정성, 편안함을 제공합니다.
어느 아이템에나 매치가 쉬워 데일리로 추천드립니다.
   `,
    dateOfManufacture: new Date('2023-03'),
    feature: '남성 운동화',
  },
  {
    id: 47,
    favorites: 285,
    brand: 12,
    category: 0,
    gender: 0,
    name: '[텐디] 소가죽 스니커즈',
    price: 110000,
    color: 1,
    imgURL: 'http://localhost:8000/images/tandy/sneakers/tandy_black_male_sneakers.png',
    description: `
    다양한 활동을 위한 스니커즈입니다.
조깅이나 각종 활동 시 가이드 라인을 따라 무게 중심을 이동해주어 자연스러운 움직임을 도와줍니다.
2중 경도 EVA와 뒷꿈치 충격흡수, 아치를 잡아주어 안정성, 편안함을 제공합니다.
어느 아이템에나 매치가 쉬워 데일리로 추천드립니다.
   `,
    dateOfManufacture: new Date('2023-03'),
    feature: '남성 운동화',
  },
  {
    id: 48,
    favorites: 285,
    brand: 12,
    category: 0,
    gender: 0,
    name: '[텐디] 소가죽 스니커즈',
    price: 110000,
    color: 6,
    imgURL: 'http://localhost:8000/images/tandy/sneakers/tandy_brown_male_sneakers.png',
    description: `
    다양한 활동을 위한 스니커즈입니다.
조깅이나 각종 활동 시 가이드 라인을 따라 무게 중심을 이동해주어 자연스러운 움직임을 도와줍니다.
2중 경도 EVA와 뒷꿈치 충격흡수, 아치를 잡아주어 안정성, 편안함을 제공합니다.
어느 아이템에나 매치가 쉬워 데일리로 추천드립니다.
   `,
    dateOfManufacture: new Date('2023-03'),
    feature: '남성 운동화',
  },
  {
    id: 49,
    favorites: 285,
    brand: 12,
    category: 0,
    gender: 0,
    name: '[텐디] 소가죽 스니커즈',
    price: 110000,
    color: 11,
    imgURL: 'http://localhost:8000/images/tandy/sneakers/tandy_gray_male_sneakers.png',
    description: `
    다양한 활동을 위한 스니커즈입니다.
조깅이나 각종 활동 시 가이드 라인을 따라 무게 중심을 이동해주어 자연스러운 움직임을 도와줍니다.
2중 경도 EVA와 뒷꿈치 충격흡수, 아치를 잡아주어 안정성, 편안함을 제공합니다.
어느 아이템에나 매치가 쉬워 데일리로 추천드립니다.
   `,
    dateOfManufacture: new Date('2023-03'),
    feature: '남성 운동화',
  },
  {
    id: 50,
    favorites: 300,
    brand: 13,
    category: 2,
    gender: 1,
    name: '[락포트] 아브릴라 슬라이드',
    price: 333000,
    color: 10,
    imgURL: 'http://localhost:8000/images/rockport/slipper/rockport_beige_female_slipper.png',
    description: `
    발 뒷꿈치의 트루테크(truTech) 기능은 발을 딛을 때 충격을 흡수 시켜 장시간 걸음에도 발의 피로도를 최소화 시켜줌
    EVA 풋베드로 가볍고 충격흡수가 뛰어남
    TPR 아웃솔은 내구성이 뛰어나며 다양한 표면에서 우수한 그립감을 제공
    폴리우레탄 미드솔은 가벼우면서도 견고함
   `,
    dateOfManufacture: new Date('2023-01'),
    feature: '여성 슬리퍼',
  },
  {
    id: 51,
    favorites: 300,
    brand: 13,
    category: 2,
    gender: 1,
    name: '[락포트] 아브릴라 슬라이드',
    price: 333000,
    color: 1,
    imgURL: 'http://localhost:8000/images/rockport/slipper/rockport_black_female_slipper.png',
    description: `
    발 뒷꿈치의 트루테크(truTech) 기능은 발을 딛을 때 충격을 흡수 시켜 장시간 걸음에도 발의 피로도를 최소화 시켜줌
    EVA 풋베드로 가볍고 충격흡수가 뛰어남
    TPR 아웃솔은 내구성이 뛰어나며 다양한 표면에서 우수한 그립감을 제공
    폴리우레탄 미드솔은 가벼우면서도 견고함
   `,
    dateOfManufacture: new Date('2023-01'),
    feature: '여성 슬리퍼',
  },
  {
    id: 52,
    favorites: 300,
    brand: 13,
    category: 2,
    gender: 1,
    name: '[락포트] 아브릴라 슬라이드',
    price: 333000,
    color: 11,
    imgURL: 'http://localhost:8000/images/rockport/slipper/rockport_gray_female_slipper.png',
    description: `
    발 뒷꿈치의 트루테크(truTech) 기능은 발을 딛을 때 충격을 흡수 시켜 장시간 걸음에도 발의 피로도를 최소화 시켜줌
    EVA 풋베드로 가볍고 충격흡수가 뛰어남
    TPR 아웃솔은 내구성이 뛰어나며 다양한 표면에서 우수한 그립감을 제공
    폴리우레탄 미드솔은 가벼우면서도 견고함
   `,
    dateOfManufacture: new Date('2023-01'),
    feature: '여성 슬리퍼',
  },
  {
    id: 53,
    favorites: 300,
    brand: 13,
    category: 2,
    gender: 1,
    name: '[락포트] 아브릴라 슬라이드',
    price: 333000,
    color: 12,
    imgURL: 'http://localhost:8000/images/rockport/slipper/rockport_pink_female_slipper.png',
    description: `
    발 뒷꿈치의 트루테크(truTech) 기능은 발을 딛을 때 충격을 흡수 시켜 장시간 걸음에도 발의 피로도를 최소화 시켜줌
    EVA 풋베드로 가볍고 충격흡수가 뛰어남
    TPR 아웃솔은 내구성이 뛰어나며 다양한 표면에서 우수한 그립감을 제공
    폴리우레탄 미드솔은 가벼우면서도 견고함
   `,
    dateOfManufacture: new Date('2023-01'),
    feature: '여성 슬리퍼',
  },
  {
    id: 54,
    favorites: 158,
    brand: 14,
    category: 0,
    gender: 0,
    name: '[소다] 남성 스니커즈',
    price: 253000,
    color: 10,
    imgURL: 'http://localhost:8000/images/soda/sneakers/soda_beige_male_sneakers.png',
    description: `
    키높이로 제작되어 1.5cm의 인솔/ 2.5cm 아웃솔 굽으로 총 4cm입니다.
속굽에는 오솔라이트, 메모리폼, 라텍스 소재를 3중 적용해 편안한 키높이 착화감을 느낄 수 있습니다.

가죽은 이태리 Mastrotto사의 풀그레인 cow 가죽과 calf suede를 사용했습니다. Mastrotto는 이탈리아 내에서도 매우 권위있는 3대 피혁 전문 그룹으로 이태리, 프랑스의 다양한 명품 브랜드들에 납품하며 높은 품질을 인정받고 있습니다.

슈즈 제법은 내피를 주머니 형태로 제작하고 족형을 삽입하는 시스(SIS)제법으로 만들어져 운동화처럼 굴곡성이 좋고 착용감이 우수합니다.

인솔과 내피는 소가죽, 천연 가죽으로 제작되어 견고하며 착화감이 편안합니다.
   `,
    dateOfManufacture: new Date('2023-04'),
    feature: '남성 운동화',
  },
  {
    id: 55,
    favorites: 180,
    brand: 14,
    category: 0,
    gender: 0,
    name: '[소다] 남성 스니커즈',
    price: 253000,
    color: 1,
    imgURL: 'http://localhost:8000/images/soda/sneakers/soda_black_male_sneakers.png',
    description: `
    키높이로 제작되어 1.5cm의 인솔/ 2.5cm 아웃솔 굽으로 총 4cm입니다.
속굽에는 오솔라이트, 메모리폼, 라텍스 소재를 3중 적용해 편안한 키높이 착화감을 느낄 수 있습니다.

가죽은 이태리 Mastrotto사의 풀그레인 cow 가죽과 calf suede를 사용했습니다. Mastrotto는 이탈리아 내에서도 매우 권위있는 3대 피혁 전문 그룹으로 이태리, 프랑스의 다양한 명품 브랜드들에 납품하며 높은 품질을 인정받고 있습니다.

슈즈 제법은 내피를 주머니 형태로 제작하고 족형을 삽입하는 시스(SIS)제법으로 만들어져 운동화처럼 굴곡성이 좋고 착용감이 우수합니다.

인솔과 내피는 소가죽, 천연 가죽으로 제작되어 견고하며 착화감이 편안합니다.
   `,
    dateOfManufacture: new Date('2023-04'),
    feature: '남성 운동화',
  },
  {
    id: 56,
    favorites: 192,
    brand: 14,
    category: 0,
    gender: 1,
    name: '[소다] 여성 스니커즈',
    price: 253000,
    color: 12,
    imgURL: 'http://localhost:8000/images/soda/sneakers/soda_pink_female_sneakers.png',
    description: `
    키높이로 제작되어 1.5cm의 인솔/ 2.5cm 아웃솔 굽으로 총 4cm입니다.
속굽에는 오솔라이트, 메모리폼, 라텍스 소재를 3중 적용해 편안한 키높이 착화감을 느낄 수 있습니다.

가죽은 이태리 Mastrotto사의 풀그레인 cow 가죽과 calf suede를 사용했습니다. Mastrotto는 이탈리아 내에서도 매우 권위있는 3대 피혁 전문 그룹으로 이태리, 프랑스의 다양한 명품 브랜드들에 납품하며 높은 품질을 인정받고 있습니다.

슈즈 제법은 내피를 주머니 형태로 제작하고 족형을 삽입하는 시스(SIS)제법으로 만들어져 운동화처럼 굴곡성이 좋고 착용감이 우수합니다.

인솔과 내피는 소가죽, 천연 가죽으로 제작되어 견고하며 착화감이 편안합니다.
   `,
    dateOfManufacture: new Date('2023-04'),
    feature: '여성 운동화',
  },
  {
    id: 57,
    favorites: 189,
    brand: 0,
    category: 0,
    gender: 0,
    name: '[나이키] 에어맥스 97',
    price: 197100,
    color: 5,
    imgURL: 'http://localhost:8000/images/nike/sneakers/nike_white_male_sneakers.png',
    description: `나이키 에어맥스 97은 일본의 고속 열차에서 영감을 받은 오리지널 물결 디자인과 함께 초스피드로 앞서가는 스타일을 선사합니다.
    러닝계에 지각 변동을 일으킨 나이키 에어 유닛을 
    전체적으로 적용한 혁신적 디자인에 신선한 컬러와 산뜻한 디테일을 더한 신발로 일등석에 탄 듯한 편안함을 전해줍니다.`,
    dateOfManufacture: new Date('2023-05'),
    feature: '남성 운동화',
  },
  {
    id: 58,
    favorites: 199,
    brand: 0,
    category: 3,
    gender: 1,
    name: '[나이키] 줌 플라이 5',
    price: 141700,
    color: 1,
    imgURL: 'http://localhost:8000/images/nike/walking/nike_black_female_walking.png',
    description: `가장 좋아하는 레이스에 참가할 때도, 그 이후 몇 달 후에도 얼마든지 신을 수 있는 내구성 좋은 디자인으로
    주말의 트레이닝 러닝과 레이스 당일 사이의 차이의 간격을 좁혀줍니다.
    편안함과 안정감을 제공하면서도 추진력을 제공해 속도감과 산뜻한 느낌을 선사합니다.
    이런 종류의 다기능성은 러닝 제품군에서 쉽게 찾아볼 수 없습니다. 
    모든 걸 가질 순 없다고 누가 말했던가요?`,
    dateOfManufacture: new Date('2023-05'),
    feature: '여성 워킹화',
  },
  {
    id: 59,
    favorites: 199,
    brand: 0,
    category: 3,
    gender: 1,
    name: '[나이키] 줌 플라이 5',
    price: 141700,
    color: 0,
    imgURL: 'http://localhost:8000/images/nike/walking/nike_purple_female_walking.png',
    description: `가장 좋아하는 레이스에 참가할 때도, 그 이후 몇 달 후에도 얼마든지 신을 수 있는 내구성 좋은 디자인으로
    주말의 트레이닝 러닝과 레이스 당일 사이의 차이의 간격을 좁혀줍니다.
    편안함과 안정감을 제공하면서도 추진력을 제공해 속도감과 산뜻한 느낌을 선사합니다.
    이런 종류의 다기능성은 러닝 제품군에서 쉽게 찾아볼 수 없습니다. 
    모든 걸 가질 순 없다고 누가 말했던가요?`,
    dateOfManufacture: new Date('2023-05'),
    feature: '여성 워킹화',
  },
  {
    id: 60,
    favorites: 202,
    brand: 0,
    category: 3,
    gender: 1,
    name: '[나이키] 레볼루션 6',
    price: 69000,
    color: 6,
    imgURL: 'http://localhost:8000/images/nike/walking/nike_brown_female_walking.png',
    description: `무게 기준 20% 이상 재생 소재를 사용하여 오래된 소재를 새롭게 재해석했습니다. 
    이는 여러분에게도 새로운 시작을 선물하죠. 푹신한 착화감을 선사하는 나이키 레볼루션 6를 신고 러닝 여정의 출발점에서 페이스를 설정해 보세요. 
    성공적인 러닝을 위해서는 편안함이 중요한 걸 알기에 달릴 때 매끄러운 느낌을 위해 쿠셔닝과 유연함을 갖추었습니다. 
    인기 제품의 진화를 보여주는 통기성 좋은 디자인입니다.`,
    dateOfManufacture: new Date('2023-05'),
    feature: '여성 워킹화',
  },
  {
    id: 61,
    favorites: 172,
    brand: 11,
    category: 4,
    gender: 1,
    name: '[새라] 염소가죽 스퀘어토 버클장식 펌프스',
    price: 250600,
    color: 7,
    imgURL: 'http://localhost:8000/images/saera/shoes/saera_green_female_shoes.png',
    description: `
    감각적인 디자인을 담아낸 슈즈 하나로 여성스러운 분위기 연출 가능
안정적인 굽 디자인으로 오랜 착화에도 발에 무리가 작고 자연스러운 키높이 효과로 다리라인이 정말 예뻐져요.
입체적인 푹신한 인솔로 착화감을 높여 주었어요.
자유로운 워킹을 제공합니다.
   `,
    dateOfManufacture: new Date('2022-12'),
    feature: '여성 구두',
  },
  {
    id: 62,
    favorites: 33,
    brand: 11,
    category: 4,
    gender: 1,
    name: '[새라] 소가죽 진주체인 스퀘어토 펌프스',
    price: 264600,
    color: 3,
    imgURL: 'http://localhost:8000/images/saera/shoes/saera_orange_female_shoes.png',
    description: `
    감각적인 디자인을 담아낸 슈즈 하나로 여성스러운 분위기 연출 가능
안정적인 굽 디자인으로 오랜 착화에도 발에 무리가 작고 자연스러운 키높이 효과로 다리라인이 정말 예뻐져요.
입체적인 푹신한 인솔로 착화감을 높여 주었어요.
자유로운 워킹을 제공합니다.
   `,
    dateOfManufacture: new Date('2022-12'),
    feature: '여성 구두',
  },
  {
    id: 63,
    favorites: 69,
    brand: 11,
    category: 4,
    gender: 1,
    name: '[새라] 스틸레토 카우레더 잠자리리본 펌프스',
    price: 250600,
    color: 1,
    imgURL: 'http://localhost:8000/images/saera/shoes/saera_black_female_shoes.png',
    description: `
    감각적인 디자인을 담아낸 슈즈 하나로 여성스러운 분위기 연출 가능
안정적인 굽 디자인으로 오랜 착화에도 발에 무리가 작고 자연스러운 키높이 효과로 다리라인이 정말 예뻐져요.
입체적인 푹신한 인솔로 착화감을 높여 주었어요.
자유로운 워킹을 제공합니다.
   `,
    dateOfManufacture: new Date('2022-11'),
    feature: '여성 구두',
  },
  {
    id: 64,
    favorites: 45,
    brand: 11,
    category: 4,
    gender: 1,
    name: '[새라] 리본 크링크 펌프스',
    price: 166800,
    color: 11,
    imgURL: 'http://localhost:8000/images/saera/shoes/saera_gray_female_shoes.png',
    description: `
    감각적인 디자인을 담아낸 슈즈 하나로 여성스러운 분위기 연출 가능
안정적인 굽 디자인으로 오랜 착화에도 발에 무리가 작고 자연스러운 키높이 효과로 다리라인이 정말 예뻐져요.
입체적인 푹신한 인솔로 착화감을 높여 주었어요.
자유로운 워킹을 제공합니다.
   `,
    dateOfManufacture: new Date('2022-11'),
    feature: '여성 구두',
  },
  {
    id: 65,
    favorites: 90,
    brand: 1,
    category: 2,
    gender: 0,
    name: '[아디다스] 아딜렛 슬라이드',
    price: 45000,
    color: 9,
    imgURL: 'http://localhost:8000/images/adidas/slipper/adidas_navy_male_slipper.png',
    description: `1972년에 태어난 아디다스 아딜렛은 세계에서 가장 사랑받는 슬라이드로 진화하며 선풍적인 인기를 얻었습니다. 휴식과 재충전을 위해 설계된 가벼운 디자인의 아딜렛을 만나보세요. 젤리 밴드가 단단하게 발을 감싸고, 맞춘 듯한 풋베드가 오래 지속되는 편안한 착용감을 제공합니다.`,
    dateOfManufacture: new Date('2011-12'),
    feature: '남성 슬리퍼',
  },
  {
    id: 66,
    favorites: 90,
    brand: 1,
    category: 2,
    gender: 0,
    name: '[아디다스] 아딜렛 22',
    price: 65000,
    color: 10,
    imgURL: 'http://localhost:8000/images/adidas/slipper/adidas_beige_male_slipper.png',
    description: `"우주에 슬라이드가 있다면 어떤 모습일까" 라는 상상력을 바탕으로 탄생한 새로운 아딜렛 슬라이드를 만나보세요. 3D 지형도와 인류의 화성 탐사에서 영감을 얻어 중력을 초월하는 초현대적 디자인 디테일을 선보입니다. 맞춘 듯한 풋베드와 부드러운 고무 아웃솔이 샤워실부터 스트리트까지 언제 어디서나 완벽한 편안함을 제공합니다.

    한정된 자원을 절약하고 플라스틱 폐기물을 줄이기 위해 천연 원료와 재생 소재로 제작된 친환경 제품입니다.`,
    dateOfManufacture: new Date('2011-12'),
    feature: '남성 슬리퍼',
  },
  {
    id: 67,
    favorites: 90,
    brand: 1,
    category: 2,
    gender: 0,
    name: '[아디다스] 아딜렛 22',
    price: 65000,
    color: 1,
    imgURL: 'http://localhost:8000/images/adidas/slipper/adidas_black_male_slipper.png',
    description: `"우주에 슬라이드가 있다면 어떤 모습일까" 라는 상상력을 바탕으로 탄생한 새로운 아딜렛 슬라이드를 만나보세요. 3D 지형도와 인류의 화성 탐사에서 영감을 얻어 중력을 초월하는 초현대적 디자인 디테일을 선보입니다. 맞춘 듯한 풋베드와 부드러운 고무 아웃솔이 샤워실부터 스트리트까지 언제 어디서나 완벽한 편안함을 제공합니다.

    한정된 자원을 절약하고 플라스틱 폐기물을 줄이기 위해 천연 원료와 재생 소재로 제작된 친환경 제품입니다.`,
    dateOfManufacture: new Date('2011-12'),
    feature: '남성 슬리퍼',
  },
  {
    id: 68,
    favorites: 90,
    brand: 1,
    category: 2,
    gender: 0,
    name: '[아디다스] 아딜렛 22',
    price: 65000,
    color: 7,
    imgURL: 'http://localhost:8000/images/adidas/slipper/adidas_green_male_slipper.png',
    description: `"우주에 슬라이드가 있다면 어떤 모습일까" 라는 상상력을 바탕으로 탄생한 새로운 아딜렛 슬라이드를 만나보세요. 3D 지형도와 인류의 화성 탐사에서 영감을 얻어 중력을 초월하는 초현대적 디자인 디테일을 선보입니다. 맞춘 듯한 풋베드와 부드러운 고무 아웃솔이 샤워실부터 스트리트까지 언제 어디서나 완벽한 편안함을 제공합니다.

    한정된 자원을 절약하고 플라스틱 폐기물을 줄이기 위해 천연 원료와 재생 소재로 제작된 친환경 제품입니다.`,
    dateOfManufacture: new Date('2011-12'),
    feature: '남성 슬리퍼',
  },
  {
    id: 69,
    favorites: 25,
    brand: 7,
    category: 1,
    gender: 1,
    name: '[데상트] 아이싱 샌달',
    price: 75050,
    color: 12,
    imgURL: 'http://localhost:8000/images/descente/sandal/descente_pink_female_sandal.png',
    description: `
   발등 벨크로 스트랩으로 편하게 사이즈 조절이 가능하며, 가볍고 편한 풋베드가 사용되어 여름철 데일리로 신기 좋은 편한 샌달입니다.
   `,
    dateOfManufacture: new Date('2023-04'),
    feature: '여성 샌달',
  },
  {
    id: 70,
    favorites: 25,
    brand: 7,
    category: 1,
    gender: 1,
    name: '[데상트] 아이싱 샌달',
    price: 75050,
    color: 5,
    imgURL: 'http://localhost:8000/images/descente/sandal/descente_white_female_sandal.png',
    description: `
   발등 벨크로 스트랩으로 편하게 사이즈 조절이 가능하며, 가볍고 편한 풋베드가 사용되어 여름철 데일리로 신기 좋은 편한 샌달입니다.
   `,
    dateOfManufacture: new Date('2023-04'),
    feature: '여성 샌달',
  },
  {
    id: 71,
    favorites: 25,
    brand: 7,
    category: 1,
    gender: 0,
    name: '[데상트] 아이싱 샌달',
    price: 75050,
    color: 1,
    imgURL: 'http://localhost:8000/images/descente/sandal/descente_black_male_sandal.png',
    description: `
   발등 벨크로 스트랩으로 편하게 사이즈 조절이 가능하며, 가볍고 편한 풋베드가 사용되어 여름철 데일리로 신기 좋은 편한 샌달입니다.
   `,
    dateOfManufacture: new Date('2023-04'),
    feature: '남성 샌달',
  },
  {
    id: 72,
    favorites: 25,
    brand: 7,
    category: 1,
    gender: 0,
    name: '[데상트] 아이싱 샌달',
    price: 75050,
    color: 7,
    imgURL: 'http://localhost:8000/images/descente/sandal/descente_green_male_sandal.png',
    description: `
   발등 벨크로 스트랩으로 편하게 사이즈 조절이 가능하며, 가볍고 편한 풋베드가 사용되어 여름철 데일리로 신기 좋은 편한 샌달입니다.
   `,
    dateOfManufacture: new Date('2023-04'),
    feature: '남성 샌달',
  },
  {
    id: 73,
    favorites: 300,
    brand: 13,
    category: 4,
    gender: 0,
    name: '[락포트] 트렌튼 베네시안',
    price: 175000,
    color: 1,
    imgURL: 'http://localhost:8000/images/rockport/shoes/rockport_black_male_shoes.png',
    description: `
    락포트 남성화는 발볼의 넓이가 W(와이드)로 제작되어 일반적인 운동화보다 반치수 또는 한치수 작게 구매하시는 것을 권해드립니다.
    트루테크(truTECH) 기능으로 가벼운 착용감을 제공하며, 발 뒷꿈치의 충격 흡수
    EVA 소재 풋베드와 미드솔로 가볍고 충격 흡수력이 우수하여 장시간 착용에도 발과 다리의 피로를 줄여 줌
    고무 소재의 아웃솔은 내구성이 뛰어나며 다양한 표면 환경에서 우수한 그립감을 제공
   `,
    dateOfManufacture: new Date('2023-01'),
    feature: '남성 구두',
  },
  {
    id: 74,
    favorites: 300,
    brand: 13,
    category: 4,
    gender: 0,
    name: '[락포트] 트렌튼 베네시안',
    price: 175000,
    color: 6,
    imgURL: 'http://localhost:8000/images/rockport/shoes/rockport_brown_male_shoes.png',
    description: `
    락포트 남성화는 발볼의 넓이가 W(와이드)로 제작되어 일반적인 운동화보다 반치수 또는 한치수 작게 구매하시는 것을 권해드립니다.
    트루테크(truTECH) 기능으로 가벼운 착용감을 제공하며, 발 뒷꿈치의 충격 흡수
    EVA 소재 풋베드와 미드솔로 가볍고 충격 흡수력이 우수하여 장시간 착용에도 발과 다리의 피로를 줄여 줌
    고무 소재의 아웃솔은 내구성이 뛰어나며 다양한 표면 환경에서 우수한 그립감을 제공
   `,
    dateOfManufacture: new Date('2023-01'),
    feature: '남성 구두',
  },
  {
    id: 75,
    favorites: 300,
    brand: 13,
    category: 4,
    gender: 1,
    name: '[락포트] 토탈모션 카리라 슬링',
    price: 150000,
    color: 10,
    imgURL: 'http://localhost:8000/images/rockport/shoes/rockport_beige_female_shoes.png',
    description: `
    텍스타일 라이닝은 우수한 통기성을 제공
    뒤축 폼 라이닝으로 장시간 워킹에도 발 뒤부분을 보호해줌
    열가소성폴리우레탄(TPU) 판을 중창에 사용하여 가벼우면서도 뒤틀림은 방지하여 안정적이고 유연함
    발의 피로를 줄이면서 창의 뒤틀림을 방지하는 steel shank 적용
    스플릿 스웨이드 미끄럼 방지는 발 뒤꿈치의 움직임 감소시킴
    트루테크 & 트루테크+(truTech & truTech+): 발 앞부분의 유연성과 탄력성을 증대 시키고 발 뒷꿈치의 충격 흡수력이 우수하여 장시간 착용에도 편안함을 제공
    열가소성 폴리우레탄(TPU) 소재의 아웃솔로 내구성이 좋으며 충격 흡수력이 뛰어나 발의 피로를 줄여 줌
   `,
    dateOfManufacture: new Date('2023-01'),
    feature: '여성 구두',
  },
  {
    id: 76,
    favorites: 13,
    brand: 3,
    category: 2,
    gender: 0,
    name: '[스케쳐스] 맥스쿠셔닝 아치핏 프라임',
    price: 89000,
    color: 1,
    imgURL: 'http://localhost:8000/images/sketchers/slipper/sketchers_black_male_slipper.png',
    description: `Arch fit® Footbed을 적용하여 아치 서포트를 제공하여 향후 아치가 무너짐 방지에 도움
    Comfort Pillar Technology®로 효과적인 걸음 유지
    HYPER BURST® 쿠셔닝으로 우수한 반발력과 가벼운 초경량 슬라이드
    Contoured Goga Mat® Footbed를 사용하여 발의 형태를 잡아주어 충격을 줄이고 무게를 분산해 편안한 착화감 선사
    5cm 키높이 효과 제공`,
    dateOfManufacture: new Date('2021-12'),
    feature: '남성 슬리퍼',
  },
  {
    id: 77,
    favorites: 13,
    brand: 3,
    category: 2,
    gender: 0,
    name: '[스케쳐스] 하이퍼 슬라이드',
    price: 69000,
    color: 1,
    imgURL: 'http://localhost:8000/images/sketchers/slipper/sketchers_black_male_slipper_2.png',
    description: `
    HYPER BURST® 쿠셔닝으로 우수한 반발력과 가벼운 초경량 슬라이드
    Contoured Goga Mat® Footbed를 사용하여 발의 형태를 잡아주어 충격을 줄이고 무게를 분산해 편안한 착화감 선사
    5cm 키높이 효과 제공`,
    dateOfManufacture: new Date('2021-12'),
    feature: '남성 슬리퍼',
  },
  {
    id: 78,
    favorites: 13,
    brand: 3,
    category: 2,
    gender: 1,
    name: '[스케쳐스] 하이퍼 슬라이드',
    price: 69000,
    color: 12,
    imgURL: 'http://localhost:8000/images/sketchers/slipper/sketchers_pink_female_slipper.png',
    description: `
    HYPER BURST® 쿠셔닝으로 우수한 반발력과 가벼운 초경량 슬라이드
    Contoured Goga Mat® Footbed를 사용하여 발의 형태를 잡아주어 충격을 줄이고 무게를 분산해 편안한 착화감 선사
    5cm 키높이 효과 제공`,
    dateOfManufacture: new Date('2021-12'),
    feature: '여성 슬리퍼',
  },
  {
    id: 79,
    favorites: 45,
    brand: 4,
    category: 2,
    gender: 0,
    name: '[에코] 코즈모',
    price: 178200,
    color: 9,
    imgURL: 'http://localhost:8000/images/ecco/slipper/ecco_navy_male_slipper.png',
    description: `어디에서도 느낄 수 없는 편안함과 진정한 스칸디나비안 스타일의 슬라이드
    ECCO의 자체 가죽 공장에서 생산된 풀그레인 가죽또는누벅 가죽을 사용
    두 개의 벨크로 스트랩으로 쉽게 핏 조절 가능
    인체공학적으로 설계된 풋베드는 부드러운 스웨이드로 감싸 편안한 착화감을 선사함
    접지력이 우수하고 반응성이 탁월한 PU소재의 솔
    FLUIDFORM™ Direct Comfort (플루이드폼 다이렉트 컴포트)기술로 제작되어 부드럽고 유연한 솔
    굽높이: 30mm
    갑피소재:천연소가죽
    창소재:합성고무
    판매자:ECCO KOREA(에코코리아) 
    제조자:ECCO Sko A/S(덴마크)`,
    dateOfManufacture: new Date('2022-12'),
    feature: '남성 슬리퍼',
  },
  {
    id: 80,
    favorites: 45,
    brand: 4,
    category: 2,
    gender: 0,
    name: '[에코] 코즈모',
    price: 178200,
    color: 11,
    imgURL: 'http://localhost:8000/images/ecco/slipper/ecco_gray_male_slipper.png',
    description: `어디에서도 느낄 수 없는 편안함과 진정한 스칸디나비안 스타일의 슬라이드
    ECCO의 자체 가죽 공장에서 생산된 풀그레인 가죽또는누벅 가죽을 사용
    두 개의 벨크로 스트랩으로 쉽게 핏 조절 가능
    인체공학적으로 설계된 풋베드는 부드러운 스웨이드로 감싸 편안한 착화감을 선사함
    접지력이 우수하고 반응성이 탁월한 PU소재의 솔
    FLUIDFORM™ Direct Comfort (플루이드폼 다이렉트 컴포트)기술로 제작되어 부드럽고 유연한 솔
    굽높이: 30mm
    갑피소재:천연소가죽
    창소재:합성고무
    판매자:ECCO KOREA(에코코리아) 
    제조자:ECCO Sko A/S(덴마크)`,
    dateOfManufacture: new Date('2022-12'),
    feature: '남성 슬리퍼',
  },
  {
    id: 81,
    favorites: 45,
    brand: 4,
    category: 2,
    gender: 0,
    name: '[에코] 코즈모',
    price: 178200,
    color: 6,
    imgURL: 'http://localhost:8000/images/ecco/slipper/ecco_brown_male_slipper.png',
    description: `어디에서도 느낄 수 없는 편안함과 진정한 스칸디나비안 스타일의 슬라이드
    ECCO의 자체 가죽 공장에서 생산된 풀그레인 가죽또는누벅 가죽을 사용
    두 개의 벨크로 스트랩으로 쉽게 핏 조절 가능
    인체공학적으로 설계된 풋베드는 부드러운 스웨이드로 감싸 편안한 착화감을 선사함
    접지력이 우수하고 반응성이 탁월한 PU소재의 솔
    FLUIDFORM™ Direct Comfort (플루이드폼 다이렉트 컴포트)기술로 제작되어 부드럽고 유연한 솔
    굽높이: 30mm
    갑피소재:천연소가죽
    창소재:합성고무
    판매자:ECCO KOREA(에코코리아) 
    제조자:ECCO Sko A/S(덴마크)`,
    dateOfManufacture: new Date('2022-12'),
    feature: '남성 슬리퍼',
  },
  {
    id: 82,
    favorites: 45,
    brand: 4,
    category: 2,
    gender: 0,
    name: '[에코] 코즈모',
    price: 178200,
    color: 1,
    imgURL: 'http://localhost:8000/images/ecco/slipper/ecco_black_male_slipper.png',
    description: `어디에서도 느낄 수 없는 편안함과 진정한 스칸디나비안 스타일의 슬라이드
    ECCO의 자체 가죽 공장에서 생산된 풀그레인 가죽또는누벅 가죽을 사용
    두 개의 벨크로 스트랩으로 쉽게 핏 조절 가능
    인체공학적으로 설계된 풋베드는 부드러운 스웨이드로 감싸 편안한 착화감을 선사함
    접지력이 우수하고 반응성이 탁월한 PU소재의 솔
    FLUIDFORM™ Direct Comfort (플루이드폼 다이렉트 컴포트)기술로 제작되어 부드럽고 유연한 솔
    굽높이: 30mm
    갑피소재:천연소가죽
    창소재:합성고무
    판매자:ECCO KOREA(에코코리아) 
    제조자:ECCO Sko A/S(덴마크)`,
    dateOfManufacture: new Date('2022-12'),
    feature: '남성 슬리퍼',
  },
  {
    id: 83,
    favorites: 168,
    brand: 7,
    category: 3,
    gender: 1,
    name: '[데상트] 에너자이트슈퍼',
    price: 170050,
    color: 3,
    imgURL: 'http://localhost:8000/images/descente/walking/descente_orange_female_walking.png',
    description: `
    전작대비 무게감을 14% 개선하여
    보다 가벼운 무게로, 제한 없는 활동이 가능합니다.
    충격 흡수의 정도는 에너지리턴과의 최적의 조합을 고려하여
    전작보다 11% 높여 쿠셔닝을 강화하였습니다.
    한국인 러너의 주법에 가장 알맞는 쿠셔닝을 경험해보실 수 있습니다.
   `,
    dateOfManufacture: new Date('2023-03'),
    feature: '여성 워킹화',
  },
  {
    id: 84,
    favorites: 168,
    brand: 7,
    category: 3,
    gender: 0,
    name: '[데상트] 에너자이트슈퍼',
    price: 170050,
    color: 1,
    imgURL: 'http://localhost:8000/images/descente/walking/descente_black_male_walking.png',
    description: `
    전작대비 무게감을 14% 개선하여
    보다 가벼운 무게로, 제한 없는 활동이 가능합니다.
    충격 흡수의 정도는 에너지리턴과의 최적의 조합을 고려하여
    전작보다 11% 높여 쿠셔닝을 강화하였습니다.
    한국인 러너의 주법에 가장 알맞는 쿠셔닝을 경험해보실 수 있습니다.
   `,
    dateOfManufacture: new Date('2023-03'),
    feature: '남성 워킹화',
  },
  {
    id: 85,
    favorites: 168,
    brand: 7,
    category: 3,
    gender: 0,
    name: '[데상트] 에너자이트슈퍼',
    price: 170050,
    color: 7,
    imgURL: 'http://localhost:8000/images/descente/walking/descente_green_male_walking.png',
    description: `
    전작대비 무게감을 14% 개선하여
    보다 가벼운 무게로, 제한 없는 활동이 가능합니다.
    충격 흡수의 정도는 에너지리턴과의 최적의 조합을 고려하여
    전작보다 11% 높여 쿠셔닝을 강화하였습니다.
    한국인 러너의 주법에 가장 알맞는 쿠셔닝을 경험해보실 수 있습니다.
   `,
    dateOfManufacture: new Date('2023-03'),
    feature: '남성 워킹화',
  },
  {
    id: 86,
    favorites: 268,
    brand: 7,
    category: 3,
    gender: 0,
    name: '[데상트] 델타프로 레이스',
    price: 198550,
    color: 4,
    imgURL: 'http://localhost:8000/images/descente/walking/descente_blue_male_walking.png',
    description: `
    미드풋과 전족부까지 카본 플레이트를 적용해 폭발적인 반발탄성으로 속도를 끌어올린
    레이스 전용 워킹화 델타프로 레이스
   `,
    dateOfManufacture: new Date('2023-03'),
    feature: '남성 워킹화',
  },
  {
    id: 87,
    favorites: 268,
    brand: 7,
    category: 3,
    gender: 0,
    name: '[데상트] 델타프로 마일드',
    price: 132050,
    color: 1,
    imgURL: 'http://localhost:8000/images/descente/walking/descente_black_male_walking_2.png',
    description: `
   뛰어난 경량성의 델타 제로폼을 적용하여 일상에서 보다 가볍게 러닝하기 좋은 입문용 워킹화 입니다.
   `,
    dateOfManufacture: new Date('2023-03'),
    feature: '남성 워킹화',
  },
  {
    id: 88,
    favorites: 112,
    brand: 1,
    category: 1,
    gender: 1,
    name: '[아디다스] 아딜렛 노다 샌달',
    price: 89000,
    color: 1,
    imgURL: 'http://localhost:8000/images/adidas/sandal/adidas_black_female_sandal.png',
    description: `편안함을 상징하는 아딜렛 슬라이드를 샌들로 업데이트한 새로운 버전을 만나보세요.
    클래식 샤워 슬리퍼의 밴디지 갑피 대신, 원래 형태를 그대로 유지하는 견고한 스트랩을 더해 기존의 아딜렛처럼 간편하게 신고 벗을 수 있습니다.
    부드러운 풋베드가 아늑하게 발을 받쳐주고, 모든 아웃핏과 어울리는 캐주얼한 실루엣이 신선한 룩을 선사합니다.`,
    dateOfManufacture: new Date('2022-12'),
    feature: '여성 샌달',
  },
  {
    id: 89,
    favorites: 152,
    brand: 1,
    category: 1,
    gender: 0,
    name: '[아디다스] 테렉스 사이프렉스 울트라 샌달',
    price: 79000,
    color: 11,
    imgURL: 'http://localhost:8000/images/adidas/sandal/adidas_gray_male_sandal.png',
    description: `편안함을 상징하는 테렉스 사이프렉스 울트라 샌달로 업데이트한 새로운 버전을 만나보세요.
    클래식 샤워 슬리퍼의 밴디지 갑피 대신, 원래 형태를 그대로 유지하는 견고한 스트랩을 더해 기존의 아딜렛처럼 간편하게 신고 벗을 수 있습니다.
    부드러운 풋베드가 아늑하게 발을 받쳐주고, 모든 아웃핏과 어울리는 캐주얼한 실루엣이 신선한 룩을 선사합니다.`,
    dateOfManufacture: new Date('2022-12'),
    feature: '남성 샌달',
  },
  {
    id: 90,
    favorites: 192,
    brand: 0,
    category: 1,
    gender: 1,
    name: '[나이키] 비스타',
    price: 69000,
    color: 1,
    imgURL: 'http://localhost:8000/images/nike/sandal/nike_black_female_sandal.png',
    description: `아웃도어에서 하루를 보내는데 필요한 모든 요소를 갖춘 샌들로 무겁지 않으면서도 넉넉한 착용감을 선사합니다.
    가볍고 통풍이 잘되며 튼튼한 트레드와 반응성이 뛰어난 쿠셔닝을 갖추었습니다.
    스타일에 변화를 주고 싶을 때 언제든지 다른 컬러로 교체할 수 있는 커스텀 가능한 스트랩 시스템이 안정감을 유지해 줍니다.`,
    dateOfManufacture: new Date('2023-02'),
    feature: '여성 샌달',
  },
  {
    id: 91,
    favorites: 192,
    brand: 0,
    category: 1,
    gender: 0,
    name: '[나이키] 에어 데슈츠',
    price: 89000,
    color: 1,
    imgURL: 'http://localhost:8000/images/nike/sandal/nike_black_male_sandal.png',
    description: `도심 속 하이킹에서 캐넌 트레일과 해변가를 거니는 긴 산책까지, ACG 에어 데슈츠+ 는 여러 장소로 떠날 수 있도록 탄생했습니다.
    클래식한 90년대의 룩에 모던한 감성이 더해졌으며,
    아웃도어에서 영감을 받은 튼튼한 디자인은 빠르게 건조되는 소재, 점착력 좋은 고무 아웃솔, 힐의 나이키 에어 로고로 완성되었습니다.
    광활한 자연과 변화무쌍한 기후를 지닌 미국 오리건주에서 디자인되고 테스트를 거치면서 이 샌들의 룩과 목적에 대한 가이드를 얻었습니다.`,
    dateOfManufacture: new Date('2023-02'),
    feature: '남성 샌달',
  },
  {
    id: 92,
    favorites: 142,
    brand: 0,
    category: 1,
    gender: 1,
    name: '[나이키] 에어맥스 코코',
    price: 119000,
    color: 1,
    imgURL: 'http://localhost:8000/images/nike/sandal/nike_black_female_sandal_2.png',
    description: `나이키 에어맥스 코코 샌들을 신고 거리를 뜨겁게 달구어 보세요.
    여성을 위한 디자인의 정석을 보여주는 이 궁극의 플랫폼 샌들은 뒤꿈치에 화려한 컬러의 에어를 더했습니다.
    두껍게 레이어드된 폼 중창은 발걸음에 매끄럽고 유연한 느낌을 선사합니다.
    갑피의 프리미엄 디테일로 텍스처와 입체감을 더해 품격 있는 룩을 완성합니다.`,
    dateOfManufacture: new Date('2023-02'),
    feature: '여성 샌달',
  },
  {
    id: 93,
    favorites: 142,
    brand: 0,
    category: 1,
    gender: 1,
    name: '[나이키] 에어 리프트',
    price: 143100,
    color: 10,
    imgURL: 'http://localhost:8000/images/nike/sandal/nike_beige_female_sandal_2.png',
    description: `나이키 에어 리프트는 360도 통기성을 제공합니다.
    스플릿 토 디자인이 독특하고 과감한 스타일을 연출하며, 탈부착 스트랩이 있어 꼭 맞는 핏으로 조절할 수 있습니다.`,
    dateOfManufacture: new Date('2023-02'),
    feature: '여성 샌달',
  },
  {
    id: 94,
    favorites: 142,
    brand: 0,
    category: 1,
    gender: 1,
    name: '[나이키] 에어 리프트',
    price: 143100,
    color: 0,
    imgURL: 'http://localhost:8000/images/nike/sandal/nike_purple_female_sandal.png',
    description: `나이키 에어 리프트는 360도 통기성을 제공합니다.
    스플릿 토 디자인이 독특하고 과감한 스타일을 연출하며, 탈부착 스트랩이 있어 꼭 맞는 핏으로 조절할 수 있습니다.`,
    dateOfManufacture: new Date('2023-02'),
    feature: '여성 샌달',
  },
  {
    id: 95,
    favorites: 188,
    brand: 9,
    category: 4,
    gender: 0,
    name: '[금강] 헤리티지 남성 더블 몽크',
    price: 449100,
    color: 1,
    imgURL: 'http://localhost:8000/images/kumkang/shoes/kumkang_black_male_shoes_3.png',
    description: `
    금강제화만의 천연 가죽
가죽 장인의 손길을 거쳐 탄생한 국내 최고급 가죽은 최고의 품질을 위한 금강제화의 끊임없는 연구에서 비롯됩니다.

탄탄한 소가죽 소재
소가죽으로 제작되어 탄탄한 소재감으로 한결같이 유지되는 핏감
내피에도 천연소가죽 사용으로 통기성 우수

이태리 비브람 아웃솔
경량감과 뛰어난 쿠션감으로 편안한 착화감을 주는 이태리 비브람창 사용
   `,
    dateOfManufacture: new Date('2023-05'),
    feature: '남성 구두',
  },
  {
    id: 96,
    favorites: 288,
    brand: 9,
    category: 0,
    gender: 0,
    name: '[금강] 남성 소가죽 운동화',
    price: 250200,
    color: 10,
    imgURL: 'http://localhost:8000/images/kumkang/sneakers/kumkang_beige_male_sneakers.png',
    description: `
    금강제화만의 천연 가죽
가죽 장인의 손길을 거쳐 탄생한 국내 최고급 가죽은 최고의 품질을 위한 금강제화의 끊임없는 연구에서 비롯됩니다.

탄탄한 소가죽 소재
소가죽으로 제작되어 탄탄한 소재감으로 한결같이 유지되는 핏감
내피에도 천연소가죽 사용으로 통기성 우수

이태리 비브람 아웃솔
경량감과 뛰어난 쿠션감으로 편안한 착화감을 주는 이태리 비브람창 사용
   `,
    dateOfManufacture: new Date('2023-05'),
    feature: '남성 운동화',
  },
];

const getAllProducts = () => products;

const getProduct = id => products.find(product => product.id === id);

const getPageProducts = (page, pageSize) => products.slice((page - 1) * pageSize, page * pageSize);

const toggleProductFavorite = (id, isFavorite) => {
  const delta = isFavorite ? -1 : 1;

  products = products.map(product =>
    product.id === id ? { ...product, favorites: product.favorites + delta } : product
  );
};

module.exports = { getProduct, getAllProducts, getPageProducts, toggleProductFavorite };
