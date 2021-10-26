
function splitAndSort(headline) {
    headline = headline
        .replace(/[^\w\s]|_/g, "")
        .replace(/\s+/g, " ");
    words = headline.toLowerCase().split(" ");
    counts = words.map(word => word.length);

    //Decorate-Sort-Undecorate

    const dsu = (words, counts) => words
        .map((item, index) => [counts[index], item])
        .sort(([arg1], [arg2]) => arg2 - arg1)
        .map(([, item]) => item);

    return dsu(words, counts).slice(0,3)

}

function getHashTags(headline) {

    return splitAndSort(headline).map(word => "#"+word) 

}

console.log(getHashTags("How the Avocado Became the Fruit of the Global Trade"))
// ["#avocado", "#became", "#global"]

console.log(getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year"))
// ["#christmas", "#probably", "#will"]

console.log(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"))
// ["#surprise", "#parents", "#fruit"]

console.log(getHashTags("Visualizing Science"))
// ["#visualizing", "#science"]