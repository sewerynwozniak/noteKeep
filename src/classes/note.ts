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


        this.notes.notesContainer.innerHTML+= this.generateNoteTemplate(this.note.id, this.note.title, this.note.body)
        const deleteButtons = this.notes.notesContainer.querySelectorAll('.noteDelete')


        deleteButtons.forEach(deleteBtn=>deleteBtn.addEventListener('click', (e)=>{
            let parent = (<HTMLElement>e.target).parentElement;
            let clickedId = parent?.getAttribute('data-id');
            this.notes.deleteNote(+clickedId!)
        }))
        
    }

}