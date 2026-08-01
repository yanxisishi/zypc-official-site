const fencedCodePattern = /^[ \t]*(`{3,}|~{3,})[^\n]*\n[\s\S]*?^[ \t]*\1[ \t]*$/gm;

export const countArticleWords = (markdown: string): number => {
  const visibleText = markdown
    .replace(fencedCodePattern, ' ')
    .replace(/`{1,2}[^`\n]*`{1,2}/g, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/^\s*\[[^\]]+\]:\s+\S+.*$/gm, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\b(?:https?:\/\/|www\.)[^\s<]+/gi, ' ');

  const hanCharacters = visibleText.match(/\p{Script=Han}/gu)?.length ?? 0;
  const nonHanWords = visibleText
    .replace(/\p{Script=Han}/gu, ' ')
    .match(/[\p{L}\p{N}]+(?:['’._/-][\p{L}\p{N}]+)*/gu)?.length ?? 0;

  return hanCharacters + nonHanWords;
};
