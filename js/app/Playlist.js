define(['app/Song'], function(Song) {
  var Playlist = function() {
    this.playlist = JSON.parse(sessionStorage.getItem('playlist')) || [];
    this.updatePlaylist();
  };
  Playlist.prototype.addSong = function(title) {
    var song = new Song(title);
    this.playlist.push(song);
    this.updatePlaylist();
  };
  Playlist.prototype.removeSong = function(index) {
    this.playlist.splice(index, 1);
    this.updatePlaylist();
  };
  Playlist.prototype.updatePlaylist = function() {
    sessionStorage.setItem('playlist', JSON.stringify(this.playlist));
  };

  return Playlist;
});