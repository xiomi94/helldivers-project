import {
  berserkerImage,
  commisaryImage,
  hulkImage,
  scavengerImage,
  striderImage,
  hunterImage,
  stalkerImage,
  bileTitanImage,
  votelessImage,
  overseerImage,
  watcherImage,
  tripodeImage
} from "../assets/images";

export interface EnemiesInterface {
  name: string,
  description: string[],
  imageSrc: string,
}

export interface BestiaryFactionInterface {
  color: string,
  enemies: EnemiesInterface[],
}

export interface BestiaryListInterface {
  automatons: BestiaryFactionInterface,
  terminids: BestiaryFactionInterface,
  iluminates: BestiaryFactionInterface,
}

const automatons: BestiaryFactionInterface = {
  color: 'red',
  enemies: [
    {
      name: 'Hulk',
      description: [
        'El Hulk es lo que pasa cuando los Autómatas deciden que un tanque con patas es una buena idea. ' +
        'Es grande, está armado hasta los dientes y tiene la sutileza de una excavadora en una tienda de porcelana. ' +
        'No camina, avanza con la confianza de alguien que sabe que es casi imposible de matar, y si lo ves aparecer ' +
        'en el campo de batalla, ya sabes que la diversión se ha terminado.\n',
        'Este desgraciado viene equipado con dos ametralladoras Gatling, porque claramente una no era suficiente, ' +
        'y las usa para regarte con balas como si fueras el césped en un día caluroso. ' +
        'Intentar correr en zigzag no sirve de nada porque sus disparos lo cubren todo. Si crees que esconderte detrás ' +
        'de una roca te salvará, te espera una sorpresa, porque esas balas atraviesan cobertura como si fuera papel mojado.\n',
        'Y por si eso fuera poco, algunos modelos también traen lanzacohetes, porque al parecer la lluvia de plomo no era' +
        ' suficiente. Básicamente, el Hulk es la versión Autómata de un “mira cómo te destruyo sin esfuerzo”. ' +
        '¿Intentaste flanquearlo? Pues prepárate para descubrir que su armadura es tan gruesa que incluso un ataque ' +
        'orbital a veces siente que no hizo suficiente daño.'
      ],
      imageSrc: hulkImage,
    },
    {
      name: "Cuadrúpedo",
      description: [
        'El Cuadrúpedo es básicamente lo que pasaría si un andador de Star Wars y una fábrica de municiones tuvieran un hijo,' +
        ' y ese hijo decidiera que su único propósito en la vida es hacerte pedazos. No camina, no corre… rueda como un ' +
        'tanque con esteroides, porque claro, los Autómatas no pueden conformarse con ser molestos, tienen que ser' +
        ' opresivamente molestos.\n',
        'Este bicho no solo es grande, sino que además va armado hasta los dientes… si es que tuviera dientes. ' +
        'Lanzacohetes, ametralladoras y un blindaje que haría llorar a cualquier Helldiver que no haya traído suficiente explosivo.' +
        '¿Intentaste dispararle al frente? Mala idea, porque es como intentar romper una caja fuerte con un tirachinas. \n' +
        'Tienes que colarte por los laterales o por la parte trasera, pero claro, eso significa acercarte, ' +
        'y todos sabemos que cualquier intento de acercamiento a un Cuadrúpedo normalmente termina en una lluvia de balas y lágrimas.',
        'Si ves uno en el campo de batalla, tienes dos opciones: o llamas a todo el poder del Águila y lo borras del mapa,' +
        ' o te preparas para una experiencia de guerra que haría sudar hasta a un veterano. Y lo peor es que nunca viene solo,' +
        ' siempre está rodeado de otros Autómatas como si fuera el jefe de una pandilla de matones metálicos.'
      ],
      imageSrc: striderImage,
    },
    {
      name: "Berserker",
      description: [
        'Los Berserkers son la prueba definitiva de que los Autómatas pueden ser auténticos psicópatas de metal. ' +
        'Mientras sus colegas disparan desde la distancia como soldados normales, estos desgraciados decidieron que la ' +
        'mejor estrategia de combate es correr directo hacia ti y partirte la cara a puñetazo limpio.\n',
        'Imagínate un robot gigante con cuchillas en lugar de manos y la actitud de un matón de bar con exceso de confianza.' +
        'No disparan, no planean, no tienen ningún sentido de autopreservación… simplemente cargan hacia ti como si les ' +
        'hubieras robado la merienda. Y no es solo uno, vienen en grupo, porque claro, ¿por qué pelear con honor cuando ' +
        'pueden rodearte y hacerte sentir como la piñata en una fiesta de niños hiperactivos?\n',
        'Intentar mantener la distancia es complicado porque son rápidos, resistentes y, lo peor de todo, cada golpe que te dan te desarma.' +
        'Así es, no solo te revientan, sino que encima te dejan sin tu arma, porque aparentemente no es suficiente con hacerte sufrir, también quieren verte indefenso y desesperado.'
      ],
      imageSrc: berserkerImage,
    },
    {
      name: "Comisario",
      description: [
        'El Comisario es básicamente el típico jefe de oficina que no hace mucho, pero siempre está ahí para gritar órdenes y hacerte la vida imposible. ' +
        'No es el enemigo más fuerte ni el más rápido, pero es el que convierte cualquier enfrentamiento en un infierno, ' +
        'porque su única función en la vida es hacer que los demás Autómatas te quieran borrar del mapa.\n' +
        'Este pedazo de chatarra anda por ahí con su gabardina de metal como si fuera el villano de una película barata,' +
        ' señalando con su brazo robótico y gritando "¡Eliminadlos!" en cuanto te ve. Y claro, sus subordinados, ' +
        ' que de por sí ya eran un problema, de repente entran en modo locura y empiezan a disparar con la precisión de francotiradores olímpicos.\n' +
        ' Intentar ignorarlo es un error, porque mientras siga en pie, todo lo que te rodea será más agresivo, más rápido y más letal.' +
        ' Es como si estuviera repartiendo Red Bulls invisibles a sus tropas. Y lo peor es que, cuando logras acercarte para matarlo,' +
        ' saca una escopeta y te destroza de cerca, porque claro, ¿qué sería de un líder sin la capacidad de arruinarte la existencia hasta el último segundo?.'
      ],
      imageSrc: commisaryImage,
    }
  ]

}

