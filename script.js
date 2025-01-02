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

  for (let i = 5; i >= 0; i--) {
    const monthBlock = document.createElement("div");
    monthBlock.classList.add("month-block");

    monthBlock.innerHTML = `
      <h2>${months[i]} ${currentYear}</h2>
      <div class="line-item">
        <span>Update PDF #1</span>
        <div>
          <i class="fas fa-file-upload"></i>
          <i class="fas fa-edit"></i>
          <i class="fas fa-check-circle"></i>
        </div>
      </div>
    `;
    monthList.appendChild(monthBlock);
  }

  // Event delegation for activating icons
  monthList.addEventListener("click", (event) => {
    if (event.target.tagName === "I") {
      event.target.classList.toggle("active");
    }
  });
});
