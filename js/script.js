
document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : 'Tidak ditentukan';
    const message = document.getElementById('message').value;
    document.getElementById('output').innerHTML = `
        <h3>Output Pesan:</h3>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;
});

 function masukkanNama() {
            var nama = prompt("Silakan masukkan nama Anda:");
            if (nama != null && nama.trim() !== "") {
                // Jika nama valid
                document.getElementById("selamatDatang").innerHTML =nama ;
            } else {
                // Jika tidak memasukkan
                alert("Nama tidak boleh kosong. Silakan masukkan nama Anda.");
                location.reload();
            }
        }

let indexSlideA = 0;
let indexSlideB = 0;

//  untuk mengganti slide untuk kelas "photo-b"
function nextSlideB(n) {
    showSlideB(indexSlideB += n);
}

//  untuk mengganti slide untuk kelas "photo-a"
function nextSlideA(n) {
    showSlideA(indexSlideA += n);
}

function showSlideB(n) {
    let listimgB = document.getElementsByClassName('photo-b');

    if (n > listimgB.length - 1) {
        indexSlideB = 0;
    }

    if (n < 0) {
        indexSlideB = listimgB.length - 1;
    }

    for (let i = 0; i < listimgB.length; i++) {
        listimgB[i].style.display = 'none';
    }

    listimgB[indexSlideB].style.display = 'block';
}

function showSlideA(n) {
    let listimgA = document.getElementsByClassName('photo-a');

    if (n > listimgA.length - 1) {
        indexSlideA = 0;
    }

    if (n < 0) {
        indexSlideA = listimgA.length - 1;
    }

    for (let i = 0; i < listimgA.length; i++) {
        listimgA[i].style.display = 'none';
    }

    listimgA[indexSlideA].style.display = 'block';
}

setInterval(() => nextSlideB(1), 2500);  
setInterval(() => nextSlideA(1), 2500); 


showSlideB(indexSlideB);
showSlideA(indexSlideA);
