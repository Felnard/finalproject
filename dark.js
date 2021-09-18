$("#dark").change(function () {
  if ($(this).prop("checked")) {
    $("body").css("background-color", "#393E46");
    $("nav").css("background-color", "#222831");
    $("nav").css("border-bottom", "0.1px solid #428686");
  } else {
    $("body").css("background-color", "white");
    $("nav").css("background-color", "white");
    $("nav").css("border-bottom", "0.1px solid rgb(238, 238, 238)");
  }
});
