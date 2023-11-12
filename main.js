class MyHeader extends HTMLElement {
    connectedCallback()
    {
    this.innerHTML = '<div class="headerWrapper"> <div class="box a"> <header> <h1 style = "font-size: 25px;">&nbsp;Finance<br>&nbsp;&<br>&nbsp;Investment&nbsp;<br></h1> </header> </div> <div class="box b"> <nav> <table width="100%"> <th><h4><a href="index.html">Home</a></h4></th> <th><h4><a href="Articles.html">Articles</a></h4></th> <th><h4><a href="Recordings.html">Recordings</a></h4></th> <th><h4><a href="Questionnaire.html">FAQ</a></h4></th> <th><h4><a href="Resources.html">Resources</a></h4></th> </table> </nav> </div> </div>'
    }
}
customElements.define('my-header',MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback()
    {
    this.innerHTML = '<footer><br> <p style = "background-color:black; color:white; font-size:20px; padding:20px;">DISCLAIMER: All information provided on this website is for educational purposes only. This is not meant as investment recommendation or professional advice. The finance and investment club does not seek to advise anybody in the investment of any securities.</p><div class="footer"> <h4><br>Contact&nbsp;</h4> <p>Email: fandiclubcan@my.smccd.edu&nbsp;</p> <p>Meeting Dates and Hours;<br>Tuesdays 8:30 pm;</p> <p><a href="https://smccd.zoom.us/j/89860497417">Zoom Link Here</a></p> </footer> '
    }
}
customElements.define('my-footer',MyFooter)