function addCopyButtons(clipboard) {
    document.querySelectorAll('pre > code').forEach(function (codeBlock) {
        var button = document.createElement('button');
        button.className = 'copy-code-button';
        button.type = 'button';
        button.setAttribute('aria-live', 'assertive');
        button.innerText = 'Copyar';
        button.addEventListener('click', function () {
            clipboard.writeText(codeBlock.innerText).then(function () {
                button.blur();
                button.innerText = '¡Copiado!';
                setTimeout(function () { button.innerText = 'Copiar'; }, 2000);
            }, function (error) { button.innerText = 'Error'; });
        });
        var pre = codeBlock.parentNode;
        pre.parentNode.insertBefore(button, pre);
    });
}

function setExpandables() {
    const exps = document.querySelectorAll('.expandable');
    exps.forEach(el => {
        const control = el.querySelector('.btnToggle');
        const content = el.querySelector('.elemsContainer');
        if (!(control && content)) {
            console.log("error, unable to get required elements", control, content);
            return;
        }
        control.setAttribute('aria-expanded', false);
        control.innerHTML = `${control.textContent}
        <svg aria-hidden="true" focusable="false" viewBox="0 0 10 10">
            <rect class="vert" height="8" width="2" y="1" x="4"/>
            <rect class="hort" height="2" width="8" y="4" x="1"/>
        </svg>`;
        content.hidden = true;
        let curState = false;
        control.onclick = function () {
            curState = !curState;
            control.setAttribute('aria-expanded', curState);
            if (curState) {
                content.hidden = false;
                content.style.maxHeight = content.scrollHeight + "px";
            }
            else {
                content.style.maxHeight = null;
                setTimeout(function () {
                    content.hidden = true;
                }, 200);
            }
        }
    });
}
addCopyButtons(navigator.clipboard);
updateSavePostButtons();
setExpandables();
document.body.onload = function () {
    // set auto focus if "autofocusId" exists.
    setTimeout(function () {
        const f = document.getElementById("autofocusId")
        if (f) f.focus();
    }, 200);
}
