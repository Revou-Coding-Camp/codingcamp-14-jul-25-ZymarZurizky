// Ganti nama di Home Page
window.onload = () => {
  const name = prompt("Masukkan namamu:");
  if (name) {
    document.getElementById("user-name").innerText = name;
  }
};

// Form Submit
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const output = document.getElementById("formOutput");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const dob = document.getElementById("dob").value;
      const gender = document.querySelector('input[name="gender"]:checked')?.value;
      const message = document.getElementById("message").value;

      if (!name || !dob || !gender || !message) {
        alert("Harap isi semua form!");
        return;
      }

      output.innerHTML = `
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${dob}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${message}</p>
        <p><strong>Waktu:</strong> ${new Date().toLocaleString()}</p>
      `;
    });
  }
});
