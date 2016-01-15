function populate_latest_gh_release(repo_name)
{
  $.getJSON(
    "https://api.github.com/repos/thenaterhood/"+repo_name+"/tags",
    function(json){
      var repo_data = {
        "version": json[0]["name"],
        "link": "https://github.com/thenaterhood/"+repo_name+"/releases/latest"
      };

      var tag = document.getElementById('ver-'+repo_name);
      tag.innerHTML = Mustache.render(
        " (latest: <a href='{{link}}'>{{version}}</a>)",
        repo_data);
    })
}
