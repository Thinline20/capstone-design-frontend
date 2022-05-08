/**
 * @prettier
 */

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".login-form")
    .addEventListener("submit", async (event) => {
      try {
        event.preventDefault();
        const loginData = Object.fromEntries(
          new FormData(event.target).entries()
        );

        // 프론트 js
        // TODO
        $.post("../login", loginData, function (data) {
          data = JSON.parse(data);
          if (data.id) {
            $.cookie("id", id);
            $.cookie("department", data.department);
            $.cookie("role", data.role);

            console.log(data.id + "님 환영합니다.");
          } else {
            throw new Error(data.msg);
          }
        });
      } catch (err) {
        window.alert(err);
      }
    });
});
