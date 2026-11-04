// Mobile menu toggle
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Close" : "Menu";
    });
  }

  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Business account form: opens a pre-filled email to info@
  // (works with no server; can be upgraded later to send directly)
  var form = document.getElementById("business-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var d = new FormData(form);
      var lines = [
        "Business name: " + d.get("business"),
        "Contact name: " + d.get("contact"),
        "Email: " + d.get("email"),
        "Phone: " + (d.get("phone") || "-"),
        "Business type: " + d.get("type"),
        "Estimated repairs per month: " + d.get("volume"),
        "",
        "Notes:",
        d.get("notes") || "-"
      ];
      var subject = "Business account request: " + d.get("business");
      window.location.href =
        "mailto:info@sunseteyewearrepair.com?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(lines.join("\n"));
      var status = document.getElementById("form-status");
      if (status) {
        status.textContent =
          "Your email app should open with your request filled in. Just hit send. If nothing opened, email us at info@sunseteyewearrepair.com.";
      }
    });
  }

  // Print button for the mail-in slip
  var printBtn = document.getElementById("print-slip");
  if (printBtn) printBtn.addEventListener("click", function () { window.print(); });
})();
