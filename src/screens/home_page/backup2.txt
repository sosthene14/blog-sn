
   /*faire appeler aux elements du code html grace au DOM-->*/
   
   const heads =  document.querySelector("#myDIV");
   const input = document.querySelector("#myInput");
   const li = document.querySelector("#myUL");
   const popup = document.querySelector("#my_pop");
   const cleans = document.querySelector("#clean")
   const btn = document.querySelector("#btnb")
   const liste = []
   const space = " "
   /*creation de la premiere fonction loader dont le role consistera à charger lhistorique à partir du localstorage*/
   function loader()
   {
    for (var i = 0; i < localStorage.length; ++i)
    {
     liste.push(localStorage.getItem(localStorage.key(i)))
    }

    for (j = 0; j < liste.length; ++j)
    {
        /* Creation des constates qui vont se charger de creer les differents elemnts me permettant d'afficher en front-end l'historique du localstorage*/
     const pop = document.createElement("textarea")
     const remove = document.createElement("div")
     const actions = document.createElement('input');

     /*Ici nous les attribuons une classe afin d'avoir une mise en assez propre, veuillez noter que les differentes classes sont appelées depuis notre fichier css*/
     actions.classList.add("check");
     pop.classList.add("my_input");
     remove.classList.add("croix");

    /*Remove correspond à la croix qui apparait à droite de historique*/
     remove.textContent = "X"

     /*Le type de notre input*/
     actions.type = "checkbox";

     pop.rows = "1"
     pop.cols = "1"
     /*Ici etant donné que nous somme dans une boucle, pop.textcontent correspond à l'element qui va nous
     permettre d'afficher notre historique, et le contenue de celle est L[j] qui va donc parcourir toute l'historique et tout afficher */
     pop.textContent = ((liste[j])) 
     
     /*const f est une constante que j'ai crée pour resoudre un probleme, notament l'effaçage de notre historique*/
     const f = pop.value.charAt((pop.value.length)-1)

     /* là nous ajoutons tous nos elements dans notre li, qui a ete defini au dessus, au niveau du queryselector*/
     li.appendChild(pop)
     li.appendChild(remove)
     li.appendChild(actions)

     /*Une fonction onclick, dont le role est de gerer les etats de la checkbox, pour les historiques uniquement */
     actions.onclick = function ()
           
     {
        
         if (actions.checked == false)
         {
             /* notes à moi meme, le X a ete ajouté car le X du haut permettant d'effacer l'historique a comme ete additionné aux noms des differentes keys,
             car le X du haut est un enfant de l'element contenant les noms, je pense que je vais oublié, compliqué :)*/

             pop.removeAttribute("readonly")    
             localStorage.setItem(contains_two.value+"X",contains_two.value);
         }
     else
         {
             pop.setAttribute("readonly","readonly");
                
         }
     }
/*La fonction remove, permettant d'affacer l'historique en appuiyant sur la croix*/
     remove.onclick = function()
     {
         
         li.removeChild(pop);
         li.removeChild(remove)
         li.removeChild(actions)
         localStorage.removeItem(pop.value+"X");
 
     }
    
   }
}
function getting()
{
    
     /*Affectation de la valeur du input à la constante get*/
     get = input.value;

     /*verification de l'existence de get afin de verifier si l'entrée de l'utilisateur n'est pas constitué uniquement d'espaces vides*/   
 
     if (!get.trim())
     {
         alert("Veuillez saisir une valeur valide");
         document.getElementById("myInput").value = space.trim();
     }
     else    
     {  
        /*Ici nous ferrons à peu pres la meme chose que sur l'historique, pourquoi avoir divisé ça s'ils font la meme chose ? , tout simplement parceque la fonction 
        loader est une fonction qui est appelé dès le chargement de la page et son contenu depend en parti du local storage, tandique la fonction getting()
        elle ne se charge que d'afficher et de sauvegarder le contenu saisis par l'utilisateur est elle est appelé uniquement à partir du button AJOUTER TACHE*/
         document.getElementById("myInput").value = space.trim();
         const contains = document.createElement("div");
         const contains_two = document.createElement('textarea');
         const action = document.createElement('input');
         const cross = document.createElement("div");

         /*creation d'elemnts qui vont heriter d'une classe css créee precedement*/
         
         contains_two.value = get.trim();

         contains_two.rows = "1"
         contains_two.cols = "1"

         contains_two.classList.add("my_input");
         action.classList.add("check");
         cross.classList.add("croix");
         action.type = "checkbox";

         localStorage.setItem(contains_two.value+"X",contains_two.value);
         
        
         cross.innerText = "X";
     
     /* La fonction action.onclick fait la meme chose que celle de l'historique, j'ai essayé de faire une fonction commune pour les deux, mais ça m'a crée des problèmes :)*/
     action.onclick = function ()         
     {
        
         if (action.checked == false)
         {
             /* notes à moi meme, le X a ete ajouté car le X du haut permettant d'effacer l'historique a comme ete additionné aux noms des differentes keys,
             car le X du haut est un enfant de l'element contenant les noms, je pense que je vais oublié, compliqué :)*/
             contains_two.removeAttribute("readonly") 
             localStorage.setItem(contains_two.value+"X",contains_two.value);
         }
     else
         {
             contains_two.setAttribute("readonly","readonly");
             localStorage.setItem(contains_two.value+"X",contains_two.value);                  
         }
     }
    

     /* effacer la tache si l'element croix est appuiyé*/

     cross.onclick = function()
     {
         li.removeChild(contains);
         localStorage.removeItem(contains_two.value+"X");
     }

     /*ajouter les differents elements enfants aux parents afin de permettre l'affichage de ceux ci*/
     
     li.appendChild(contains);
     contains.appendChild(contains_two);
     contains.appendChild(action);
     contains.appendChild(cross);  
           
    }
 }
