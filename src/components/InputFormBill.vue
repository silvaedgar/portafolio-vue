<script setup>
import { ref } from "vue";
import {
  dataBill,
  getGrandTotal,
  calculate,
  pay,
} from "../stores/storeBill.js";
import { numberMask } from "../stores/storeNumberFormat";

const total = ref("");
const peopleNumbers = ref("");
const tip = ref("");

function calculateTotal(nro, decimals) {
  const totalTMP = numberMask(nro, decimals);
  handleSubmit();
  return totalTMP;
}

function handleSubmit() {
  if (total != "" && peopleNumbers != "") {
    dataBill.params.total = total;
    dataBill.params.peopleNumbers = peopleNumbers;
    dataBill.params.tip = tip;
    calculate();
  }
}

function handlePaid(e, people) {
  let namePerson = "";
  if (e.target.checked) namePerson = prompt("Ingrese el Nombre de la Persona");
  pay(people.id, e.target.checked, namePerson);
}
</script>

<template>
  <div class="container">
    <form class="mount-container" @submit.prevent="handleSubmit">
      <div>
        <label for="total">Total </label>
        <input
          class="input-value"
          type="text"
          v-model="total"
          id="total"
          @change.prevent="total = calculateTotal(total, 2)"
          @keyup.prevent="total = calculateTotal(total, 2)"
        />
      </div>
      <div>
        <label for="tip">% Propina </label>
        <input
          type="text"
          v-model="tip"
          id="tip"
          class="input-value"
          @change.prevent="tip = calculateTotal(tip, 2)"
          @keyup.prevent="tip = calculateTotal(tip, 2)"
        />
      </div>
      <div>
        <label for="people">Personas </label>
        <input
          type="text"
          v-model="peopleNumbers"
          id="people"
          class="input-value"
          @change.prevent="peopleNumbers = calculateTotal(peopleNumbers, 0)"
          @keyup.prevent="peopleNumbers = calculateTotal(peopleNumbers, 0)"
        />
      </div>
      <!-- <button class="btn-sm btn-primary" type="submit">Calcular</button> -->
    </form>

    <div class="people-container">
      <div class="data-pay" v-if="dataBill.params.total != 0">
        <div class="total">
          Total + Propina
          {{
            new Intl.NumberFormat("es-VE", {
              currency: "BsD",
              style: "currency",
            }).format(getGrandTotal())
          }}
        </div>

        <div class="total">
          Restante
          {{
            new Intl.NumberFormat("es-VE", {
              currency: "BsD",
              style: "currency",
            }).format(dataBill.params.remaining)
          }}
        </div>
      </div>
      <div v-if="dataBill.params.total == 0" class="no-items">
        <i class="fa fa-address-book" aria-hidden="true"></i>
        <i class="fas fa-home" aria-hidden="true"></i>
        No hay Monto de Pago
      </div>

      <div class="people">
        <div
          v-for="people in dataBill.people"
          :key="people.id"
          :class="people.paid ? 'person-paid' : 'person-no-paid'"
        >
          <div class="persona" v-if="!people.name">
            Persona {{ people.personNumber }}
          </div>
          <div class="persona" v-if="people.name">{{ people.name }}</div>

          <div class="mount-person">
            {{
              new Intl.NumberFormat("es-VE", {
                currency: "BsD",
                style: "currency",
              }).format(people.totalPerPerson)
            }}
          </div>
          <div class="paid">
            <input
              type="checkbox"
              @change="handlePaid($event, people)"
              :checked="people.paid"
            />
            {{ people.paid ? "Pagó" : "Sin Pagar" }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.persona {
  text-align: center;
  font-size: 20px;
  background-color: #ccc;
  padding: 10px;
  color: black;
}

.mount-container {
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: aqua;
  height: 8vh;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
}

.people {
  margin-top: 10px;
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
}
.mount-person {
  text-align: center;
  padding: 30px;
  font-size: xx-large;
  font-weight: bolder;
}

.data-pay {
  /* height: 80vh; */
  text-align: center;
  margin: auto;
  font-size: large;
  font-weight: bold;
}
.person-paid {
  border: 3px solid yellow;
  margin: 3px;
}

.person-no-paid {
  margin: 5px;
  border: 3px solid green;
}

.mount-container div input {
  width: 60%;
  display: inline-flex;
  min-height: 30px;
  padding: 7px;
  font-size: medium;
  height: auto;
  border: aqua 1px solid;
}



.mount-container div input:focus {
  /* border: #67b588 1px solid; */
    border: 5px solid rgb(199, 199, 245);
    outline-color: blue;
  }



.people-container {
  margin-top: 10px;
  background-color: black;
  color: yellow;
}

.total {
  font-size: x-large;
  font-weight: bolder;
  padding: 20px;
}

.paid {
  padding: 5px;
  background-color: #3f3f3f;
}

.no-items {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: x-large;
  font-weight: bolder;
  height: 100vh;
}

/* Media Query Maximo 550px */
@media (max-width: 550px) {
  .mount-container {
    background-color: aqua;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 10px;
    margin-bottom: 5px;
    gap: 10px;
  }
  .people {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .people-container {
    margin-top: 30px;
  }

  .mount-container div input {
    width: 45%;
  }
}

/* Media Query Maximo 800px */

@media (max-width: 1200px) {
  .people {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
  }
}

@media (max-width: 885px) {
  .people {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    margin: 0px;
  }

  .mount-container div input {
    width: 45%;
  }

}

/* Media Query Maximo 600px */

@media (max-width: 600px) {
  .mount-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 40%;
    margin-bottom: 5px;
  }
  .people {
    display: block;
    margin: 5px 0px 5px;
  }

  .mount-container div input {
    width: 45%;
  }

}
</style>
