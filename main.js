const socialLinks = {
    github: 'faellira',
    youtube: 'rocketseat',
    facebook: 'facebook',
    instagram: 'faelagls',
    twitter: 'faelfps'
}

function changeMediaLinks() {
    for (let li of socialMedias.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${socialLinks[social]}`
        
    }
}

changeMediaLinks()


function getGitHubProfileInfo(){
    const url = `https://api.github.com/users/${socialLinks.github}`

    fetch(url).then(res => res.json()).then(data => {
        userImage.src = data.avatar_url
        userName.textContent = data.name
        userLoc.textContent = data.location
        userLink.href = data.html_url
        userLogin.textContent = data.login
        userBio.textContent = data.bio     
    })
}

getGitHubProfileInfo()