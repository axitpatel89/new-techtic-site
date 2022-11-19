const $ = require("jquery");

export const onInitialClientRender = () => {
  $(document).ready(function () {
    $(".blog_index_toggle_btn").on("click", function () {
      $(".blog_index_toggle_btn").toggleClass("open");
      $(".blog_index").toggleClass("display");
    });
    $(".selectedTag").click(function () {
      $(".all-active").css({ "text-decoration": "none" });
      $(".selectedTag").removeClass("active");
      $(this).addClass("active");
    });
    $(".all-active").click(function () {
      $(".selectedTag").removeClass("active");
      $(".all-active").css({ "text-decoration": "underline" });
    });
  });
};
