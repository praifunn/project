fetch("data.json")
  .then((response) => response.json())
  .then((projects) => {
    const container = document.getElementById("project-container");

    projects.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
            <div>
              
                <span class="h3">${item.data}</span>
            </div>
        `;

      container.appendChild(card);
    });
  })
  .catch((error) => console.error("Unable to download data", error));
