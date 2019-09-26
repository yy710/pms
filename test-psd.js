const util = require('util');
const PSD = require('psd');
var file = './upload/灯箱-如意金-124X94cm.psd';
var start = new Date();

var psd = PSD.fromFile(file);
psd.parse();
console.log(psd.tree().export());
//console.log(util.inspect(psd.tree().export(), {depth: null}));

//png = psd.image.toPng(); // get PNG object
psd.image.saveAsPng('./upload/output.png').then(function () {
  console.log("Finished in " + ((new Date()) - start) + "ms");
});

/* PSD.open(file).then(function (psd) {
    return psd.image.saveAsPng('./output.png');
}).then(function () {
    console.log("Finished in " + ((new Date()) - start) + "ms");
}); */