import iconSuccess from "../../assets/images/icon-success.svg";

const container = document.querySelector(".container");
const form = document.querySelector(".form");
const emailInput = document.getElementById("email");
const inputError = document.getElementById("input-error-message");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const { email } = e.target.elements;

    if (!isValidEmail(email.value)) {
        email.classList.add("input-error");
        inputError.hidden = false;
    } else {
        renderSuccessMessage(email.value);
    }
});

emailInput.addEventListener("input", function (e) {
    if (!e.target.value) {
        e.target.classList.add("input-error");
        inputError.hidden = false;
    } else {
        e.target.classList.remove("input-error");
        inputError.hidden = true;
    }
});

function isValidEmail(email) {
    if (!email) return false;

    const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/g;
    return email.match(regex);
}

function renderSuccessMessage(email) {
    const markup = `
        <div class="card card-success">
            <div class="card-body card-success__body">
                <img src="${iconSuccess}" alt="success-icon" />
                <h1>Thanks for subscribing!</h1>
                <p>
                    A confirmation email has been sent to <strong>${email}</strong>. Please open it and click the
                    button inside to confirm your subscription.
                </p>
            </div>
            <div class="card-body">
                <button class="btn btn-dismiss">Dismiss message</button>
            </div>
        </div>
    `;

    container.innerHTML = markup;

    const btn = document.querySelector(".btn-dismiss");
    btn.addEventListener("click", function (e) {
        window.location.reload();
    });
}
