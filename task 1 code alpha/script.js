
function calculateAge() {
    // Get the input values
    const day = parseInt(document.getElementById('dobDay').value, 10);
    const month = parseInt(document.getElementById('dobMonth').value, 10);
    const year = parseInt(document.getElementById('dobYear').value, 10);

    // Validate the input
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        document.getElementById('result').textContent = 'Please enter valid numbers for day, month, and year.';
        return;
    }

    // Create a new Date object for the date of birth
    const dob = new Date(year, month - 1, day); // month is 0-indexed

    // Check if the date is valid
    if (dob.getDate() !== day || dob.getMonth() !== (month - 1) || dob.getFullYear() !== year) {
        document.getElementById('result').textContent = 'Please enter a valid date.';
        return;
    }

    // Get the current date
    const today = new Date();

    // Calculate the age
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    // Adjust age if the birthdate hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    // Display the result
    document.getElementById('result').textContent = `You are ${age} years old.`;
}

function resetForm() {
    // Clear the input fields
    document.getElementById('dobDay').value = '';
    document.getElementById('dobMonth').value = '';
    document.getElementById('dobYear').value = '';
    // Clear the result
    document.getElementById('result').textContent = '';
}
