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
    console.log('loadOne', fontface);
    return fontface.load();
  },
  load: function() {
    Fontloader.loadOne(FontFaces[0]).then(function(loadedFontFace){
      console.log(loadedFontFace);
    });
  }
};

module.exports = Fontloader;