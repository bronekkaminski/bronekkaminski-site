// Loads the Vimeo player only after the visitor presses play.
document.querySelectorAll('.reel[data-vimeo-id]').forEach((reel) => {
  const button = reel.querySelector('.reel-play');
  if (!button) return;

  button.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.title = reel.dataset.title || 'Video player';
    iframe.allow = 'autoplay; fullscreen; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.src = `https://player.vimeo.com/video/${encodeURIComponent(reel.dataset.vimeoId)}?autoplay=1&dnt=1`;
    reel.replaceChildren(iframe);
    iframe.focus();
  });
});
