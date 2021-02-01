function ListSiswa(props) {
  const siswa = props.nama.map((v,k) => <li key={k}>{v}</li>)
    return (
      <div className="App">
        {/* <h1>{props.nama[0]}</h1> */}
        {/* <p>lol</p> */}
        {siswa}
      </div>
    );
  }
  
  export default ListSiswa;
  