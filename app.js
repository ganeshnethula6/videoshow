const { default: axios } = require('axios');
var videoshow = require('videoshow');
var fs = require('fs');;
var images = [
    "./images/AstaYuno3.png",
  "./images/AstaYuno4.png",
]
var videoOptions = {
  fps: 25,
  loop: 10, // seconds
  transition: true,
  transitionDuration: 2, // seconds
  videoBitrate: 1024,
  videoCodec: 'libx264',
  size: '640x?',
  audioBitrate: '128k',
  audioChannels: 2,
  format: 'mp4',
  pixelFormat: 'yuv420p'
}
videoshow(images, videoOptions)
  .audio('./Black Clover Ending ! Bgm ! Theme.mp3')
  .save('video.mp4')
  .on('start', function (command) {
    console.log('ffmpeg process started:', command)
  })
  .on('error', function (err, stdout, stderr) {
    console.error('Error:', err)
    console.error('ffmpeg stderr:', stderr)
  })
  .on('end', function (output) {
    console.error('Video created in:', output)
  })

let getData = async ()=>{
    let config={
        url:"https://api-generator.retool.com/yp4aBC/data",
    }
    let response = await axios("https://api-generator.retool.com/yp4aBC/data");

}






  var downloadImgFromUrl = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
      console.log('content-type:', res.headers['content-type']);
      console.log('content-length:', res.headers['content-length']);
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
  };