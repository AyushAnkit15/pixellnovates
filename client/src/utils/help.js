import { surpriseMePrompts } from "../constants/prompts.constants";
import FileSaver from 'file-saver'
export function getRandomPrompt(prompts){
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length) ;
    const randomPrompts = surpriseMePrompts[randomIndex] ; 
    
    if(randomPrompts===prompts){
        return getRandomPrompt(prompts) ; 
    }
    return randomPrompts ; 
    }
    export async  function downloadImage(_id , photo){
        FileSaver.saveAs(photo ,`download-${_id}.jpg`)
    }