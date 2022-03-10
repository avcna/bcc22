import '../App.css';
import {Input,
        Wrapper,
        Biodata,
        DocterCard,
        Subtn,
        Label} from '../components/konsultasiElement';
import Navbar from '../components/Navbar';

const Konsultasi = () => {
  return(
    <>
      <div className='nav-div'>
        <Navbar />
      </div>
      <Wrapper>
        <Biodata>
          <form>
            <Label>Biodata 1</Label><br/>
            <Input placeholder='Masukkan nama'/>
          </form>
        </Biodata>
      </Wrapper>
    </>
  )
}

export default Konsultasi;
