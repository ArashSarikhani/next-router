import {action, observable} from "mobx";


class Task {
    @observable TaskDetail = {
        Title: "",
        Date: "",
        
    };
    @observable Flag = 0;
}


export default Task;