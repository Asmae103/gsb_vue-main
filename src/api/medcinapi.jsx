import api from "./api.jsx";


export async function getMedecins(){
    try{
        const reponse = await api.get('/medecins?nom=${nom}');
        return reponse;
        
    }
    catch(error){
           console.log("Erreur", error);
    }

}