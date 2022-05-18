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
          switch (select) {
            case 1:
              return takeOffInstruction();
            case 2:
              return takeOff();
            case 3:
              return militaryTakeOff();
            case 4:
              return returnSchool();
            case 5:
              return checkReturnSchool();
            case 6:
              return printTakeOffForm();
            case 7:
              return printMilitaryTakeOffForm();
          }
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
    className: "form-wrapper common-wrapper change-user-info-wrapper",
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
    className: "form-wrapper common-wrapper change-password-form-wrapper",
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
    className: "form-wrapper common-wrapper apply-minor-form-wrapper",
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
    // 부전공 신청
    console.log(college, department);
  });

  return formWrapper;
}

function checkMinorApplicationResult() {
  // 서버
  // 부전공 신청 결과를 반환
  const request = { status: 200 };
  const ok = true; // 만약 신청한 내용이 있다면 ok=true, 없으면 ok=false
  const data = {
    college: "휴먼IT공과대학",
    department: "컴퓨터공학과",
    approved: true,
  }; // 신청한 내용이 있다면 data에 저장

  if (!ok) {
    window.alert("신청한 부전공이 없습니다");
    return "";
  }

  const checkWrapper = createElement("div", {
    className: "check-wrapper common-wrapper check-minor-application-wrapper",
  });

  const check = `
    <h2 class="content-name">부전공 신청 결과 조회</h2>
    <div id="check-minor-application">
      <div class="check-section college">
        <div class="check-label">대학</div>
        <div class="check-info">${data.college}</div>
      </div>
      <div class="check-section department">
        <div class="check-label">학과</div>
        <div class="check-info">${data.department}</div>
      </div>
      <div class="approval"><h2>${data.approved ? "승인" : "반려"}</h2></div>
    </div>
  `;

  checkWrapper.innerHTML = check;

  return checkWrapper;
}

function applyDoubleMajor() {
  const formWrapper = createElement("div", {
    className: "form-wrapper common-wrapper apply-double-major-form-wrapper",
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
    // 복수전공 신청
    console.log(college, department);
  });

  return formWrapper;
}

function checkDoubleMajorApplicationResult() {
  // 서버
  // 복수전공 신청 결과를 반환
  const request = { status: 200 };
  const ok = true; // 만약 신청한 내용이 있다면 ok=true, 없으면 ok=false
  const data = {
    college: "휴먼IT공과대학",
    department: "컴퓨터공학과",
    approved: false,
  }; // 신청한 내용이 있다면 data에 저장

  if (!ok) {
    window.alert("신청한 복수전공이 없습니다");
    return "";
  }

  const checkWrapper = createElement("div", {
    className:
      "check-wrapper common-wrapper check-double-major-application-wrapper",
  });

  const check = `
    <h2 class="content-name">복수전공 신청 결과 조회</h2>
    <div id="check-double-major-application">
      <div class="check-section college">
        <div class="check-label">대학</div>
        <div class="check-info">${data.college}</div>
      </div>
      <div class="check-section department">
        <div class="check-label">학과</div>
        <div class="check-info">${data.department}</div>
      </div>
      <div class="approval"><h2>${data.approved ? "승인" : "반려"}</h2></div>
    </div>
  `;

  checkWrapper.innerHTML = check;

  return checkWrapper;
}

