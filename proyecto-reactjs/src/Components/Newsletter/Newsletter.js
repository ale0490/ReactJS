//Material UI
import TextField from '@mui/material/TextField';
//Propio
import "./newsletter.css"

const Newsletter = () =>{

    const submitNews = (e) => {
        e.preventDefault()
    }
    return(
        <div>
            <h4> Newsletter </h4>
            <p className='text-footer'>¿Quieres un código de descuento y sorpresas exclusivas? Entonces no seas tímido y dinos tu dirección de correo electrónico</p>
            <div className="newsletter">
                <form
                    onSubmit={submitNews}>
                    <TextField 
                        className='input-news left'
                        id="outlined-basic" 
                        label="Introduce tu dirección de correo electrónico..." 
                        variant="outlined"
                        type="email" />
                    <button 
                        type="submit"
                        className='submit-news'> 
                            Enviar 
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Newsletter;