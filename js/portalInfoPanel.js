/**
 * @prettier
 */

import { createElement } from "./core/createElement.js";
import { createTabContent } from "./portalInfoPanelContent.js";

let contents = [
  {
    name: "부속기관",
    outerTabs: [
      {
        id: 0,
        outerTabName: "교수학습지원센터",
        options: [
          { option: "자기주도학습준비도" },
          { option: "학습양식 검사" },
          { option: "핵심역량 진단검사" },
          { option: "학습법 신청 프로그램" },
          { option: "교수학습센터용 멘토링 신청 및 보고서 작성" },
          { option: "입학사정 멘토링 신청 및 보고서작성" },
        ],
      },
      {
        id: 1,
        outerTabName: "교육성과관리센터",
        options: [{ option: "전공역량진단도구 설문 입력" }],
      },
    ],
  },
  {
    name: "기획/평가관리",
    outerTabs: [
      {
        id: 0,
        outerTabName: "제안제도",
        options: [{ option: "제안 명예의 전당" }],
      },
    ],
  },
  {
    name: "학적정보",
    outerTabs: [
      {
        outerTabName: "신상정보",
        options: [
          { option: "개인신상정보수정" },
          { option: "비밀번호 변경" },
          { option: "[학부] 학적 사진 변경" },
        ],
      },
      {
        outerTabName: "학적",
        options: [{ option: "학적정보조회(학부)" }],
      },
      {
        outerTabName: "교직적성 / 인성검사",
        options: [{ option: "교직 적성 및 인성검사" }],
      },
      {
        outerTabName: "교직 이수증",
        options: [{ option: "응급처치 및 심폐소생술 이수증" }],
      },
      {
        outerTabName: "부/복수전공",
        options: [
          { option: "부전공신청" },
          { option: "부전공신청결과조회" },
          { option: "복수전공신청" },
          { option: "복수전공신청결과조회" },
        ],
      },
      {
        outerTabName: "전과신청",
        options: [
          { option: "전과여석 조회" },
          { option: "전과신청" },
          { option: "전과신청 결과확인" },
        ],
      },
      {
        outerTabName: "휴학/복학",
        options: [
          { option: "휴학/복학안내" },
          { option: "일반휴학(학부)" },
          { option: "군휴학(학부)" },
          { option: "복학" },
          { option: "복학신청 내용 조회(출력)" },
          { option: "일반휴학 신청원 출력" },
          { option: "군휴학 신청원 출력" },
        ],
      },
      {
        outerTabName: "전공안내",
        options: [{ option: "전공신청" }, { option: "전공신청내용조회" }],
      },
      {
        outerTabName: "자격증",
        options: [
          { option: "외국인 자격증 승인 요청" },
          { option: "외국인 자격증 취득 내역" },
        ],
      },
    ],
  },
  {
    name: "수업정보",
    outerTabs: [
      {
        outerTabName: "시간표",
        options: [
          { option: "학생 시간표조회(학부)" },
          { option: "중간/기말시험및시간표조회" },
          { option: "강의실별 시간표조회(학부,대학원 통합)" },
          { option: "교양과목 시간표조회" },
        ],
      },
      {
        outerTabName: "강좌관리",
        options: [
          { option: "수업계획서조회(학부)" },
          { option: "수업평가입력(학부)" },
          { option: "학생개인별 수업평가 실시현황" },
        ],
      },
      {
        outerTabName: "강좌정보",
        options: [
          { option: "과정별강좌일람조회(학부)" },
          { option: "강의강좌조회(학부)" },
          { option: "폐강과목조회" },
        ],
      },
      {
        outerTabName: "강의실형황",
        options: [{ option: "강의실현황조회" }, { option: "교육기자재조회" }],
      },
      {
        outerTabName: "교육과정",
        options: [
          { option: "학부교육과정조회(학과별)" },
          { option: "학부교육과정조회(영역별)" },
          { option: "대체과목조회" },
          { option: "대학원교육과정조회" },
          { option: "추가동일과목조회" },
        ],
      },
      {
        outerTabName: "수강신청",
        options: [{ option: "수업평가 결과조회" }],
      },
      {
        outerTabName: "글쓰기센터",
        options: [
          { option: "글쓰기 상담 신청" },
          { option: "외국어 글쓰기 상담 신청" },
        ],
      },
    ],
  },
  {
    name: "성적정보",
    outerTabs: [
      {
        outerTabName: "성적",
        options: [
          { option: "성적조회 및 성적표출력(학부)" },
          { option: "이수구분별 성적조회 및 출력" },
          { option: "성적확인및이의신청" },
          { option: "취득학점 포기신청" },
          { option: "타대학취득학점 현황" },
          { option: "[교육대학원]교육과정 이수확인 및 학사관리" },
        ],
      },
      {
        outerTabName: "1:1 학점개선 멘토링",
        options: [{ option: "학점개선(G.I) 멘토링 보고서 작성" }],
      },
    ],
  },
  {
    name: "등록/장학",
    outerTabs: [
      {
        outerTabName: "등록안내",
        options: [
          { option: "등록금 및 납부내역조회" },
          { option: "재학생등록금고지서_학부생" },
          { option: "등록금 납부영수증_학부" },
          { option: "분할납부 신청" },
          { option: "0원 납부 신청 및 확인" },
        ],
      },
      {
        outerTabName: "장학안내",
        options: [
          { option: "장학정보 조회" },
          { option: "장학 계좌번호 관리" },
          { option: "장학 신청" },
        ],
      },
    ],
  },
  {
    name: "학생생활정보",
    outerTabs: [
      {
        outerTabName: "예비군/민방위",
        options: [
          { option: "[학생] 예비군/민방위 교육대상자 조회" },
          { option: "[학생] 예비군 전입신고" },
        ],
      },
      {
        outerTabName: "생활관입사",
        options: [{ option: "생활관시스템" }],
      },
      {
        outerTabName: "유학신청",
        options: [
          { option: "DUCC유학 기본과정 신청" },
          { option: "DUCC유학 심화과정 신청" },
          { option: "DUCC유학 복수학위과정 신청" },
          { option: "DUCC외 유학 신청" },
        ],
      },
      {
        outerTabName: "시설물 대관",
        options: [{ option: "시설물 대관 신청" }],
      },
      {
        outerTabName: "모의토익 신청",
        options: [{ option: "모의토익 신청" }],
      },
      {
        outerTabName: "학생 모니터단",
        options: [{ option: "학생 모니터단 등록" }],
      },
      {
        outerTabName: "제안제도",
        options: [{ option: "제안제도 입력" }],
      },
    ],
  },
  {
    name: "지도교수상담",
    outerTabs: [
      {
        outerTabName: "T-WIN 상담",
        options: [{ option: "T-WIN 상담신청" }],
      },
    ],
  },
  {
    name: "증명서 신청",
    outerTabs: [
      {
        outerTabName: "증명서발급안내",
        options: [{ option: "증명서발급안내" }],
      },
      {
        outerTabName: "증명서발급신청",
        options: [
          { option: "인터넷출력증명서신청" },
          { option: "인터넷 우편 증명서 신청" },
          { option: "장학금수혜증명서" },
          { option: "교육비납입증명서" },
        ],
      },
      {
        outerTabName: "국제학생증 신청",
        options: [{ option: "국제학생증 신청" }],
      },
    ],
  },
  {
    name: "상담센터",
    outerTabs: [
      {
        outerTabName: "상담안내",
        options: [{ option: "학생생활상담센터 안내 및 이용방법" }],
      },
    ],
  },
];

