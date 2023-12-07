import { Social } from "../../components/Social";
import { FaFacebook, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import { db } from "../../services/firebaseConnection";
import {
  getDoc,
  doc,
  getDocs,
  query,
  collection,
  orderBy,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface LinksProps {
  id: string;
  background: string;
  color: string;
  name: string;
  url: string;
}

interface SocialsProps {
  facebook: string;
  instagram: string;
  youtube: string;
  github: string;
}

export const Home: React.FC = () => {
  const [links, setLinks] = useState<LinksProps[]>([]);
  const [socials, setSocials] = useState<SocialsProps>();

  useEffect(() => {
    function obterLinks() {
      const linksRef = collection(db, "links");
      const queryRef = query(linksRef, orderBy("created", "asc"));

      let lista: LinksProps[] = [];

      getDocs(queryRef)
        .then((snapshot) => {
          if (snapshot !== undefined) {
            snapshot.forEach((doc) => {
              lista.push({
                id: doc.id,
                background: doc.data().background,
                color: doc.data().color,
                name: doc.data().name,
                url: doc.data().url,
              });
            });
          }

          setLinks(lista);
        })
        .catch((err) => {
          console.log("ERRO AO BUSCAR LINKS", err);
        });
    }

    obterLinks();
  }, []);

  useEffect(() => {
    function obterSociais() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef).then((doc) => {
        if (doc != undefined) {
          setSocials({
            facebook: doc.data()?.facebook,
            instagram: doc.data()?.instagram,
            youtube: doc.data()?.youtube,
            github: doc.data()?.github,
          });
        }
      });
    }

    obterSociais();
  }, []);

  return (
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <h1 className="md:text-4xl text-3xl font-bold text-white mt-20">
        It's not you... IT'S ME
      </h1>

      <Link
        to="/admin"
        className="my-3 bg-gray-700 h-9 text-white font-medium gap-4 flex items-center py-2 px-8"
      >
        Admin Page
      </Link>

      <span className="text-gray-50 mb-5 mt-3">Veja meus links</span>

      <main className="flex flex-col w-11/12 max-w-xl text-center">
        {links.length > 0 &&
          links.map((link) => {
            return (
              <section
                key={link.id}
                className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105"
                style={{ backgroundColor: link.background, color: link.color }}
              >
                <a href={link.url} target="_blank">
                  <p className="text-base md:text-lg">{link.name}</p>
                </a>
              </section>
            );
          })}

        {socials && Object.keys(socials).length > 0 && (
          <footer className="flex justify-center gap-3 my-4">
            {socials?.facebook != "" && (
              <Social url={socials?.facebook}>
                <FaFacebook size={35} color={"white"} />
              </Social>
            )}
            {socials?.instagram != "" && (
              <Social url={socials?.instagram}>
                <FaInstagram size={35} color={"white"} />
              </Social>
            )}
            {socials?.github != "" && (
              <Social url={socials?.github}>
                <FaGithub size={35} color={"white"} />
              </Social>
            )}
            {socials?.youtube != "" && (
              <Social url={socials?.youtube}>
                <FaYoutube size={35} color={"white"} />
              </Social>
            )}
          </footer>
        )}
      </main>
    </div>
  );
};
