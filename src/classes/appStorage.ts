import {noteInterface} from '../interfaces/noteInterface'


export class AppStorage{



    getNotes(){


        // const list =[
        //     {
        //         id:1,
        //         title:'Zakupy',
        //         body:'Wstąpić do Lidla'
        //     },
        //     {
        //         id:2,
        //         title:'Nauka',
        //         body:'Nauka przyrki'
        //     },
        // ]

        const list =[] as any

        for(let i=1;i<localStorage.length;i++){
            let el =JSON.parse(localStorage.getItem(i.toString())!)
            list.push(el)
        }


        return list

    }


    saveNotes(obj:noteInterface){

        localStorage.setItem(JSON.stringify(obj.id), JSON.stringify(obj))
       
    }




}