function takeOffInstruction() {
  const instructionWrapper = createElement("div", {
    className: "instruction-wrapper common-wrapper",
  });

  const instruction = `
    <h2 class="instruction-title">수업일수 2/3선 이후 군 입대 휴학 안내</h2>
    <div class="instruction">
      <p class="p1">2022학년도 1학기 수업일수 2/3선 이후  군 입대휴학에 대하여 아래와 같이 안내합니다</p>
      <p class="p2">
        <ol class="top">
          <li>
            현재 <span class="bold blue">일반휴학생</span>으로서 교육소집 또는 입영영장을 받은 남학생[<span class="bold blue underline">신입생</span>, <span class="bold blue underline">편입생</span>을 포함]<br>
            <ol type="A">
              <li>신청기간 : 2022. 5. 11.(수) ~</li>
              <li>신청일 : <span class="bold blue underline">입영일 20일 전부터</span> 신청 가능함</li>
              <li>신청방법 : 우리대학 포털시스템에서 <span class="red bold">온라인 신청</span>(<span class="bold">입영통지서</span> <span class="red bold">.jpg</span>파일로 첨부)</li>
              <li><span class="bold">신청경로 : 포털대진 ⇨ 학적정보 ⇨ 휴학/복학 ⇨ 군휴학신청(학부)</span></li>
            </ol>
          </li>
          <li>
            현재 <span class="bold blue underline">재학생</span>으로서 수업일수 2/3선 이후부터 기말고사 종료 전까지 군입대자
            <ol type="A">
              <li>휴학기간 : 2022. 5. 11.(수) ~ 6. 14.(화) [학점인정원 인정 기준일]</li>
              <li>휴학신청일 : <span class="bold underline>입대일 하루 전</span>에만 군 입대휴학 신청 가능함[수업 및 출석을 위함]</li>
              <li>접수절차 : 공문제출 [ 제목 : 재학생 군휴학원 제출(학과명) ]</li>
              <li>제출서류 : 군휴학원서, 입영통지서, <span class="bold underline">학점인정원</span> 사본 1부</li>
              <li>등록금 : 복학 시 등록금 대체액 없음 [수업료 전액 납부]</li>
            </ol>
          </li>
          <li>
            <span class="blue bold">유의사항</span>
            <ol type="A">
              <li>입대 후 귀가조치되는 경우 <span class="red bold">귀가일로부터 10일 이내에</span> 귀가증을 지참하여 군입대휴학을 취소하여야 함.</li>
              <li><span class="bold">휴학기간 만료 후 미복학자는 자동으로 제적 처리됨(학칙 제 30조)</span></li>
            </ol>
          </li>
          <li>
            <span class="bold">문의처</span>
            <ol type="A">
              <li>종합서비스센터 031) 539-1301~3</li>
              <li><a href="https://www.daejin.ac.kr/contents/www/cor/campus5_2.html" title="학과 사무실 연락처">학과 사무실 연락처</a></li>
              <li>
                병무 관련
                <ol type="a">
                  <li><a href="https://www.mma.go.kr/index.do" title="병무청 홈페이지">병무청 홈페이지</a></li>
                  <li><a href="http://www.narasarang.or.kr/pt4700/prePt4700IntoArmyInqry.do" title="나라사랑 포털">나라사랑 포털</a></li>
                </ol>
              </li>
            </ol>
          </ol>
        </ol>
      </p>
    </div>
  `;

  instructionWrapper.innerHTML = instruction;

  return instructionWrapper;
}

function takeOff() {
  const takeOffWrapper = createElement("div", {
    className: "take-off-wrapper common-wrapper",
  });

  const takeOff = `
    <h2 class="content-name">일반 휴학</h2>
    <div id="take-off">
      <div class="prerequisite">
        <a href="#">
          <img src="https://dreams2.daejin.ac.kr/images/center/hyubokbutton1.png" alt="take off step one">
        </a>
        <a href="#">
          <img src="https://dreams2.daejin.ac.kr/images/center/hyubokbutton2.png" alt="take off step two">
        </a>
      </div>
      <form id="take-off-form" enctype="multipart/form-data" action="" method="post">
        <div class="file">
          <input class="file-name" placeholder="첨부파일">
          <label id="take-off-document" for="take-off-document-input">휴학원 첨부</label>
          <input id="take-off-document-input" name="document" type="file">
        </div>
        <button type="submit" class="submit take-off-submit">
          휴학 신청
        </button>
      </form>
    </div>
  `;

  takeOffWrapper.innerHTML = takeOff;

  takeOffWrapper
    .querySelector("#take-off-document-input")
    .addEventListener("change", (event) => {
      takeOffWrapper.querySelector(".file-name").value =
        event.target.value.replace(/.*[\/\\]/, "");
    });

  takeOffWrapper.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    /**
     * -- Form Data --
     * document : 휴학 관련 파일
     */
    const { document } = Object.fromEntries(
      new FormData(event.target).entries()
    );

    // 서버
    // 파일을 제출하면 관리자가 검토 후 승인
    console.log(document);
  });

  return takeOffWrapper;
}

function militaryTakeOff() {}

function returnSchool() {
  const returnWrapper = createElement("div", {
    className: "return-wrapper common-wrapper",
  });

  const returnHTML = `
    <h2 class="content-name">복학 신청</h2>
    <div id="return-school">
      <p class="description">
        휴학에 관련되 설명, 
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quaerat commodi incidunt quas cumque tenetur a, sunt velit? Distinctio deleniti laboriosam aliquam, laborum quas unde id quasi sint! Fugiat, minima?
      </p>
      <p class="description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quaerat commodi incidunt quas cumque tenetur a, sunt velit? Distinctio deleniti laboriosam aliquam, laborum quas unde id quasi sint! Fugiat, minima?
      </p>
      <button class="request">복학 신청</button>
    </div>
  `;

  returnWrapper.innerHTML = returnHTML;

  returnWrapper.querySelector(".request").addEventListener("click", (event) => {
    // 서버
    // 클릭하면 휴학 신청
  });

  return returnWrapper;
}

function checkReturnSchool() {}

function printTakeOffForm() {}

function printMilitaryTakeOffForm() {}
