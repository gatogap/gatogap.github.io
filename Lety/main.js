class MyHeader extends HTMLElement {
    connectedCallback()
    {
    this.innerHTML = '<div class="headerWrapper"> <div class="box a"> <header> <h1 style = "font-size: 25px;">&nbsp;Leticia<br>&nbsp;Hernandez<br>&nbsp;Gomez&nbsp;<br></h1> </header> </div> <div class="box b"> <nav> <table width="100%"> <th><h4><a href="index.html">Home</a></h4></th> <th><h4><a href="Articles.html">Articles</a></h4></th> <th><h4><a href="Recordings.html">Recordings</a></h4></th> <th><h4><a href="Questionnaire.html">FAQ</a></h4></th> <th><h4><a href="Resources.html">Resources</a></h4></th> </table> </nav> </div> </div>'
    }
}
customElements.define('my-header',MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback()
    {
    this.innerHTML = '<footer><br><div class="footer"> <h4><br>Contact&nbsp;</h4> <p>Email: *email goes here*;</p> <p>Meeting Dates and Hours;<br>details here;</p> <p><a href="LeticiaGomez.html">Zoom Link Here</a></p> </footer> '
    }
}
customElements.define('my-footer',MyFooter)