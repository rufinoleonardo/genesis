import { FormEvent, useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { db } from "../../services/firebaseConnection";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { FiTrash } from "react-icons/fi";

interface LinkProps {
  id: string;
  name: string;
  url: string;
  bg: string;
  color: string;
}

const linkReg = new RegExp("http.+|mailto.+", "gim");

export const Admin: React.FC = () => {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [backgroundInput, setBackgroundInput] = useState("#FFFFFF");
  const [colorInput, setColorInput] = useState("#181818");

  const [links, setLinks] = useState<LinkProps[]>([]);

  useEffect(() => {
    const linksRef = collection(db, "links");
    const queryRef = query(linksRef, orderBy("created", "asc"));

    const unsub = onSnapshot(queryRef, (snapshot) => {
      let lista = [] as LinkProps[];

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          name: doc.data().name,
          url: doc.data().url,
          bg: doc.data().background,
          color: doc.data().color,
        });
      });

      setLinks(lista);
    });

    return () => {
      unsub();
    };
  }, []);

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();

    if (nameInput !== "" && urlInput !== "") {
      if (urlInput.match(linkReg)) {
        console.log("Link Validado REGEX");
        console.log(urlInput.match(linkReg));

        addDoc(collection(db, "links"), {
          name: nameInput,
          url: urlInput,
          background: backgroundInput,
          color: colorInput,
          created: new Date(),
        })
          .then(() => {
            setNameInput("");
            setUrlInput("");
            console.log(`${nameInput} CADASTRADO COM SUCESSO.`);
          })
          .catch((error) => {
            console.log("ERRO AO CADASTRAR.", error);
          });
      } else {
        console.log("Não passou no REGEX");
        alert("Link invalido. Links devem ser iniciados com http ou mailto");
      }
    } else {
      alert("Nome do link e a URL são campos obrigatórios.");
      return;
    }
  };

  const handleDeleteLink = async (id: string) => {
    const docRef = doc(db, "links", id);
    await deleteDoc(docRef);
  };

  return (
    <div className="flex flex-col items-center min-h-screen pb-7 px-2">
      <Header />
      <form
        className="flex flex-col mt-8 mb-3 w-full max-w-xl"
        onSubmit={handleRegister}
      >
        <label htmlFor="" className="text-white font-medium mt-2 mb-2">
          Nome do link
        </label>
        <Input
          placeholder="Digite o nome do link"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />

        <label htmlFor="" className="text-white font-medium mt-2 mb-2">
          Url do link
        </label>
        <Input
          placeholder="Digite a URL"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />

        <section className="flex my-4 gap-5">
          <div className="flex gap-4 items-center">
            <label htmlFor="" className="text-white font-medium mt-2 mb-2">
              Fundo do link
            </label>
            <input
              type="color"
              value={backgroundInput}
              onChange={(e) => setBackgroundInput(e.target.value)}
            />
          </div>
          <div className="flex gap-4 items-center">
            <label htmlFor="" className="text-white font-medium mt-2 mb-2">
              Cor do link
            </label>
            <input
              type="color"
              value={colorInput}
              onChange={(e) => setColorInput(e.target.value)}
            />
          </div>
        </section>

        {nameInput !== "" && (
          <div className="flex flex-col justify-center items-center mb-7 p-1 border-gray-100/25 border rounded-md">
            <label htmlFor="" className="text-white font-medium mt-2 mb-3">
              Veja como está ficando:
            </label>
            <article
              className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900 px-1 py-3"
              style={{
                marginBottom: 8,
                marginTop: 8,
                backgroundColor: backgroundInput,
              }}
            >
              <p className="font-bold" style={{ color: colorInput }}>
                {nameInput}
              </p>
            </article>
          </div>
        )}

        <button className="mb-7 bg-blue-600 h-9 rounded-md text-white font-medium gap-4 flex justify-center items-center">
          Cadastrar
        </button>
      </form>

      <h2 className="font-bold text-white mb-4 text-2xl">Meus Links</h2>
      {links &&
        links.map((link) => (
          <article
            key={link.id}
            className="flex items-center justify-between w-11/12 max-w-xl rounded py-3 px-2 select-none mb-1"
            style={{ backgroundColor: link.bg, color: link.color }}
          >
            <p>{link.name}</p>
            <button
              className="border border-dashed p-1 rounded bg-slate-900"
              onClick={() => handleDeleteLink(link.id)}
            >
              <FiTrash color="white" size={14} />
            </button>
          </article>
        ))}
    </div>
  );
};
