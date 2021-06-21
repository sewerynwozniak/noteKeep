import {AddNote} from './classes/addNote'
import { Notes } from './classes/notes';
import { AppStorage } from './classes/appStorage';
import './main.scss'






export class App {
    
    notes:Notes
    addNotes:AddNote
    appStorage:AppStorage

  constructor(){
    this.appStorage = new AppStorage()
    this.notes = new Notes([],this.appStorage);
    this.addNotes = new AddNote(this.notes, this.appStorage)
    this.loadNotes()
  }


    loadNotes(){
        this.notes.loadNotes(this.appStorage.getNotes())
    }
   

}


const app = new App()

