import {Notes} from './notes'
import {AppStorage} from './appStorage'
import {Colors} from '../enums/Colors'


export class AddNote{


formTitle = document.querySelector('.form__title') as HTMLInputElement;
formBody = document.querySelector('.form__body') as HTMLInputElement;
formBottomBar = document.querySelector('.form__bottomBar') as HTMLInputElement;
btnAddNote = document.querySelector('.form__btn--add') as HTMLButtonElement;
btnPin = document.querySelector('.form__btnPin') as HTMLButtonElement;
btnCloseForm = document.querySelector('.form__btn--close') as HTMLButtonElement;
formColor = document.querySelectorAll('.form__color') as NodeListOf<HTMLDivElement>
notes:Notes;
appStorage:AppStorage;
pinSelected =false;
color=Colors.black;


constructor(notes:Notes, appStorage:AppStorage){
    this.btnAddNote.addEventListener('click', ()=>this.addNote())
    this.btnPin.addEventListener('click', ()=>this.click())
    this.formBody.addEventListener('click', ()=>this.openExpandedMenu())
    this.btnCloseForm.addEventListener('click', ()=>this.closeExpandedMenu())
    this.notes = notes
    this.appStorage = appStorage
    this.formColor.forEach(form => {
    form.addEventListener('click', ()=>this.pickColor(form))
    });

}


click(){
    this.btnPin.classList.toggle('clicked');
    this.pinSelected=!this.pinSelected 
}


pickColor(form:any){
    let color = form.dataset.color;

    this.formColor.forEach((e:any)=> {
        e.classList.remove('clickedColor')
    });

    form.classList.add('clickedColor')


    switch(color){
        case 'black':
        this.color=Colors.black
        break;
        case 'red':
        this.color=Colors.red
        break;
        case 'blue':
        this.color=Colors.blue
       
    }

}


addNote(){


    let generalDate = new Date()


    const id = AppStorage.lastId+1;
    AppStorage.lastId = id;
    const title = this.formTitle.value;
    const body = this.formBody.value;
    const pin = this.pinSelected;
    const color = this.color
    const date = `${generalDate.getDate()}.${generalDate.getMonth()+1}.${generalDate.getFullYear()}`


    this.appStorage.saveNotes({id, title, body, pin, color, date})
    this.notes.loadNotes(this.appStorage.getNotes())

    //reset values
    this.formTitle.value='';
    this.formBody.value='';
    this.btnPin.classList.remove('clicked')
    this.pinSelected=false
    this.color=Colors.black
    this.formColor.forEach((e:any)=> {
        e.classList.remove('clickedColor')
    });
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


