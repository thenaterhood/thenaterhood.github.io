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

function run_outdated_content_alert(element_id, item_date, display, message)
{
    if (! display) {
        display = "inline-block";
    }

    if (! message) {
        message = "This article was written more than two years ago, and may contain outdated information.";
    }

    item_date = new Date(item_date);
    let today = new Date();
    // A little rough, but we're not worried about being
    // totally exact here.
    let one_day = 1000 * 60 * 60 * 24;
    let one_year = 365 * one_day;
    let diff = today.getTime() - item_date.getTime();

    if (diff > 2*one_year) {
        document.getElementById(element_id).textContent = message;
        document.getElementById(element_id).style.display = display;
        return true;
    }

    return false;
}

