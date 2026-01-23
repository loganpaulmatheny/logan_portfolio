/* exported copyEmail */

// ===COPY EMAIL TO CLIPBOARD===
async function copyEmail() {
  const email = "matheny.l@northeastern.edu";
  try {
    // navigator.clipboard gives access to the clipboard and we're writing the text to it
    await navigator.clipboard.writeText(email);

    // Then we simply use JS to modify the button's appearance for a second or two
    const btn = document.getElementById("contact-btn");
    const originalText = btn.innerHTML;

    btn.innerHTML = "Email Copied!";
    // Notice we can access the class list here and similarly below we can change back the styling
    btn.classList.replace("btn-warning", "btn-success");

    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.classList.replace("btn-success", "btn-warning");
    }, 2000);
  } catch (err) {
    console.error("Failed to copy!", err);
  }
}

// ===NAVBAR===

document.addEventListener("DOMContentLoaded", () => {
  const navbarPlaceholder = document.getElementById("navbar-container");

  if (navbarPlaceholder) {
    fetch("navbar.html")
      .then((response) => response.text())
      .then((data) => {
        navbarPlaceholder.innerHTML = data;
        setActiveLink(); // Run the highlight logic after navbar loads
      });
  }
});

function setActiveLink() {
  // Get the active path name
  let path = window.location.pathname.split("/").pop();
  if (path === "" || path === "index.html") {
    path = "index.html";
  }

  // Get the links that are in the navbar
  const navLinks = document.querySelectorAll(".nav-link");

  // Loop through them and see which one is active and add that to the class
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");

    if (href === path) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
      link.removeAttribute("aria-current", "page");
    }
  });
}

window.copyEmail = copyEmail; // Used to get rid of the linting error
