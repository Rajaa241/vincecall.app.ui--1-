import { userFields } from "./Fields";

export const getUserFields =(keys =[]) =>{
    let fields = [];
    keys.forEach((key)=>{
        const field = userFields[key];
        //avoid adding duplicate data   
        if(!fields.includes(field)) {
            fields.push(field);
        }        
    });
    return fields;
}