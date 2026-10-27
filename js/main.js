(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Contact form: mailto fallback (static hosting, no backend)
  var form = document.getElementById("enquiry-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var name = (fd.get("name") || "").toString().trim();
      var org = (fd.get("organisation") || "").toString().trim();
      var email = (fd.get("email") || "").toString().trim();
      var phone = (fd.get("phone") || "").toString().trim();
      var city = (fd.get("city") || "").toString().trim();
      var desc = (fd.get("description") || "").toString().trim();
      var prefer = (fd.get("prefer") || "").toString().trim();
      var subject = encodeURIComponent("Project enquiry — " + (org || name || "SDC website"));
      var body = encodeURIComponent(
        "Name: " + name +
        "\nOrganisation: " + org +
        "\nEmail: " + email +
        "\nPhone: " + phone +
        "\nProject location / city: " + city +
        "\nPreferred contact: " + prefer +
        "\n\nScheme description:\n" + desc
      );
      window.location.href = "mailto:officialsanidevelopment@gmail.com?subject=" + subject + "&body=" + body;
    });
  }
})();
