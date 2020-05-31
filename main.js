
var projects = [
                {
                    name:'Colors-Go',
                    url:'https://adipinhas.github.io/colors-go/#/',
                    tech:'React.js, css',
                    isPhoneImg:false,
                    img:'../img/Colors.png',
                    des:'Build your own palette of colors and use it easy',
                    codeUrl:'https://github.com/adipinhas/colors-go'
                },
                {
                    name:'Spot-It',
                    url:'https://i-posts.firebaseapp.com/#/',
                    tech:'React.js & hooks, Redux, Firebase, css',
                    isPhoneImg:true,
                    img:'../img/Spot-it1.jpg',
                    des:'Play with your friend the popular cadrs game',
                    codeUrl:'https://i-posts.web.app/#/'
                }

            ]

renderProjects(projects)
function renderProjects (projects) {
    var str = ''
    for(var i = 0;i<projects.length;i++){
       str+= `<div class="project">
                            <div class="project-link">
                                    <h4> ${projects[i].name}</h4><img ${projects[i].isPhoneImg && `class="project-img-phone"` } ${!projects[i].isPhoneImg && 'class="project-img-desktop"'} src="${projects[i].img}" alt=""> 
                            </div>
                            <div>
                             Technologies: ${projects[i].tech}
                            </div>
                                ${projects[i].des}
                                <div class="links">
                                    <a class="link"  href="${projects[i].url}" >View Project</a>
                                    <a class="link" href="${projects[i].codeUrl}">View code</a>
                                </div>
                        </div>


       <div/>
       `
       
       
    }
       
     
    document.querySelector('#projects').innerHTML=str

}