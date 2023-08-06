function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
  for (const pos of plainTextPositions) {
    const { start, end } = pos;
    const content = plainText.substring(start, end + 1);
    htmlContent = htmlContent.replace(content, `<mark>${content}</mark>`);
  }
  return htmlContent;
}

module.exports = highlightHTMLContent;
