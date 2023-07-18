import { reactive } from "vue";

export const dataBill = reactive({
  params: {
    total: "",
    tip: 0,
    peopleNumbers: 0,
    remaining: 0,
  },
  people: [],
});

export function getGrandTotal() {
  const totalStr = dataBill.params.total.replace(/[^0-9]*/g,"")
  const  total = parseFloat(totalStr).toFixed(2);
  return total * (dataBill.params.tip / 100 + 1);
}

export function calculate() {
  dataBill.people = [];

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
