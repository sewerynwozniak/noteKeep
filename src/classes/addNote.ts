import {Notes} from './notes'
import {Note} from './note'

export class AddNote{


formTitle = document.querySelector('.form__title') as HTMLInputElement;
formBody = document.querySelector('.form__body') as HTMLInputElement;
formBottomBar = document.querySelector('.form__bottomBar') as HTMLInputElement;
btnAddNote = document.querySelector('.form__btn--add') as HTMLButtonElement;
btnCloseForm = document.querySelector('.form__btn--close') as HTMLButtonElement;
notes:Notes;
newNote:object;

constructor(notes:Notes){
    this.btnAddNote.addEventListener('click', ()=>this.addNote())
    this.formBody.addEventListener('click', ()=>this.openExpandedMenu())
    this.btnCloseForm.addEventListener('click', ()=>this.closeExpandedMenu())
    this.newNote={};
    this.notes = notes
    //console.log(notes)
}


addNote(){
    const title = this.formTitle.value;
    const body = this.formBody.value;

    this.notes.notes.push({title, body})
    console.log(this.formTitle.value)
    console.log(this.formBody.value)

    this.formTitle.value='';
    this.formBody.value='';
    console.log(this.notes)
}


openExpandedMenu(){
    this.formTitle.classList.remove('hidden');
    this.formBottomBar.classList.remove('hidden');
}

closeExpandedMenu(){
    this.formTitle.classList.add('hidden');
    this.formBottomBar.classList.add('hidden');   
}


}


