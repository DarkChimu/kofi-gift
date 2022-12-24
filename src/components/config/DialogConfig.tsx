import { DialogueCardProps } from "../../models/Dialogue.model";

interface DialogueConfig {
  items: DialogueCardProps[];
}

export const dialogueConfig: DialogueConfig = {
  items: [
    {
      name: "Sebastian",
      userName: "Kofi",
      message: [
        "Hola Kofi.",
        "Ha pasado mucho tiempo desde que nos vimos por ultima vez.",
      ],
      characterSprite: "happy",
    },
    {
      name: "Sebastian",
      userName: "Kofi",
      message: [
        "Todos se han preguntado por ti.",
        "Un dia simplemente no volviste.",
        "Pasaba el tiempo y no habia noticias tuyas.",
      ],
      characterSprite: "default",
    },
    {
      name: "Sebastian",
      userName: "Kofi",
      message: [
        "Sali de mi habitacion en direccion a tu granja. Pero no estabas.",
        "Quiza habias ido a la ciudad o a encontar materiales en la Mina.",
        "O talvez encontrando inspiracion para tu nuevo vino.",
      ],
      characterSprite: "sad",
    },
    {
      name: "Sebastian",
      userName: "Kofi",
      message: [
        "Le he preguntado a la gente del pueblo pero nadie sabia nada.",
        "Odie eso...",
      ],
      characterSprite: "sad",
    },
    {
      name: "Sebastian",
      userName: "Kofi",
      message: [
        "Un dia llego un muchacho a la granja.",
        "Mas o menos de tu estatura.",
        "Vestia de negro y tenia un gorro de lana verde.",
      ],
      characterSprite: "default",
    },
    {
      name: "Sebastian",
      userName: "Kofi",
      message: [
        "Decia cosas extranas. Venia de un lugar que no sabia que existia.",
        "No le preste atencion hasta que menciono tu nombre.",
      ],
      characterSprite: "sad",
    },
    {
      name: "Sebastian",
      userName: "Kofi",
      message: [
        "Parece que son buenos amigos.",
        "Dijo que haz tenido problemas para venir a visitarnos.",
        "Pero, que no nos preocuparamos, dijo que volverias pronto.",
      ],
      characterSprite: "default",
    },
    {
      name: "Sebastian",
      userName: "Kofi",
      message: [
        "Me entrego esto.",
        "Dijo que podria dejarte un mensaje a travez de esto.",
      ],
      characterSprite: "default",
    },
    {
      name: "Sebastian",
      userName: "Kofi",
      message: [
        "Tambien me pidio que te diera esto.",
        "Es un regalo de su parte.",
      ],
      characterSprite: "default",
    },
    {
      name: "Sebastian",
      userName: "Kofi",
      message: ["", "Espero verte pronto y feliz navidad."],
      characterSprite: "happy",
    },
  ],
};
