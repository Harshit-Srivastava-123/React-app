import "./Hello.css"
function Hello()
{
     let username="Harshit";
     
     let uderFullname=()=>
     {
         return "Harshit Srivastava";
     }

     return <p id="name">
          Hello this is {username}
          <br />
          Hello this is {uderFullname()}
     </p>
}

export default Hello;