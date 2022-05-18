/**
 * @prettier
 */

import { createElement } from "./core/createElement.js";
import { departments } from "./core/department.js";

export function createTabContent(selectedPanel, contentId) {
  const [outer, select] = contentId.split(" ").map((x) => Number(x));
  switch (Number(selectedPanel)) {
    case 0:
      break;
    case 1:
      break;
    case 2:
      switch (outer) {
        case 1:
          switch (select) {
            case 1:
              return changeUserInfo();
            case 2:
              return changePassword();
          }
        case 2:
          break;
        case 3:
          break;
        case 4:
          break;
        case 5:
          switch (select) {
            case 1:
              return applyMinor();
            case 2:
              return checkMinorApplicationResult();
            case 3:
              return applyDoubleMajor();
            case 4:
              return checkDoubleMajorApplicationResult();
          }
        case 6:
          break;
        case 7:
          break;
        case 8:
          break;
        case 9:
          break;
      }
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      break;
    case 7:
      break;
    case 8:
      break;
    case 9:
      break;
  }

  return null;
}

function changeUserInfo() {
  const formWrapper = createElement("div", {
    className: "form-wrapper change-user-info-wrapper",
  });
  const form = `
    <h2 class="content-name">개인정보 수정</h2>
    <form id="change-user-info" action="" method="post">
      <label class="change-label" for="change-phone-number"
        >전화번호</label
      >
      <input
        class="input-text"
        id="change-phone-number"
        name="phone"
        type="tel"
        placeholder="숫자만 입력하세요"
        pattern="[0-9]{7,13}"
        required
        title="전화번호는 숫자만 입력하세요"
      />

      <label class="change-label" for="change-email">이메일</label>
      <input
        class="input-text"
        id="change-email"
        name="email"
        type="email"
        placeholder="example@mail.com"
        required
        title="이메일은 다음과 같은 형식을 갖추어야 합니다. e.g. example@mail.com"
      />
      
      <label class="change-label" for="change-address">주소</label>
      <input
        class="input-text"
        id="change-address"
        name="address"
        type="text"
        required
      />

      <button type="submit" class="submit change-submit">
        개인정보 수정
      </button>
    </form>
  `;

  formWrapper.innerHTML = form;

  formWrapper.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    /**
     * -- Form Data --
     * phone   : 전화번호
     * email   : 이메일
     * address : 주소
     */
    const { phone, email, address } = Object.fromEntries(
      new FormData(event.target).entries()
    );

    // 서버
    console.log(phone, email, address);
  });

  return formWrapper;
}

function changePassword() {
  const formWrapper = createElement("div", {
    className: "form-wrapper change-password-form-wrapper",
  });
  const form = `
    <h2 class="content-name">비밀번호 변경</h2>
    <form id="change-password-form" action="" method="post">
      <label class="change-label" for="change-pw">새 비밀번호</label>
      <input
        id="change-pw"
        class="input-text"
        name="pw"
        type="password"
        pattern="[a-zA-Z0-9!@#$%^&*.,?;:]{1,100}"
        required
        autocomplete="off"
        title="비밀번호는 100자리 이하로 설정해주세요. 알파벳 대소문자, 숫자, 특수문자(!@#$%^&*.,?;:)를 사용할 수 있습니다."
      />
      <label class="change-label" for="change-pw-confirm">새 비밀번호 확인</label>
      <input
        id="change-pw-confirm"
        class="input-text"
        name="confirm"
        type="password"
        pattern="[a-zA-Z0-9!@#$%^&*.,?;:]{1,100}"
        required
        autocomplete="off"
        title="비밀번호를 다시 입력해주세요."
      /> 

      <button type="submit" class="submit change-submit">
        비밀번호 변경
      </button>     
    </form>
  `;

  formWrapper.innerHTML = form;

  formWrapper.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    /**
     * -- Form Data --
     * pw        : 비밀번호
     * confirm : 비밀번호 확인용
     */
    const { pw, confirm } = Object.fromEntries(
      new FormData(event.target).entries()
    );

    if (!validatePassword(pw, confirm)) {
      return;
    }

    // 서버
    console.log(pw);
  });

  function validatePassword(pw, confirm) {
    if (pw !== confirm) {
      formWrapper
        .querySelector("#change-pw-confirm")
        .setCustomValidity("비밀번호가 일치하지 않습니다.");
      return false;
    } else {
      formWrapper.querySelector("#change-pw-confirm").setCustomValidity("");
      return true;
    }
  }

  return formWrapper;
}

