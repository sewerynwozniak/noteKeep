import {AddNote} from './addNote'
import {App} from '../app'
import { Note } from './note'
import {noteInterface} from '../interfaces/noteInterface'

export class Notes{


    notesContainer = document.querySelector('.notesContainer') as HTMLDivElement;
    notes:Array<any>

    constructor(notes:Array<any>=[]){
        //console.log('constructorrrrrrrrrrrr')
        this.notes=notes
        //console.log('notes in constructor', notes)
        //const noteDeleteBtn = document.querySelector('.noteDelete') as HTMLButtonElement
        //noteDeleteBtn.addEventListener('click', (e)=>this.deleteNote(e))
        
        this.display();
    }


    addNote(newNote:noteInterface){
        this.notes.push(newNote)
       
        this.display()
    }

    deleteNote(id:number){
        //console.log(id);
        //console.log(this.notes)
        this.notes =this.notes.filter(el=>id!=el.id)
        this.display()
    }


    display(){
        console.log(this.notes)
    
        this.notesContainer.innerHTML=''


        this.notes.map(note=>{
            new Note(note as noteInterface, this)}

        )
    }



}