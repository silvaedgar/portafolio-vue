<script setup>
import { products } from "../stores/storeProducts";
import ProductsList from "@/components/crud/ProductsList.vue";
import HeaderTable from "@/components/crud/HeaderTable.vue";
import ModalProduct from "@/components/crud/ModalProduct.vue";
import { ref } from "vue";
import { numberMask } from "../stores/storeNumberFormat";

const isValidForm = ref(false);
const modalActive = ref(false);
const isCreate = ref(false);
const message = ref("");
var productsList = ref([]);
productsList.value = products.details;
const search = ref("");

const productCurrent = ref({
  code: "",
  name: "",
  sale: "",
  cost: "",
});

const fieldProductErrors = ref({
  codeError: true,
  nameError: true,
  costError: true,
  saleError: true,
});

function toggleModal() {
  console.log("ESTOY EN TOGGLE");
  modalActive.value = !modalActive.value;
  console.log("CAMBIE ESTOY EN TOGGLE", modalActive.value, productsList);
}

function getProduct(productCurrent) {
  return {
    id: isCreate.value ? crypto.randomUUID() : productCurrent.value.id,
    code: productCurrent.value.code,
    name: productCurrent.value.name,
    sale: productCurrent.value.sale,
    cost: productCurrent.value.cost,
  };
}

function saveProduct() {
  const product = getProduct(productCurrent);

  message.value = "Producto " + product.name;
  if (isCreate.value) {
    message.value += " creado  ";
    products.details.push(product);
  } else {
    const index = products.details.findIndex(
      (item) => productCurrent.value.id == item.id
    );

    products.details[index].code = product.code;
    products.details[index].name = product.name;
    products.details[index].cost = product.cost;
    products.details[index].sale = product.sale;

    message.value += " actualizado  ";
  }
  message.value += "exitosamente ";
  toggleModal();
}

function createProduct() {
  isCreate.value = true;
  isValidForm.value = false;
  productCurrent.value.code = "";
  productCurrent.value.name = "";
  productCurrent.value.sale = "";
  productCurrent.value.cost = "";
  toggleModal();
}

function editProduct(product) {
  isCreate.value = false;
  isValidForm.value = true;
  const itemProduct = productsList.value.find((item) => product.id == item.id);
  productCurrent.value.code = itemProduct.code;
  productCurrent.value.name = itemProduct.name;
  productCurrent.value.sale = itemProduct.sale;
  productCurrent.value.cost = itemProduct.cost;
  productCurrent.value.id = itemProduct.id;
  toggleModal();
}

function deleteProduct(product) {
  const itemProduct = products.details.findIndex(
    (item) => product.id == item.id
  );
  if (confirm("Seguro de Eliminar")) {
    products.details.splice(itemProduct, 1);
  }
}

function validateFieldProduct(nameField, valueField) {
  // console.log(nameField, fieldProductErrors, valueField)
  switch (nameField) {
    case "code":
      fieldProductErrors.value.codeError  = valueField == '';
      break
    case "name":
      fieldProductErrors.value.nameError  = valueField == '';
      break;
    case "cost":
      fieldProductErrors.value.costError  = valueField == '';
      break;

    default:
      fieldProductErrors.value.saleError  = valueField == '';
      break;
  }
  validateForm();
}

function validateForm() {
  var isValid = false
Object.entries(fieldProductErrors.value).forEach(([key, value]) => {
  console.log("ENTRIE ",key,value)
  isValid = isValid || value
});

  isValidForm.value = !isValid;
  console.log(" FORM Valido", isValidForm, isValid);
}

function searchProduct() {
  const searchElement = search.value;

  productsList.value = [];

  for (let i = 0; i < products.details.length; i++) {
    if (
      products.details[i].code
        .toLowerCase()
        .includes(searchElement.toLowerCase()) ||
      products.details[i].name
        .toLowerCase()
        .includes(searchElement.toLocaleLowerCase()) ||
      searchElement == ""
    )
      productsList.value.push(products.details[i]);
  }

  // El codigo de abajo no fucniona no se porque productsList es Proxy(Array) y productsList1 es proxy(object y da error JS)
  // no entiendo el porque
  //  var productsList1 = products.details.filter((item) =>
  //   item.code.includes(searchElement) || item.name.includes(searchElement)
  // );
  // console.log("SEARCH ELEMET 2", productsList1, typeof productsList1, productsList, typeof productsList);

  // productsList = []
  // for (let i=0; i < productsList1.length ; i++) {
  //   console.log(productsList1[0])
  //   // productsList.push(productsList1[i]);
  // }
  // console.log("SEARCH ELEMET ", productsList1, typeof productsList1, productsList, typeof productsList);
  // // productsList = JSON.parse(JSON.stringify(productsList1))
}
// onMounted(() => {
//   const productsList1 = [...products.details]
//   const productsList2 = Array.from(products.details)
//   const productsList3 = products.details
//   const productsList4 = [].concat(products.details)
//   const productsList5 = products.details.slice()
//   const productsList6 = JSON.parse(JSON.stringify(products.details))

