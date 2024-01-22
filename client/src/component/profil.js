import React, { useState, useEffect } from 'react';
import './../assets/css/style.css';
import { BiEdit, BiCheck } from "react-icons/bi";
import CardCrpto2 from './home/CardListCrypto';
import guidetour from './../assets/video/guidetour.mp4'

const Profil = () => {
  // console.log(localStorage.getItem("token"))
  // console.log(localStorage.getItem("role"))
  // console.log(localStorage.getItem("id"))
  if (!localStorage.getItem("guide")) {
    // localStorage.setItem("guide",1)
    console.log("toto")

  }
  const [editPseudo, setEditPseudo] = useState(false)
  const [Pseudo, setPseudo] = useState(localStorage.getItem("username"))

  const [editEmail, setEditEmail] = useState(false)
  const [Email, setEmail] = useState(localStorage.getItem("email"))

  const [editPassword, setEditPassword] = useState(false)
  const [Password, setPassword] = useState("**********")
  const [NewPassword, setNewPassword] = useState(false)
  const [modal, setModal] = useState(localStorage.getItem("guide"))


  const editEmailFc = () => {
    setEditEmail(!editEmail)
    console.log(editEmail)
    if (editEmail) {
    }
  }
  const editPasswordFc = () => {
    setEditPassword(!editPassword)
  }
  const EditPseudoFC = () => {
    setEditPseudo(!editPseudo)
  }

  const checkTokenGuide =() => {
     localStorage.setItem("guide",1)
     setModal(true)
  }
  return (
    <>
      {!modal &&
        <div className="modal_background" onClick={checkTokenGuide }>
          <div className="modal">
            <video width="100%" height="500" controls >
              <source src={guidetour} type="video/mp4" />
            </video>
          </div>
        </div>
      }
      <div className="container">
        <div className="container_profil">
          <h1 className="title_profil">
            <i class="fa-solid fa-address-card"></i> Profil
          </h1>
          <div className="information_profil">
            <div className="row_profil">

              <div className="title_row_profil">
                <i class="fa-solid fa-person"></i> Pseudo:
              </div>
              {editPseudo ?
                <>
                  <input className="input_row_profil"
                    value={Pseudo}
                    onChange={(e) => setPseudo(e.target.value)}
                    type="text"
                    name="name" />
                  <BiCheck onClick={EditPseudoFC} size="1.5em" className="icons_profil" /></>
                :
                <> <div className="text_row_profil"> {Pseudo}</div> <BiEdit onClick={EditPseudoFC} size="1.5em" className="icons_profil" /></>
              }
            </div>

            <div className="row_profil">
              <div className="title_row_profil">
                <i class="fa-solid fa-envelope"></i> Email:
              </div>
              {editEmail ?
                <><input className="input_row_profil"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text" name="name" />
                  <BiCheck onClick={editEmailFc} size="1.5em" className="icons_profil" /></>
                :
                <> <div className="text_row_profil"> {Email}</div> <BiEdit onClick={editEmailFc} size="1.5em" className="icons_profil" /></>
              }
            </div>

            <div className="row_profil">
              <div className="title_row_profil">
                <i class="fa-sharp fa-solid fa-lock"></i> Mot de passe:
              </div>
              {editPassword ?
                <div >
                  <input className="input_row_profil"
                    type="text"
                    placeholder="Ancien mot de passe"
                    style={{ marginTop: "20px" }}
                  />
                  <input className="input_row_profil"
                    type="text"
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Noveau mot de passe"
                    style={{ marginTop: "20px" }}
                  />
                  <input className="input_row_profil"
                    type="text"
                    placeholder="Confirmation mdp"
                    style={{ marginTop: "20px" }}
                  />
                  <BiCheck onClick={editPasswordFc} size="1.5em" className="icons_profil" />
                </div>
                :
                <> <div className="text_row_profil"> {Password}</div> <BiEdit onClick={editPasswordFc} size="1.5em" className="icons_profil" /></>
              }
            </div>

            <CardCrpto2 name='Liste Crypto : '></CardCrpto2>
            <button className="input_row_profil btn_guide" onClick={() => setModal(false)}>
                Guide
            </button>

          </div>
        </div>
      </div>
    </>
  );
}


export default Profil;