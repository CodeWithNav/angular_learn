export class Todo{
    id:string
    title:string
    description:string
    constructor(title:string,description:string,id?:string){
        this.title = title;
        this.description = description;
        this.id = (id !== undefined) ? id : Date.now().toLocaleString();
    }
}