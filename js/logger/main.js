const content=document.querySelector('#content');
const title = document.querySelector("#title");
export const log = (toLog)=>{
    const element=document.createElement("p")
    element.innerHTML=">_"+toLog;
    content.appendChild(element)
}
export const logTitle= toLog =>{
    title.append(toLog);
}