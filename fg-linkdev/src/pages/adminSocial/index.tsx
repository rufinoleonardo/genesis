import { useState, FormEvent, useEffect } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { db } from "../../services/firebaseConnection";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const Networks: React.FC = () => {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");
  const [github, setGithub] = useState("");

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef)
        .then((snapshot) => {
          if (snapshot.data() !== undefined) {
            setFacebook(snapshot.data()?.facebook || "");
            setInstagram(snapshot.data()?.instagram || "");
            setYoutube(snapshot.data()?.youtube || "");
            setGithub(snapshot.data()?.github || "");
          }
        })
        .catch((err) => {
          console.log("OCORREU UM ERRO: ", err);
        });
    }

    loadLinks();
  }, []);

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();

    const docRef = doc(db, "social", "link");
    setDoc(docRef, {
      facebook: facebook,
      instagram: instagram,
      youtube: youtube,
      github: github,
    })
      .then(() => {
        setFacebook("");
        setInstagram("");
        setYoutube("");
        setGithub("");
        console.log("Documento settado.");
      })
      .catch((err) => {
        console.log("Erro ao settar o documento.", err);
      });
  };

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-4">
      <Header />
      <h1 className="text-white font-medium text-2xl mt-8 mb-4">
        Minhas redes sociais
      </h1>
      <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
        <label className="text-white font-medium my-2">Link do facebook</label>
        <Input
          type="url"
          placeholder="Digite seu link aqui..."
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />

        <label className="text-white font-medium my-2">Link do Instagram</label>
        <Input
          type="url"
          placeholder="Digite seu link aqui..."
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />

        <label className="text-white font-medium my-2">Link do Youtube</label>
        <Input
          type="url"
          placeholder="Digite seu link aqui..."
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />

        <label className="text-white font-medium my-2">Link do Github</label>
        <Input
          type="url"
          placeholder="Digite seu link aqui..."
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />

        <button
          type="submit"
          className="text-white bg-blue-500 h-9 rounded-md flex items-center justify-center mb-7"
        >
          Salvar links
        </button>
      </form>
    </div>
  );
};
