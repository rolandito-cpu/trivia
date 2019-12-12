/*
Archivo: datos_preguntas.js
Configuración de las preguntas del juego.
*/

let preguntas = [
  {
   texto_pregunta:'¿Que podemos reciclar?',
    opciones:[
      'Botellas de plastico',
      'Yerba mate usada',
      'Cartones mojados'
    ],
    imagen_src:'img/preguntas/img_preg_01.png',
    respuesta_correcta: 'Botellas de plastico'
  },
  {
   texto_pregunta:'El vidrio puede ser reutilizado',
    opciones:[
      'Infinitas veces.',
      '10 veces.',
      '248 veces como mucho.'
    ],
    imagen_src:'img/preguntas/img_generica.png',
    respuesta_correcta: 'Infinitas veces.'
  },
  {
   texto_pregunta:'Una manera de frenar el calentamiento global es',
    opciones:[
      'Reciclar',
      'Cambiar nuestro estilo de vida a uno de consumo responsable',
      'Todas las anteriores'
    ],
    imagen_src:'img/preguntas/img_preg_03.png',
    respuesta_correcta: 'Todas las anteriores'
  },
  {
   texto_pregunta:'¿Que es el calentamiento global?',
    opciones:[
      'Globos calientes',
      'El aumento exponencial de la temperatura terrestre',
      'Es directamente proporcional al voltaje o tensión del mismo e inversamente proporcional a la resistencia que presenta.'
    ],
    imagen_src:'img/preguntas/img_preg_04.png',
    respuesta_correcta: 'El aumento exponencial de la temperatura terrestre'
  },
  {
   texto_pregunta:'¿Qué son las energías renovables?',
    opciones:[
      'Son moléculas formadas por aminoácidos que están unidos por un tipo de enlaces conocidos como enlaces peptídicos.',
      'Son aquellas fuentes de energía basadas en la utilización de recursos naturales',
      'Son aquellos principios, virtudes o cualidades que caracterizan a una persona, una acción o un objeto que se consideran típicamente positivos o de gran importancia por un grupo social'
    ],
    imagen_src:'img/preguntas/La-inversion-en-energias-renovables-se-ralentiza.jpg',
    respuesta_correcta:  'Son aquellas fuentes de energía basadas en la utilización de recursos naturales'
  },
  {
   texto_pregunta:'Una caracteristica de las energias renovables es: ',
    opciones:[
      'Le quitan el trabajo a la gente',
      'Contaminan el medio ambiente',
      'Ayudan a potenciar el consumo'
    ],
    imagen_src:'img/preguntas/kisspng-renewable-energy-geothermal-energy-solar-energy-ge-sun-power-svg-library-stock-techflourish-collect-5be29cc8edf7b7.3745839615415779289747.jpg',
    respuesta_correcta: 'Ayudan a potenciar el consumo'
  },
  {
   texto_pregunta:'Para protejer a los animales podemos',
    opciones:[
      'Comprar pieles',
      'Respetar las areas protegidas y reservas naturales',
      'Todas las anteriores'
    ],
    imagen_src:'img/preguntas/endangered-species-giant-panda-tiger-clip-art-others.jpg',
    respuesta_correcta: 'Respetar las areas protegidas y reservas naturales'
  },
  {
   texto_pregunta:'¿Que hacer frente a esta situación?',
    opciones:[
      'Sacar una foto',
      'Devolverlo al agua o llamar al guarda costa',
      'Mirar y asombrarse esperando a que alguien haga algo'
    ],
    imagen_src:'img/preguntas/signo1.jpg',
    respuesta_correcta: 'Devolverlo al agua o llamar al guarda costa'
  },
  {
   texto_pregunta:'La deforestacion puede ocasionarse por: ',
    opciones:[
      'El hombre',
      'Causas naturales',
      'Todas las anteriores'
    ],
    imagen_src:'img/preguntas/deforestacion-elefantes-e-incendios-forestales_1308-33603.jpg',
    respuesta_correcta: 'Todas las anteriores'
  },
  {
   texto_pregunta:'¿Que es la deforestacion? ',
    opciones:[
      'Es un dispositivo informático que es capaz de recibir, almacenar y procesar información de una forma útil.',
      'Es la manera de terminar con la idealizacion de un mundo ideal en el que el hombre domina.',
      'Es la eliminación del bosque para convertirlo a un uso no forestal.'
    ],
    imagen_src:'img/preguntas/hqdefault.jpg',
    respuesta_correcta: 'Es la eliminación del bosque para convertirlo a un uso no forestal.'
  },
  {
   texto_pregunta:'¿Cuales son los beneficios de reciclar?',
    opciones:[
      'Menos contaminación.',
      'Reduce el estrés.',
      'Nada, es todo publicidad'
    ],
    imagen_src:'img/preguntas/importancia-y-beneficios-del-reciclaje.jpg',
    respuesta_correcta: 'Menos contaminación.'
  },
  {
   texto_pregunta:'El plastico tarda alrededor de:',
    opciones:[
      '1 semana.',
      '700 años en degradarse.',
      '2 dias'
    ],
    imagen_src:'img/preguntas/41991921-asustado-botella-de-plástico-de-dibujos-animados-de-vectores.jpg',
    respuesta_correcta: '700 años en degradarse.'
  },
  {
   texto_pregunta:'El calentamiento global afecta a:',
    opciones:[
      'Todos los seres vivos.',
      'Solo a las lagartijas.',
      'A todos los invertebrados.'
    ],
    imagen_src:'img/preguntas/75459224-para-el-calentamiento-global-carácter-del-planeta-tierra-ilustración-.jpg',
    respuesta_correcta: 'Todos los seres vivos.'
  },
  {
   texto_pregunta:'El mayor causante del calentamiento global son: ',
    opciones:[
      'El humo del cigarrillo',
      'Los gases de efecto invernadero',
      'Una mala alimentacion'
    ],
    imagen_src:'img/preguntas/1366_2000.jpg',
    respuesta_correcta: 'Los gases de efecto invernadero'
  },
  {
   texto_pregunta:'Tipos de energías renovables:',
    opciones:[
      'Hidroelectrica',
      'Plantas de radioactividad',
      'Nuclear.'
    ],
    imagen_src:'img/preguntas/depositphotos_94990100-stock-illustration-hydroelectric-power-station-cartoon-icon.jpg',
    respuesta_correcta: 'Hidroelectrica'
  },
  {
   texto_pregunta:'Las energias renovables ayudan a combatir el crimen',
    opciones:[
      'Verdadero',
      'Falso'
    ],
    imagen_src:'img/preguntas/70027525-ladrón-con-una-pistola-ladrón-de-dibujos-animados-divertidos-en-máscara-negra-robar-un-bolso-concepto-de-fra.jpg',
    respuesta_correcta: 'Falso'
  },
  {
   texto_pregunta:'Hay que cuidar a los animales en peligro de extincion por que:',
    opciones:[
      'Son lindos.',
      'Son partes importantes de un cadena trofica.',
      'Ayudan a cuidar la piel.'
    ],
    imagen_src:'img/preguntas/cadenas-troficas-e1553098486793.jpg',
    respuesta_correcta: 'Son partes importantes de un cadena trofica.'
  },
  {
   texto_pregunta:'Los zoológicos modernos: ',
    opciones:[
      'Usan a los animales como un circo',
      'Deben cerrar',
      'Ayudan en la lucha contra la extincion de los animales.'
    ],
    imagen_src:'img/preguntas/zoologico-de-dibujos-animados-y-ninos-ilustracion-de-la-bandera-400-2084710.jpg',
    respuesta_correcta: 'Ayudan en la lucha contra la extincion de los animales.'
  },
  {
   texto_pregunta:'El amazonas es:',
    opciones:[
      'Uno de los principales pulmones del mundo.',
      'Un simple atractivo turistico.',
      'Una localidad de buenos aires.'
    ],
    imagen_src:'img/preguntas/depositphotos_109486798-stock-photo-green-anaconda-in-the-amazon.jpg',
    respuesta_correcta: 'Uno de los principales pulmones del mundo.'
  },
  {
   texto_pregunta:'La deforestacion por minería afecta mayormente a: ',
    opciones:[
      'La degradacion de los suelos y las poblaciones, que se ven afectadas por la contaminación de los recursos',
      'Las empresas capitalistas',
      'Todas las anteriores.'
    ],
    imagen_src:'img/preguntas/contaminación-del-suelo-4.jpg',
    respuesta_correcta: 'La degradacion de los suelos y las poblaciones, que se ven afectadas por la contaminación de los recursos'

  }

];

