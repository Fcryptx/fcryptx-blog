
const summary = document.querySelectorAll("details summary");


summary.forEach(summary => {
	summary.addEventListener('click', function() {
		summary.classList.toggle('summary-active');
	});
});

