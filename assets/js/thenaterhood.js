function populate_latest_gh_release(repo_name, repo_org)
{
    if (repo_org === '' || repo_name === '') {
         return;
    }

    fetch(`https://api.github.com/repos/${repo_org}/${repo_name}/tags`, {mode: 'cors'})
    .then((response) => {
        if (response.ok) {
            return response.json();
        }

        throw new Error("HTTP error " + response.status);
    })
    .then((json) => {
        var repo_data = {
            "version": json[0]["name"],
            "link": `https://github.com/${repo_org}/${repo_name}/releases/latest`
        };

        var tag = document.getElementById('ver-'+repo_name);
        if (!tag) {
            return;
        }

        tag.innerHTML = Mustache.render(
            " (latest: <a href='{{link}}'>{{version}}</a>)",
            repo_data);
    })
    .catch((error) => {
        console.log(error);
    })
}

function populate_outdated_content_alert(element_id, item_date, display, message)
{
    if (!display) {
        display = "inline-block";
    }

    if (!message) {
        message = "This article was last updated over two years ago and may contain outdated information.";
    }

    item_date = new Date(item_date);
    let today = new Date();
    // A little rough, but we're not worried about being
    // totally exact here.
    let one_day = 1000 * 60 * 60 * 24;
    let one_year = 365 * one_day;
    let diff = today.getTime() - item_date.getTime();

    if (diff > 2*one_year) {
        const alert_element = document.getElementById(element_id);
        if (!alert_element) {
            return;
        }
        alert_element.textContent = message;
        alert_element.style.display = display;
    }
}

function populate_time_to_read(destination_id, content_id, with_separator) {

    const wpm = 200; // average reading speed
    const word_length = 5; // standardized word length

    const content = document.getElementById(content_id)
    if (!content) {
        return;
    }

    const text = content.textContent;

    let totalWords = 0;
    for (word of text) {
        totalWords += word.length / word_length;
    }

    const time_to_read = Math.round(totalWords / wpm);
    if (time_to_read < 1) {
        return;
    }

    const destination = document.getElementById(destination_id);
    if (!destination) {
        return;
    }

    let message = time_to_read.toString() + ' minutes to read';

    if (time_to_read === 1) {
        message = time_to_read.toString() + ' minute to read';
    }

    if (with_separator) {
        message = ' · ' + message;
    }

    destination.textContent = message
}
