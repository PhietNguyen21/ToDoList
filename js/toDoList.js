export class ToDoList{
    constructor(){
        this.tdList=[];
    }
   
    addToDo(toDo)
    {
        this.tdList.push(toDo);
    }

    inToDO()
    {
        let content="";
        content=this.tdList.reduceRight((tlContent,item,index)=>{
             tlContent += `
            <li>
                <span>${item.textDo}</span>

               <div class="buttons">
               <button class="remove" onclick="RemoveTD(event)" data-index="${index}"  data-status="${item.status}">
               <i class="fa fa-trash-alt"></i>
               </button>

               <button class="complete" data-index="${index}" onclick="completeTd(event)" data-status="${item.status}">
               <i class="fa fa-check-circle"></i>
               </button>
               </div>
            </li>
            `
            return tlContent;
        },'');
        return content;
    }

    reMoveToDo(index){
        this.tdList.splice(index,1);
    }

// hàm sắp xếp
    sortDoList(isDES){
        this.tdList.sort((todo,nextToDo)=>{
            const textA=todo.textDo.toLowerCase();
            const textB=nextToDo.textDo.toLowerCase();

            // ASC
            return textB.localeCompare(textA);
        });

        if(isDES)
        {
            // sắp xếp giảm dần
            this.tdList.reverse();
        }
    }
}