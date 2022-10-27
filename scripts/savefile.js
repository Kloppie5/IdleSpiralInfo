
var rawsavefile = ""
var dto = {}
var lastChar;

async function loadSave ( event ) {
  const file = event.target.files.item(0)
  const contents = await file.text()
  rawsavefile = contents.slice(0, -1) // F*cking null character
  lastChar = contents.charAt(-1);
  document.getElementById("savefile-input").value = rawsavefile

  var savefile = decryptSavefile(rawsavefile)
  document.getElementById("savefile-decrypted-full").value = JSON.stringify(savefile, null, 2)

  dto = savefile[2]

  update()
}
function decryptSavefile ( rawsavefile ) {
  var savefile = rawsavefile.split("#")

  var key = CryptoJS.enc.Hex.parse("0901f87d5725efde4e4ae88cc197230b")
  var iv = CryptoJS.enc.Hex.parse("14ce63b855acd907c451a1777e592457")
  for ( var i = 0; i < savefile.length; ++i ) {
    savefile[i] = CryptoJS.enc.Base64.parse(savefile[i])
    savefile[i] = CryptoJS.AES.decrypt({
      ciphertext: savefile[i]
    }, key, {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    })
    savefile[i] = savefile[i].toString(CryptoJS.enc.Utf8)
    document.getElementById("savefile-decrypted-" + i).value = savefile[i]
    savefile[i] = JSON.parse(savefile[i])

  }

  return savefile
}
function exportSavefile() {
  const json = JSON.parse(document.getElementById("savefile-decrypted-full").value);

  var key = CryptoJS.enc.Hex.parse("0901f87d5725efde4e4ae88cc197230b")
  var iv = CryptoJS.enc.Hex.parse("14ce63b855acd907c451a1777e592457")

  const data = json.map(part => {
    part = JSON.stringify(part).replace(/e\+/g, "e");

    part = CryptoJS.AES.encrypt(part, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });

    return CryptoJS.enc.Base64.stringify(part.ciphertext);
  }).join("#") + lastChar;

  downloader(data, "text/plain", "Idle Spiral.txt");
}

function downloadURI(uri, name) {
  let link = document.createElement("a");
  link.download = name;
  link.href = uri;
  link.click();
  link.remove();
}

function downloader(data, type, name) {
  let blob = new Blob([data], {type});
  let url = window.URL.createObjectURL(blob);
  downloadURI(url, name);
  window.URL.revokeObjectURL(url);
}
