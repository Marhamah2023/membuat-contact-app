// const pertanyaan2 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('masukkan email anda : ', (email) => {
//             resolve(email);
//         });
//     });
// };

// const contacts = require('./contacts');

// const main = async () => {
//     const nama = await contacts.tulisPertanyaan('masukkan nama anda : ');
//     const email = await contacts.tulisPertanyaan('masukkan email anda : ');
//     const noHp = await contacts.tulisPertanyaan('masukkan no.hp anda : ');

//     contacts.simpanContact(nama, email, noHp);
// };

// main();


//mengambil argumen dari command line
// console.log(process.argv);

const yargs = require('yargs');
const contacts = require('./contacts');

// yargs.command(
//     'add',
//     'menambahkan contact baru',
//     () => { },
//     (argv) => {
//         console.log(argv.nama);
//     }
// );

yargs.command({
    command: 'add',
    describe: 'menambahkan contact baru',
    builder: {
        nama: {
            describe: 'nama lengkap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'email',
            demandOption: false,
            type: 'string',
        },
        noHp: {
            describe: 'no hp',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        // const contact = {
        //     nama: argv.nama,
        //     email: argv.email,
        //     noHp: argv.noHp,
        // };
        // console.log(contact);

        contacts.simpanContact(argv.nama, argv.email, argv.noHp);
    },
})
    .demandCommand();

//menampilkan daftar semua nama & no hp contact
yargs.command({
    command: 'list',
    describe: 'menampilkan semua nama & no.hp',
    handler() {
        contacts.listContact();
    },
});

//menampilkan detail sebuah contact
yargs.command({
    command: 'detail',
    describe: 'menampilkan detail sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'nama lengkap',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.detailContact(argv.nama);
    },
});

//menghapus kontak berdasarkan nama
yargs.command({
    command: 'delete',
    describe: 'menghapus sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'nama lengkap',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.deleteContact(argv.nama);
    },
});

yargs.parse();





















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