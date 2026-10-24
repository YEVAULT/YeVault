const tracks = [
  {title:'For Once in My Life', page:'https://imgur.gg/f/5wdnsgc', audio:'https://b.imgur.gg/5wdnsgc-01._FOR_ONCE_IN_MY_LIFE.mp3'},
  {title:"Virgil's Funeral", page:'https://imgur.gg/f/BAgGfzX', audio:'https://b.imgur.gg/BAgGfzX-02._VIRGIL%27S_FUNERAL.mp3'},
  {title:'Talking', page:'https://imgur.gg/f/S9W3hO1', audio:'https://b.imgur.gg/S9W3hO1-03._TALKING.mp3'},
  {title:'Hold Up, Get Up', page:'https://imgur.gg/f/pOLDQBd', audio:'https://b.imgur.gg/pOLDQBd-04._HOLD_UP%2C_GET_UP.mp3'},
  {title:'Quiet', page:'https://imgur.gg/f/NZtjLaA', audio:'https://b.imgur.gg/NZtjLaA-05._QUIET.mp3'},
  {title:'Bobby Digital', page:'https://imgur.gg/f/FMupucH', audio:'https://b.imgur.gg/FMupucH-06._BOBBY_DIGITAL.mp3'},
  {title:'All in Love', page:'https://imgur.gg/f/vlqwO4V', audio:'https://b.imgur.gg/vlqwO4V-07._ALL_IN_LOVE.mp3'},
  {title:'Through the High Wire', page:'https://imgur.gg/f/JoLQuWo', audio:'https://b.imgur.gg/JoLQuWo-08._THROUGH_THE_HIGH_WIRE.mp3'},
  {title:'This One Here', page:'https://imgur.gg/f/HxnQSBr', audio:'https://b.imgur.gg/HxnQSBr-09._THIS_ONE_HERE.mp3'}
];

const list = document.getElementById('track-list');
const player = document.getElementById('album-player');
const nowPlaying = document.getElementById('now-playing');
const help = document.getElementById('player-help');
let currentIndex = -1;

tracks.forEach((track, index) => {
  const row = document.createElement('div');
  row.className = 'preview-track';
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'preview-play';
  button.setAttribute('aria-label', 'Play ' + track.title);
  button.innerHTML = '<span class="preview-number">' + String(index + 1).padStart(2, '0') + '</span><span class="preview-title"></span><span class="preview-indicator">▶</span>';
  button.querySelector('.preview-title').textContent = track.title;
  button.addEventListener('click', () => selectTrack(index));
  const link = document.createElement('a');
  link.href = track.page;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.className = 'preview-host';
  link.textContent = 'Open ↗';
  link.setAttribute('aria-label', 'Open ' + track.title + ' on imgur.gg');
  row.append(button, link);
  list.appendChild(row);
});

function selectTrack(index) {
  if (index < 0 || index >= tracks.length) return;
  const track = tracks[index];
  if (currentIndex !== index) {
    currentIndex = index;
    player.src = track.audio;
    nowPlaying.textContent = String(index + 1).padStart(2, '0') + ' / ' + track.title;
    document.querySelectorAll('.preview-track').forEach((row, rowIndex) => {
      row.classList.toggle('selected', rowIndex === index);
      row.querySelector('.preview-play').setAttribute('aria-current', rowIndex === index ? 'true' : 'false');
    });
  }
  help.textContent = 'Audio is served by imgur.gg. If playback fails, open the track on its host from the list.';
  player.play().catch(() => {
    help.textContent = 'Playback was blocked or unavailable. Press play in the player or open the track on imgur.gg.';
  });
}

document.getElementById('previous-track').addEventListener('click', () => {
  selectTrack(currentIndex <= 0 ? 0 : currentIndex - 1);
});
document.getElementById('next-track').addEventListener('click', () => {
  selectTrack(currentIndex < 0 ? 0 : Math.min(currentIndex + 1, tracks.length - 1));
});
player.addEventListener('ended', () => {
  if (currentIndex < tracks.length - 1) selectTrack(currentIndex + 1);
});
player.addEventListener('error', () => {
  if (currentIndex >= 0) help.textContent = 'This track could not play here. Use its Open link to listen on imgur.gg.';
});
