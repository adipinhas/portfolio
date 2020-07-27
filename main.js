
var projects = [
    {
        name:'Spot-It',
        url:'https://i-posts.firebaseapp.com/#/',
        tech:'React.js & hooks, Redux, Firebase, css',
        isPhoneImg:true,
        img:'./img/spot-it1.png',
        des:'Play with your friend the popular cadrs game',
        codeUrl:''
    },
                {
                    name:'Colors-Go',
                    url:'https://adipinhas.github.io/colors-go/#/',
                    tech:'React.js, css',
                    isPhoneImg:false,
                    img:'./img/Colorss.png',
                    des:'Build your own palette of colors and use it easy',
                    codeUrl:'https://github.com/adipinhas/colors-go'
                },
                {
                    name:'Make-It',
                    url:'https://make-it-final-spring.herokuapp.com/',
                    tech:'Vue.js, Vuex scss, node.js,',
                    isPhoneImg:false,
                    img:'https://i.ibb.co/r4Jp3kN/2020-06-01.png',
                    des:'Plan',
                    codeUrl:'https://github.com/Grape24/Final-Proj-MakeIt'
                },
                {
                    name:'Weather',
                    url:'https://adipinhas.github.io/weather-go/#/Tel%20Aviv/215854',
                    tech:'React.js,css',
                    isPhoneImg:true,
                    img:'https://i.ibb.co/TP7r35G/weather123.jpg',
                    des:'weather app',
                    codeUrl:''

                }

            ]

renderProjects(projects)
function renderProjects (projects) {
    var str = ''
    for(var i = 0;i<projects.length;i++){
       str+= `<div class="project">
                    <div class="project-link">
                        <h2> ${projects[i].name}</h2>
                        <img ${projects[i].isPhoneImg && `class="project-img-phone"` } ${!projects[i].isPhoneImg && 'class="project-img-desktop"'} src="${projects[i].img}" alt=""> 
                        ${projects[i].des}
                    </div>
                    <div class="details-view">
                    <div >
                        Technologies: ${projects[i].tech}
                    </div>
                    <div class="links">
                        <a target="_blank" class="link"  href="${projects[i].url}" >View Project</a>
                        <a target="_blank" class="link" href="${projects[i].codeUrl}">View code</a>
                    </div>
                    </div>
            </div>
       `
       
       
    }
       
     
    document.querySelector('#projects').innerHTML=str

}