const terminids: BestiaryFactionInterface = {
  color: 'yellow',
  enemies: [
    {
      name: "Carroñero",
      description: [
        'El Carroñero es ese bicho oportunista que no hace nada productivo, pero siempre está ahí para fastidiar. ' +
        'Es básicamente el colega que nunca pone para la cuenta pero se come toda la pizza. ' +
        'No tiene el tamaño de un Titán ni la agresividad de un Acechador, pero compensa su mediocridad con pura molestia estratégica.\n' +
        'Su especialidad es correr como si le debieras dinero y dar la alarma en cuanto te ve, porque claro, ' +
        '¿por qué pelear cuando puede simplemente llamar a sus amigos más grandes y fuertes para que hagan el trabajo sucio? ' +
        'Lo peor es que no puedes ignorarlo, porque si no lo bajas a tiempo, prepárate para una invasión de bichos saliendo de todos lados como si hubieras pateado un hormiguero.\n' +
        'Intentar matarlo es un ejercicio de paciencia porque es rápido, escurridizo y tiene el don de aparecer en el peor momento posible. Justo cuando estás recargando, ' +
        'lanzando una estratagema o simplemente disfrutando de un segundo de calma… ahí está él, chillando como si lo estuvieran apuñalando.'
      ],
      imageSrc: scavengerImage,
    },
    {
      name: "Cazador",
      description: [
        'Los Cazadores son como esos tipos que aparecen de la nada en una película de terror justo cuando pensabas que estabas a salvo.' +
        ' Son rápidos, agresivos y tienen una obsesión preocupante con apuñalar Helldivers como si estuvieran participando en un concurso de puñaladas por segundo.\n' +
        'A diferencia de los Acechadores, que al menos se esconden como cobardes, los Cazadores vienen de frente, ' +
        'sin miedo y con más velocidad de la que cualquier bicho debería tener legalmente. ' +
        'Los ves cargando con esas garras enormes y lo único que pasa por tu cabeza es: "Ah bueno, hasta aquí llegué." ' +
        'Intentar esquivar a uno es difícil, pero cuando llegan en manada, ya puedes ir llamando al servicio funerario más cercano.\n' +
        'Lo peor es que no les basta con golpearte, no. Tienen que lanzarse encima de ti, hacerte una llave de lucha libre y después apuñalarte repetidamente como si les hubieras insultado a la madre.' +
        ' Si no tienes reflejos de ninja y una buena escopeta, básicamente estás condenado.'
      ],
      imageSrc: hunterImage,
    },
    {
      name: "Acechador",
      description: [
        'Los Acechadores son la peor pesadilla de cualquier Helldiver con ganas de vivir en paz. Son básicamente lo que pasaría si un velociraptor,' +
        ' una sombra y el puro deseo de arruinarte el día se fusionaran en un solo ser.\n' +
        'Estos desgraciados no atacan de frente como bichos decentes, no. Ellos juegan sucio. Se esconden, acechan, ' +
        'y justo cuando te relajas un segundo pensando que estás a salvo, ¡pum! Te saltan encima como un cobrador del frac con turbo. ' +
        'Su especialidad es el susto gratuito y el asesinato express, porque claro, ¿por qué pelear como cualquier otro ' +
        'enemigo cuando pueden simplemente esperar a que estés distraído y destriparte en un segundo?\n' +
        'Intentar matarlos es otro dolor de cabeza, porque son rápidos, escurridizos y encima tienen la desfachatez de volverse invisibles. ' +
        'Así que prepárate para girar en círculos como un paranoico, disparar al aire por puro pánico y, al final, acabar devorado mientras gritas de frustración. ' +
        'Si el infierno tiene un zoológico, estos bichos son los reyes del lugar.'
      ],
      imageSrc: stalkerImage,
    },
    {
      name: "Titán de Bilis",
      description: [
        'El Titán de Bilis es básicamente lo que pasaría si un tanque de guerra y una alcantarilla tuvieran un bebé… y luego ese bebé se alimentara exclusivamente de odio y comida podrida.' +
        ' Es un bicho enorme, viscoso y con más mala leche que un supervisor en lunes por la mañana.\n' +
        'Este monstruo se especializa en vomitar un chorro de bilis verde radiactiva que derrite todo a su paso, incluyendo tu armadura, tu dignidad y cualquier esperanza de salir ileso.' +
        ' Además, tiene la resistencia de una roca gigante hecha de puro rencor, porque aunque le lances estratagemas como si fueran confeti en Año Nuevo, seguirá avanzando con una actitud de "¿eso era todo?".\n' +
        '¿Su punto débil? La parte trasera, porque claro, hasta los titanes tienen problemas con los ataques por la espalda. ' +
        'Así que prepárate para darle vueltas como si fuera un toro mecánico mientras rezas porque tu equipo no te bombardee accidentalmente (o a propósito, que también pasa). ¡Buena suerte, soldado!'
      ],
      imageSrc: bileTitanImage,
    }
  ]
}

