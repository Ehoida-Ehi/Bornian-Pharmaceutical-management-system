const diagnoseBtn = document.getElementById('Diagnose-Btn');
const diagnoseForm = document.getElementById('diagnose-form2');
const form = document.getElementById('form2');
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
    const name = document.getElementById('Name').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const age = document.getElementById('Age').value.trim();
    const phone = document.getElementById('Phone').value.trim();
    const email = document.getElementById('Email').value.trim();

    // Name Validation
    if (name === '') {
        document.getElementById('Name-error').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('Name-error').classList.add('hidden');
    }

    // Gender Validation
    if (!gender) {
        document.getElementById('Gender-error').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('Gender-error').classList.add('hidden');
    }

    // Age Validation
    if (age === '') {
        document.getElementById('Age-error').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('Age-error').classList.add('hidden');
    }

    // Phone Validation
    if (phone.length !== 11) {
        document.getElementById('Phone-error').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('Phone-error').classList.add('hidden');
    }

    // Email Validation
    if (email === '') {
        document.getElementById('Email-error').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('Email-error').classList.add('hidden');
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
            resultDetails.innerHTML += `<button id="close-result" class="bg-red-500 text-white font-bold py-2 px-4 rounded-md mt-4 ml-4">Close</button>`;
            
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
    document.getElementById('Name-error').classList.add('hidden');
    document.getElementById('Gender-error').classList.add('hidden');
    document.getElementById('Age-error').classList.add('hidden');
    document.getElementById('Phone-error').classList.add('hidden');
    document.getElementById('Email-error').classList.add('hidden');
}