import {noteInterface} from '../interfaces/noteInterface'
import {Notes} from './notes'



export class Note{

    note:noteInterface  
    notes:Notes

    constructor(note:noteInterface, notes:Notes){
        
        this.note=note;
        this.notes=notes
        this.getElement()
       
    }


    generateNoteTemplate(id:number, title:string, body:string):string{

        const noteTemplate = `
        <div data-id="${id}" class="noteContainer">
        <button class="noteDelete">X</button>
        <h5 contenteditable="true" class="noteTitle">${title}</h5>
        <p contenteditable="true" class="noteBody">${body}</p>
        </div>
        `
        return noteTemplate;
    }


    getElement(){     

        //console.log(this.notes)

        //return this.generateNoteTemplate(this.note.title, this.note.body);
        this.notes.notesContainer.innerHTML+= this.generateNoteTemplate(this.note.id, this.note.title, this.note.body)
        const x = this.notes.notesContainer.querySelectorAll('.noteDelete')
        //console.log(x)

        x.forEach(x=>x.addEventListener('click', (e)=>{
            let parent = (<HTMLElement>e.target).parentElement;
            let clickedId = parent?.getAttribute('data-id');
            //console.log(clickedId)

            this.notes.deleteNote(+clickedId!)

            // console.log(this.notes.notesContainer.children)
        }))
        //console.log(this.notes.notesContainer.children)
    }

}