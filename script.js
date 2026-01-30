(function () {
  // TODO: Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS Public Key
  emailjs.init("TZcvdSeVZzNM2olgI");
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

      // Extract form data
      const formData = {
        from_name: contactForm.querySelector('input[name="from_name"]').value,
        reply_to: contactForm.querySelector('input[name="reply_to"]').value,
        phone_number: contactForm.querySelector('input[name="phone_number"]')
          .value,
        inquiry_type: contactForm.querySelector('select[name="inquiry_type"]')
          .value,
        message: contactForm.querySelector('textarea[name="message"]').value,
      };

      // TODO: Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with actual values
      const serviceID = "service_s1vue0z";
      const templateID = "template_crvg0l8";

      console.log(formData);
      emailjs
        .send(serviceID, templateID, formData)
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
