(function () {
  "use strict";

  var list = document.getElementById("links");
  var links = window.LINKS || [];

  if (!list) {
    return;
  }

  if (!links.length) {
    var empty = document.createElement("li");
    empty.className = "link-desc";
    empty.textContent = "No links yet — add some in links.js.";
    list.appendChild(empty);
    return;
  }

  links.forEach(function (link) {
    var li = document.createElement("li");

    var card = document.createElement("a");
    card.className = "link-card";
    card.href = link.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";

    var name = document.createElement("p");
    name.className = "link-name";
    name.appendChild(document.createTextNode(link.name));

    var arrow = document.createElement("span");
    arrow.className = "arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "→";
    name.appendChild(arrow);

    card.appendChild(name);

    if (link.description) {
      var desc = document.createElement("p");
      desc.className = "link-desc";
      desc.textContent = link.description;
      card.appendChild(desc);
    }

    li.appendChild(card);
    list.appendChild(li);
  });
})();
