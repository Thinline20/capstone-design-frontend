/**
 * @prettier
 */

import { Maybe } from "./utils/maybe.js";
import { getCollegeUrl, getDepartmentUrl } from "./core/department.js";
import { getUserCookieData, getUserInfo } from "./api/back.js";
import { delay } from "./utils/delay.js";
import { createInfoPanel, clearInfoPanelContent } from "./portalInfoPanel.js";

const { to, fromTo } = gsap;

const getVar = (key, elem = document.documentElement) =>
  getComputedStyle(elem).getPropertyValue(key);

// When DOM is ready
document.addEventListener("DOMContentLoaded", async () => {
  const userCookieData = Maybe.withDefault(null, getUserCookieData());

  const portalContainer = document.querySelector(".portal-container");

  // info-box
  const userInfoBox = portalContainer.querySelector(".user-info-box");
  const userInfoDataSpans = userInfoBox.querySelectorAll(".data-text");
  const toggleBlur = userInfoBox.querySelector(".toggle-blur input");
  const toggleBlurLabels = userInfoBox.querySelectorAll(".toggle-blur-label");

  const userData = await getUserInfo();

  setToggleBlurDesign(toggleBlur);
  toggleBlurLabels.forEach((label) => {
    label.style.transition = "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
  });

  userInfoDataSpans.forEach((dataSpan) => {
    const dataType = dataSpan.dataset.type;
    let dataPiece = userData[dataType];

    if (dataType === "name") {
      dataPiece = `${dataPiece}(${userCookieData["id"]})`;
    } else if (dataType === "department") {
      dataPiece = `${userData.college} ${dataPiece}`;
    }

    dataSpan.innerText = dataPiece;
    dataSpan.style.transitionDuration = "0.4s";
    dataSpan.setAttribute("draggable", true);
  });

  toggleBlur.addEventListener("change", () => {
    if (toggleBlur.checked === true) {
      // 사용자 정보 블러 해제
      userInfoDataSpans.forEach((dataSpan) => {
        dataSpan.classList.add("unblur");
        dataSpan.setAttribute("draggable", false);
      });
    } else {
      // 사용자 정보 블러 설정
      userInfoDataSpans.forEach((dataSpan) => {
        if (!dataSpan.classList.contains("blur")) {
          dataSpan.classList.remove("unblur");
        }
        dataSpan.setAttribute("draggable", true);
      });
    }

    toggleBlurLabels.forEach((label) => {
      label.classList.toggle("active");
    });
  });

  // user related navigation links and various stuff
  const userRelatedBox = portalContainer.querySelector(".user-related-box");

  const userAffiliation = portalContainer.querySelector(".user-affiliation");
  const userCollege = userAffiliation.querySelector(".college");
  const userDepartment = userAffiliation.querySelector(".department");

  userCollege.querySelector("a").href = getCollegeUrl(userData.college);
  userCollege.querySelector("a span").innerText = userData.college;
  userDepartment.querySelector("a").href = getDepartmentUrl(
    userData.department
  );
  userDepartment.querySelector("a span").innerText = userData.department;

  const userSpecificNavigation =
    userRelatedBox.querySelector(".user-navigation");
  const linkSlot1 = userSpecificNavigation.querySelector(".links .link-slot1");
  const linkSlot2 = userSpecificNavigation.querySelector(".links .link-slot2");

  if (userCookieData.role === "student") {
    linkSlot1.querySelector("i").classList.add("fa-solid", "fa-pencil");
    linkSlot1.querySelector("a").href = "https://dreams2.daejin.ac.kr";
    linkSlot1.querySelector("span").innerText = "수강신청";

    linkSlot2.querySelector("i").classList.add("fa-solid", "fa-chalkboard");
    linkSlot2.querySelector("a").href =
      "https://www.daejin.ac.kr/contents/www/cor/curriculum_1.html";
    linkSlot2.querySelector("span").innerText = "학사/장학";
  } else {
    linkSlot1.querySelector("i").classList.add("fa-solid", "fa-people-group");
    linkSlot1.querySelector("a").href = "#";
    linkSlot1.querySelector("span").innerText = "그룹웨어";

    linkSlot2.querySelector("i").classList.add("fa-solid", "fa-user-check");
    linkSlot2.querySelector("a").href =
      "http://www.daejin.ac.kr/contents/www/cor/djattendus.html";
    linkSlot2.querySelector("span").innerText = "전자출결";
  }

  // control-panel
  const controlPanel = portalContainer.querySelector(".control-panel");
  const buttons = controlPanel.querySelectorAll(".buttons .button-wrapper");
  const infoPanel = document.querySelector(".info-panel");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      if (!infoPanel.classList.contains("active")) {
        showInfoPanel(infoPanel);
        currentInfoContent = event.target.dataset.value;
        createInfoPanel(currentInfoContent, infoPanel);
      } else {
        if (event.target.dataset.value !== currentInfoContent) {
          currentInfoContent = event.target.dataset.value;
          createInfoPanel(currentInfoContent, infoPanel);
          clearInfoPanelContent();
        }
      }
    });
  });

  // additional-info
  const additionalInfo = portalContainer.querySelector(".additional-info");

  // info-panel
  const infoPanelContent = infoPanel.querySelector("#info-panel-content");
  let currentInfoContent = -1;

  dragInfoPanel();

  const closeButton = infoPanel.querySelector(".close-info-panel");
  closeButton.addEventListener("click", () => {
    closeInfoPanel(infoPanel);
  });
});

