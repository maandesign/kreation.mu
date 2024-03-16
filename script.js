document.addEventListener("DOMContentLoaded", function() {
  const services = document.querySelectorAll('.service');

  services.forEach(service => {
      service.addEventListener('click', function() {
          services.forEach(s => s.classList.remove('selected'));
          this.classList.add('selected');
      });
  });
});