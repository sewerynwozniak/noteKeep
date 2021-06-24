import {noteInterface} from '../interfaces/noteInterface'
import {Notes} from './notes'
import {NoteParts} from '../enums/NoteParts'


export class Note{

    note:noteInterface  
    notes:Notes

    constructor(note:noteInterface, notes:Notes){
        
        this.note=note;
        this.notes=notes
        this.getElement()
       
    }


    generateNoteTemplate(id:number, title:string, body:string, color:string, date:string):string{

        const noteTemplate = `
            <div style='background-color:${color}' data-id="${id}" class="noteContainer">
                <div class="noteContainer__topBar">
                    <button class="notePin">P</button>
                    <button class="noteDelete">X</button>
                </div>          
                <h5 contenteditable="true" class="noteTitle">${title}</h5>
                <p contenteditable="true" class="noteBody">${body}</p>
                <span class="noteDate">${date}</span>
            </div>
        `
        return noteTemplate;
    }


    getElement(){     
        let deleteButtons:NodeListOf<Element>;
        let notePins:NodeListOf<HTMLButtonElement>;
        let titleInputs:NodeListOf<HTMLHeadingElement>;
        let bodyInputs:NodeListOf<HTMLParagraphElement>;

      
        if(this.note.pin){
            this.notes.notesContainerPinned.innerHTML+= this.generateNoteTemplate(this.note.id, this.note.title, this.note.body, this.note.color, this.note.date)
             deleteButtons = this.notes.notesContainerPinned.querySelectorAll('.noteDelete')
             titleInputs = this.notes.notesContainerPinned.querySelectorAll('.noteTitle');
             bodyInputs = this.notes.notesContainerPinned.querySelectorAll('.noteBody');
             notePins = this.notes.notesContainerPinned.querySelectorAll('.notePin');
        }else{
            this.notes.notesContainer.innerHTML+= this.generateNoteTemplate(this.note.id, this.note.title, this.note.body, this.note.color, this.note.date)
             deleteButtons = this.notes.notesContainer.querySelectorAll('.noteDelete')
             titleInputs = this.notes.notesContainer.querySelectorAll('.noteTitle');
             bodyInputs = this.notes.notesContainer.querySelectorAll('.noteBody');
             notePins = this.notes.notesContainer.querySelectorAll('.notePin');
        }

        
        deleteButtons.forEach(deleteBtn=>deleteBtn.addEventListener('click', (e)=>{
            let parent = (<HTMLElement>e.target).parentElement?.parentElement;
            let clickedId = parent?.dataset.id;
            this.notes.deleteNote(+clickedId!)
        }))


        titleInputs.forEach(titleInput=>titleInput.addEventListener('keyup',(e)=>this.editNote(titleInput,e, NoteParts.title)))
        bodyInputs.forEach(bodyInput=>bodyInput.addEventListener('keyup',(e)=>this.editNote(bodyInput,e, NoteParts.body)))


        notePins.forEach(pin=>pin.addEventListener('click', (e:any)=>this.togglePin(pin,e)))

    }


     togglePin(el:any, e:any){


        console.log(e.target)
        let target = e.target
        target.classList.toggle('notePin--pinned')

    }

    

    editNote(el:any,e:any, notePart:NoteParts){
        let parent = (<HTMLElement>e.target).parentElement;
        let clickedId = parent?.dataset.id;
        let currentText = el.textContent;
        
        if(notePart==NoteParts.title){
            this.notes.changeNote(+clickedId!, currentText!, NoteParts.title)
        }else{
            this.notes.changeNote(+clickedId!, currentText!, NoteParts.body)
        }

        
    }




}

