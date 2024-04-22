// Fungsi untuk membuat delay
const timeOut = ms => new Promise(resolve => setTimeout(resolve, ms));

const a = async () => {
  await timeOut(1000); // Menunggu selama 1000ms (1 detik)
  console.log("Ini adalah fungsi A");
  return true;
};

const b = async () => {
  await timeOut(1000); // Menunggu selama 1500ms (1.5 detik)
  console.log("Ini adalah fungsi B");
  return true;
};

const c = async () => {
  await a();
  console.log("Ini adalah fungsi C");
  return true;
};

const d = async () => {
  await a();
  await b();
  await c();
  console.log("Ini adalah fungsi D");
  return true;
};

const e = async () => {
  await c();
  console.log("Ini adalah fungsi E");
  return true;
};

// a();
// b();
// c();
// d();
// e();

// or

const gabungan = async () => {
  const resultA = await a();
  const resultB = await b();

  await Promise.race([a(), b()]);

  if (resultA) {
    const resultC = await c();
    if (resultC) {
      await e();
    } else if (resultA && resultB && resultC) {
      await d();
    }
  }

  console.log("Ini adalah fungsi gabungan");
  return true;
}

gabungan();
