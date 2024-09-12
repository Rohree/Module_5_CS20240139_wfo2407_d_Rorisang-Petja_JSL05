import { songs, guardians } from "/data.js";


// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    const playlists = {};
    Object.keys(guardians).map(guardian => {
        const favGenre = guardians[guardian]
        const playlist = songs.filter(song => song.genre === favGenre)
        playlists[guardian] = playlist
    })
    return playlists
}

function displayPlaylist(playlists){
    const playlistDiv = document.getElementById("playlists")
    for(const guardian in playlists){
        const guardianDiv = document.createElement("div")
        guardianDiv.className = "playlist"
        guardianDiv.innerHTML = `<h3>${guardian}'s playlist</h3>`

        const ul = document.createElement("ul")

        playlists[guardian].forEach(song => {
            const li = document.createElement("li")
            li.className = "song"
            li.innerHTML = `<span class="song-title">${song.title}</span> by ${song.artist}`
            ul.appendChild(li)
            
        });

        guardianDiv.appendChild(ul)
        playlistDiv.appendChild(guardianDiv)
    }
}

// Call generatePlaylist and display the playlists for each Guardian
const guardianPlaylist = generatePlaylist(guardians, songs);
displayPlaylist(guardianPlaylist)
