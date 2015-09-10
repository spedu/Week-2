define(["jquery", "app/Playlist"], function($, Playlist) {
  var PlaylistView = function() {
    this.playlist = new Playlist();
    this.listenAddSong();
    this.updatePlaylistDom();
  };

  PlaylistView.prototype.listenAddSong = function() {
    $('#addSongForm').on('submit', function(event) {
      this.playlist.addSong($('#song').val());
      $('#song').val('');

      this.updatePlaylistDom();

      return false;
    }.bind(this)); 
  };

  PlaylistView.prototype.updatePlaylistDom = function() {
    var that = this;
    var playlistDom = this.playlist.playlist.map(function(song, index) {
      var removeButton = document.createElement("button");
      removeButton.appendChild(document.createTextNode("remove"));

      $(removeButton).click(function() {
        that.playlist.removeSong(index);
        that.updatePlaylistDom();
      });
      $(removeButton).addClass("btn");

      var li = document.createElement('li');
      li.appendChild(document.createTextNode(song.title));
      li.appendChild(removeButton);
      return li;
    });

    $('#currentPlaylist').html(playlistDom);
  };

  return PlaylistView;
});