import { taskFields } from "./Fields";

export const getTaskFields =(keys =[]) =>{
    let fields = [];
    keys.forEach((key)=>{
        const field = taskFields[key];
        //avoid adding duplicate data
        if(!fields.includes(field)) {
            fields.push(field);
        }        
    });
    return fields;
}