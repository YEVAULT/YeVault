const albums = {
  war: [
    {title:'For Once in My Life', page:'https://imgur.gg/f/5wdnsgc', audio:'https://b.imgur.gg/5wdnsgc-01._FOR_ONCE_IN_MY_LIFE.mp3'},
    {title:"Virgil's Funeral", page:'https://imgur.gg/f/BAgGfzX', audio:'https://b.imgur.gg/BAgGfzX-02._VIRGIL%27S_FUNERAL.mp3'},
    {title:'Talking', page:'https://imgur.gg/f/S9W3hO1', audio:'https://b.imgur.gg/S9W3hO1-03._TALKING.mp3'},
    {title:'Hold Up, Get Up', page:'https://imgur.gg/f/pOLDQBd', audio:'https://b.imgur.gg/pOLDQBd-04._HOLD_UP%2C_GET_UP.mp3'},
    {title:'Quiet', page:'https://imgur.gg/f/NZtjLaA', audio:'https://b.imgur.gg/NZtjLaA-05._QUIET.mp3'},
    {title:'Bobby Digital', page:'https://imgur.gg/f/FMupucH', audio:'https://b.imgur.gg/FMupucH-06._BOBBY_DIGITAL.mp3'},
    {title:'All in Love', page:'https://imgur.gg/f/vlqwO4V', audio:'https://b.imgur.gg/vlqwO4V-07._ALL_IN_LOVE.mp3'},
    {title:'Through the High Wire', page:'https://imgur.gg/f/JoLQuWo', audio:'https://b.imgur.gg/JoLQuWo-08._THROUGH_THE_HIGH_WIRE.mp3'},
    {title:'This One Here', page:'https://imgur.gg/f/HxnQSBr', audio:'https://b.imgur.gg/HxnQSBr-09._THIS_ONE_HERE.mp3'}
  ],
  cuck: [
    {title:'WW3', page:'https://imgur.gg/f/Qk4cNNb', audio:'https://b.imgur.gg/Qk4cNNb-WW3.mp3'},
    {title:'COSBY', page:'https://imgur.gg/f/P0XfWca', audio:'https://b.imgur.gg/P0XfWca-COSBY.mp3'},
    {title:'DIDDY FREE', page:'https://imgur.gg/f/iprJCcV', audio:'https://b.imgur.gg/iprJCcV-DIDDY_FREE.mp3'},
    {title:'DIRTY MAGAZINES', page:'https://imgur.gg/f/SFmCwxg', audio:'https://b.imgur.gg/SFmCwxg-DIRTY_MAGAZINES.mp3'},
    {title:'JESUS', page:'https://imgur.gg/f/3yly3sL', audio:'https://b.imgur.gg/3yly3sL-JESUS.mp3'},
    {title:'BIANCA', page:'https://imgur.gg/f/l8Qa5n1', audio:'https://b.imgur.gg/l8Qa5n1-BIANCA.mp3'},
    {title:'COUSINS', page:'https://imgur.gg/f/dYo5Hpm', audio:'https://b.imgur.gg/dYo5Hpm-COUSINS.mp3'},
    {title:'VIRGIL', page:'https://imgur.gg/f/a1qigW3', audio:'https://b.imgur.gg/a1qigW3-VIRGIL.mp3'},
    {title:'UNCLE', page:'https://imgur.gg/f/tdHxj7k', audio:'https://b.imgur.gg/tdHxj7k-UNCLE.mp3'},
    {title:'FREE MY KIDS', page:'https://imgur.gg/f/ISw6ygh', audio:'https://b.imgur.gg/ISw6ygh-FREE_MY_KIDS.mp3'},
    {title:'HEIL HITLER', page:'https://imgur.gg/f/66Ur7s6', audio:'https://b.imgur.gg/66Ur7s6-HEIL_HITLER.mp3'},
    {title:'GAS CHAMBERS', page:'https://imgur.gg/f/fqlrmu2', audio:'https://b.imgur.gg/fqlrmu2-GAS_CHAMBERS.mp3'},
    {title:'HITLER YE JESUS', page:'https://imgur.gg/f/x3QqEvU', audio:'https://b.imgur.gg/x3QqEvU-HITLER_YE_JESUS.mp3'},
    {title:'JARED', page:'https://imgur.gg/f/fqhbfrs', audio:'https://b.imgur.gg/fqhbfrs-JARED.mp3'},
    {title:'NITROUS', page:'https://imgur.gg/f/MrekSBW', audio:'https://b.imgur.gg/MrekSBW-NITROUS.mp3'}
  ],
  donda2: [
    {title:"True Love", page:"https://imgur.gg/f/0ZoTqXa", audio:"https://b.imgur.gg/0ZoTqXa-01._TRUE_LOVE.mp3"},
    {title:"Broken Road", page:"https://imgur.gg/f/dWeXz9l", audio:"https://b.imgur.gg/dWeXz9l-02._BROKEN_ROAD.mp3"},
    {title:"Get Lost", page:"https://imgur.gg/f/PhWh87w", audio:"https://b.imgur.gg/PhWh87w-03._GET_LOST.mp3"},
    {title:"Too Easy", page:"https://imgur.gg/f/c8sNp3q", audio:"https://b.imgur.gg/c8sNp3q-04._TOO_EASY.mp3"},
    {title:"Fuck Flowers", page:"https://imgur.gg/f/jdv9xDJ", audio:"https://b.imgur.gg/jdv9xDJ-05._FUCK_FLOWERS.mp3"},
    {title:"Security", page:"https://imgur.gg/f/dkgqH8D", audio:"https://b.imgur.gg/dkgqH8D-06._SECURITY.mp3"},
    {title:"We Did It Kid", page:"https://imgur.gg/f/MwvdORH", audio:"https://b.imgur.gg/MwvdORH-07._WE_DID_IT_KID.mp3"},
    {title:"Pablo", page:"https://imgur.gg/f/T21bt3o", audio:"https://b.imgur.gg/T21bt3o-08._PABLO.mp3"},
    {title:"Louie Bag", page:"https://imgur.gg/f/WZweQSb", audio:"https://b.imgur.gg/WZweQSb-09._LOUIE_BAG.mp3"},
    {title:"Happy", page:"https://imgur.gg/f/DE9A180", audio:"https://b.imgur.gg/DE9A180-10._HAPPY.mp3"},
    {title:"Sci Fi", page:"https://imgur.gg/f/Dhi6Jyx", audio:"https://b.imgur.gg/Dhi6Jyx-11._SCI_FI.mp3"},
    {title:"Selfish", page:"https://imgur.gg/f/IDA6Icl", audio:"https://b.imgur.gg/IDA6Icl-12._SELFISH.mp3"},
    {title:"Lord Lift Me Up", page:"https://imgur.gg/f/AkqTpuV", audio:"https://b.imgur.gg/AkqTpuV-13._LORD_LIFT_ME_UP.mp3"},
    {title:"City of Gods", page:"https://imgur.gg/f/uRdKbPD", audio:"https://b.imgur.gg/uRdKbPD-14._CITY_OF_GODS.mp3"},
    {title:"First Time in a Long Time", page:"https://imgur.gg/f/R4NGfQK", audio:"https://b.imgur.gg/R4NGfQK-15._FIRST_TIME_IN_A_LONG_TIME.mp3"},
    {title:"Easy", page:"https://imgur.gg/f/TvNKd2M", audio:"https://b.imgur.gg/TvNKd2M-16._EASY.mp3"}
  ],
  tgfd: [
    {title:"I'm Not Home", page:"https://imgur.gg/f/ju8eGPt", audio:"https://b.imgur.gg/ju8eGPt-I'm_Not_Home.mp3"},
    {title:"On Sight", page:"https://imgur.gg/f/YglosOq", audio:"https://b.imgur.gg/YglosOq-On_Sight.mp3"},
    {title:"Black Skinhead", page:"https://imgur.gg/f/MQ7vUGT", audio:"https://b.imgur.gg/MQ7vUGT-Black_Skinhead.mp3"},
    {title:"I Am A God", page:"https://imgur.gg/f/IJIr1yy", audio:"https://b.imgur.gg/IJIr1yy-I_Am_A_God.mp3"},
    {title:"New Slaves", page:"https://imgur.gg/f/kbdzxTF", audio:"https://b.imgur.gg/kbdzxTF-New_Slaves.mp3"},
    {title:"WOW!", page:"https://imgur.gg/f/gua7evm", audio:"https://b.imgur.gg/gua7evm-WOW!.mp3"},
    {title:"Send It Up", page:"https://imgur.gg/f/xF1sjgb", audio:"https://b.imgur.gg/xF1sjgb-Send_It_Up.mp3"},
    {title:"HollyWood By Thy Name", page:"https://imgur.gg/f/6YyxgJ3", audio:"https://b.imgur.gg/6YyxgJ3-HollyWood_By_Thy_Name.mp3"},
    {title:"Talk To Me", page:"https://imgur.gg/f/Xrd1GMZ", audio:"https://b.imgur.gg/Xrd1GMZ-Talk_To_Me.mp3"},
    {title:"Greek Medusa", page:"https://imgur.gg/f/o4JTu7h", audio:"https://b.imgur.gg/o4JTu7h-Greek_Medusa.mp3"},
    {title:"Guilt Trip", page:"https://imgur.gg/f/Sg9Ie8W", audio:"https://b.imgur.gg/Sg9Ie8W-Guilt_Trip.mp3"},
    {title:"Blood On The Leaves", page:"https://imgur.gg/f/kRKuxuR", audio:"https://b.imgur.gg/kRKuxuR-Blood_On_The_Leaves.mp3"},
    {title:"Hold My Liquor", page:"https://imgur.gg/f/BwmmHzv", audio:"https://b.imgur.gg/BwmmHzv-Hold_My_Liquor.mp3"},
    {title:"Imitation of Christ", page:"https://imgur.gg/f/EtEKdSn", audio:"https://b.imgur.gg/EtEKdSn-Imitation_Of_Christ.mp3"},
    {title:"Nobody To Love", page:"https://imgur.gg/f/sg9VKYa", audio:"https://b.imgur.gg/sg9VKYa-Nobody_To_Love.mp3"},
    {title:"Gay Girl In A Gay Bar", page:"https://imgur.gg/f/Xm5ybCK", audio:"https://b.imgur.gg/Xm5ybCK-Gay_Girl_In_A_Gay_Bar.mp3"},
    {title:"Can't Get Over Me", page:"https://imgur.gg/f/9duX4Aq", audio:"https://b.imgur.gg/9duX4Aq-Can't_Get_Over_Me.mp3"},
    {title:"Awesome", page:"https://imgur.gg/f/VqYdt7W", audio:"https://b.imgur.gg/VqYdt7W-Awesome.mp3"},
    {title:"No No No No", page:"https://imgur.gg/f/Yh1mzJb", audio:"https://b.imgur.gg/Yh1mzJb-No_No_No_No.mp3"}
  ]
};

