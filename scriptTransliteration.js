const ukrainianToLatin = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g',
    'д': 'd', 'е': 'e', 'є': 'ye', 'ж': 'zh', 'з': 'z',
    'и': 'y', 'і': 'i', 'ї': 'yi', 'й': 'y', 'к': 'k',
    'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p',
    'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f',
    'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch',
    'ь': 'ʼ', 'ю': 'yu', 'я': 'ya',
};

document.getElementById("ukrainian-text").addEventListener("input", function () {
    const ukrainianText = this.value.toLowerCase();
    let transliteratedText = "";

    for (let i = 0; i < ukrainianText.length; i++) {
        const char = ukrainianText[i];
        transliteratedText += ukrainianToLatin[char] || char;
    }

    document.getElementById("transliterated-text").value = transliteratedText;
});