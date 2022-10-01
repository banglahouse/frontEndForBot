import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


import './Football.css'

function Cricket() {
    const [data,setData] = useState([])
    // const [checked, setChecked] = React.useState(
    //   new Array(data.length).fill(false)

    // );
    const [checkList, setCheckList] = useState([]);

    const [loading,setLoading] = useState(true)
    const [selected,setSelected] = useState(false)

  
  
    useEffect(() => {
        axios.get(`https://backendforbot4.onrender.com/botwebsites/cricket`)
        .then(res => {
          let urlForWebsite = res.data.data;
          // console.log(res.data.data);
          setData(urlForWebsite)
          setLoading(false)
        //   ({ urlForWebsite });
        })
      });
      const handleChange = (id) => {
        let selected = checkList
        let find = selected.indexOf(id)
        let divSelector =  document.getElementById(id)

        if(find > -1) {
          selected.splice(find, 1)
          divSelector.style.border = "solid 2px black" 

        } else {
          selected.push(id)
          divSelector.style.border = "solid 2px red"

        }
        
        setCheckList(selected)
};

function deleteSelected(){
  axios.delete(`https://backendforbot4.onrender.com/botwebsites/cricket/deleteMany`,{data:{id:checkList}})
  .then(response => {
    console.log(response)
      // this.setState({ status: response.status });
  })

}
     function handleDelete(id){
      axios.delete(`https://backendforbot4.onrender.com/botwebsites/cricket`,{data:{id:id}})
      .then(response => {
        console.log(response)
          // this.setState({ status: response.status });
      })
      }

      // function changeColor(id){
      //   let divSelector =  document.getElementById(id)
      //   if(id){
      //     divSelector.style.border = "solid 4px red"
      //   }
      //   else{
      //     divSelector.style.border = 'black'

      //   }
      //   // setSelected(!selected);

      // }

    
  return (<div className='football-home'>
   
   <div className='head-button'>
     { checkList.length >= 1? <Button variant="danger" onClick={deleteSelected}>Delete selected</Button> :
      <div> </div>
     }
   </div>

   {
   loading ? <div>LOADING...........</div> :
   data.reverse().map( (data)=>
       (
        <label  key={data._id} >
                <input type="checkbox"
            name={data._id}
            onChange={()=>handleChange(data._id)}
            selected = {checkList.includes(data._id)}
          />
        <Card style={{width:"30rem",margin:"2rem",border:"2px solid black",background:'#FBF5DF'}} key={data._id} id={data._id}  >
      {/* <Card.Header>Featured</Card.Header> */}
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text><a href={data.websites}target="_blank" rel="noreferrer noopener"  className="link-danger">
        
          click here 
          </a> 
          </Card.Text>
        <Card.Text>
        {data.time}
        </Card.Text>
        <Button variant="primary" onClick={() => handleDelete(data._id)}>Delete</Button>
      </Card.Body>
    </Card>
      
      </label>
       )
       )}



  </div>
    // {{data.map()}}
  )
}



export default Cricket

//       <label  key={data._id} >
      //          <input type="checkbox"
      //     name={data._id}
      //     onChange={()=>handleChange(data._id)}
      //     selected = {checkList.includes(data._id)}
      //   />
      //   <div className='container-websites' key={data._id} id={data._id}  
      //   style={{ border : selected ? " solid 4px red"  : "solid 2px black" }}
        
      //   >
       

      //     <p >{data.title}</p>  
      //     <a href={data.websites}target="_blank" rel="noreferrer noopener"  className='button-delete'>click here </a> 
      //     <p>{data.time}</p>
      //     <input type="button" name="submit" value="Delete" onClick={() => handleDelete(data._id)}/>

      //   </div>