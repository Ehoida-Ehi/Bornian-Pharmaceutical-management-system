document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Validation
    let isValid = true;
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const physician = document.getElementById('physician').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Reset Errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('mobileError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('dobError').textContent = '';
    document.getElementById('physicianError').textContent = '';
    document.getElementById('dateError').textContent = '';
    document.getElementById('timeError').textContent = '';

    // Validation
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }
    if (mobile.length !== 11 || isNaN(mobile)) {
        document.getElementById('mobileError').textContent = 'Mobile number must be 11 digits';
        isValid = false;
    }
    if (email === '' || !email.includes('@')) {
        document.getElementById('emailError').textContent = 'Valid email is required';
        isValid = false;
    }
    if (dob === '') {
        document.getElementById('dobError').textContent = 'Date of Birth is required';
        isValid = false;
    }
    if (physician === '') {
        document.getElementById('physicianError').textContent = 'Physician selection is required';
        isValid = false;
    }
    if (date === '') {
        document.getElementById('dateError').textContent = 'Date is required';
        isValid = false;
    }
    if (time === '') {
        document.getElementById('timeError').textContent = 'Time is required';
        isValid = false;
    }

    if (!isValid) return;

    // Show Receipt
    document.getElementById('receiptName').textContent = name;
    document.getElementById('receiptMobile').textContent = mobile;
    document.getElementById('receiptEmail').textContent = email;
    document.getElementById('receiptPhysician').textContent = physician;
    document.getElementById('receiptDate').textContent = date;
    document.getElementById('receiptTime').textContent = time;
    document.getElementById('receiptComments').textContent = document.getElementById('comments').value;

    document.getElementById('receipt').classList.remove('hidden');
});

// Cancel/Reschedule
document.getElementById('cancelBtn').addEventListener('click', function () {
    document.getElementById('bookingForm').reset();
    document.getElementById('receipt').classList.add('hidden');
});