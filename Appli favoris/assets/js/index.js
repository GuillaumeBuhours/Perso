var links = [ ['gmail.com','Gmail', 'Site de Google pour son email', 'perso', '2022'],
              ['laposte.net','La Poste', 'Site de la poste pour son email', 'perso', '2022'],
              ['slack.com','slack', 'Site de slack pour apprenant IRFA', 'pro', '2022']];

function linkstohtml(linklist){
    var str = "" ;
    for(var i = 0; i < linklist.length; i++){
      str = str + '<div><a href=' + linklist[i][0]+'>'+ linklist[i][1] + '</a></div><div class:"description">' + linklist[i][2] + '</div>';
    }
    return str;
}

function createlink(url, title, desc, theme, date){
    let newlink = [url, title, desc, theme, date];
    links.push(newlink);
}

function updatelinks(){
    document.getElementById("linkcontainer").innerHTML = linkstohtml(links);
}

function addnewlink(){
    var url = document.getElementById('urlchoice').value;
    var title = document.getElementById('titlechoice').value;
    var desc = document.getElementById('desc').value;
    var theme = document.getElementById('theme').value;

    createlink(url,title,desc,theme,"");
    updatelinks();

}

updatelinks();

