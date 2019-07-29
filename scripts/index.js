window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "UA-134590338-1");
var menuOpen = false;
function menuclick() {
  var x = document.getElementById("js-menu");
  if (menuOpen) {
    x.style.display = "none";
    x.style.opacity = 0;
    document.getElementById("menu-icon-swap").innerHTML = "menu";
  } else {
    x.style.display = "block";
    x.style.opacity = 1;
    document.getElementById("menu-icon-swap").innerHTML = "close";
  }
  menuOpen = !menuOpen;
}
var checkbox = document.querySelector("input[name=theme]");
if (checkbox) checkbox.addEventListener("change", changeTheme);
function changeTheme() {
  if (checkbox.checked) {
    trans();
    document.body.setAttribute("data-theme", "dark");
  } else {
    trans();
    document.body.setAttribute("data-theme", "light");
  }
  localStorage.dysputeTheme = checkbox.checked;
}
checkbox.checked = eval(localStorage.dysputeTheme);
changeTheme();
function trans() {
  document.documentElement.classList.add("transition");
  window.setTimeout(function() {
    document.documentElement.classList.remove("transition");
  }, 1000);
}
var dropdown = document.getElementsByClassName("menu-dropdown-button");
var i;
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");
function selectItem(e) {
  removeBorder();
  removeShow();
  this.classList.add("tab-border");
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show");
}
function removeBorder() {
  tabItems.forEach(item => {
    item.classList.remove("tab-border");
  });
}
function removeShow() {
  tabContentItems.forEach(item => {
    item.classList.remove("show");
  });
}
tabItems.forEach(item => {
  item.addEventListener("click", selectItem);
});
function closeCookieWarning() {
  document.getElementById("cookie-warning").style.display = "none";
  document.getElementById("cookie-warning-close").style.display = "none";
  localStorage.dysputeCookie = true;
}

if (localStorage.dysputeCookie) closeCookieWarning();

new WOW().init();