const defaultHelp = 'Audio is served by imgur.gg. If playback fails, open the track on its host from the list.';

function initAlbum(section, tracks) {
  const list = section.querySelector('.track-list');
  const player = section.querySelector('.album-player');
  const nowPlaying = section.querySelector('.now-playing');
  const help = section.querySelector('.player-help');
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
      list.querySelectorAll('.preview-track').forEach((row, rowIndex) => {
        row.classList.toggle('selected', rowIndex === index);
        row.querySelector('.preview-play').setAttribute('aria-current', rowIndex === index ? 'true' : 'false');
      });
    }
    document.querySelectorAll('.album-player').forEach(other => {
      if (other !== player) other.pause();
    });
    help.textContent = defaultHelp;
    player.play().catch(() => {
      help.textContent = 'Playback was blocked or unavailable. Press play in the player or open the track on imgur.gg.';
    });
  }

  section.querySelector('.previous-track').addEventListener('click', () => {
    selectTrack(currentIndex <= 0 ? 0 : currentIndex - 1);
  });
  section.querySelector('.next-track').addEventListener('click', () => {
    selectTrack(currentIndex < 0 ? 0 : Math.min(currentIndex + 1, tracks.length - 1));
  });
  player.addEventListener('ended', () => {
    if (currentIndex < tracks.length - 1) selectTrack(currentIndex + 1);
  });
  player.addEventListener('error', () => {
    if (currentIndex >= 0) help.textContent = 'This track could not play here. Use its Open link to listen on imgur.gg.';
  });
}

document.querySelectorAll('.album-section[data-album]').forEach(section => {
  initAlbum(section, albums[section.dataset.album]);
});
