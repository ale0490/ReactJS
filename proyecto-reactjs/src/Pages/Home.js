//Propio
import CardItemContainer from '../Components/Cards-home/CardItemContainer';
import bestSeller from '../Utils/bestSeller';
import './Styles.css';

const Home = () =>{

  return (
    <>
      <img src='../home/banner-home.jpg' className='img-home'/>
      <h2 className='h2-home width-3'> CON VIKINGS SENTITE UN VERDADERO GUERRERO </h2>
      <p className='p-home'>
        ¿Quieres hacer valer tu estatus y poder? Guerrero, estás en el lugar correcto. En Vikings encontrarás camisetas, pulseras, anillos, collares, cuentas y muchas otras joyas vikingas. 
        <br/><br/> 
        <strong>¡Añade un toque de estilo vikingo a tu look!</strong> Descubre la última colección de joyas vikingas para hombre y mujer. Con sus originales diseños celtas y su saber hacer, esta gama de joyas vikingas tiene algo que seducir a los hombres y mujeres amantes de la <strong>mitología nórdica</strong>.
        <br/><br/>
        Entonces, ¿qué esperas para adquirir una <strong> magnífica joya vikinga</strong>? Añade un poco de estilo nórdico a tu vestuario hoy mismo con nuestros productos vikingos.
      </p>
      <h2 className='h2-home width-2'> NUESTROS BEST-SELLERS</h2>
      <div className='container-card'>
          <CardItemContainer item={bestSeller}/>
      </div>
      <div className='container-home-lore'>
        <img src='../home/home-12.jpg' className='img-home-lore'/>
        <div className='lore-home-1'>
          <h2 className='h2-home width-3'> BIENVENIDO A VIKINGS </h2>
          <p className='p-lore-home width-1'>
            Vikings es un equipo de guerreros cuyo objetivo es compartir nuestro amor por las <strong>Joyas vikingas</strong> y su <strong>cultura nórdica</strong>.
            <br/>
            <br/>
            La cultura nórdica es una cultura llena de valores. La familia, la estima por los demás y el valor, son para nosotros valores esenciales para entrar en el <strong>Valhalla</strong>.
            <br/>
            <br/>
            Ofrecemos una <strong>amplia gama de Joyas Vikingas</strong>: Anillos, Pulseras, Collares, Abalorios y otros Accesorios Vikingos. Nuestras joyas vikingas están disponibles a diferentes precios debido a los diferentes tipos de metales con los que trabajamos.
            <br/>
            <br/>
            Con una variedad de precios disponibles para nuestras joyas vikingas, seguro que encontrará algo que se adapte a su gusto. Ofrecemos <strong>metales preciosos como la plata y el acero inoxidable de alta calidad</strong>, así como productos más asequibles de aleación de <strong>zinc o bronce</strong>.
            <br/>
            <br/>
            Ya sea que busques un nuevo brazalete vikingo de cuero que combine con tu atuendo o un collar de lobo vikingo que muestre tu espíritu feroz como el <strong>Lobo Fenrir</strong>, nuestra tienda vikinga tiene exactamente lo que necesitas.
          </p>
        </div>
        <img src='../home/home-22.jpg' className='img-home-lore2'/>
        <div className='lore-home-2'>
          <h2 className='h2-home width-3'> LAS JOYAS Y SU HISTORIA </h2>
          <p className='p-lore-home width-1'>
            ¿Qué tienen en común los antiguos vikingos y los diseñadores de joyas actuales? Ambos aprecian la belleza del metal y del bronce retorcido.
            <br/>
            <br/>
            Las joyas vikingas solían ser bastante sencillas, pero tenían un cierto <strong>atractivo rústico</strong> que ha perdurado durante siglos. Los diseñadores de joyas contemporáneos se inspiran ahora en las joyas vikingas para <strong>crear piezas únicas y elegantes</strong>. Si busca algo diferente, ¿por qué no echa un vistazo a nuestras joyas de inspiración vikinga? Seguro que destacarás entre la multitud.
            <br/>
            <br/>
            Si busca algo diferente en joyería, las joyas de inspiración vikinga pueden ser justo lo que necesita. Los colgantes del <strong>Martillo de Thor, los anillos Vegvisir o Valknut, los brazaletes Ragnar y otros accesorios vikingos</strong> para hombres y mujeres están disponibles en estilos que evocan esta antigua cultura nórdica. A menudo fabricados en cuero, acero inoxidable o plata, estos brazaletes y anillos pueden añadir un <strong>toque vikingo a su estilo.</strong>
            <br/>
            <br/>
            En unos pocos clics, es la forma más fácil y cómoda de comprar con total seguridad, también un servicio de <strong>atención al cliente</strong> de primera categoría.
            Estamos aquí para ayudarte a sacar tu <strong>alma vikinga, guerrera y pagana</strong> y nos lo tomamos muy en serio.
          </p>
        </div>
      </div>
    </>
  )
}


export default Home;