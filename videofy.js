var scripts = document.getElementsByTagName('script')
var last_script = scripts[scripts.length - 1].text
var split = last_script.split(',\n')[0].trim()
var video_information = split.replace('xoctPaellaPlayer.init(', '')
var video_url = JSON.parse(video_information).streams[0].sources.mp4[0].src
window.open(video_url)
