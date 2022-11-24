let url = "./data.json"
let resumeList = document.querySelector(".resume-list");
let workList = document.querySelector(".work");
let schoolList = document.querySelector(".education");



async function workFinder() {
    let response = await fetch(url);
  
    if (response.ok) {
        let data = await response.json();
        /* console.log(data); */
   
        for (let i = 0; i < data.jobs.length; i++) {
            let job = data.jobs[i].job;
            let type = data.jobs[i].type;
          
            let workH4 = document.createElement('h4');
            let typeP = document.createElement('p');
            workH4.innerHTML = job;
            typeP.innerHTML = type;
            workList.appendChild(workH4);   
            workList.appendChild(typeP);   
  
  
        }
   
  
      }
    }
  
  
  
  async function schoolFinder() {
    let response = await fetch(url);
  
    if (response.ok) {
        let data = await response.json();
        console.log(data);
   
        for (let i = 0; i < data.schools.length; i++) {
            var school = data.schools[i].school;
  
            let schoolH4 = document.createElement('h4');
  
           schoolH4.innerHTML = school;
  
  
          
            schoolList.appendChild(schoolH4);  
           }
   
  
      }
    }
  
    workFinder();
    schoolFinder();