function setToggleBlurDesign() {
  const toggleBlur = document.querySelector(".user-info-box .toggle-blur");

  const svg = toggleBlur.querySelector("svg");
  const input = toggleBlur.querySelector("input");

  input.addEventListener("pointerenter", (e) => {
    if (toggleBlur.animated || input.checked) {
      return;
    }
    to(input, {
      "--input-background": getVar("--c-default-dark"),
      duration: 0.2,
    });
  });
  input.addEventListener("pointerleave", (e) => {
    if (toggleBlur.animated || input.checked) {
      return;
    }
    to(input, {
      "--input-background": getVar("--c-default"),
      duration: 0.2,
    });
  });

  input.addEventListener("change", (e) => {
    let checked = input.checked;
    let hide = checked ? "default" : "dot",
      show = checked ? "dot" : "default";
    fromTo(
      svg,
      {
        "--default-s": checked ? 1 : 0,
        "--default-x": checked ? "0px" : "8px",
        "--dot-s": checked ? 0 : 1,
        "--dot-x": checked ? "-8px" : "0px",
      },
      {
        ["--" + hide + "-s"]: 0,
        ["--" + hide + "-x"]: checked ? "8px" : "-8px",
        duration: 0.25,
        delay: 0.15,
      }
    );
    fromTo(
      input,
      {
        "--input-background": getVar(checked ? "--c-default" : "--c-active"),
      },
      {
        "--input-background": getVar(checked ? "--c-active" : "--c-default"),
        duration: 0.35,
        clearProps: true,
      }
    );
    to(svg, {
      keyframes: [
        {
          ["--" + show + "-x"]: checked ? "2px" : "-2px",
          ["--" + show + "-s"]: 1,
          duration: 0.25,
        },
        {
          ["--" + show + "-x"]: "0px",
          duration: 0.2,
          clearProps: true,
        },
      ],
    });
  });
}

function showInfoPanel(infoPanel) {
  infoPanel.classList.add("active");
}

function closeInfoPanel(infoPanel) {
  if (infoPanel.classList.contains("active")) {
    infoPanel.classList.remove("active");
  }
}

function handleBodyClick() {
  closeInfoPanel(document.querySelector(".info-panel"));
}

function dragInfoPanel() {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  const infoPanel = document.querySelector(".info-panel");
  infoPanel.querySelector(".info-panel-header").onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    if (infoPanel.offsetTop - pos2 <= -113) {
      infoPanel.style.top = "-112px";
    } else if (
      -113 < infoPanel.offsetTop - pos2 &&
      infoPanel.offsetTop - pos2 < 160
    ) {
      infoPanel.style.top = infoPanel.offsetTop - pos2 + "px";
    } else {
      infoPanel.style.top = "159px";
    }

    if (infoPanel.offsetLeft - pos1 <= -1) {
      infoPanel.style.left = "0px";
    } else if (
      -1 < infoPanel.offsetLeft - pos1 &&
      infoPanel.offsetLeft - pos1 < document.documentElement.clientWidth - 879
    ) {
      infoPanel.style.left = infoPanel.offsetLeft - pos1 + "px";
    } else {
      infoPanel.style.left = `${document.documentElement.clientWidth - 880}px`;
    }
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
