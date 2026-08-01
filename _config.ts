import lume from "lume/mod.ts";

const site = lume({
  src: "src",
  dest: "_site",
});

site.add("styles.css");
site.add("blog/feed.xml");

export default site;
