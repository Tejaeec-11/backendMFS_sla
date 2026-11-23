//2 idu data localstorage save panan locak storage is sideeffect so we use useeffect  ida code imporatant *******************form aprm login useing this 
import { useEffect, useState } from "react";

const App = () => {

  const [mydatas, setMyDatas] = useState({username: "",useremail: "",userage: ""});
  const [showdata, setShowData] = useState([]);
  const [editId, setEditId] = useState(null);

  // Input change
  const handleChange = (e) => {
    setMyDatas((p) => ({...p,[e.target.name]: e.target.value}));
  };

  // Add data
  const handleClick = () => {//this 6 line imporatant to insert
   // this for explain let getLocalData =localStorage.getItem("sladb") epdi pota athu text so for local storgae we need json change if prev value illana [empty array]
    let getLocalData = JSON.parse(localStorage.getItem("sladb")) || [];
      getLocalData.push(mydatas);//push() adds the current form data to the array.
      //kela line local storage data end panna slabd so then array of it wont take so we string then it push it to browser local storage
     localStorage.setItem("sladb",JSON.stringify(getLocalData));
     alert("Successfully Done");
    //idu browser name local username so username ui ena type pannalaum it store in username mattutha store agum not in useremail or age
    setMyDatas({username: "",useremail: "",userage: ""});//table head mari  idukula n no number data store pannalaa
     getDatas();//ida line side effect so u can call here or  kela call pannala ida line  line 62 useffect call panni irukuom so loop aviod agum
  };

  // Read data
  const getDatas = () => {
   let getLocalData =JSON.parse(localStorage.getItem("sladb")) || [];
  setShowData(getLocalData);
  };

  // Edit data
  const handleEdit = (e, i) => {
    setMyDatas(e);
    setEditId(i);
  };

  // Update data
  const handleUpdate = () => {
   let getLocalData =JSON.parse(localStorage.getItem("sladb")) || [];
   const geting = getLocalData.map((e, i) =>i === editId ? { ...e, ...mydatas } : e);
   localStorage.setItem("sladb",JSON.stringify(geting));
    setMyDatas({username: "",useremail: "", userage: ""});
     alert("Datas Successfully Updated");
     setEditId(null);
     getDatas();//Calls the getDatas function to display the latest saved data.
  };

  // Delete data
  const handleDelete = (eid) => {
  let getLocalData =
  JSON.parse(localStorage.getItem("sladb")) || [];
   let deleteDatas = getLocalData.filter((e, i) => i !== eid);
   localStorage.setItem("sladb",JSON.stringify(deleteDatas));
   alert("Datas Successfully Deleted");
   getDatas();
   };

  // Initial data loading //idu add data line so kela useeffect ula call panni irukum so loop agadhu
  useEffect(() => {
    getDatas();
  }, []);

  return (
    <>
      <form>
        <input type="text" name="username" onChange={handleChange} placeholder="Enter the Name" value={mydatas.username}/>
        <input type="email" name="useremail" onChange={handleChange} placeholder="Enter the Email" value={mydatas.useremail}/>
        <input type="number" name="userage" onChange={handleChange} placeholder="Enter the Age" value={mydatas.userage}/>

        {editId === null ? (<button type="button" onClick={handleClick}>Add Data</button>) : (
          <button type="button" onClick={handleUpdate}>Update Data</button>)}
      </form>

      <div>
        {showdata.length === 0 ? (<p>No Datas Found</p>) : (showdata.map((e, i) => (
            <div key={i}>
              <h1>{e.username}</h1>
              <p>{e.useremail}</p>
              <p>{e.userage}</p>

              <button onClick={() => handleEdit(e, i)}>Edit</button>
              <button onClick={() => handleDelete(i)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default App;

// Let's split this.
// - localStorage – browser storage.
// - getItem("sladb") – gets data saved under the key "sladb".
// - JSON.parse() – converts JSON string into JavaScript data.
// - || [] – if no saved data exists, use an empty array.

//setItem() – saves data in LocalStorage.
//"sladb" – storage key.
//jSON.stringify() – converts JavaScript data into a JSON string.