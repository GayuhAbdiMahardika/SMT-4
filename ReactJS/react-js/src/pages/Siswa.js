import ListSiswa from "./ListSiswa";

function Siswa() {
  const nama=['lol','okie','dokie']
    return (
      <div className="App">
  
        <h1>Siswa</h1>
        <ListSiswa nama={nama}/>
      </div>
    );
  }
  
  export default Siswa;
  