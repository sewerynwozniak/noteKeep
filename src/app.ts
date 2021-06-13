import {AddNote} from './classes/addNote'
import { Notes } from './classes/notes';
import { Note } from './classes/note';
import './main.scss'



const list =[
    {
        id:1,
        title:'Zakupy',
        body:'Wstąpić do Lidla'
    },
    {
        id:2,
        title:'Nauka',
        body:'Nauka przyrki'
    },
]


export class App {
    
  
  constructor(){
    this.loadNotes()
 
  }

    loadNotes():void{
        const notes = new Notes(list);
        new AddNote(notes)
    }


}


const app = new App()

