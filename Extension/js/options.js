let options = undefined

chrome.runtime.getPlatformInfo(async function(info) {
  if(info.os == "mac")
    $(`
    <tr>
      <td>
        <h5 term="popup.options.titleMenubar" id="pMiDOption"></h5>
      </td>
      <td>
        <div class="switch">
          <label>
            <input type="checkbox" class="toggleTitleMenubar" />
            <span class="lever"></span>
          </label>
        </div>
      </td>
    </tr>`)
    .insertAfter('.enabledToggle')
  titleMenubarToggle = $('.toggleTitleMenubar')
  titleMenubarToggle.change(tMB);
})

$(document).ready(function() {
  var enabledToggle = $('.togglePresence'),
  youtubeToggle = $('.toggleYouTube'),
  youtubeMusicToggle = $('.toggleYouTubeMusic'),
  twitchToggle = $('.toggleTwitch'),
  mixerToggle = $('.toggleMixer'),
  soundcloudToggle = $('.toggleSoundCloud'),
  netflixToggle = $('.toggleNetflix'),
  rabbitToggle = $('.toggleRabbit'),
  anime4YouToggle = $('.toggleAnime4You'),
  mediaControlsToggle = $('.toggleMediaControls'),
  checkForUpdatesToggle = $('.toggleCheckUpdates'),
  systemStartupToggle = $('.toggleSystemStartup'),
  darkThemeToggle = $('.toggleDarkTheme'),
  crunchyrollToggle = $('.toggleCrunchyroll'),
  branitubeToggle = $('.toggleBranitube'),
  aniflixToggle = $('.toggleAniflix'),
  tabPriorityToggle = $('.toggleTabPriority')

  enabledToggle.change(tEnabled);
  youtubeToggle.change(tYT);
  youtubeMusicToggle.change(tYTM);
  twitchToggle.change(tT);
  mixerToggle.change(tMX);
  soundcloudToggle.change(tSC);
  netflixToggle.change(tN);
  mediaControlsToggle.change(tMC);
  checkForUpdatesToggle.change(tCFU);
  systemStartupToggle.change(tSS);
  darkThemeToggle.change(tdT);
  rabbitToggle.change(tRI);
  anime4YouToggle.change(tA4Y);
  crunchyrollToggle.change(tCR);
  aniflixToggle.change(tAF);
  branitubeToggle.change(tBT);
  tabPriorityToggle.change(tTP);

  chrome.storage.sync.get(['options'], function(result) {
    options = result.options
    if(result.options != undefined) {
      if(options.darkTheme) $('html').addClass("dark")
      enabledToggle.prop('checked', result.options.enabled)
      youtubeToggle.prop('checked', result.options.youtube)
      youtubeMusicToggle.prop('checked', result.options.youtubeMusic)
      twitchToggle.prop('checked', result.options.twitch)
	    mixerToggle.prop('checked', result.options.mixer)
      soundcloudToggle.prop('checked', result.options.soundcloud)
      netflixToggle.prop('checked', result.options.netflix)
      rabbitToggle.prop('checked', result.options.rabbIt)
      anime4YouToggle.prop('checked', result.options.anime4you)
      if(titleMenubarToggle != undefined)
      titleMenubarToggle.prop('checked', result.options.titleMenubar)
      mediaControlsToggle.prop('checked', result.options.mediaControls)
      checkForUpdatesToggle.prop('checked', result.options.checkForUpdates)
      systemStartupToggle.prop('checked', result.options.systemStartup)
      darkThemeToggle.prop('checked', result.options.darkTheme)
      aniflixToggle.prop('checked', result.options.aniflix)
      branitubeToggle.prop('checked', result.options.branitube)
      crunchyrollToggle.prop('checked', result.options.crunchyroll)
      tabPriorityToggle.prop('checked', result.options.tabPriority)
    }
  })
})

function tEnabled() {
  options.enabled = !options.enabled
  sync()
}

function tYT() {
  options.youtube = !options.youtube
  sync()
}

function tYTM() {
  options.youtubeMusic = !options.youtubeMusic
  sync()
}

function tT() {
  options.twitch = !options.twitch
  sync()
}
function tMX() {
  options.mixer = !options.mixer
  sync()
}
function tSC() {
  options.soundcloud = !options.soundcloud
  sync()
}

function tN() {
  options.netflix = !options.netflix
  sync()
}

function tMB() {
  options.titleMenubar = !options.titleMenubar
  sync()
}

function tMC() {
  options.mediaControls = !options.mediaControls
  sync()
}

function tCFU() {
  options.checkForUpdates = !options.checkForUpdates
  sync()
}

function tSS() {
  options.systemStartup = !options.systemStartup
  sync()
}

function tRI() {
  options.rabbIt = !options.rabbIt
  sync()
}

function tA4Y() {
  options.anime4you = !options.anime4you
  sync()
}

function tCR() {
  options.crunchyroll = !options.crunchyroll
  sync()
}
function tBT() {
  options.branitube = !options.branitube
  sync()
}
function tAF() {
  options.aniflix = !options.aniflix
  sync()
}
function tTP() {
  options.tabPriority = !options.tabPriority
  sync()
}

function tdT() {
  options.darkTheme = !options.darkTheme
  if(options.darkTheme) $('html').addClass("dark"); else $('html').removeClass("dark");
  sync()
}

function sync() {
  chrome.storage.sync.set({options: options})
}