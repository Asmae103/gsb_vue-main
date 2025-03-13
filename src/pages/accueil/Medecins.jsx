import { useNavigate, useLocation, useOutletContext } from 'react-router-dom'
//import reactLogo from '../assets/react.svg'
import { useState, useEffect } from 'react';
import './Medecins.css';
import { getMedecins } from '../../api/medcinapi.jsx';
import Accueil from './Accueil.jsx';

function Medecins(){
   const { state } = useLocation(); 
   const [medecin, setMedecin] = useState(state ? state.user : null);
   const navigate = useNavigate(); //pour utiliser la navigation du routeur 
   const [listeVisible, setListeVisible] = useState(false); // Etat visibilité de la liste
   const [nomMedecin, setNomMedecin]= useState(''); //Etat champ de saisie 
  // const .{nom , prenom } = medecin;
   const [listeMedecins, setListeMedecins] = useState([]); //liste qui va contenir les medecins trouvés 
   const [ version, setVersion] = useState(0); //etat qui permet de forcer le rafraichissement du contenu
   console.log(state);
  function charger(e) {
   const valeursaisie = e.target.value;
   setNomMedecin(valeursaisie);
   if (medecin?.nom === valeursaisie) {
      return medecin.nom + medecin.prenom; 
   }
   /*
       if(nomMedecin != null){
           if(medecin.nom== nomMedecin){
              return medecin.nom + medecin.prenom; 
            }*/
   }
  
  /**
  * Fonction qui va se declencher lorsqu'un medecin est selectionné dans la liste
  * @param {JSON} leMedecin // utilisée dans les commentaires JSDoc pour documenter une fonction JavaScript
  */
   
   
  function selectMedecin(leMedecin){
     console.log(leMedecin.nom);
     setMedecin (leMedecin);
     setNomMedecin (leMedecin.nom + leMedecin.prenom);
     if(medecin){ // ou medecin ===true  ; === compare les valeurs et les types
       setListeVisible(false); 
     }
     return leMedecin;
  }

/*useEffect(()=> { charger();
   setVersion((prev) => prev + 1); // Force le rafraîchissement  prev représente la valeur actuelle de version, et on retourne prev + 1 pour l’incrémenter.
}, [nomMedecin]); // Déclenche le useEffect lorsque nomMedecin change);


}
    /**
     * Appel à l'API /medecins, avec comme paramètre 'nom'
     * retour en fonction de la saisie de l'utilisateur
     * @returns 
     */


   async function RechercherRapports(){


   
   }
   return (
    <>
      

       <label> Recherche un medecin</label>
       <br/>
       <input  type ="text"  value={nomMedecin}  onChange= {charger} />
       
       <ul>
         {listeVisible && listeMedecins.map((medecin ) =>
         <li key={medecin.id}
            onClick = { () => selectMedecin(medecin) } >
            { medecin.nom } {medecin.prenom}
         </li>
         )}
       </ul>

    <br/>
       

    </>
   )


}

export default Medecins;

//        <input  type ="text"  value={(nomMedecin)}  onChange= {charger} />
       