//   // productsList = products.details
//   // console.log("PRODUCT LIST1",productsList1);
//   // console.log("PRODUCT LIST2",productsList2);
//   // console.log("PRODUCT LIST3",productsList3);
//   // console.log("PRODUCT LIST4",productsList4);
//   // console.log("PRODUCT LIST5",productsList5);
//   // console.log("PRODUCT LIST6",productsList6);
// });
</script>

<template>
  <div>
    <div class="header-message">
      <h3>Componente que permite hacer un Crud de Productos</h3>
      <div class="message" v-if="message">
        {{ message }}
      </div>
      <div class="container-search-table">
        <button
          @click="createProduct"
          class="btn-sm btn-primary"
          style="width: 50%; justify-self: center"
        >
          Agregar Producto
        </button>

        <span style="text-align: end; padding-right: 10px"> Buscar </span>
        <input
          type="text"
          style="justify-self: start; width: 50%; height: 60%; padding: 10px"
          v-model="search"
          @keyup="searchProduct"
        />
      </div>
    </div>
    <ModalProduct
      @close="toggleModal"
      @save="saveProduct"
      :modalActive="modalActive"
      :isValidForm="isValidForm"
      v-if="modalActive"
    >
      <div class="modal-content">
        <h1>
          {{
            isCreate
              ? "Crear Producto"
              : "Editar Producto " + productCurrent.name
          }}
        </h1>
        <div class="input-data">
          <label for="code"> Codigo </label>
          <div>
            <input
              type="text"
              id="code"
              v-model="productCurrent.code"
              @blur="validateFieldProduct('code', productCurrent.code)"
            />
            <div class="message-error" v-if="fieldProductErrors.codeError">
              Debe ingresar el Codigo
            </div>
          </div>
        </div>
        <div class="input-data">
          <label for="name"> Nombre </label>
          <div>
            <input
              type="text"
              id="name"
              v-model="productCurrent.name"
              @blur="validateFieldProduct('name', productCurrent.name)"
            />
            <div class="message-error" v-if="fieldProductErrors.nameError">
              Debe ingresar el Nombre
            </div>
          </div>
        </div>
        <div class="input-data">
          <label for="sale"> Precio Venta </label>
          <div>
            <input
              type="text"
              id="sale"
              v-model="productCurrent.sale"
              @keyup="productCurrent.sale = numberMask(productCurrent.sale, 2)"
              @blur="validateFieldProduct('sale', productCurrent.sale)"
            />
            <div class="message-error" v-if="fieldProductErrors.saleError">
              Ingrese el precio de venta
            </div>
          </div>
        </div>
        <div class="input-data">
          <label for="cost"> Precio Costo </label>
          <div>
            <input
              type="text"
              id="cost"
              v-model="productCurrent.cost"
              @keyup="productCurrent.cost = numberMask(productCurrent.cost, 2)"
              @blur="validateFieldProduct('cost', productCurrent.cost)"
            />
            <div class="message-error" v-if="fieldProductErrors.costError">
              Ingrese precio de Costo
            </div>
          </div>
        </div>
      </div>
    </ModalProduct>

    <table>
      <thead>
        <th style="font-weight: bolder">Item</th>

        <HeaderTable
          :header="header"
          v-for="(header, index) in products.header"
          :key="index"
        />
        <th style="font-weight: bolder">Acciones</th>
      </thead>
      <tbody>
        <ProductsList
          v-for="(product, index) in productsList"
          :key="product.id"
          :product="product"
          :index="index"
          @delete="deleteProduct(product)"
          @edit="editProduct(product)"

        />
        <tr v-if="productsList.length == 0">
          <td
            :colspan="products.header.length + 2"
            style="text-align: center; font-weight: bold; padding: 10px"
          >
            No hay registros disponibles {{ productsList.length }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
.btn-primary:hover {
  background-color: rgb(114, 114, 240);
}

.btn-primary {
  background-color: blue;
  color: white;
  border: #67b588 1px solid;
}

table {
  width: 70%;
  margin: 0 auto;
  border: 1px solid black;
  border-collapse: collapse;
  box-shadow: 3px 3px rgba(127, 127, 127, 0.3);
}

th {
  border: 1px solid black;
  background-color: darkgray;
  padding: 10px;
}

/* .table {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
} */

.bg-blue {
  background-color: blue;
}

li {
  list-style: none;
}

.modal-content {
  display: flex;
  flex-direction: column;
  /* background-color: antiquewhite; */
  background-color: white;
  box-shadow: -5px -5px rgba(128, 255, 255, 0.3);
}
.modal-content h1 {
  font-size: 28px;
  text-align: center;
}

.modal-content p {
  margin-bottom: 16px;
}

.input-data {
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  padding: 5px;
}

.input-data label {
  text-align: end;
  padding: 8px;
}

.input-data input {
  padding: 10px;
  text-align: start;
  width: 50%;
}

.message {
  background-color: blue;
  color: white;
  margin-top: 15px;
  padding: 10px;
}

.header-message button {
  margin-top: 10px;
}

.container-search-table {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
}

input:focus {
  border: 5px solid rgb(199, 199, 245);
  outline-color: blue;
}
</style>
