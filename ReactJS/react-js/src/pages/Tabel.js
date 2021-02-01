function Tabel(props) {
    return (
      <div>
        <h1>{props.title}</h1>
        <table>
          <tr>
            <th>Menu</th>
            <th>Harga</th>
          </tr>
    
        {props.menus.map((data)=>(
          <tr>
            <td key={data.idmenu}>{data.menu}</td>
            <td key={data.idmenu}>{data.harga}</td>
          </tr>
        ))}
        </table>
    </div>
    );
  }
  
  export default Tabel;
  