export const formatCurrency = (numberString: string) => {
	// Convertir el string a número flotante y luego aplicar el formato de moneda
	const number = parseFloat(numberString);

	// Verificamos si el número es válido
	if (isNaN(number)) {
		return 'Número inválido';
	}

	// Usamos el método toLocaleString para formatear el número
	return number.toLocaleString('es-AR', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});
};
