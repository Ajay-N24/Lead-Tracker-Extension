let myLeads=[];
// let myLeads1=`["Ajay"]`
// myLeads1=JSON.parse(myLeads1)
// myLeads1.push("ajayN")
// myLeads1=JSON.stringify(myLeads1)
const inputEl=document.getElementById('input-el');
const ulEl=document.getElementById('uli');
const deleteBtn=document.getElementById('delete-btn');
const tab=document.getElementById('tab-btn');
tab.addEventListener("click",function(){
    chrome.tabs.query({active: true,currentWindow: true},function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })
})
let stat=0;
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"));
if(leadsFromLocalStorage)
{
    myLeads=leadsFromLocalStorage;
    render(myLeads);
}
deleteBtn.addEventListener("dblclick",function()
{
    localStorage.clear();
    myLeads=[];
    render(myLeads)
})
function render(lead){
    let listItems="";
    for(let i=stat;i<lead.length;i++)
    {
        // listItems+="<li>"+"<a href='"+myLeads[i]+"' target='_blank'>"+myLeads[i]+"</a>"+"</li>";
        listItems+=
        `
        <li>
        <a href='${lead[i]}' target='_blank'>
        ${lead[i]}
        </a>
        </li>
        `
        // const ele=document.createElement("li");
        // ele.textContent=myLeads[i];
        // ulEl.append(ele);
        // stat++;
    }
    ulEl.innerHTML=listItems; 
}
document.getElementById('input-btn').addEventListener("click",function(){
    let x=inputEl.value
    myLeads.push(x)
    inputEl.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    // localStorage.getItem("myleads")
});
// let listItems="";
// localStorage.setItem("myLeads","www.google.com");
// let aj=localStorage.getItem("myLeads")
// localStorage.clear();
function getUrl(){
    return window.location.href;
}
// function gt(){
//     // if(txt)
//     // {
//     //     let a=getUrl();
//     //     myLeads.push(a);
//     // }
//     // else{
//     //     let txt=document.getElementById('input-el').value;
//     //     myLeads.push(txt);
//     // }
//     let txt=document.getElementById('input-el').value;
//     myLeads.push(txt);
//     inputEl.value=null;
//     renderLeads()
// }
// function renderLeads() {
//     let listItems = ""
//     for (let i = 0; i < myLeads.length; i++) {
//         listItems += `
//             <li>
//                 <a target='_blank' href='${myLeads[i]}'>
//                     ${myLeads[i]}
//                 </a>
//             </li>
//         `
//     }
//     ulEl.innerHTML = listItems  
// }
