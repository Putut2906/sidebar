// Fungsi untuk menginisialisasi event listener setelah sidebar dimuat
function initSidebar() {
  let arrows = document.querySelectorAll(".arrow");
  arrows.forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
      let arrowParent = e.target.closest("li"); // Menggunakan closest() untuk keamanan
      arrowParent.classList.toggle("showMenu");
    });
  });

  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");

  if (sidebar && sidebarBtn) {
    sidebarBtn.addEventListener("click", () => {
      sidebar.classList.toggle("close");
    });
  }
}

// Memuat sidebar.html ke dalam index.html lalu menjalankan initSidebar
document.addEventListener("DOMContentLoaded", () => {
  fetch("sidebar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("sidebar-container").innerHTML = data;
      initSidebar(); // Panggil fungsi setelah sidebar dimuat
    });
});