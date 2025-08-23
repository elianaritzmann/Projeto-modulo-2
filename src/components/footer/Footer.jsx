import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
function Footer (){

    return(
        <div className='footer'>
             <div className='redes'>
                 <h4> Siga o Reciclaville nas redes! </h4>
                 <div >
                    <FacebookIcon></FacebookIcon> 
                    <XIcon></XIcon>
                    <InstagramIcon></InstagramIcon>
                 </div>
                 
               
            </div>
          
           
            <p>&copy; 2025 Reciclaville. Todos os direitos reservados.</p>
             <span> SAQ: (47)91234-5678</span>
           

        </div>
    )
} export default Footer