function replaceEmbeddedJson(text) {
    var alteredText = text.replaceAll('\"{', '{');
    alteredText = alteredText.replaceAll('}\"', '}');
    alteredText = alteredText.replaceAll('\\"', '"');
    var parsed = JSON.parse(alteredText)
    return JSON.stringify(parsed, null, 4);
}

module.exports = replaceEmbeddedJson;