/**
 * @prettier
 */

export function getCollegeUrl(target) {
  const urls = {
    대순종학대학: "https://www.daejin.ac.kr/contents/www/cor/campanology.html",
    인문예술대학: "https://www.daejin.ac.kr/contents/www/cor/human.html",
    글로벌산업통상대학:
      "https://www.daejin.ac.kr/contents/www/cor/industry.html",
    공공인재대학: "https://www.daejin.ac.kr/contents/www/cor/socialsci.html",
    과학기술대학: "https://www.daejin.ac.kr/contents/www/cor/engineer.html",
    휴먼IT공과대학: "https://www.daejin.ac.kr/contents/www/cor/hiteng.html",
    창의미래인재대학: "https://www.daejin.ac.kr/contents/www/cor/future.html",
  };

  return urls[target];
}

export function getDepartmentUrl(target) {
  const urls = {
    컴퓨터공학과:
      "http://it.daejin.ac.kr/wslsubjectlist.do?wslID=it&menuCode=006009",
  };

  return urls[target];
}
