
let repoUrl;
let commitURL;
let date;


fetch('https://api.github.com/users',  {headers: {'Authorization': gitApi}})
    .then(response => response.json())
    .then(user => {
        console.log(user);
        repoUrl = user[0].repos_url;
        fetch(repoUrl, {headers: {'Authorization': gitApi}})
            .then(response => response.json())
            .then(res => {
                console.log(res);
                commitURL = res[0].commits_url.split("{")[0];
                fetch(commitURL, {headers: {'Authorization': gitApi}})
                    .then(res => res.json())
                    .then(res => {
                        console.log(res);
                        date = res[0].commit.author.date.split("T")[0];
                        console.log(date);
                        return date;
                    })
            })
    });