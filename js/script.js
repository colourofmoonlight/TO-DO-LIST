
{  
    const tasks = [];

    const render = () => {
        let htmlString = "";

        for(const task of tasks) {
            htmlString += `
               <li>
                ${task.content}
               </li> 
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent, 
        });
        
        render();
    };
    
    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", (event) => {
            event.preventDefault();
        

            const newTaskContent = document.querySelector(".js-newTask").value.trim();
        
            if (newTaskContent === "") {
                return;
            }

            addNewTask(newTaskContent);
        });     
    };

    init();

}