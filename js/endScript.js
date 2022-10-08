function addCopyButtons(clipboard) {
    document.querySelectorAll('pre > code').forEach(function (codeBlock) {
        var button = document.createElement('button');
        button.className = 'copy-code-button';
        button.type = 'button';
        button.innerText = 'Copyar;
        button.addEventListener('click', function () {
            clipboard.writeText(codeBlock.innerText).then(function () {
                button.blur();
                button.innerText = '¡Copiado!';
                setTimeout(function () {button.innerText = 'Copiar';}, 2000);
            }, function (error) {button.innerText = 'Error';});
        });
        var pre = codeBlock.parentNode;
        pre.parentNode.insertBefore(button, pre);
    });
}


addCopyButtons(navigator.clipboard);
updateSavePostButtons();

document.body.onload = function() {
    // set auto focus if "autofocusId" exists.
    setTimeout(function() {
      const f = document.getElementById("autofocusId")
      if (f) f.focus();
    }, 200);
  }
  