"use strict";


/* ============================================================
   DATA
============================================================ */

const inventoryData = [
    {
        name: "Kipas Angin",
        owner: "Bagus",
        date: "15 Agst",
        price: "Rp300.000"
    },
    {
        name: "Galon",
        owner: "Andi",
        date: "18 Agst",
        price: "Rp20.000"
    }
];


const activityData = [
    {
        initial: "Y",
        name: "Yusuf",
        text: "menambahkan barang baru",
        time: "12 Agst",
        type: "green"
    },
    {
        initial: "B",
        name: "Bagus",
        text: "menambahkan pengeluaran",
        time: "15 Agst",
        type: "blue"
    },
    {
        initial: "A",
        name: "Andi",
        text: "menambahkan inventaris",
        time: "18 Agst",
        type: "yellow"
    }
];


/* ============================================================
   ELEMENTS
============================================================ */

const inventoryList =
    document.getElementById("inventoryList");

const activityList =
    document.getElementById("activityList");

const toast =
    document.getElementById("toast");

const cardModal =
    document.getElementById("cardModal");

const openCardModalButton =
    document.getElementById("openCardModal");

const openWidgetModalButton =
    document.getElementById("openWidgetModal");

const closeCardModalButton =
    document.getElementById("closeCardModal");

const cancelCardModalButton =
    document.getElementById("cancelCardModal");

const saveCardModalButton =
    document.getElementById("saveCardModal");


/* ============================================================
   RENDER INVENTORY
============================================================ */

function renderInventory() {

    if (!inventoryList) return;

    inventoryList.innerHTML = "";

    inventoryData.forEach(item => {

        const element =
            document.createElement("div");

        element.className = "inventory-item";

        element.innerHTML = `
            <div>
                <span class="inventory-name">
                    ${item.name}
                </span>

                <span class="inventory-meta">
                    ${item.owner} • ${item.date}
                </span>
            </div>

            <span class="inventory-price">
                ${item.price}
            </span>
        `;

        inventoryList.appendChild(element);

    });

}


/* ============================================================
   RENDER ACTIVITY
============================================================ */

function renderActivity() {

    if (!activityList) return;

    activityList.innerHTML = "";

    activityData.forEach(item => {

        const element =
            document.createElement("div");

        element.className = "activity-item";

        element.innerHTML = `
            <div class="activity-avatar ${item.type}">
                ${item.initial}
            </div>

            <div class="activity-text">

                <strong>${item.name}</strong>
                ${item.text}

                <span class="activity-time">
                    ${item.time}
                </span>

            </div>
        `;

        activityList.appendChild(element);

    });

}


/* ============================================================
   TOAST
============================================================ */

let toastTimer = null;


function showToast(message) {

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* ============================================================
   NAVIGATION
============================================================ */

const navItems =
    document.querySelectorAll(".nav-item");


navItems.forEach(item => {

    item.addEventListener("click", event => {

        event.preventDefault();

        navItems.forEach(nav => {

            nav.classList.remove("active");

        });

        item.classList.add("active");

        const page =
            item.dataset.page;

        if (page !== "dashboard") {

            showToast(
                `Halaman ${item.textContent.trim()} belum tersedia.`
            );

        }

    });

});


/* ============================================================
   DATE NAVIGATION
============================================================ */

const dateText =
    document.getElementById("dateText");

const previousDate =
    document.getElementById("previousDate");

const nextDate =
    document.getElementById("nextDate");


let currentDate =
    new Date(2026, 7, 17);


const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
];


function updateDate() {

    if (!dateText) return;

    const day =
        currentDate.getDate();

    const month =
        monthNames[currentDate.getMonth()];

    const year =
        currentDate.getFullYear();

    dateText.textContent =
        `${day} ${month} ${year}`;

}


if (previousDate) {

    previousDate.addEventListener(
        "click",
        () => {

            currentDate.setDate(
                currentDate.getDate() - 1
            );

            updateDate();

        }
    );

}


if (nextDate) {

    nextDate.addEventListener(
        "click",
        () => {

            currentDate.setDate(
                currentDate.getDate() + 1
            );

            updateDate();

        }
    );

}


/* ============================================================
   QUICK ACTION
============================================================ */

const quickButtons =
    document.querySelectorAll(".quick-button");


quickButtons.forEach(button => {

    button.addEventListener("click", () => {

        const action =
            button.dataset.action;

        const messages = {

            barang:
                "Menu Barang dipilih.",

            pengeluaran:
                "Menu Pengeluaran dipilih.",

            catatan:
                "Menu Catatan dipilih."

        };

        showToast(
            messages[action] ||
            "Aksi dipilih."
        );

    });

});


/* ============================================================
   TOP NOTE
============================================================ */

