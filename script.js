const text1Input = document.getElementById("text-1");
const text2Input = document.getElementById("text-2");
const resultElement = document.getElementById("result");
const calculateBtn = document.getElementById("calcBtn");

let calculateSimilarity = (text1, text2) => {
    const tokens1 = text1.split(" ");
    const tokens2 = text2.split(" ");

    const set1 = new Set(tokens1);
    const set2 = new Set(tokens2);

    const intersection = new Set([...set1].filter((x) => set2.has(x)));

    const union = new Set([...set1, ...set2]);

    const similarity = (intersection.size / union.size) * 100;
    return similarity;
}

calculateBtn.addEventListener("click", () => {
    const text1 = text1Input.value;
    const text2 = text2Input.value;

    const similarity = calculateSimilarity(text1, text2);
    resultElement.textContent = similarity.toFixed()
})