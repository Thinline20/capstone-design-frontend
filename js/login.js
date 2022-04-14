/**
 * @prettier
 */

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".login-box").addEventListener("submit", (event) => {
    const id = $("#id").val();
    const pw = $("#pw").val();

    $.post("../login", { id, pw }, function (data) {
      data = JSON.parse(data);
      if (id) {
        $.cookie("id", id);
        alert(id + "가 아이디" + pw + "가 비번");
      } else {
        alert(data.msg);
      }
    });
  });
});
