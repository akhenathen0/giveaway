const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const countdownEl = document.getElementById('countdown');

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 7); // 7 days from now

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdownEl.textContent = 'The giveaway has ended.';
    clearInterval(interval);
    return;
  }

  const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.textContent = d.toString().padStart(2, '0');
  hoursEl.textContent = h.toString().padStart(2, '0');
  minutesEl.textContent = m.toString().padStart(2, '0');
  secondsEl.textContent = s.toString().padStart(2, '0');
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();
