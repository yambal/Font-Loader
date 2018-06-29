var FontFaces = [];
const Fontloader = {
  registFont: function(family, source, descriptors) {
    if (typeof FontFace !== "undefined") {
      var add = new FontFace(family, source, descriptors);
      FontFaces.push(add);
    }
    return FontFaces;
  },
  loadOne: function(fontface) {
    console.log("loadOne", fontface);
    return fontface.load();
  },
  load: function() {
    return new Promise(function(resolve, reject) {
      var count = FontFaces.length;
      for (var i = 0; i < FontFaces.length; i++) {
        Fontloader.loadOne(FontFaces[i]).then(function(loadedFontFace) {
          console.log('loaded', loadedFontFace);
          document.fonts.add(loadedFontFace);
          count--;
          if(count == 0){
            resolve();
          }
        });
      }
    });
  }
};

module.exports = Fontloader;