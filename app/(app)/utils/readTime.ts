export function readTime(words: string){
    const trimString = words.trim();
    const wordsArray = trimString.split(/\s+/);
    const wordsCount = wordsArray.length;

    const averageReadTime: number = 185;
    return  `${(wordsCount / averageReadTime).toFixed(0)} min read`;
}