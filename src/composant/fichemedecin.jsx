import { useState  } from "react";
import {useOutletContext} from "react-router-dom";
import Medecins from "../pages/accueil/Medecins";
import api from '../api/api.jsx';


async function FicheMedecin(){
  const[medecins]= useOutletContext(); 
  
 // const medecinsTrouves = await api.get('/medecins?nom='+valeursaisie); 
return(
<>
<p>Hellow World,{medecins.nom} {medecins.prenom} </p>

</>
)
}

export default FicheMedecin;