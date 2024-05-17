import {useEffect, useState} from "react";

/**
 * Custom hook that fetches video data and sets it after a delay.
 *
 * @return {Array} The list of video data fetched after a delay.
 */
export const useVideoGrid = () => {

    const [videoList, setVideoList] = useState([]);
    useEffect(() => {
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
        }, 500);
    }, []);

    return videoList;
}
