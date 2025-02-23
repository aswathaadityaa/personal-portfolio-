var settings = document.getElementById("settings");
var sidebar = document.getElementById("innerIcon");
settings.addEventListener("click", function () {
  sidebar.classList.add("showSidebar");
});

var closeSidebarPhone = document.getElementById("closeSidebarPhone");
closeSidebarPhone.addEventListener("click", function () {
  sidebar.classList.remove("showSidebar");
});

var length = document.querySelectorAll(".pages").length;
for (var i = 0; i < length; i++) {
  document.querySelectorAll(".pages")[i].addEventListener("click", function () {
    sidebar.classList.remove("showSidebar");
  });
}
