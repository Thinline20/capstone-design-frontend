/**
 * @prettier
 */

// Written by olegpolyakov - https://gist.github.com/olegpolyakov/5e3034f4b62fb6b19d9aa57cba17ca6f
// HTML DOM 요소를 추가하는 유틸리티 함수
// tag : 태그이름
// props : 속성들 - 오브젝트를 받음
// children : 하위요소들 - 문자열/숫자, 단일 요소, 요소들의 배열을 받음
export function createElement(tag, props, ...children) {
  const element = document.createElement(tag);

  if (props) {
    Object.entries(props).forEach(([key, value]) => {
      if (key.startsWith("on") && typeof value === "function") {
        element.addEventListener(key.substring(2), value);
      } else if (key.startsWith("data-")) {
        element.setAttribute(key, value);
      } else {
        element[key] = value;
      }
    });
  }

  children.forEach((child) => {
    if (Array.isArray(child)) {
      return element.append(...child);
    }

    if (typeof child === "string" || typeof child === "number") {
      child = document.createTextNode(child);
    }

    if (child instanceof Node) {
      element.appendChild(child);
    }
  });

  return element;
}
