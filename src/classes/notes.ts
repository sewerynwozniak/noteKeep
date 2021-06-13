import {AddNote} from './addNote'
import {App} from '../app'
import { Note } from './note'
import {noteInterface} from '../interfaces/noteInterface'

export class Notes{


    notesContainer = document.querySelector('.notesContainer') as HTMLDivElement;
    notes:Array<any>

    constructor(notes:Array<any>=[]){
        this.notes=notes
        this.display();
    }



    deleteNote(id:number){
        this.notes =this.notes.filter(el=>id!=el.id)
        this.display()
    }


    display(){
        this.notesContainer.innerHTML=''
        this.notes.map(note=>{
            new Note(note as noteInterface, this)}
        )
    }



}