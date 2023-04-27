const { v4: uuidv4 } = require('uuid');

let products = [
  {
    id: 1,
    favorites: 123,
    brand: 0,
    category: 1,
    gender: 1,
    name: '나이키 에어맥스 솔',
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
    name: '나이키 덩크 로우 레트로',
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
    name: '나이키 알파플라이 2',
    price: 350000,
    color: 3,
    imgURL: 'http://localhost:8000/images/nike/walking/nike_orange_male_walking_.png',
    description:
      '더욱 가볍게 돌아온 아디다스 울트라부스트와 함께 매 스텝이 날아오르는 역대급 러닝 에너지를 느껴보세요. 독보적인 분자 형태의 캡슐 디자인을 통해 탄생한 초경량 폼으로 기존의 부스트보다 가볍게 진화한 라이트 부스트 미드솔을 선보입니다. 달릴 때마다 에너지가 폭발하는 수백 개의 부스트 캡슐로 이제까지와는 차원이 다른 궁극의 쿠셔닝과 편안함을 제공합니다.',
    dateOfManufacture: new Date('2020-12'),
    feature: '남성 워킹화',
  },
  {
    id: 4,
    favorites: 30,
    brand: 0,
    category: 3,
    gender: 1,
    name: '나이키 페가수스 40',
    price: 339000,
    color: 12,
    imgURL: 'http://localhost:8000/images/nike/walking/nike_pink_female_walking.png',
    description:
      '더욱 가볍게 돌아온 아디다스 울트라부스트와 함께 매 스텝이 날아오르는 역대급 러닝 에너지를 느껴보세요. 독보적인 분자 형태의 캡슐 디자인을 통해 탄생한 초경량 폼으로 기존의 부스트보다 가볍게 진화한 라이트 부스트 미드솔을 선보입니다. 달릴 때마다 에너지가 폭발하는 수백 개의 부스트 캡슐로 이제까지와는 차원이 다른 궁극의 쿠셔닝과 편안함을 제공합니다.',
    dateOfManufacture: new Date('2019-12'),
    feature: '여성 워킹화',
  },
  {
    id: 5,
    favorites: 60,
    brand: 1,
    category: 3,
    gender: 1,
    name: '아디제로 아디오스 프로 3',
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
    name: '가젤 85',
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
    name: '아딜렛 컴포트 슬라이드',
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
    name: '스텔라 샌들',
    price: 150000,
    color: 8,
    imgURL: 'http://localhost:8000/images/adidas/sandal/adidas_yellow_female_sandal.png',
    description: `모든 모험을 위해 준비된 친환경 하이킹 샌들
     탁 트인 들판과 울창한 숲, 굴곡진 언덕에서 매 스텝을 흔들림 없이 받쳐주고 기분 좋은 여정을 이끄는 아디다스 by 스텔라 맥카트니 샌들을 만나보세요. 과감한 볼륨감이 돋보이는 푹신한 폼의 완벽한 쿠셔닝으로 도시부터 아웃도어까지 모두 가볍게 착용할 수 있습니다. 아늑한 EVA 미드솔과 인조 가죽 갑피가 조화를 이루며 발 전체를 보호하는 안정적인 편안함 속에서 마지막까지 집중력을 유지하고 자유롭게 움직일 수 있습니다.
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
    name: '프레쉬폼 아리쉬',
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
    name: '프레쉬폼 엑스 880',
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
    name: '퓨어셀 에스씨 엘리트 버전 3 뉴욕 마라톤팩',
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
    name: '뉴발 리바운드',
    price: 87000,
    color: 5,
    imgURL: 'http://localhost:8000/images/newBalance/slipper/newbal_white_female_slipper.png',
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
    name: '딜라이트 익스트림',
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
    name: '클레오',
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
    name: '하트라이트샌들',
    price: 118000,
    color: 12,
    imgURL: 'http://localhost:8000/images/sketchers/sandal/skechers_pink_female_sandal.png',
    description: `나염 프린트 된 부드러운 패브릭 스트랩이 포인트 샌들
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
    category: 4,
    gender: 1,
    name: '그루브',
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
    name: '시티 트레이 라이트',
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
    name: '바이옴',
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
    name: '클래식',
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
    favorites: 80,
    brand: 5,
    category: 1,
    gender: 0,
    name: '클래식',
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
    id: 21,
    favorites: 92,
    brand: 5,
    category: 1,
    gender: 1,
    name: '클래식',
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
    id: 22,
    favorites: 75,
    brand: 5,
    category: 1,
    gender: 1,
    name: '클래식',
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
    id: 23,
    favorites: 70,
    brand: 6,
    category: 3,
    gender: 0,
    name: '젤카야노 28',
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
    name: '젤님버스 24',
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
    name: '젤펀워커',
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
    name: '이엑스 89',
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
    name: '버디스탠다드',
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
    name: '영코트',
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
    name: '크론 스트라다',
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
    name: '클라우디 슬라이드',
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
    name: '런 스타 하이크 레더 블랙',
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
    name: '척 테일러 올스타',
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
    name: '척 70 마르퀴스 너티컬 오션 스트릿',
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
    name: '척 70 정글 클로즈 엘리게이터 프렌드',
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
    name: '리갈 남성 스트레이트 팁 정장화',
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
    name: '바이오소프 남성 메쉬 컴포트 슬립온',
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
    name: '리갈 남성 캐주얼 유팁 더비온',
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
    name: '리갈 남성 캐주얼 유팁 더비온',
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
    name: '세븐플로어 패브릭 보석장식 여성 펌프스',
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
    name: '세븐플로어 경량 여성 페니로퍼',
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
    name: '세븐플로어 큐빅포인트 여성 메리제인 펌프스',
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
    name: '샌들 라운드솔 카우레더 스트랩',
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
    name: '데일리 스트랩 소가죽 샌들',
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
    name: '샌들 스퀘어토 고트레더 발목스트랩',
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
    name: '샌들 스퀘어솔 새틴원단 골드링 포인트',
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
    name: '소가죽 스니커즈 베이지',
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
    name: '소가죽 스니커즈 블랙',
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
    name: '소가죽 스니커즈 브라운',
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
    name: '소가죽 스니커즈 그레이',
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
    name: '아브릴라 슬라이드 베이지',
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
    name: '아브릴라 슬라이드 블랙',
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
    name: '아브릴라 슬라이드 그레이',
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
    name: '아브릴라 슬라이드 핑크',
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
    name: '[소다] 남성 스니커즈 베이지',
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
    name: '[소다] 남성 스니커즈 블랙',
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
    name: '[소다] 여성 스니커즈 핑크',
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
];

// const generateNextId = () => Math.max(...products.map((product) => product.id)) + 1;

// const createProduct = (newProduct) => {
//   products = [{ id: generateNextId(), favorites: 0, ...newProduct }, ...products];
// };

const getProducts = () => products;

const findProduct = id => products.find(product => product.id === id);

const toggleProductFavorite = (id, isFavorite) => {
  const delta = isFavorite ? -1 : 1;

  products = products.map(product =>
    product.id === id ? { ...product, favorites: product.favorites + delta } : product
  );
};

module.exports = { findProduct, getProducts, toggleProductFavorite };
