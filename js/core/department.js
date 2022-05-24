/**
 * @prettier
 */

const collegeUrls = {
  대순종학대학: "https://www.daejin.ac.kr/contents/www/cor/campanology.html",
  인문예술대학: "https://www.daejin.ac.kr/contents/www/cor/human.html",
  글로벌산업통상대학: "https://www.daejin.ac.kr/contents/www/cor/industry.html",
  공공인재대학: "https://www.daejin.ac.kr/contents/www/cor/socialsci.html",
  과학기술대학: "https://www.daejin.ac.kr/contents/www/cor/engineer.html",
  휴먼IT공과대학: "https://www.daejin.ac.kr/contents/www/cor/hiteng.html",
  창의미래인재대학: "https://www.daejin.ac.kr/contents/www/cor/future.html",
};

const departmentUrls = {
  컴퓨터공학과: "http://it.daejin.ac.kr/32.html",
};

export const departments = {
  대순종합대학: ["대순종합과"],
  인문예술대학: [
    "한국어문학과",
    "영어영문학과",
    "역사문화콘텐츠학과",
    "문예콘텐츠창작학과",
    "현대미술전공",
    "만화게임그래픽전공",
    "디자인학부",
    "연극영화학부",
    "실용음악학과",
  ],
  글로벌산업통상대학: [
    "글로벌경제학과",
    "경영학과",
    "국제통상학과",
    "국제지역학부",
  ],
  공공인재대학: [
    "공공인재법학과",
    "행정정보학과",
    "사회복지·아동학부",
    "미디어커뮤니케이션학과",
    "문헌정보학과",
    "휴먼케어평생교육학과(야)",
  ],
  과학기술대학: [
    "데이터사이언스학과",
    "생명과학전공",
    "화학전공",
    "간호학과",
    "스포츠과학과",
    "식품영양학과",
  ],
  휴먼IT공과대학: [
    "스마트융합시스템전공",
    "컴퓨터공학전공",
    "AI빅데이터전공",
    "전자공학과",
    "기계공학과",
    "에너지공학과",
    "에너지공학과",
    "산업경영공학과",
    "건축공학부",
    "건축공학전공",
    "건축학전공",
    "토목공학전공",
    "스마트시티전공",
    "환경에너지공학전공",
  ],
  창의미래인재대학: ["통일한국인재전공", "창업융합전공"],
};

export function getCollegeUrl(target) {
  return collegeUrls[target];
}

export function getDepartmentUrl(target) {
  return departmentUrls[target];
}
