class MyHeader extends HTMLElement {
    connectedCallback()
    {
    this.innerHTML = '<div class="headerWrapper"> <div class="box a"> <header> <h1 style = "font-size: 25px;">&nbsp;Emma<br>&nbsp;Alejandra<br>&nbsp;Mayoral&nbsp;<br></h1> </header> </div> <div class="box b"> <nav> <table width="100%"> <th><h4><a href="index.html">Home</a></h4></th> <th><h4><a href="Skills.html">Skills</a></h4></th> <th><h4><a href="Education.html">Education</a></h4></th> <th><h4><a href="WorkExperience.html">Work Experience</a></h4></th> <th><h4><a href="Projects.html">Projects</a></h4></th> <th><h4><a href="Certificates.html">Certificates</a></h4></th><th><h4><a href="Affiliations.html">Affiliations</a></h4></th></table> </nav> </div> </div>'
    }
}
customElements.define('my-header',MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback()
    {
    this.innerHTML = '<footer><br><div class="footer"> <h4><br>Contact&nbsp;</h4> <p><a href="http://www.linkedin.com/in/emma-mayoral">LinkedIn</a></p> <p><a href="https://github.com/gatogap">Github</a></p> <p><a href="https://devpost.com/emma-a-mayoral?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav">Devpost</a></p></footer> '
    }
}
customElements.define('my-footer',MyFooter)