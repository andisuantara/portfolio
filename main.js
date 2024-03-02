function Menu(e) {
    let list = document.querySelector("ul");
    e.name === "menu"
        ? ((e.name = "close"),
            list.classList.add("top-[80px]"),
            list.classList.add("opacity-100"))
        : ((e.name = "menu"),
            list.classList.remove("top-[80px]"),
            list.classList.remove("opacity-100"));
}

function openModal() {
    document.getElementById("myModal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("myModal").classList.add("hidden");
}

const scriptURL =
    "https://script.google.com/macros/s/AKfycbyDuB9cGa0voAKROS2TDxI4uyHGN3sJeQyzulnOoyX1xDiPwOPiws6qO17Am5N-SOUblA/exec";
const form = document.forms["submit-to-google-sheet"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");
const btnClose = document.querySelector(".btn-close");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // ketika tombol submit di klik:
    // tampilkan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle("hidden");
    btnKirim.classList.toggle("hidden");

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            // hilangkan tombol loading, tampilkan tombol kirim
            btnLoading.classList.toggle("hidden");
            btnKirim.classList.toggle("hidden");

            // tampilkan allert
            myAlert.classList.toggle("hidden");

            // reset form
            form.reset();

            btnClose.addEventListener('click', () => {
                myAlert.classList.add('hidden');
            });

            console.log("Success!", response);
        })
        .catch((error) => console.error("Error!", error.message));
});
