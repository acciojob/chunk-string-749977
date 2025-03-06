function chunkString(str, size) {
    if (!str) return [];
    let result = [];
    for (let i = 0; i < str.length; i += size) {
        result.push(str.substring(i, i + size));
    }
    return result;
}

function splitString() {
    let inputStr = document.getElementById("inputString").value;
    let chunkSize = parseInt(document.getElementById("chunkSize").value, 10);

    if (!chunkSize || chunkSize <= 0) {
        document.getElementById("result").innerText = "Please enter a valid chunk size.";
        return;
    }

    let chunks = chunkString(inputStr, chunkSize);
    document.getElementById("result").innerText = "Chunks: " + JSON.stringify(chunks);
}
