import markdownIt from "markdown-it";

export default function (content, inline = false) {
  const markdown = markdownIt();
  if (inline) {
    return markdown.renderInline(content);
  }
  return markdown.render(content);
}
