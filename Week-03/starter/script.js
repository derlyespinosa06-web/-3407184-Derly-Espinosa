// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Adapta este archivo a tu dominio asignado.
//
// Ejemplos con dominios no asignables:
// - Planetario    → calcular ingresos por función, capacidad disponible
// - Acuario       → calcular costo de alimentación, volumen total de tanques
// - Museo         → calcular valor de exhibición, costo de entrada
// - Zoológico     → calcular gasto diario por especie, total de visitantes
// - Observatorio  → calcular duración total de eventos, aforo restante
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

const PRECIO_SOMBRERO_VUELTIAO = 35000;
const PRECIO_MOCHILA_WAYUU = 45000;
const PRECIO_PULSERA_ARTESANAL = 8000;

const STOCK_SOMBREROS = 10;
const STOCK_MOCHILAS = 13;
const STOCK_PULSERAS = 15;
// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

const sombrerosComprados = 2;
const mochilasCompradas = 1;
const pulserasCompradas = 3;

const totalSombreros = PRECIO_SOMBRERO_VUELTIAO * sombrerosComprados;
console.log("Total sombreros:", totalSombreros);

const totalMochilas = PRECIO_MOCHILA_WAYUU * mochilasCompradas;
console.log("Total mochilas:", totalMochilas);

const totalPulseras = PRECIO_PULSERA_ARTESANAL * pulserasCompradas;
console.log("Total pulseras:", totalPulseras);

const totalCompra = totalSombreros + totalMochilas + totalPulseras;
console.log("Total de la compra:", totalCompra);

// aqui se vera lo actualizado de los stocks despues de la compra restando la cantidad inicial 
const stockSombrerosRestante = STOCK_SOMBREROS - sombrerosComprados;
console.log("Stock sombreros restante:", stockSombrerosRestante);
const stockMochilasRestante = STOCK_MOCHILAS - mochilasCompradas;
console.log("Stock mochilas restante:", stockMochilasRestante);
const stockPulserasRestante = STOCK_PULSERAS - pulserasCompradas;
console.log("Stock pulseras restante:", stockPulserasRestante);

console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================

console.log("=== Asignación compuesta ===");

let carrito = 0;

carrito += PRECIO_SOMBRERO_VUELTIAO;
console.log("agregar sombrero:", carrito);

carrito += PRECIO_MOCHILA_WAYUU;
console.log("agregar mochila:", carrito);

carrito += PRECIO_PULSERA_ARTESANAL;
console.log("agregar pulsera:", carrito);

carrito *= 0.70; 
console.log("Total con descuento:", carrito);

console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

const metodoPago = "tarjeta";

const pagoConTarjeta = metodoPago === "tarjeta";
console.log("¿Pago con tarjeta?", pagoConTarjeta);

const compraAlta = totalCompra > 100000;
console.log("¿Compra mayor a 100000?", compraAlta);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

const esClientePremium = true;

const aplicaDescuento = esClientePremium && totalCompra >= 50000;
console.log("¿Aplica descuento premium?", aplicaDescuento);

const envioGratis = totalCompra >= 120000 || esClientePremium;
console.log("¿Tiene envío gratis?", envioGratis);

const hayStock = stockSombrerosRestante > 0 || stockMochilasRestante > 0 || stockPulserasRestante > 0;
console.log("¿Hay productos disponibles?", hayStock);

console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

console.log("Total compra:", totalCompra);
console.log("Total con descuento:", carrito);
console.log("¿Envío gratis?", envioGratis);
console.log("¿Cliente premium?", esClientePremium);

console.log("");
