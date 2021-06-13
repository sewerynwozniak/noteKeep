import {AddNote} from './classes/addNote'
import { Notes } from './classes/notes';
import { AppStorage } from './classes/appStorage';
import { Note } from './classes/note';
import './main.scss'





export class App {
    
    appStorage = new AppStorage
  
  constructor(){
    this.loadNotes()
    
 
  }

    loadNotes():void{
        const notes = new Notes(this.appStorage.getNotes());
        new AddNote(notes, this.appStorage)
    }


}


const app = new App()

