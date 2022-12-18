count = 0
function createDiv(code) {
    let div = document.createElement('div');
    div.setAttribute("id", "code"+count);
    div.style.width=300;
    div.style.border="15px solid #fcba03";
    div.style.padding="50px";
    div.style.margin="20px";
    div.style.fontFamily="Arial, Helvetica, sans-serif";
    div.style.color="#E4E6EB";
    div.innerText = code;
    document.body.appendChild(div)
    count++;
}

const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');

if (code != null) {
    createDiv(code)
}