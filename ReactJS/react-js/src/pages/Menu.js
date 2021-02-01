import { useState } from "react";
import Tabel from "./Tabel";

function Menu() {
  const title = 'Daftar menu';
  const [menus,setMenus] = useState([
    { idmenu: 1, idkategori:1, menu:"Apel Manalagi", gambar:'apel.jpg', harga:3000 },
    { idmenu: 2, idkategori:1, menu:"Pisang Raja", gambar:'pisang.jpg', harga:5000 },
    { idmenu: 3, idkategori:2, menu:"Es Jeruk", gambar:'esjeruk.jpg', harga:2000 }
  ]);

    return (
      <div className="App">
        <h1>Menu</h1>
        <Tabel menus={menus} title={title}/>
      </div>
    );
  }
  
  export default Menu;
  