const input = document.getElementById('input');
const result = document.getElementById('result');

// Fungsi konversi ekspresi dan evaluasi
function evaluateExpression(expr) {
  try {
    // Ganti x atau X dengan *, dan : dengan /
    const cleaned = expr
      .replace(/x/gi, '*')
      .replace(/:/g, '/')
      .replace(/[^0-9+\-*/(). ]/g, ''); // Hapus karakter aneh

    // Paksa evaluasi ekspresi matematis
    const output = eval(cleaned);

    if (isNaN(output)) {
      return 'Ekspresi tidak valid';
    }

    return `Hasil: ${output}`;
  } catch (e) {
    return 'Kesalahan perhitungan';
  }
}

// Saat tekan Enter di textarea
input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault(); // cegah newline
    const expression = input.value.trim();
    result.textContent = evaluateExpression(expression);
  }
});

