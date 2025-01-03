document.addEventListener("DOMContentLoaded", () => {
  const monthList = document.getElementById("month-list");

  // Generate current month and previous months
  const now = new Date();
  const currentMonthIndex = now.getMonth();
  const currentYear = now.getFullYear();
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  if (currentMonthIndex < 6) {
    const previousYear = now.getFullYear() - 1;
    for (let i = currentMonthIndex; i >= 0; i--) {
      newMonthHtml(i, currentYear);
    }
    for (let i = 11; i >= 7 + currentMonthIndex; i--) {
      newMonthHtml(i, previousYear);
    }
  }

  function newMonthHtml(currentMonth, currentYear) {
    let ciudad;
    const monthBlock = document.createElement("div");
    monthBlock.classList.add("month-block");
    monthBlock.classList.add("border");
    monthBlock.classList.add("p-2");

    monthBlock.innerHTML = `
      <h2>${months[currentMonth]} ${currentYear}</h2>
      <div class="line-item border p-2">
        <span>${ciudad = "Zaragoza"}</span>
        <div>
          <button type="button" name="botonConfirmacion" id="Luz-${months[currentMonth]}-${currentYear}-${ciudad}" class="btn btn-primary btn-sm">Luz &nbsp;<i class="fa-regular fa-lightbulb"></i></button>
          <button type="button" name="botonConfirmacion" id="Gas-${months[currentMonth]}-${currentYear}-${ciudad}" class="btn btn-primary btn-sm">Gas &nbsp;<i class="fa-solid fa-fire"></i></button>
          <button type="button" name="botonConfirmacion" id="Agua-${months[currentMonth]}-${currentYear}-${ciudad}" class="btn btn-primary btn-sm">Aguas &nbsp;<i class="fa-solid fa-droplet"></i></button>
        </div>
      </div>

      <div class="line-item border p-2">
        <span>${ciudad = "Madrid"}</span>
        <div>
          <button type="button" name="botonConfirmacion" id="Luz-${months[currentMonth]}-${currentYear}-${ciudad}" class="btn btn-primary btn-sm">Luz &nbsp;<i class="fa-regular fa-lightbulb"></i></button>
          <button type="button" name="botonConfirmacion" id="Gas-${months[currentMonth]}-${currentYear}-${ciudad}" class="btn btn-primary btn-sm">Gas &nbsp;<i class="fa-solid fa-fire"></i></button>
          <button type="button" name="botonConfirmacion" id="Agua-${months[currentMonth]}-${currentYear}-${ciudad}" class="btn btn-primary btn-sm">Aguas &nbsp;<i class="fa-solid fa-droplet"></i></button>
        </div>
      </div>
    `;
    monthList.appendChild(monthBlock);
  }

});

document.addEventListener("DOMContentLoaded", () => {
  const botonesConfirmacion = document.getElementsByName("botonConfirmacion");
  console.log(botonesConfirmacion);
  botonesConfirmacion.forEach((boton) => {
    boton.addEventListener("click", function () {
      if (this.classList.contains("btn-primary")) {
        this.classList.replace("btn-primary", "btn-success");
      } else if (this.classList.contains("btn-success")) {
        this.classList.replace("btn-success", "btn-primary");
      }
    });
  });
})


