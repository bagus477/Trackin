/* ============================================================
   TRACK IN - DASHBOARD JAVASCRIPT
============================================================ */


/* ============================================================
   DATA
============================================================ */

const inventoryData = [

    {
        name: "Rice Cooker",
        user: "Yusuf",
        date: "12 Agst",
        price: "Rp450.000"
    },

    {
        name: "Kipas Angin",
        user: "Bagus",
        date: "15 Agst",
        price: "Rp300.000"
    },

    {
        name: "Galon",
        user: "Andi",
        date: "18 Agst",
        price: "Rp20.000"
    }

];


const activityData = [

    {
        name: "Yusuf",
        initial: "Y",
        text: "menambahkan 'Galon'",
        amount: "Rp20.000",
        time: "Hari ini",
        color: "green"
    },

    {
        name: "Bagus",
        initial: "B",
        text: "menambahkan 'Kipas Angin'",
        amount: "Rp300.000",
        time: "Kemarin",
        color: "blue"
    },

    {
        name: "Andi",
        initial: "A",
        text: "membayar 'WiFi'",
        amount: "Rp100.000",
        time: "2 hari lalu",
        color: "yellow"
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


/* ============================================================
   RENDER INVENTORY
============================================================ */

function renderInventory() {

    if (!inventoryList) {
        return;
    }

    inventoryList.innerHTML = "";


    inventoryData.forEach(item => {

        const element =
            document.createElement("div");

        element.className =
            "inventory-item";


        element.innerHTML = `

            <div>

                <span class="inventory-name">
                    ${item.name}
                </span>

                <span class="inventory-meta">
                    ${item.user} • ${item.date}
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

    if (!activityList) {
        return;
    }

    activityList.innerHTML = "";


    activityData.forEach(activity => {

        const element =
            document.createElement("div");

        element.className =
            "activity-item";


        element.innerHTML = `

            <div class="
                activity-avatar
                ${activity.color}
            ">
                ${activity.initial}
            </div>


            <div class="activity-text">

                <strong>
                    ${activity.name}
                </strong>

                ${activity.text}

                <b>
                    ${activity.amount}
                </b>

                <span class="activity-time">
                    ${activity.time}
                </span>

            </div>

        `;


        activityList.appendChild(element);

    });

}


/* ============================================================
   TOAST
============================================================ */

let toastTimer;


function showToast(message) {

    if (!toast) {
        return;
    }

    clearTimeout(toastTimer);


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    toastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 2500);

}


/* ============================================================
   NAVIGATION
============================================================ */

const navItems =
    document.querySelectorAll(
        ".nav-item"
    );


navItems.forEach(item => {

    item.addEventListener(
        "click",
        function(event) {

            event.preventDefault();


            navItems.forEach(nav => {

                nav.classList.remove(
                    "active"
                );

            });


            this.classList.add(
                "active"
            );


            const page =
                this.dataset.page;


            if (page === "dashboard") {

                showToast(
                    "Dashboard dibuka"
                );

            }

            else if (page === "akun") {

                showToast(
                    "Halaman Akun dipilih"
                );

            }

            else if (page === "catatan") {

                showToast(
                    "Halaman Catatan dipilih"
                );

            }

            else if (page === "inventaris") {

                showToast(
                    "Halaman Inventaris dipilih"
                );

            }

            else if (page === "keuangan") {

                showToast(
                    "Halaman Keuangan dipilih"
                );

            }

        }
    );

});


/* ============================================================
   DATE NAVIGATION
============================================================ */

const dateText =
    document.getElementById(
        "dateText"
    );


let currentDate =
    new Date(
        2026,
        7,
        17
    );


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

    if (!dateText) {
        return;
    }


    const day =
        currentDate.getDate();


    const month =
        monthNames[
            currentDate.getMonth()
        ];


    const year =
        currentDate.getFullYear();


    dateText.textContent =
        `${day} ${month} ${year}`;

}


const previousDate =
    document.getElementById(
        "previousDate"
    );


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


const nextDate =
    document.getElementById(
        "nextDate"
    );


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
   QUICK ACTIONS
============================================================ */

document
    .querySelectorAll(
        ".quick-button"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const action =
                    button.dataset.action;


                if (
                    action ===
                    "barang"
                ) {

                    showToast(
                        "Form tambah barang dibuka"
                    );

                }

                else if (
                    action ===
                    "pengeluaran"
                ) {

                    showToast(
                        "Form pengeluaran dibuka"
                    );

                }

                else {

                    showToast(
                        "Form catatan dibuka"
                    );

                }

            }
        );

    });


/* ============================================================
   TOP CATATAN
============================================================ */

const topNoteButton =
    document.getElementById(
        "topNoteButton"
    );


if (topNoteButton) {

    topNoteButton.addEventListener(
        "click",
        () => {

            showToast(
                "Membuka catatan baru..."
            );

        }
    );

}


/* ============================================================
   CARD MODAL
============================================================ */


/* ------------------------------------------------------------
   OPEN MODAL
------------------------------------------------------------ */

function openCardModal() {

    if (!cardModal) {
        return;
    }


    cardModal.classList.add(
        "show"
    );

}


/* ------------------------------------------------------------
   CLOSE MODAL
------------------------------------------------------------ */

function closeCardModal() {

    if (!cardModal) {
        return;
    }


    cardModal.classList.remove(
        "show"
    );

}


/* ------------------------------------------------------------
   BUTTON TAMBAH CARD
------------------------------------------------------------ */

const openCardButton =
    document.getElementById(
        "openCardModal"
    );


if (openCardButton) {

    openCardButton.addEventListener(
        "click",
        openCardModal
    );

}


/* ------------------------------------------------------------
   BUTTON PLUS WIDGET
------------------------------------------------------------ */

const openWidgetButton =
    document.getElementById(
        "openWidgetModal"
    );


if (openWidgetButton) {

    openWidgetButton.addEventListener(
        "click",
        openCardModal
    );

}


/* ------------------------------------------------------------
   BUTTON X
------------------------------------------------------------ */

const closeCardButton =
    document.getElementById(
        "closeCardModal"
    );


if (closeCardButton) {

    closeCardButton.addEventListener(
        "click",
        closeCardModal
    );

}


/* ------------------------------------------------------------
   BUTTON BATAL
------------------------------------------------------------ */

const cancelCardButton =
    document.getElementById(
        "cancelCardModal"
    );


if (cancelCardButton) {

    cancelCardButton.addEventListener(
        "click",
        closeCardModal
    );

}


/* ------------------------------------------------------------
   KLIK AREA LUAR MODAL
------------------------------------------------------------ */

if (cardModal) {

    cardModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                cardModal
            ) {

                closeCardModal();

            }

        }
    );

}


/* ============================================================
   CARD OPTION
============================================================ */

const cardOptions =
    document.querySelectorAll(
        ".dashboard-card-option"
    );


cardOptions.forEach(option => {

    const checkbox =
        option.querySelector(
            "input[type='checkbox']"
        );


    if (!checkbox) {
        return;
    }


    option.addEventListener(
        "click",
        event => {

            /*
             * Jika klik bagian card,
             * tetapi bukan checkbox,
             * ubah checkbox secara manual.
             */

            if (
                event.target !== checkbox
            ) {

                checkbox.checked =
                    !checkbox.checked;

            }


            updateCardOption(
                option,
                checkbox
            );

        }
    );


    checkbox.addEventListener(
        "change",
        () => {

            updateCardOption(
                option,
                checkbox
            );

        }
    );

});


/* ------------------------------------------------------------
   UPDATE TAMPILAN PILIHAN CARD
------------------------------------------------------------ */

function updateCardOption(
    option,
    checkbox
) {

    if (
        checkbox.checked
    ) {

        option.classList.add(
            "active"
        );

    }

    else {

        option.classList.remove(
            "active"
        );

    }

}


/* ============================================================
   SAVE CARD
============================================================ */

const saveCardButton =
    document.getElementById(
        "saveCardModal"
    );


if (saveCardButton) {

    saveCardButton.addEventListener(
        "click",
        () => {

            cardOptions.forEach(
                option => {

                    const checkbox =
                        option.querySelector(
                            "input[type='checkbox']"
                        );


                    if (!checkbox) {
                        return;
                    }


                    const cardName =
                        option.dataset.card;


                    const widget =
                        document.querySelector(
                            `[data-widget="${cardName}"]`
                        );


                    if (!widget) {
                        return;
                    }


                    if (
                        checkbox.checked
                    ) {

                        widget.style.display =
                            "";

                    }

                    else {

                        widget.style.display =
                            "none";

                    }

                }
            );


            closeCardModal();


            showToast(
                "Card dashboard berhasil diperbarui"
            );

        }
    );

}


/* ============================================================
   INVENTORY BUTTON
============================================================ */

const inventoryLink =
    document.getElementById(
        "inventoryLink"
    );


if (inventoryLink) {

    inventoryLink.addEventListener(
        "click",
        () => {

            showToast(
                "Membuka halaman inventaris..."
            );

        }
    );

}


/* ============================================================
   ACTIVITY BUTTON
============================================================ */

const activityLink =
    document.getElementById(
        "activityLink"
    );


if (activityLink) {

    activityLink.addEventListener(
        "click",
        () => {

            showToast(
                "Menampilkan seluruh aktivitas..."
            );

        }
    );

}


/* ============================================================
   BILL DETAIL
============================================================ */

document
    .querySelectorAll(
        ".detail-link"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const message =
                    button.dataset.message;


                if (message) {

                    showToast(
                        message
                    );

                }

            }
        );

    });


/* ============================================================
   STRUCTURE BUTTON
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
                "Form pengeluaran pertama dibuka"
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
        event => {

            showToast(
                `Periode ${event.target.value} dipilih`
            );

        }
    );

}


/* ============================================================
   KEYBOARD ESC
============================================================ */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Escape"
        ) {

            closeCardModal();

        }

    }
);


/* ============================================================
   INITIALIZE
============================================================ */

renderInventory();

renderActivity();

updateDate();
