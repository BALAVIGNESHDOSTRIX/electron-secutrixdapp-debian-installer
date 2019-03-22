const installer = require('electron-installer-debian')
 
const options = {
  src: 'release-builds/electron-secutrixdapp-debian-installer-linux-x64/',
  dest: 'dist/debian',
  arch: 'amd64',
  descritpion: 'To Secure the Digital Assets like Image Documents'
}
 
console.log('Creating package (this may take a while)')
 
installer(options)
  .then(() => console.log(`Successfully created package at ${options.dest}`))
  .catch(err => {
    console.error(err, err.stack)
    process.exit(1)
  })