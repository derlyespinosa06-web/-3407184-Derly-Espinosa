// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// ============================================
// INSTRUCCIONES:
// 1. Reemplaza DOMAIN_NAME con el nombre de tu dominio asignado
// 2. Reemplaza VALUE_LABEL con la etiqueta de tu unidad de valor
//    Ejemplos: "unidades", "libros", "medicamentos", "miembros"
// 3. Define tu array items con objetos de tu dominio
// 4. Completa cada TODO con la implementación contextualizada
// ============================================

// ---- CONFIGURA TU DOMINIO ----
const DOMAIN_NAME = "Marketplace de Artesanías Colombianas"; // TODO: Cambiar por tu dominio
const VALUE_LABEL = "productos";     // TODO: Cambiar por unidad de tu dominio

// ============================================
// 1. ARRAY INICIAL — Define tu inventario
// ============================================

// TODO: Definir el array con mínimo 5 objetos de tu dominio.
// Cada objeto debe tener:
//   - id: número único
//   - name: nombre del elemento
//   - [propiedad numérica]: precio, cantidad, puntuación, etc.
//   - [propiedad booleana]: active, available, inStock, etc.
//   - [otras 2+ propiedades relevantes a tu dominio]
//
// Ejemplos por dominio:
// Biblioteca:  { id, name, author, year, available: true }
// Farmacia:    { id, name, price, stock, requiresPrescription: false }
// Gimnasio:    { id, name, memberSince, plan, active: true }
// Restaurante: { id, name, price, category, available: true }

const items = [
  // TODO: Agrega al menos 5 objetos de tu dominio
  { id: 1, name: "Sombrero Vueltiao", price: 45000, category: "accesorios", stock: 20, active: true },
  { id: 2, name: "Mochila Wayuu", price: 80000, category: "accesorios", stock: 15, active: true },
  { id: 3, name: "Pulsera Artesanal", price: 15000, category: "joyeria", stock: 40, active: true },
  { id: 4, name: "Hamaca Guajira", price: 120000, category: "hogar", stock: 5, active: false },
  { id: 5, name: "Canasto de Palma", price: 60000, category: "hogar", stock: 10, active: true }
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

/**
 * Agrega un nuevo elemento al inventario
 * @param {Object} newItem - Elemento a agregar
 */
const addItem = (newItem) => {
  // TODO: Usar push para agregar newItem al array items
  // console.log(`Agregado: ${newItem.name}`);
  items.push(newItem);
  console.log(`Agregado: ${newItem.name}`);
};

/**
 * Elimina el último elemento del inventario
 * @returns {Object} El elemento eliminado
 */
const removeLastItem = () => {
  // TODO: Usar pop para eliminar y retornar el último elemento
  // Guardar el resultado en una variable y mostrar el nombre
  const removedItem = items.pop();
  console.log(`Eliminado: ${removedItem?.name}`);
  return removedItem;
};

/**
 * Agrega un elemento prioritario al inicio del inventario
 * @param {Object} priorityItem - Elemento a agregar con prioridad
 */
const addPriorityItem = (priorityItem) => {
  // TODO: Usar unshift para agregar priorityItem al inicio de items
  // console.log(`Elemento prioritario agregado: ${priorityItem.name}`);
  items.unshift(priorityItem);
  console.log(`Elemento prioritario agregado: ${priorityItem.name}`);
};

/**
 * Elimina un elemento por su posición (índice)
 * @param {number} index - Posición del elemento a eliminar
 */
const removeByIndex = (index) => {
  // TODO: Usar splice para eliminar 1 elemento en la posición index
  // Mostrar el nombre del elemento eliminado
  const removed = items.splice(index, 1);
  console.log(`Eliminado: ${removed[0]?.name}`);
};

/**
 * Obtiene todos los elementos activos/disponibles
 * @returns {Array} Array de elementos activos
 */
const getActiveItems = () => {
  // TODO: Usar filter para retornar solo los elementos con la propiedad
  // booleana en true (ajusta el nombre de la propiedad a tu dominio)
  return items.filter((item) => item.active === true);
};

/**
 * Busca un elemento por su nombre
 * @param {string} name - Nombre a buscar
 * @returns {Object|undefined} El elemento encontrado o undefined
 */
const findByName = (name) => {
  // TODO: Usar find para retornar el primer elemento cuyo name coincida
  return items.find((item) => item.name === name);
};

/**
 * Formatea un elemento para mostrar en el reporte
 * @param {Object} item - Elemento a formatear
 * @returns {string} Texto formateado
 */
const formatItem = (item) => {
  // TODO: Retornar un string con la información relevante del elemento
  // Usar template literals y mostrar las propiedades más importantes
  // Ejemplo (adaptar al dominio):
  // return `[${item.id}] ${item.name} — ...propiedades...`;

  const priceFormatted = item.price.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP"
  });

  return `[${item.id}] ${item.name} — ${item.category} — ${priceFormatted} — Stock: ${item.stock}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

// Estado inicial
console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
// TODO: Usar forEach para mostrar cada elemento con formatItem
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de mutación ---\n");

// TODO: Crear un nuevo elemento de tu dominio y usar addItem para agregarlo
// Ejemplo: addItem({ id: 6, name: "Nuevo Elemento", ..., active: true });
addItem({ id: 6, name: "Collar de Chaquiras", price: 35000, category: "joyeria", stock: 25, active: true });

// TODO: Usar addPriorityItem para agregar un elemento prioritario
// Ejemplo: addPriorityItem({ id: 0, name: "Elemento Prioritario", ..., active: true });
addPriorityItem({ id: 0, name: "Ruana Artesanal", price: 95000, category: "ropa", stock: 8, active: true });

// TODO: Usar removeByIndex para eliminar un elemento del medio
// Ejemplo: removeByIndex(2);
removeByIndex(2);

// TODO: Usar removeLastItem para quitar el último elemento
removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");
// TODO: Mostrar el inventario actualizado con forEach + formatItem
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");

// TODO: Usar find para buscar un elemento específico por nombre
// Mostrar el resultado
const foundItem = findByName("Mochila Wayuu");
if (foundItem) {
  console.log(`Elemento encontrado: ${formatItem(foundItem)}`);
} else {
  console.log("Elemento no encontrado");
}

// TODO: Usar getActiveItems() y mostrar cuántos están activos
const activeItems = getActiveItems();
console.log(`Productos activos: ${activeItems.length}`);

// TODO: Crear un snapshot inmutable con spread [...items]
// y agregar un elemento extra sin modificar items
const snapshot = [...items, {
  id: 99,
  name: "Producto Temporal",
  price: 20000,
  category: "extra",
  stock: 5,
  active: true
}];
console.log("Snapshot (no modifica original):", snapshot.length);

console.log("\n--- Transformación con map ---\n");

// TODO: Usar map para crear un array de solo los nombres de los elementos
// Mostrar los nombres
const names = items.map(item => item.name);
console.log("Nombres:", names);

// TODO: Usar map para crear un array con alguna propiedad numérica transformada
// (ej: precios con descuento, cantidades en otra unidad, etc.)
const discountedPrices = items.map(item => {
  const discounted = item.price * 0.9;

  return discounted.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP"
  });
});
console.log("Precios con descuento:", discountedPrices);

console.log("\n--- Resumen final ---\n");
console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);

// TODO: mostrar total de activos vs total general
const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);