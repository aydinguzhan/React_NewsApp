
import Header from './components/Header'
import BlockHeader from './components/BlockHeader';
import CardContent from './components/CardContent'
import HorizontalCard from './components/HorizontalCard';
import Foother from './components/Foother';
import { useState,useEffect } from 'react';



function App() {
  const worldState = [
    {
      id: 1,
      title: "Twitch, Rus yayıncılara yapılan ödemeleri durdurdu",
      url: 'https://foto.haberler.com/haber/2022/03/09/twitch-rus-yayincilara-yapilan-odemeleri-durdurdu-14784114_1544_amp.jpg'
    },
    {
      id: 2,
      title: "Savaşın 16. gününde Rus ordusu ilk kez Dnipro ve Lutsk şehirlerine saldırdı! Ölü ve yaralılar var",
      url: "https://foto.haberler.com/manset/2022/03/10/rusya-200-den-fazla-urunun-ihracatini-yasakladi_14787183_4419_z5.jpg"
    },
    {
      id: 3,
      url: "https://foto.haberler.com/manset/2022/03/11/irlandali-vekilden-tarihi-konusma-avrupa-nin-iki_14789135_15_k.jpg",
      title: "İrlandalı vekilden Avrupa Parlamentosu'na ırkçılık dersi: Ukrayna ve Afganistan'a çifte standart uyguluyorsunuz"
    },
  ];
  useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then(response => response.json())
        .then(response=>{setAlbums(response)},[])
      
      }
      
  )
  const[inputText,setInputText]= useState("");
  let inputHandler = (event)=>{
      setInputText(event.target.value);
  }
  const[searchQuery,setSearchQuery] = useState("")
  useEffect(()=>{setSearchQuery(inputText)},[inputText])
  const[albums,setAlbums]= useState([])
  
  let filtereded = albums.filter((item)=>{
    return item.title.toLowerCase().indexOf(searchQuery.toLowerCase())!== -1;
  })
 
 
  return (
    <main>
      {}
      <div className="header"><Header inputText={inputHandler}/></div>
      <div className="container">
        <div className='row '>
          <div className='col-12 horizantalcard'><HorizontalCard
            src={worldState[0].url}
            description={worldState[0].title}
            src1={worldState[1].url}
            description1={worldState[1].title}
            src2={worldState[2].url}
            description2={worldState[2].title}
          /></div>
          
        </div>
        <div className="row mt-4">
          <div className='row'><BlockHeader title="Gündem" /></div>
          <div className='row'>
            <div className="col-12 mt-3">
              {filtereded.map((item) => {
                return (
                  <div key={item.id}>
                    <CardContent title={item.title} url={item.url} description={item.description}></CardContent>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </div>
      <footer><Foother/></footer>
      



      <style>{`
      main{
        background-color:#eee;
      }
        .header{
          width: 100%;
          position:fixed;
          top:0;
          left:0;
          z-index:1;
      }
    
      .row{
        --bs-gutter-x: 0;
      }
      .horizantalcard{
        margin-top:50px;
      }
      .foother{
        background-color:black;
      }
      `}</style>
    </main>

  );
}
export default App;