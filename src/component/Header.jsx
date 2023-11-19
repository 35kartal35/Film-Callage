

import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div style={{justifyContent:'center'}} >
    <div  

    className="bg-dark p-4" >
      <img
        onClick={() => navigate('/')}
        style={{ maxWidth: '200px', cursor: 'pointer', margin: '10px', marginLeft:'50px'  }}
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
      />
      <text style={{color:'white', marginLeft:'50px', fontSize:'30px'}}>MEHMET ÖZDEMİR</text>
      <img
        onClick={() => navigate('/')}
        style={{ maxWidth: '150px', cursor: 'pointer', margin: '10px', marginLeft: '100px'  }}
        src="http://www.acilveterinerhizmeti.com/wp-content/uploads/2011/06/kara-kartal-amerikan-kartal-953-800x426.jpg"
      />
    </div>
    </div>
  );
};

export default Header;
