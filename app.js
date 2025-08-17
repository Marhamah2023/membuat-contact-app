// const pertanyaan2 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('masukkan email anda : ', (email) => {
//             resolve(email);
//         });
//     });
// };

const contacts = require('./contacts');

const main = async () => {
    const nama = await contacts.tulisPertanyaan('masukkan nama anda : ');
    const email = await contacts.tulisPertanyaan('masukkan email anda : ');
    const noHp = await contacts.tulisPertanyaan('masukkan no.hp anda : ');

    contacts.simpanContact(nama, email, noHp);
};

main();

// rl.question('masukkan nama anda : ', (nama) => {
//     rl.question('masukkan no hp anda : ', (noHP) => {
//         const contact = { nama, noHP };
//         const file = fs.readFileSync('data/contacts.json', 'utf8');
//         const contacts = JSON.parse(file);

//         contacts.push(contact);

//         fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

//         console.log('terima kasih sudah memasukkan data');

//         rl.close();
//     });
// });