/**
 * @prettier
 */

export function getDepartmentUrl(targetUrl) {
  const urls = {
    컴퓨터공학과:
      "http://it.daejin.ac.kr/wslsubjectlist.do?wslID=it&menuCode=006009",
  };

  return urls[targetUrl];
}
