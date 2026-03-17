export default {
  layout: "layouts/lesson.njk",
  permalink:
    "/smart-website/lessons/{{ page.fileSlug | replace( r/([0-9][0-9]\-)/g, '') }}/"
};
