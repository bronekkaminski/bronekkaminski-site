// Builds the email link in the browser so the address is not present in the page source.
(() => {
  const unreverse = (value) => [...value].reverse().join('');
  const address = `${unreverse('norb')}${String.fromCharCode(64)}${unreverse('moc.iksnimakkenorb')}`;

  document.querySelectorAll('[data-email]').forEach((target) => {
    const link = document.createElement('a');
    const subject = target.dataset.subject;
    link.href = `mailto:${address}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;
    link.textContent = address;
    target.replaceWith(link);
  });
})();
