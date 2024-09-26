function learnMore() {
  window.location.href = "#contact";
}

document.querySelectorAll('.download-btn').forEach(button => {
  button.addEventListener('click', (e) => {
      const link = e.target.closest('.brochure').querySelector('iframe').src;
      window.open(link, '_blank');
  });
});