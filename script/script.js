let interviewList = []; 
let rejectedList = [];
let totalJobs = document.getElementById("total");
let totalInterviews = document.getElementById("interviewCount");
let totalRejected = document.getElementById("RejectedCount");

const allJobsCard = document.getElementById("all-jobs-cards")
const jobsSpan = document.getElementsByClassName("total");

const mainContainer = document.querySelector("main"); 

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-btn");
const rejectedFilterBtn = document.getElementById("rejected-btn");
const filteredSection = document.getElementById("filtered-section");


function calculateCount(){
    totalJobs.innerText = allJobsCard.children.length;
    jobsSpan[0].innerText = allJobsCard.children.length;
    totalInterviews.innerText = interviewList.length;
    totalRejected.innerText = rejectedList.length;
}
calculateCount();

function toggleStyle(buttonId){
    const buttons = [allFilterBtn, interviewFilterBtn, rejectedFilterBtn];
    buttons.forEach(button => {
        if(button.id === buttonId){
            button.classList.add("bg-blue-500", "text-white");
            button.classList.remove("bg-gray-300");
        } else {
            button.classList.remove("bg-blue-500", "text-white");
            button.classList.add("bg-gray-300");
        }
    });
}
mainContainer.addEventListener("click", function(event){
    const parentNode = event.target.parentNode.parentNode;
    const jobTitle = parentNode.querySelector("h1").innerText;
    const jobPosition = parentNode.querySelector("p:nth-child(2)").innerText;
    const salary = parentNode.querySelector("p:nth-child(3)").innerText;
    const statusElement = parentNode.querySelector("p.status");
    const discription = parentNode.querySelector("p.discription").innerText;
    const jobData = {
        title: jobTitle,
        position: jobPosition,
        salary: salary,
        status: statusElement.innerText,
        discription: discription
    }
    const existingJob = interviewList.find(item => item.title == jobData.title); 
    if (!existingJob) {
        interviewList.push(jobData);
    }
    renderInterviewList()   
}
)
function renderInterviewList(){
    filteredSection.innerHTML = "";
    for(let job of interviewList){
        const jobCard = document.createElement("div"); 
        jobCard.classList.add("flex", "justify-between", "border", "p-10", "mb-5");
        jobCard.innerHTML = `
            <div class="space-y-4">
                <h1 class="job-title">${job.title}</h1>
                <p class="job-position">${job.position}</p>
                <p class="salary">${job.salary}</p>
                <p class="text-blue-900 status">${job.status}</p>
                <p class="discription">${job.discription}</p>   
            </div>
            <div class="flex gap-2">
                <button class="interview-btn text-green-400">INTERVIEW</button>
            </div>
        `
        filteredSection.appendChild(jobCard);
    }
}
    
