const diagnoseBtn = document.getElementById('diagnose-btn');
const diagnoseForm = document.getElementById('diagnose-form');
const form = document.getElementById('form');
const resultSection = document.getElementById('result-section');
const resultMessage = document.getElementById('result-message');
const resultDetails = document.getElementById('result-details');
const prescriptionBtn = document.getElementById('prescription-btn');
const prescriptionSection = document.getElementById('prescription-section');

// Show Diagnose Form
diagnoseBtn.addEventListener('click', () => {
    diagnoseForm.classList.remove('hidden');
});

// Form Validation and Submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    let valid = true;

    // Validate inputs
    const name = document.getElementById('name').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const age = document.getElementById('age').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();

    // Name Validation
    if (name === '') {
        document.getElementById('name-error').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('name-error').classList.add('hidden');
    }

    // Gender Validation
    if (!gender) {
        document.getElementById('gender-error').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('gender-error').classList.add('hidden');
    }

    // Age Validation
    if (age === '') {
        document.getElementById('age-error').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('age-error').classList.add('hidden');
    }

    // Phone Validation
    if (phone.length !== 11) {
        document.getElementById('phone-error').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('phone-error').classList.add('hidden');
    }

    // Email Validation
    if (email === '') {
        document.getElementById('email-error').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('email-error').classList.add('hidden');
    }

    // Proceed if form is valid
    if (valid) {
        const symptoms = document.querySelectorAll('input[type="checkbox"]:checked').length;

        // Result logic
        if (symptoms >= 4) {
            resultMessage.innerText = "Diagnosis: Food Poisoning";
            resultDetails.innerText = "You are diagnosed with food poisoning. You can proceed to check your prescription.";
            prescriptionBtn.classList.remove('hidden');
        } else {
            resultMessage.innerText = "Diagnosis: See a Doctor";
            resultDetails.innerText = "Please book an appointment with a doctor for further consultation.";
            
            // Add the close button for "See a Doctor" case
            resultDetails.innerHTML += `<button id="close-result" class="bg-red-500 text-white font-bold py-2 px-4 rounded-md mt-4">Close</button>`;
            
            // Event listener for closing the result and clearing form
            document.getElementById('close-result').addEventListener('click', () => {
                resetForm();
            });
        }

        diagnoseForm.classList.add('hidden');
        resultSection.classList.remove('hidden');
    }
});

// Show Prescription Modal
prescriptionBtn.addEventListener('click', () => {
    prescriptionSection.classList.remove('hidden');
    resultSection.classList.add('hidden');
});

// Print Page
function printPage() {
    window.print();
}

// Close Modal
function closeModal() {
    prescriptionSection.classList.add('hidden');
    resetForm();
}

// Function to reset the form and result section
function resetForm() {
    form.reset();
    resultSection.classList.add('hidden');
    diagnoseForm.classList.add('hidden');
    prescriptionSection.classList.add('hidden');

    // Hide error messages if they were shown
    document.getElementById('name-error').classList.add('hidden');
    document.getElementById('gender-error').classList.add('hidden');
    document.getElementById('age-error').classList.add('hidden');
    document.getElementById('phone-error').classList.add('hidden');
    document.getElementById('email-error').classList.add('hidden');
}








       
       