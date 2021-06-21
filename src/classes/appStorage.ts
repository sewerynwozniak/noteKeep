import { NoteParts } from '../enums/NoteParts'
import {noteInterface} from '../interfaces/noteInterface'


export class AppStorage{

    static lastId =0


    getNotes(){
        const list =[] as any
        Object.keys(localStorage).forEach(el=>{
            const id = localStorage.getItem(el)
            if(/\d/.test(id!)){
                let id = JSON.parse(localStorage.getItem(el)!).id;
                if(id>AppStorage.lastId){
                    AppStorage.lastId = id
                }
                const element = JSON.parse(localStorage.getItem(el)!)
                list.push(element)
            }  
        })
        list.sort((a:any,b:any)=>b.id-a.id)
        return list
    }




    saveNotes(obj:noteInterface){
        localStorage.setItem(JSON.stringify(obj.id), JSON.stringify(obj))
    }




    editNotes(id:number, currentText:string, noteParts:NoteParts){

        const element = JSON.parse(localStorage.getItem(id.toString())!)
        if(noteParts==NoteParts.title){
            let editedTitle =element.title=currentText
            let editedNote = {...element, editedTitle}
            this.saveNotes(editedNote)
        }else{
            let editedBody =element.body=currentText
            let editedNote = {...element, editedBody}
            this.saveNotes(editedNote)
        }
        
    }



    deleteNote(id:number){
        localStorage.removeItem(id.toString())
    }


}