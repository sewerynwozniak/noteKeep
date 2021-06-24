import {AddNote} from './addNote'
import {App} from '../app'
import { Note } from './note'
import { AppStorage } from './appStorage'
import {noteInterface} from '../interfaces/noteInterface'
import { NoteParts } from '../enums/NoteParts'

export class Notes{


    notesContainer = document.querySelector('.notesContainer') as HTMLDivElement;
    notesContainerPinned = document.querySelector('.notesContainer--pinned') as HTMLDivElement;
    headerPinned = document.querySelector('.header--pinned') as HTMLHeadingElement;
    headerRest = document.querySelector('.header--rest') as HTMLHeadingElement;
    notes:Array<any>
    appStorage:AppStorage

    constructor(notes:Array<any>=[], appStorage:AppStorage){
        this.notes=notes
        this.appStorage=appStorage
        this.display();
    }


    loadNotes(notes:Array<any>=[]){
        this.notes = notes
        this.display()
    }


    deleteNote(id:number){
        this.appStorage.deleteNote(id)
        this.loadNotes(this.appStorage.getNotes()) 
    }

    changeNote(id:number, currentTitle:string, notePart:NoteParts){
        this.appStorage.editNotes(id, currentTitle, notePart)
    }


    display(){
        this.notesContainer.innerHTML=''
        this.notesContainerPinned.innerHTML=''
        this.notes.map(note=>{
            new Note(note as noteInterface, this)}
        )
        const numberOfPinnedNotes = this.notesContainerPinned.children.length
        if(numberOfPinnedNotes>0){
           this.headerPinned.style.display='block' 
           this.headerRest.style.display='block' 
        }else{
            this.headerPinned.style.display='none' 
            this.headerRest.style.display='none' 
        }
    }



}