function applyMinor() {
  const formWrapper = createElement("div", {
    className: "form-wrapper apply-minor-form-wrapper",
  });

  const collegeOptions = () => {
    const keys = Object.keys(departments);
    let options = [];

    for (let key of keys) {
      options.push(`<option value=${key}>${key}</option>`);
    }

    return options;
  };

  const departmentOptions = (college) => {
    let options = [];

    departments[college].forEach((department) => {
      options.push(`<option value=${department}>${department}</option>`);
    });

    return options;
  };

  const form = `
    <h2 class="content-name">부전공 신청</h2>
    <form id="apply-minor-form" action="" method="post">
      <label for="minor-college-options">대학</label>
      <select id="minor-college-options" name="college" required>
        ${collegeOptions().join("")}
      </select>
      
      <label for="minor-department-options">학과</label>
      <select id="minor-department-options" name="department" required>
      </select>

      <button type="submit" class="submit apply-submit">
        부전공 신청하기
      </button>  
    </form>
  `;

  formWrapper.innerHTML = form;

  const collegeSelect = formWrapper.querySelector("#minor-college-options");
  const departmentSelect = formWrapper.querySelector(
    "#minor-department-options"
  );

  collegeSelect.selectedIndex = -1;
  departmentSelect.selectedIndex = -1;

  collegeSelect.addEventListener("change", () => {
    departmentSelect.innerHTML = departmentOptions(collegeSelect.value).join(
      ""
    );
    departmentSelect.selectedIndex = 0;
  });

  formWrapper.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    /**
     * -- Form Data --
     * college    : 대학
     * department : 학과
     */
    const { college, department } = Object.fromEntries(
      new FormData(event.target).entries()
    );

    // 서버
    console.log(college, department);
  });

  return formWrapper;
}

function checkMinorApplicationResult() {
  // 서버
  const request = { status: 200 };
  const ok = true; // 만약 신청한 내용이 있다면 ok=true, 없으면 ok=false
  const data = { college: "휴먼IT공과대학", department: "컴퓨터공학과" }; // 신청한 내용이 있다면 data에 저장

  if (!ok) {
    window.alert("신청한 부전공이 없습니다");
    return "";
  }

  const checkWrapper = createElement("div", {
    className: "check-wrapper check-minor-application-wrapper",
  });

  const check = `
    <h2 class="content-name">부전공 신청 결과 조회하기</h2>
    <div id="check-minor-application">
      <div class="college">
        <div class="check-label">대학</div>
        <div class="check-info">${data.college}</div>
      </div>
      <div class="department">
        <div class="check-label">학과</div>
        <div class="check-info">${data.department}</div>
      </div>
    </div>
  `;

  checkWrapper.innerHTML = check;

  return checkWrapper;
}

function applyDoubleMajor() {
  const formWrapper = createElement("div", {
    className: "form-wrapper apply-double-major-form-wrapper",
  });

  const collegeOptions = () => {
    const keys = Object.keys(departments);
    let options = [];

    for (let key of keys) {
      options.push(`<option value=${key}>${key}</option>`);
    }

    return options;
  };

  const departmentOptions = (college) => {
    let options = [];

    departments[college].forEach((department) => {
      options.push(`<option value=${department}>${department}</option>`);
    });

    return options;
  };

  const form = `
    <h2 class="content-name">복수전공 신청</h2>
    <form id="apply-double-major-form" action="" method="post">
      <label for="double-college-options">대학</label>
      <select id="double-college-options" name="college" required>
        ${collegeOptions().join("")}
      </select>
      
      <label for="double-department-options">학과</label>
      <select id="double-department-options" name="department" required>
      </select>

      <button type="submit" class="submit apply-submit">
        복수전공 신청하기
      </button>
    </form>
  `;

  formWrapper.innerHTML = form;

  const collegeSelect = formWrapper.querySelector("#double-college-options");
  const departmentSelect = formWrapper.querySelector(
    "#double-department-options"
  );

  collegeSelect.selectedIndex = -1;
  departmentSelect.selectedIndex = -1;

  collegeSelect.addEventListener("change", () => {
    departmentSelect.innerHTML = departmentOptions(collegeSelect.value).join(
      ""
    );
    departmentSelect.selectedIndex = 0;
  });

  formWrapper.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    /**
     * -- Form Data --
     * college    : 대학
     * department : 학과
     */
    const { college, department } = Object.fromEntries(
      new FormData(event.target).entries()
    );

    // 서버
    console.log(college, department);
  });

  return formWrapper;
}

function checkDoubleMajorApplicationResult() {
  // 서버
  const request = { status: 200 };
  const ok = true; // 만약 신청한 내용이 있다면 ok=true, 없으면 ok=false
  const data = { college: "휴먼IT공과대학", department: "컴퓨터공학과" }; // 신청한 내용이 있다면 data에 저장

  if (!ok) {
    window.alert("신청한 복수전공이 없습니다");
    return "";
  }

  const checkWrapper = createElement("div", {
    className: "check-wrapper check-double-major-application-wrapper",
  });

  const check = `
    <h2 class="content-name">부전공 신청 결과 조회하기</h2>
    <div id="check-double-major-application">
      <div class="college">
        <div class="check-label">대학</div>
        <div class="check-info">${data.college}</div>
      </div>
      <div class="department">
        <div class="check-label">학과</div>
        <div class="check-info">${data.department}</div>
      </div>
    </div>
  `;

  checkWrapper.innerHTML = check;

  return checkWrapper;
}
