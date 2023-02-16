function emailMessage() {
	let message = document.getElementById("message").value;
	   let emailLink = document.querySelector('a[href^="mailto:"]');
	   emailLink.href += message;
}

function showSuccessMessage() {
    setTimeout(function() {
      alert("Thank you! Your message has been sent successfully.");
    }, 5000);
}