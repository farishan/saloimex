/**
 * Saloimex UI
 * by Faris Han, 2021
 */

function SaloimexUI(){
  this.gamedata = null

  /* Config */
  // @todo: split config file.
  const SUI_TITLE = "SALOIMEX UI";
  const SUI_TEXTAREA_PLACEHOLDER = "saloimex textarea placeholder";
  const SUI_SAVE_TEXT = "Save";
  const SUI_SAVE_MESSAGE_SUCCESS = "saved.";
  const SUI_LOAD_TEXT = "Load";
  const SUI_LOAD_MESSAGE_SUCCESS = "loaded.";
  const SUI_EXPORT_TEXT = "Export";
  const SUI_EXPORT_MESSAGE_SUCCESS = "exported.";
  const SUI_IMPORT_TEXT = "Import";
  const SUI_IMPORT_MESSAGE_SUCCESS = "imported.";

  const $SUI__root = document.createElement('div');

  const $SUI__title = document.createElement("h1");
  $SUI__title.innerHTML = SUI_TITLE;

  const $SUI__textarea = document.createElement("textarea");
  $SUI__textarea.placeholder = SUI_TEXTAREA_PLACEHOLDER;

  const $SUI__saveButton = SUI_createButton(SUI_SAVE_TEXT);
  $SUI__saveButton.onclick = function () {
    saloimex.save(gamedata);

    console.log(SUI_SAVE_MESSAGE_SUCCESS, gamedata, localStorage);
  };

  const $SUI__loadButton = SUI_createButton(SUI_LOAD_TEXT);
  $SUI__loadButton.onclick = function () {
    gamedata = saloimex.load();

    console.log(SUI_LOAD_MESSAGE_SUCCESS, gamedata, localStorage);
  };

  const $SUI__exportButton = SUI_createButton(SUI_EXPORT_TEXT);
  $SUI__exportButton.onclick = function () {
    const exportResult = saloimex.export(gamedata);
    $SUI__textarea.value = exportResult;

    console.log(SUI_EXPORT_MESSAGE_SUCCESS, { exportResult });
  };

  const $SUI__importButton = SUI_createButton(SUI_IMPORT_TEXT);
  $SUI__importButton.onclick = function () {
    const gamedatastring = $SUI__textarea.value;
    const importResult = saloimex.import(gamedatastring);

    console.log(SUI_IMPORT_MESSAGE_SUCCESS, { importResult });
  };

  /* Render */
  $SUI__root.appendChild($SUI__title);
  $SUI__root.appendChild($SUI__textarea);
  $SUI__root.appendChild($SUI__saveButton);
  $SUI__root.appendChild($SUI__loadButton);
  $SUI__root.appendChild($SUI__exportButton);
  $SUI__root.appendChild($SUI__importButton);

  /* Helpers */
  function SUI_createButton(text) {
    const button = document.createElement("button");
    button.innerHTML = text;
    return button;
  }

  return $SUI__root;
}

SaloimexUI.prototype.init = function(gamedata){
  this.gamedata = gamedata

  console.log('saloimexUI initialized.')
}
