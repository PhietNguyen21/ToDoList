import { toDo } from "./toDo.js";
import { ToDoList } from "./toDoList.js";

let doList=new ToDoList();

let completeList=new ToDoList();

// Get ele

const getEle=(id)=>{
    return document.getElementById(id);
}


// Thêm toDo

let themToDo=()=>{
    var task=getEle("newTask").value;
    var ulToDo=getEle("todo");

   if(task!=""){
    var tD=new toDo(task,"todo");
    doList.addToDo(tD);
   
   }
    // console.log(doList.tdList);
    showDoList(ulToDo);
    getEle("newTask").value="";
}

window.themToDo=themToDo;

let showDoList=(ulToDo)=>{
    ulToDo.innerHTML=doList.inToDO();
}


// Delete

let RemoveTD=(e)=>{
    // console.log(e);
    let tdIndex=e.currentTarget.getAttribute("data-index");
    let tdStatus=e.currentTarget.getAttribute("data-status");
    let ulToDo=getEle("todo");
    let ulCompleted=getEle("completed");


    if(tdStatus=="todo")
    {
        doList.reMoveToDo(tdIndex);
    showDoList(ulToDo);
    }else if(tdStatus=="complete")
    {
        completeList.reMoveToDo(tdIndex);
        showTdComplete(ulCompleted);
    }else{
        alert("Cannot Remove");
    }


    
}

window.RemoveTD=RemoveTD;


let completeTd=(e)=>{
   
    let tdIndex=e.currentTarget.getAttribute("data-index");
    let tdStatus=e.currentTarget.getAttribute("data-status");
    let ulToDo=getEle("todo");
    let ulCompleted=getEle("completed");
    // start <=index <end hàm slice
   
    if(tdStatus=="todo")
   {
    let tdCompleteItem=doList.tdList.slice(tdIndex,tdIndex+1);
    // console.log(tdCompleteItem[0]);
    let objToDo=new toDo(tdCompleteItem[0].textDo,"complete");
    console.log(objToDo);
//    Cách 1:
    // Gỡ đối tượng khỏi mảng doList
    // doList.reMoveToDo(tdIndex);
    // ulToDo.innerHTML="";
    // // Add đối tượng vào mảng completeList 
    // addTdComplete(objToDo);
    // console.log(doList.tdList);
    // console.log(completeList.tdList);
    // showTdComplete(tdComplete);
    moveToDo(doList,completeList,objToDo,tdIndex);

    showDoList(ulToDo);
    showTdComplete(ulCompleted);
   }else if(tdStatus=="complete"){
    let undoItem=completeList.tdList.slice(tdIndex,tdIndex+1);
    // console.log(tdCompleteItem[0]);
    let objToDo=new toDo(undoItem[0].textDo,"todo");
    moveToDo(completeList,doList,objToDo,tdIndex);
   
    showDoList(ulToDo);
    showTdComplete(ulCompleted);
   }else{
    alert("CANNOT MOVE");
   }

}
window.completeTd=completeTd;

const moveToDo=(depart,arrival,obj,index)=>{
    depart.reMoveToDo(index);
    arrival.addToDo(obj);
}

let showTdComplete=(tdCompleted)=>{
   tdCompleted.innerHTML=completeList.inToDO();
}



let sortABC=()=>{
    let ulToDo=getEle("todo");
    doList.sortDoList(false);
    showDoList(ulToDo);

} 

window.sortABC=sortABC;

let sortDES=()=>{
    let ulToDo=getEle("todo");
    doList.sortDoList(true);
    showDoList(ulToDo);

}

window.sortDES=sortDES;