export function createInfoPanel(selected, infoPanelElement) {
  const contentElem = document.querySelector(".info-panel-content");
  const current = contents[selected];

  let outerId = 1;
  const outerTabCount = current.outerTabs.length;

  let outerTabList = [];

  for (let outerTabData of current.outerTabs) {
    const outerTabInput = createElement("input", {
      className: "outer-tab-input",
      id: `outer-tab-input-${outerId}`,
      type: "radio",
      name: "outer-tab",
    });

    if (outerId === 1) {
      outerTabInput.checked = true;
    }

    const outerTab = createElement(
      "label",
      {
        className: "outer-tab",
        id: `outer-tab-${outerId}`,
        htmlFor: `outer-tab-input-${outerId}`,
        onclick: () => {
          clearInfoPanelContent();

          document.querySelector(`#${outerTab.id} + div select`).selectedIndex = -1;
        },
      },
      outerTabData.outerTabName
    );

    outerTab.style.width = `calc(100% / ${outerTabCount})`;

    let optionList = [];
    let optionId = 1;

    for (let option of outerTabData.options) {
      const optionElement = createElement(
        "option",
        {
          className: "option",
          value: `${outerId} ${optionId}`,
        },
        option.option
      );

      optionList.push(optionElement);

      ++optionId;
    }

    const select = createElement(
      "select",
      {
        className: "select",
        name: "inner-select",
        id: `select-${outerId}`,
        onchange: (event) => {
          try {
            clearInfoPanelContent();

            contentElem.append(createTabContent(selected, event.target.value));
          } catch (e) {
            console.log(e);
          }
        },
      },
      optionList
    );

    select.selectedIndex = -1;

    const selectWrapper = createElement(
      "div",
      { className: "select-wrapper" },
      select
    );

    outerTabList.push(outerTabInput);
    outerTabList.push(outerTab);
    outerTabList.push(selectWrapper);

    ++outerId;
  }

  const tabs = createElement("div", { className: "outer-tabs" }, outerTabList);

  if (infoPanelElement.children.length > 2) {
    infoPanelElement.replaceChild(tabs, infoPanelElement.children[1]);
  } else {
    infoPanelElement.insertBefore(
      tabs,
      infoPanelElement.querySelector(".info-panel-content")
    );
  }
}

export function clearInfoPanelContent() {
  const contentElem = document.querySelector(".info-panel-content");
  if (contentElem.firstChild) {
    contentElem.removeChild(contentElem.firstChild);
  }
}
