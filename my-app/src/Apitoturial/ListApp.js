import React,{useRef,useState,useEffect} from 'react'
import { getList , setItem} from './list';
function ListApp() {
    //const [list, setList] = useState([]);
    const [alert, setAlert] = useState(false);
     
    var [itemInput, setItemInput] = useState('');
    ///let mounted = true;
    const mounted = useRef(true);
    // itemInput ='';
    const [list, setList] = useState([]);
    
    useEffect(()=>{
        //let mounted = true;
        mounted.current = true;
        if(list.length && !alert) {
 return;
        }
        getList()
        // console.log('1 is come')
        .then(item =>{
            if(mounted.current){
                console.log(setList(item));
            }
        })
        return ()=> mounted.current = false;
    },[alert,list])

    useEffect(() => {
      if(alert) {
      setTimeout(() => {
      if(mounted.current) {
      setAlert(false);
      }
      }, 1000)
      }
     }, [alert,list])
     
    const handleSubmit = (e) => {
      debugger;
 e.preventDefault();
 setItem(itemInput)
 .then(() => {
  if(mounted.current) {
 setItemInput('');
setAlert(true);
  }
 })

}
  return (
    <div className="wrapper">
    <h1>My Grocery List</h1>
    <ul>
    {list.map(item => <li key={item.item}>{item.item}</li>)}
    </ul>
    {alert && <h2> Submit Successful</h2>}
    <form onSubmit={handleSubmit}>
 <label>
 <p>New Item</p>
 <input type="text" // onChange={event => setItemInput(event)} 
 value={itemInput}
  />
 </label>
 <button type="submit">Submit</button>
 </form>
    </div>
  )
}

export default ListApp