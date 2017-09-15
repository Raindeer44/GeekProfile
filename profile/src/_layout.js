module.exports = function ({ title, content, frontMatter }) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>GeekProfile | Jade Thornton</title>
        <!-- <title>${frontMatter.title}</title> -->
        <link rel="stylesheet" href="./css/site.css">
      </head>
      <body>
        <div class="profile">
        ${content}
        </div>
        <footer>
           page generated with &#x2665; by <a href="https://github.com/raindeer44/geekprofile">GeekProfile</a>
        </footer>
      </body>
    </html>
  `;
};
