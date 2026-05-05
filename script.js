const text = "Trusted • Experienced • Reliable";
let i = 0;
const speed = 70;
const target = document.getElementById("typing");

function typeWriter() {
  if (target && i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = () => {
  typeWriter();

  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });

  cards.forEach(card => observer.observe(card));
};