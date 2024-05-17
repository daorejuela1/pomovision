import {useEffect, useState} from "react";

export const useVideoGrid = () => {

    const [videoList, setVideoList] = useState([]);
    /**
     * Se hace uso de useEffect para definir un efecto de montaje que traerá la información de ingredientes
     * del back-end en el primer renderizado.
     */
    useEffect(() => {
        //fetch(process.env.REACT_APP_GW_URL).then((res) => res.json()).then((res) => setRestaurants(res));

        setTimeout(() => {
            setVideoList([
                    {
                      "id": "g_zAjsspnR8",
                      "title": "Qué Difícil es el Amor",
                      "description": "Si este video te resultó muy reciclado, mira los nuevos en nuestro canal principal"
                    },
                    {
                      "id": "MTqJgIx-VEc",
                      "title": "El Lado Oscuro De Las Redes Sociales",
                      "description": "Si este video te resultó muy reciclado, mira los nuevos en nuestro canal principal"
                    },
                    {
                      "id": "npNcHK2fvqo",
                      "title": "El Inútil Juego del Miedo",
                      "description": "5 Minutitos Más es un “sketch comedy group” dedicado a la creación y producción audiovisual de contenido cómico,"
                    },
                    {
                      "id": "F-VZ4DpSwSw",
                      "title": "Gente Fastidiosa en el Gimnasio",
                      "description": "5 Minutitos Más es una creación de Andrés Felipe Orjuela Bustillo"
                    },
                    {
                      "id": "ZOBUt-CP8xU",
                      "title": "Visitando la ciudad con menos oxígeno del mundo",
                      "description": "Para grabar este video pasamos tres días en La Rinconada, Perú: La ciudad más alta asentada a más de 5,100 metros sobre el nivel del mar"
                    },
                    {
                      "id": "vRCasWrsSiE",
                      "title": "Potencial y riesgos de un nuevo supercomputador",
                      "description": "Un nuevo supercomputador podría evitar experimentos con animales dirigidos a curar el cáncer"
                    },
            ]);
        }, 2500);
    }, []);

    return videoList;
}
