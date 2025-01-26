class todolist{
    // each project alls users to write multiple sections and a todo list for each section
    // it also allows users to add a new project
    // pomodoro timer is also implemented in this class
    // it also allows users to add a new project
    // once checked off, the todo list will be moved to the completed section
    // users can also delete the todo list , section or project


    constructor(){
        this.projects = [];
    }

    constructor(section){
        this.projects = [];
        this.projects.push(section);
    }

    addProject(project){
        this.projects.push(project);
    }

    deleteProject(project){
        this.projects = this.projects.filter(item => item !== project);
    }

    addSection(project, section){
        project.addSection(section);
    }

    deleteSection(project, section){
        project.deleteSection(section);
    }

    addTodoList(project, section, todoList){
        project.addTodoList(section, todoList);
    }

    deleteTodoList(project, section, todoList){
        project.deleteTodoList(section, todoList);
    }

    checkOffTodoList(project, section, todoList){
        project.checkOffTodoList(section, todoList);
    }



}