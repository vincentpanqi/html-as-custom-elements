export default class CustomHTMLMediaElementImpl {
  get error() {}

  get srcObject() {}
  set srcObject(v) {}

  get currentSrc() {}

  get networkState() {}

  // TODO: technically reflected, but "limited only to known values". Would be
  // better to get this autogenerated
  get preload() {}
  set preload(v) {}

  get buffered() {}

  get readyState() {}

  get seeking() {}

  get currentTime() {}
  set currentTime(v) {}

  get duration() {}

  get paused() {}

  get defaultPlaybackRate() {}
  set defaultPlaybackRate(v) {}

  get playbackRate() {}
  set playbackRate(v) {}

  get played() {}

  get seekable() {}

  get ended() {}

  get controller() {}
  set controller(v) {}

  get volume() {}
  set volume(v) {}

  get muted() {}
  set muted(v) {}

  get audioTracks() {}

  get videoTracks() {}

  get textTracks() {}

  load() {}

  canPlayType(type) {}

  fastSeek(time) {}

  getStartDate() {}

  play() {}

  pause() {}

  addTextTrack(kind, label, language) {}
}