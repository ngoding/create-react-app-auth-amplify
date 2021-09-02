import React, { Component } from 'react';
import './App.css';
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    const helpBox = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };
    return (
      <div>
        <AmplifyAuthenticator hideSignUp>
          <AmplifySignIn slot="sign-in" hideSignUp></AmplifySignIn>
          <div className="App">
            <AmplifySignOut />
            {/* <div>
              <h3 style={helpBox}>Cara mencari nama</h3>
              Untuk mencari teks: menggunakan ctrl + F. Lalu masukkan nama yang ingin dicari. 
              Nama yang bisa dicari adalah nama yang tertera di halaman. Misalnya mencari nama 'Andi' di halaman 1 tidak ada, coba dicari di halaman ke 2, dan seterusnya. 
              Jika tidak ada juga, berarti nama tersebut tidak masuk ke transaksi sesuai tanggal yang dipilih.
            </div> */}
            <div>
              <iframe title="all redeem" src="https://reporting.rumahsiapkerja.com/embed/query/133/visualization/195?api_key=SkoCVb28k3lAf4aDYZbR8Mb1z7CaXff5UdbB85kv&p_Date=d_today&p_Referral=%5B%22SIAPKERJA250%22%2C%22AKUSIAPKERJA%22%2C%22SIAPKERJA300%22%5D&hide_link&hide_header" width="1080" height="720"></iframe>
            </div>
            <div>
              <iframe title="redeem count" src="https://reporting.rumahsiapkerja.com/embed/query/133/visualization/197?api_key=SkoCVb28k3lAf4aDYZbR8Mb1z7CaXff5UdbB85kv&p_Date=d_today&p_Referral=%5B%22SIAPKERJA250%22%2C%22AKUSIAPKERJA%22%2C%22SIAPKERJA300%22%5D&hide_link&hide_header" width="360" height="500"></iframe>
            </div>
          </div>
        </AmplifyAuthenticator>
      </div>
    );
  }
}

export default App;
