// Because I'm lazy.
function ge(e) {
  return document.getElementById(e) || document.createElement("div");
}

if (ge("menu"))
  ge("menu").innerHTML =
    '<menu><span class="navbar-toggle" id="js-navbar-toggle" onclick="menuclick()"><i id="menu-icon-swap" class="material-icons">menu</i></span><nav class="navbar"><h1 class="logo">Dyspute</h1><ul class="main-nav" id="js-menu"><li><a href="https://dyspute.com/" class="nav-links">About</a></li><li><a class="nav-links" href="https://dyspute.com/469.html">Topics</a></li><li><a href="https://goo.gl/forms/ffrOV8hthxAvAP0M2" class="nav-links" target="_blank">Careers</a></li><li><a href="https://dyspute.com/team" class="nav-links">The Team</a></li><li><a>Light Mode</a><label class="switch"><input type="checkbox" name="theme"><span class="slider round" id="themeslider"></span></label><a>Dark Mode</a></li></ul></nav></menu>';

if (ge("footer"))
  ge("footer").innerHTML =
    '<p><b>Contact Dyspute:</b> Email us at: <a href="mailto:contact&#64;dyspute.com">contact<code>&#64;</code>dyspute.com</a></p><hr><div class="row"><div class="column"><h2>Connect</h2><ul><a href="mailto:contact&#64;dyspute.com">Email</a><a href="https://www.instagram.com/dyspute/" target="_blank">Instagram</a></ul></div><div class="column"><h2>Navigation</h2><ul><a class="nav-links" href="https://dyspute.com/469.html">Topics</a><a href="https://dyspute.com/team">The Team</a></ul></div><div class="column"><h2>Business</h2><ul><a href="https://goo.gl/forms/ffrOV8hthxAvAP0M2" target = "_blank">Careers</a><a href="https://dyspute.com">dyspute.com</a></ul></div></div><hr><!--<div id="charity"><h2>We Plan To Donate To The Following Charities:</h2><br><a href="http://www.charitynavigator.org/" data-cke-saved-href="http://www.charitynavigator.org/" data-cke-saved-href="http://www.charitynavigator.org/" data-cke-saved-href="http://www.charitynavigator.org/" data-cke-saved-href="http://www.charitynavigator.org/"><img id="charity-ad" src="http://www.charitynavigator.org/_gfx_/promo/ads/banner2.jpg" data-cke-saved-src="http://www.charitynavigator.org/_gfx_/promo/ads/banner2.jpg"></a></div><hr>--!><div id="legal"><a href="https://dyspute.com/legal">Privacy Policy</a><a href="#" class="disabled">The Rules</a><a href="https://dyspute.com/legal">Terms of Service</a></div><h4>© 2019 Dyspute. All rights reserved.</h4>';

if (ge("cookie-warning"))
  ge("cookie-warning").innerHTML =
    '<p>This site uses cookies to provide you with a great user experience. By using Dyspute, you accept our <a href="https://dyspute.com/legal#cookie-policy">Cookie Policy</a>, our <a href="https://dyspute.com/legal#privacy-policy">Privacy Policy</a>, and our <a href="https://dyspute.com/legal#terms-of-service">Terms of Service</a>.<a id="cookie-warning-close" onclick="closeCookieWarning()"><i class="material-icons">close</i></a></p>';

if (document.getElementsByClassName("logo"))
  document.getElementsByClassName("logo")[0].onclick = function() {
    location.href = "https://dyspute.com";
  };