const topNoteButton =
    document.getElementById("topNoteButton");


if (topNoteButton) {

    topNoteButton.addEventListener(
        "click",
        () => {

            showToast(
                "Fitur tambah catatan dipilih."
            );

        }
    );

}


/* ============================================================
   MODAL
============================================================ */
function openCardModal() {

    if (!cardModal) return;

    cardModal.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeCardModal() {

    if (!cardModal) return;

    cardModal.classList.remove("show");

    document.body.style.overflow = "";

}


/* Pastikan modal tertutup saat pertama kali halaman dibuka */

if (cardModal) {

    cardModal.classList.remove("show");

}


/* Tombol + Tambah Card */

if (openCardModalButton) {

    openCardModalButton.addEventListener(
        "click",
        openCardModal
    );

}


/* Tombol + pada Widget Tambahan */

if (openWidgetModalButton) {

    openWidgetModalButton.addEventListener(
        "click",
        openCardModal
    );

}


/* Tombol X */

if (closeCardModalButton) {

    closeCardModalButton.addEventListener(
        "click",
        closeCardModal
    );

}


/* Tombol Batal */

if (cancelCardModalButton) {

    cancelCardModalButton.addEventListener(
        "click",
        closeCardModal
    );

}


/* Klik area hitam di luar modal */

if (cardModal) {

    cardModal.addEventListener(
        "click",
        event => {

            if (
                event.target === cardModal
            ) {

                closeCardModal();

            }

        }
    );

}


/* Tombol ESC */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            cardModal &&
            cardModal.classList.contains("show")
        ) {

            closeCardModal();

        }

    }
);


/* ============================================================
   CARD OPTIONS
============================================================ */

const cardOptions =
    document.querySelectorAll(
        ".dashboard-card-option"
    );


cardOptions.forEach(option => {

    const checkbox =
        option.querySelector(
            'input[type="checkbox"]'
        );

    if (!checkbox) return;


    function updateOption() {

        option.classList.toggle(
            "active",
            checkbox.checked
        );

    }


    /*
       Klik seluruh kotak card.
    */

    option.addEventListener(
        "click",
        event => {

            /*
               Kalau yang diklik bukan checkbox asli,
               kita ubah status checkbox sendiri.
            */

            if (
                event.target !== checkbox
            ) {

                checkbox.checked =
                    !checkbox.checked;

            }

            updateOption();

        }
    );


    /*
       Jika checkbox asli diklik.
    */

    checkbox.addEventListener(
        "change",
        updateOption
    );


    updateOption();

});


/* ============================================================
   SIMPAN CARD
============================================================ */

if (saveCardModalButton) {

    saveCardModalButton.addEventListener(
        "click",
        () => {

            cardOptions.forEach(option => {

                const checkbox =
                    option.querySelector(
                        'input[type="checkbox"]'
                    );

                if (!checkbox) return;


                const cardName =
                    option.dataset.card;


                const widget =
                    document.querySelector(
                        `[data-widget="${cardName}"]`
                    );


                if (!widget) return;


                if (checkbox.checked) {

                    widget.style.display = "";

                } else {

                    widget.style.display = "none";

                }

            });


            closeCardModal();

            showToast(
                "Card berhasil diperbarui."
            );

        }
    );

}


/* ============================================================
   DETAIL BUTTONS
============================================================ */

const detailButtons =
    document.querySelectorAll(
        ".detail-link[data-message]"
    );


detailButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            showToast(
                button.dataset.message
            );

        }
    );

});


const inventoryLink =
    document.getElementById("inventoryLink");


if (inventoryLink) {

    inventoryLink.addEventListener(
        "click",
        () => {

            showToast(
                "Halaman inventaris dipilih."
            );

        }
    );

}


const activityLink =
    document.getElementById("activityLink");


if (activityLink) {

    activityLink.addEventListener(
        "click",
        () => {

            showToast(
                "Semua aktivitas dipilih."
            );

        }
    );

}


/* ============================================================
   FIRST EXPENSE
============================================================ */

const firstExpenseButton =
    document.getElementById(
        "firstExpenseButton"
    );


if (firstExpenseButton) {

    firstExpenseButton.addEventListener(
        "click",
        () => {

            showToast(
                "Tambah data pengeluaran dipilih."
            );

        }
    );

}


/* ============================================================
   CHART PERIOD
============================================================ */

const chartPeriod =
    document.getElementById(
        "chartPeriod"
    );


if (chartPeriod) {

    chartPeriod.addEventListener(
        "change",
        () => {

            showToast(
                `Periode ${chartPeriod.value} dipilih.`
            );

        }
    );

}


/* ============================================================
   INITIALIZATION
============================================================ */

renderInventory();

renderActivity();

updateDate();
