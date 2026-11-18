console.log("Welcome to my portfolio website");


let btn=document.getElementById("readMoreBtn");
let info=document.getElementById("moreInfo");

btn.addEventListener("click", function() {

    if(info.style.display === "none") {

        info.style.display = "block";
        btn.innerText = "Read Less";

    } else {

        info.style.display = "none";
        btn.innerText = "Read More";

    }

});


function showSkill(skill){
    let details=document.getElementById("skill-details");
    if(skill==="frontend"){
        details.innerHTML=" Frontend Development: HTML is used for structure, CSS for styling and JavaScript for interactivity.";
    }
    else if(skill==="backend"){
        details.innerHTML="Backend Development: Node.js, Express.js, EJS and REST APIs are used to build server-side applications.";
    }
      else if (skill === "programming") {
        details.innerHTML =
        "Programming Languages: C++ for problem solving, JavaScript for web development and Python for AI.";
    }

    else if (skill === "database") {
        details.innerHTML =
        "Database: SQL and MongoDB are used to store and manage data. Mongoose helps interact with MongoDB.";
    }

}
