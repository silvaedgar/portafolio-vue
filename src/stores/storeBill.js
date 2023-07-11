import { reactive } from "vue";

export const dataBill = reactive({
  params: {
    total: 0,
    tip: 0,
    peopleNumbers: 0,
    remaining: 0,
  },
  people: [],
});

export function getGrandTotal() {
  return dataBill.params.total * (dataBill.params.tip / 100 + 1);
}

export function calculate() {
  dataBill.people = [];
  console.log("DATA BILL CALCULATE BEORE ", dataBill);

  const total = dataBill.params.total;
  const tip = dataBill.params.tip;
  const peopleNumbers = dataBill.params.peopleNumbers;
  const totalPerPerson = getGrandTotal() / peopleNumbers;
  dataBill.params.totalPerPerson = getGrandTotal();

  for (let i = 0; i < peopleNumbers; i++) {
    dataBill.people.push({
      id: crypto.randomUUID(),
      personNumber: i + 1,
      paid: false,
      name: "",
      totalPerPerson,
    });
  }
  console.log("DATA BILL CALCULATE ", dataBill);
  calculateRemaining();
}

function calculateRemaining() {
  const missingToPay = dataBill.people.filter((item) => !item.paid);
  const remaining = missingToPay.reduce(
    (total, item) => total + item.totalPerPerson,
    0
  );
  dataBill.params.remaining = remaining;
}

export function pay(id, paid, name) {
  const person = dataBill.people.find((item) => item.id == id);
  if (person) {
    person.paid = paid;
    person.name = name;
    calculateRemaining();
  }
}