const iluminates: BestiaryFactionInterface = {
  color: 'blue',
  enemies: [
    {
      name: "Voteless",
      description: [
        '¡Ay los Voteless! \n' +
        'Estos chicos son como los zombies de la facción: lentos, torpes y con una obsesión por acercarse demasiado. ' +
        'Antes, eran ciudadanos de la Super Tierra, pero los Iluminados los secuestraron, les lavaron el cerebro y los convirtieron en estas criaturas sin voluntad. \n' +
        'En el campo de batalla, los voteless se acercan corriendo y, cuando están lo suficientemente cerca, ' +
        'te atacan con un zarpazo. Son como ese amigo que no entiende las señales sociales y se te acerca demasiado, ' +
        'pero en versión alienígena y con garras.\n' +
        'Aunque no son muy inteligentes, su número puede ser abrumador. Es como si los Iluminados dijeran: "Si no puedes vencerlos, ¡llévalos por cansancio!" \n' +
        'Así que, si ves a un voteless, no te preocupes demasiado; solo asegúrate de mantener tu distancia y no dejar que te rodeen.'
      ],
      imageSrc: votelessImage,
    },
    {
      name: "Overseer",
      description: [
        'El overseer es como ese guardia de seguridad que se toma su trabajo demasiado en serio. ' +
        'Armado con un bastón de energía que puede usarse tanto para atacarte a distancia como para darte un buen golpe si te acercas demasiado,' +
        ' este tipo no se anda con tonterías. Además, lleva un escudo direccional en su brazo izquierdo, ' +
        'porque claro, ¿por qué no añadir un poco más de dificultad a tu día? \n' +
        'Cuando no está disparándote, el overseer se protege tras su escudo, obligándote a pensar estratégicamente en lugar de simplemente disparar a lo loco.' +
        ' Es como si te desafiara a un juego de ajedrez en medio de una batalla campal. Y si decides atacarlo de frente, prepárate para que te reciba con su bastón de energía,' +
        ' dándote una lección sobre mantener la distancia adecuada.\n' +
        'La clave para enfrentarte a un overseer es apuntar a sus puntos débiles y utilizar armas que puedan superar su escudo. ' +
        'Pero no te confíes, porque estos tipos suelen aparecer en los momentos más inoportunos, listos para convertir tu misión en un desafío aún mayor.' +
        ' Así que, la próxima vez que lo veas, recuerda: no es solo un enemigo más; es el tipo que hará que te replantees tu estrategia y te recordará que, en el espacio, nadie puede oír tus quejas.'
      ],
      imageSrc: overseerImage,
    },
    {
      name: "Watcher",
      description: [
        'El Watcher es como ese chivato en la escuela que siempre está al acecho, listo para delatarte en cuanto haces algo mal.' +
        ' Estos drones flotantes de los Iluminados patrullan sin rumbo fijo hasta que te detectan, ' +
        'momento en el cual se detienen en seco y lanzan bengalas holográficas para llamar a sus amigos y convertir tu día en un caos. \n' +
        'No contentos con solo alertar a sus camaradas, los Watchers también pueden atacarte directamente con descargas eléctricas debilitantes si te acercas demasiado,' +
        ' como si fueran una versión futurista de una valla electrificada. ' +
        'Su diseño cruciforme y su vuelo a unos cinco metros del suelo los hacen parecerse a una lámpara de araña flotante con muy malas intenciones. \n' +
        'La clave para lidiar con estos soplones voladores es eliminarlos antes de que completen su llamada de refuerzos. ' +
        'Afortunadamente, no están muy blindados, por lo que cualquier arma debería bastar para derribarlos. ' +
        'Pero no te confíes; si uno logra alertar a sus aliados, prepárate para enfrentarte a una oleada de enemigos adicionales que harán que desees haber sido más rápido con el gatillo.'
      ],
      imageSrc: watcherImage,
    },
    {
      name: "Trípode",
      description: [
        'El trípode es como si los Iluminados hubieran decidido que un trípode gigante con un solo ojo láser era justo lo que necesitaban para arruinarte el día.' +
        ' Imagina una lámpara de escritorio mutante que, en lugar de iluminar tu libro, prefiere desintegrarte con un rayo láser continuo desde su único y amenazante ojo. \n' +
        'Pero espera, porque este "adorable" trípode no se conforma con un simple láser. ' +
        'No, también tiene la amabilidad de electrocutarte con descargas eléctricas si te acercas demasiado,' +
        ' como si fuera un pastor eléctrico con complejo de superioridad. ' +
        'Y por si fuera poco, cuando intentas devolverle el favor y atacarlo, ' +
        'activa un escudo que puede absorber más daño que tu paciencia en una misión fallida. \n' +
        'En resumen, enfrentarse a un trípode es como intentar apagar un incendio con una pistola de agua: frustrante,' +
        ' peligroso y probablemente terminarás chamuscado. Así que, la próxima vez que veas a este trípode con complejo de dios,' +
        ' recuerda traer tus mejores armas y una buena dosis de paciencia... o simplemente corre en dirección contraria.'
      ],
      imageSrc: tripodeImage
    }
  ]
}

export const bestiaryList: BestiaryListInterface = {
  automatons: automatons,
  terminids: terminids,
  iluminates: iluminates
}