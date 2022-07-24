window.addEventListener('load', function() {
  var article_template  = document.getElementById("articleTemplate").innerHTML;
  var compiled_template = Handlebars.compile(article_template);
  fetch('./data/data.json').then(response => {
  return response.json();
  }).then(data => {
      document.getElementById("newsContainer").innerHTML = compiled_template(data);
  }).catch(err => {
      console.log('Unable to load file');
  });
});

