let currentTab = "all"; 
const tabActive = ["bg-[#0052cc]", "border-[#0052cc]", "text-white", "rounded-full"];
const tabInactive = ["bg-transparent", "border-[#0052cc]", "text-gray-600", "rounded-full"];
const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");
const deleteContainer = document.getElementById("delete-container");
const emptyStat = document.getElementById("empty");



function switchTab(tab) {
    const tabs = ["all", "interview", "rejected"];
    currentTab = tab;
    for (const t of tabs) {
        const tabName = document.getElementById("tab-" + t);
        emptyStat.classList.add("hidden");
        
        if ( t === tab ){
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive); 
        } else {
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive);
        }
    }
    if(tab === "all"){
        emptyStat.classList.toggle("hidden", allContainer.children.length > 0);
        allContainer.classList.remove("hidden");
        interviewContainer.classList.add("hidden");
        rejectedContainer.classList.add("hidden");
    } else if(tab === "interview"){
        emptyStat.classList.toggle("hidden", interviewContainer.children.length > 0);
        allContainer.classList.add("hidden"); 
        interviewContainer.classList.remove("hidden");
        rejectedContainer.classList.add("hidden");
    } else if(tab === "rejected"){
        emptyStat.classList.toggle("hidden", rejectedContainer.children.length > 0);
        allContainer.classList.add("hidden"); 
        interviewContainer.classList.add("hidden");
        rejectedContainer.classList.remove("hidden");
    }
    
}  

switchTab(currentTab);     

// Stats update 
const totalStat = document.getElementById("stat-total");
const statInterview = document.getElementById("stat-interview");
const statRejected = document.getElementById("stat-rejected");
const availableStat = document.getElementById("available");

document.getElementById("jobs-container").addEventListener("click", function(event) {
    const clickedElement = event.target;
    const card = clickedElement.closest(".card"); 
    const parent = card.parentElement;
    const statusElement = card.querySelector(".status"); 

    if(clickedElement.classList.contains('interview')) {
        statusElement.innerText = "Interview";
        interviewContainer.appendChild(card);
        updateStats();
    } else if(clickedElement.classList.contains('rejected')) {
        rejectedContainer.appendChild(card);
        statusElement.innerText = "Rejected";
        updateStats();
    } else if(clickedElement.classList.contains('delete')) {
        parent.removeChild(card);
        updateStats();
    }
});

function updateStats() {
    const counts={
        all: allContainer.children.length,
        interview: interviewContainer.children.length,
        rejected: rejectedContainer.children.length
    }
    totalStat.innerText = counts.all;
    statInterview.innerText = counts.interview;
    statRejected.innerText = counts.rejected;
    availableStat.innerText = counts[currentTab]; 
    


}

updateStats();