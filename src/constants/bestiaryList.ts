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
      imageSrc: "/src/assets/images/hulk.png",
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
      imageSrc: "/src/assets/images/strider.png",
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
      imageSrc: "/src/assets/images/berserker.png",
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
      imageSrc: "/src/assets/images/commisary.png",
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
      imageSrc: "",
    },
    {
      name: "",
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
      imageSrc: "",
    },

  ]
}

const iluminates: BestiaryFactionInterface = {
  color: 'blue',
  enemies: []
}

export const bestiaryList: BestiaryListInterface = {
  automatons: automatons,
  terminids: terminids,
  iluminates: iluminates
}