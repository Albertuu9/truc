<template>
  <div class="text-center">
    <v-dialog v-model="value" scrollable fullscreen>
      <v-card>
        <v-card-title class="headline modal-header" primary-title>
          <span>{{ $t('modalRules.title') }}</span>
          <v-spacer></v-spacer>
          <v-btn dark icon>
            <v-icon @click="closeModal">close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <h4 class="mytitle pb-4 pt-4">Descripción</h4>
          <span>
            Se trata de un juego de baraja española para el que se emplean tan sólo 22 de las 40 cartas de la baraja: se retiran las figuras, los doses, el as de oros y el de copas.
            El truc puede jugarse entre dos, cuatro, seis u ocho jugadores (por equipos en estos tres últimos casos).
          </span>
          <v-divider class="mt-3 mb-3"></v-divider>
          <h4 class="mytitle pb-4 pt-4">Objetivo del juego</h4>
          <span>
            El
            <b>objetivo</b> general del juego del truc es ganar
            <b>dos camas</b> (juegos parciales).
            Cada cama consta a su vez de 24 tantos, que deberá ir sumando cada pareja a lo largo de varias manos.
            La cama a su vez se reparte en dos partes; a los 12 primeros tantos se les denomina las malas, y a los 12 restantes las buenas.
          </span>
          <v-divider class="mt-3 mb-3"></v-divider>
          <h4 class="mytitle pt-4 pb-4">Truco</h4>
          <span>
            El lance de truco consiste en disputar bazas. Dado que cada jugador dispone de tres cartas en cada mano, son tres las bazas a jugar por mano. Cada jugador lanzará en su turno una carta al tapete, y la carta de mayor valor será la que venza cada baza, según la siguiente jerarquía entre cartas:
            <ul>
                <li>El As de Espadas</li>
                <li>El AS de Bastos</li>
                <li>El Siete de Espadas</li>
                <li>El Siete de Oros</li>
                <li>Los Treses</li>
                <li>Los Sietes Falsos (Siete de Copas y Siete de Bastos)</li>
                <li>Los Seises</li>
                <li>Los Cincos</li>
                <li>Los Cuatros</li>
            </ul>
            <p>Para ganar el truco hay que llevarse dos de esas tres bazas.</p>
            <p>Si los dos adversarios tienen carta de igual valor para ganar la baza, la misma se empata: baza parda.</p>
            <p>En caso de que cada pareja gane una baza y otra quede en empate, gana la pareja que antes haya conseguido la suya. En el caso excepcional de que las tres sean empate, gana la pareja que tiene la mano.</p>
            <p>En aquellos casos en que la tercera baza es irrelevante, porque ya estuviera decidida la mano, esta última baza no llega a disputarse (porque una pareja ya ha ganado las dos primeras bazas, o bien ha ganado una y empatado la otra).</p>
            <p>El jugador que gane una baza es quien dará comienzo a la siguiente lanzando carta.</p>
            <p>Quien gane el truco gana <b>un punto</b> para el recuento global de esa cama.</p>
            <p>La fase de truco cualquier jugador puede proponer truco a los rivales, lo que supone que se apuesta porque quien gane el truco se llevará <b>dos tantos</b>. Si los rivales no quieren una apuesta de truco, quien lo cantó se llevará un punto.</p>
            <p>Quien recibe la apuesta de truco puede a su vez cantar retruco en cualquier momento, lo que implica, si se acepta, que quien gane el truco se llevará <b>3 puntos</b>. Si no se acepta el retruco, quienes lo cantaron ganarán dos puntos.</p>
            <p>A su vez, y como última réplica posible, quien recibe la propuesta de retruco tiene la posibilidad de cantar quatre val, lo que supone que, si se acepta, quien gane el truco se llevará <b>4 puntos</b>. Si no se acepta, quien propuso quatre val se llevará 3 puntos.</p>
            <p>La propuesta de quatre val puede responderse con la de joc fora con la que se apuesta directamente <b>toda la cama</b>.</p>
            <p>Si en un momento dado el jugador a quien corresponde jugar una carta es consciente de que no tiene posibilidades de ganar el truco, tiene la opción de irse al mazo. Cuando juegan dos jugadores da la mano por perdida finalizando ésta de inmediato, mientras que cuando juegan cuatro su pareja continúa jugando la mano.</p>
          </span>
          <v-divider class="mt-3 mb-3"></v-divider>
          <h4 class="mytitle pb-4 pt-4">Envido</h4>
          <p>Opcionalmente cada jugador puede cantar envido (envide) en su primer turno durante la mano, antes de realizar o responder una apuesta de truco, o lanzar la primera carta. Una vez abierto el envido el lance de truco queda aplazado hasta cerrar completamente la apuesta del envido.</p>
          <p>El envido es una apuesta en la que se pone en juego cuál es el jugador que tiene una puntuación más elevada según las siguientes reglas:</p>
          <ul>
              <li>Si se tienen dos cartas del mismo palo, se suman los índices de ambas y a dicha suma se le añaden 20 puntos más.</li>
              <li>Si no se tienen dos cartas del mismo palo se tendrá en cuenta tan sólo el valor de la carta de índice superior.</li>
              <li>Si se tuvieran tres cartas del mismo palo se tendrá en cuenta el valor de las dos superiores, a las que habrá que sumar los 20 puntos.</li>
          </ul>
          <p>Quien gane el envido suma <b>dos tantos</b> en la puntuación general del chico que se esté jugando. En caso de que no haya apuesta, el lance no se disputa y por tanto no se suma ningún punto por este concepto.</p>
          <p>El envido (envide) puede ser respondido con un torne (<b>dos tantos más</b>).</p>
          <p>Un tipo de envite especial es la falta. Igual a los anteriores en las reglas para plantearlo y para ganarlo pero en el que lo que se apuesta son los tantos necesarios hasta alcanzar <b>aquellos que falten para vencer esa cama</b> a la pareja que va ganando en el momento en que se plantea. Si los dos están en malas, se apuestan la cama directamente, si no, los tantos que le faltan al que va ganando. La respuesta al torne solo puede ser la falta.</p>
          <p>En caso de empate en este lance, lo gana el jugador que sea mano.</p>
          <p>En ocasiones hay jugadores que juegan al <b>truc</b> pudiendo apostar al envido cualquier cantidad, si bien la opción más extendida es la de utilizar sólo las apuestas fijas indicadas, y ésta ha sido la opción elegida en Ludoteka.</p>
          <p>En caso de que la apuesta no sea aceptada, la pareja apostante recibe un punto, o la apuesta anterior en caso de que se tratase de una réplica.</p>
          <p>Cuando una apuesta de envido es aceptada los jugadores pasan a jugar la fase de truco y después es cuando se comprueba quién es el vencedor del envido. Esta comprobación se hace en el mismo orden en que se hacen las apuestas: <b>primero el envido y luego el truco</b>. Este orden es importante de cara a los finales de una cama en los que los contrincantes estén acercándose a la puntuación prefijada, ya que la gana la cama quien antes alcance esta puntuación.</p>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "ModalRules",
  data() {
    return {};
  },
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit("input", false);
    }
  }
};
</script>