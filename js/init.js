(function(exports) {
    'use strict';

    var settings = {
        Model: YouTubeAPIModel,
        PlayerView: YouTubePlayerView,
        PlaylistView: PlaylistPlayerView,
        showSearch: true,
        user: "TheYoungTurks",
        devKey: "AIzaSyCahI_bfHY3POo04R25052zvJSuUraySyU",
        createCategoriesFromSections: true
    };

    exports.app = new App(settings);
}(window));
