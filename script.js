/* =========================
   LOGIN / SIGNUP
========================= */

function openLogin() {

    document.getElementById("loginModal")
        .classList.add("show");

}

function openSignup() {

    document.getElementById("signupModal")
        .classList.add("show");

}

function closeModal() {

    document.getElementById("loginModal")
        ?.classList.remove("show");

    document.getElementById("signupModal")
        ?.classList.remove("show");

}

function switchSignup() {

    closeModal();
    openSignup();

}


/* =========================
   LOGIN
========================= */

function login() {

    const role =
        document.getElementById("loginRole").value;

    if (role === "admin") {

        window.location.href = "admin.html";

    }

    else if (role === "manager") {

        window.location.href = "manager.html";

    }

    else {

        window.location.href = "user.html";

    }

}


/* =========================
   SIGNUP
========================= */

function signup() {

    alert(
        "🎉 Account created successfully!\n\nWelcome to JobTrack!"
    );

    closeModal();

}


/* =========================
   LOGOUT
========================= */

function logout() {

    const confirmLogout =
        confirm("Are you sure you want to logout?");

    if (confirmLogout) {

        window.location.href = "index.html";

    }

}


/* =========================
   USER - FAVORITE JOB
========================= */

function toggleHeart(button) {

    button.classList.toggle("liked");

    if (button.classList.contains("liked")) {

        button.innerHTML = "♥";

    }

    else {

        button.innerHTML = "♡";

    }

}


/* =========================
   USER - APPLY JOB
========================= */

function applyJob(button) {

    button.innerHTML = "✓ Applied";

    button.style.background = "#16a34a";

    button.disabled = true;

    alert(
        "🎉 Application submitted successfully!"
    );

}


/* =========================
   SEARCH JOBS
========================= */

function searchJobs() {

    const search =
        document
        .getElementById("jobSearch")
        .value
        .toLowerCase();

    const jobs =
        document.querySelectorAll(".job-card");

    jobs.forEach(job => {

        const text =
            job.innerText.toLowerCase();

        if (text.includes(search)) {

            job.style.display = "block";

        }

        else {

            job.style.display = "none";

        }

    });

}


/* =========================
   MANAGER ACCEPT
========================= */

function acceptApplication(button) {

    const row =
        button.closest("tr");

    const status =
        row.querySelector(".status");

    status.innerHTML = "Accepted";

    status.className =
        "status selected";

    button.disabled = true;

    alert(
        "✅ Application accepted!"
    );

}


/* =========================
   MANAGER REJECT
========================= */

function rejectApplication(button) {

    const row =
        button.closest("tr");

    const status =
        row.querySelector(".status");

    status.innerHTML = "Rejected";

    status.className =
        "status rejected";

    button.disabled = true;

    alert(
        "❌ Application rejected."
    );

}


/* =========================
   ADD JOB MODAL
========================= */

function openJobModal() {

    document
        .getElementById("jobModal")
        ?.classList.add("show");

}


function closeJobModal() {

    document
        .getElementById("jobModal")
        ?.classList.remove("show");

}


/* =========================
   ADD JOB
========================= */

function addJob() {

    const title =
        document.getElementById("jobTitle").value;

    const company =
        document.getElementById("companyName").value;

    const location =
        document.getElementById("location").value;

    const salary =
        document.getElementById("salary").value;

    if (
        title === "" ||
        company === "" ||
        location === ""
    ) {

        alert("Please fill all required fields.");

        return;

    }

    alert(
        "✅ Job added successfully!\n\n" +
        title +
        " at " +
        company
    );

    closeJobModal();

    const count =
        document.getElementById("jobCount");

    if (count) {

        count.innerHTML =
            parseInt(count.innerHTML) + 1;

    }

}