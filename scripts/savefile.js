
var rawsavefile = ""
var dto = {}

async function loadSave ( event ) {
  const file = event.target.files.item(0)
  const contents = await file.text()
  rawsavefile = contents
  document.getElementById("savefile-input").value = rawsavefile

  var savefile = decryptSavefile(rawsavefile)
  document.getElementById("savefile-decrypted").value = JSON.stringify(savefile, null, 2)

  dto = savefile[2]

  update()
}
function decryptSavefile ( rawsavefile ) {
  var savefile = rawsavefile.split("#")

  var key = CryptoJS.enc.Hex.parse("0901f87d5725efde4e4ae88cc197230b")
  var iv = CryptoJS.enc.Hex.parse("14ce63b855acd907c451a1777e592457")
  for ( var i = 0; i < savefile.length; ++i ) {
    savefile[i] = CryptoJS.enc.Base64.parse(savefile[i])
    savefile[i] = CryptoJS.AES.decrypt({ciphertext: savefile[i]}, key, { iv: iv })
    savefile[i] = savefile[i].toString(CryptoJS.enc.Utf8)
    savefile[i] = JSON.parse(savefile[i])
  }

  return savefile
}
