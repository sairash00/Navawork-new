(function () {
  
// TODO: Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS Public Key
  emailjs.init("YOUR_PUBLIC_KEY");
})();

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const submitButton = contactForm.querySelector('button[type="submit"]');

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Disable button and change text to indicate loading
      const originalButtonText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";

      // Generate a five-digit unique ID
      // const contactNumber = Math.random() * 100000 | 0;
      // this.contact_number.value = contactNumber; // Ensure you have a hidden input with name='contact_number' if you use this

      // TODO: Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with actual values
      const serviceID = "YOUR_SERVICE_ID";
      const templateID = "YOUR_TEMPLATE_ID";

      emailjs
        .sendForm(serviceID, templateID, this)
        .then(
          () => {
            alert("Thank you! Your inquiry has been sent successfully.");
            contactForm.reset();
          },
          (error) => {
            console.error("FAILED...", error);
            alert("Failed to send inquiry. Please try again later.");
          },
        )
        .finally(() => {
          // Restore button state
          submitButton.disabled = false;
          submitButton.textContent = originalButtonText;
        });
    });
  }
});
