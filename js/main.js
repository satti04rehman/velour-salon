(function () {
  var sp = document.getElementById("sp");
  if (sp) { sp.classList.add("go"); setTimeout(function () { sp.remove(); }, 600); }

  var header = document.getElementById("site-header");
  var toggle = document.getElementById("nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { links.classList.remove("open"); });
    });
  }
  window.addEventListener("scroll", function () {
    if (header && window.scrollY > 8) header.style.boxShadow = "0 6px 24px rgba(33,26,28,.06)";
    else if (header) header.style.boxShadow = "none";
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll(".rise").forEach(function (el) { io.observe(el); });

  var mail = document.querySelector("a[href^='mailto:']");
  var forms = document.querySelectorAll(".booking-form");
  forms.forEach(function (f) {
    f.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var vals = {};
      f.querySelectorAll("input[name], select[name]").forEach(function (el) { vals[el.name] = el.value.trim(); });
      var lines = [
        "Hi, I'd like to book an appointment at Velour Beauty.",
        "Name: " + (vals.bname || ""),
        "Service: " + (vals.bservice || ""),
        vals.bdate ? "Date: " + vals.bdate : "",
        vals.bnote ? "Note: " + vals.bnote : ""
      ].filter(Boolean);
      if (mail) {
        window.location.href = mail.href.split("?")[0] + "?subject=" + encodeURIComponent("Appointment request") + "&body=" + encodeURIComponent(lines.join("\n"));
      }
      var note = f.querySelector("#form-note");
      if (note) note.hidden = false;
      var btn = f.querySelector("button[type=submit]");
      if (btn) { btn.disabled = true; btn.textContent = "Request sent ✓"; }
    });
  });
})();