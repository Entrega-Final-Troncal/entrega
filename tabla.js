
            const t = document.querySelector("#este");
            const URL = "https://api.myjson.online/v1/records/807a248b-08cc-4b3d-9f25-c38530d72c2a";

            fetch(URL)
                .then((respuesta) => {
                    if (!respuesta.ok) {
                        throw new Error("Error HTTP: " + respuesta.status);
                    }
                    return respuesta.json();
                })
                .then((datos) => {
                    var trabajo = datos.data;
                    console.log(trabajo);
                    trabajo.forEach((x) => {
                        t.innerHTML += `<tr><td>${x.id}</td><td><a href=${x.repository}>${x.title}</a></td><td>${x.category}</td><td>${x.tutor}</td><td>${x.grade}</td></tr>`;
                    });
                })
                .catch((error) => {
                    console.error("Algo salió mal:", error);
                });

            function sinAcentos(str) {
                return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            }

            document.getElementById("elInput").addEventListener("keyup", function () {
                const valor = sinAcentos(this.value.toLowerCase());
                document.querySelectorAll("#este tr").forEach(function (fila) {
                    fila.style.display = sinAcentos(fila.textContent.toLowerCase()).includes(valor) ? "" : "none";
                });
            });