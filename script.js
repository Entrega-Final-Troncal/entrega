            new Chart(document.getElementById("dispersion"), {
                type: "scatter",
                data: {
                    datasets: [
                        {
                            label: "Arancel",
                            data: [
                                { name: "BACHILLERATO EN ARTES, ARQUITECTURA Y DISEÑO EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7200000 },
                                { name: "BACHILLERATO EN DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 10364360 },
                                { name: "DISEÑO EN LA UNIVERSIDAD AUSTRAL DE CHILE", x: 6, y: 5887000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD CATÓLICA DE TEMUCO", x: 5, y: 5276000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE CHILE", x: 7, y: 6486700 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE LA SERENA", x: 5, y: 4071000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE LAS AMERICAS", x: 5, y: 4730000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE PLAYA ANCHA DE CIENCIAS DE LA EDUCACION", x: 5, y: 4305000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE TALCA", x: 6, y: 5887000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE VALPARAISO", x: 6, y: 5713000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE VIÑA DEL MAR", x: 4, y: 4277000 },
                                { name: "DISEÑO DE EXPERIENCIAS INMERSIVAS Y VIDEOJUEGOS EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                                { name: "DISEÑO DE IMAGEN ESPECIALIDAD MODA  EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION", x: 3, y: 4210000},
                                { name: "DISEÑO DE INTERIORES Y AMBIENTES  EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION", x: 3, y: 4030000 },
                                { name: "DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7136000 },
                                { name: "DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 5069000 },
                                { name: "DISEÑO DE MODA Y MANAGEMENT EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7320000 },
                                { name: "DISEÑO DE VESTUARIO Y TEXTIL EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7148000 },
                                { name: "DISEÑO DE VIDEOJUEGOS EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                                { name: "DISEÑO EN ANIMACIÓN DIGITAL  EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                                { name: "DISEÑO EN COMUNICACIÓN VISUAL  EN LA UTEM - UNIVERSIDAD TECNOLOGICA METROPOLITANA", x: 4, y: 4763300 },
                                { name: "DISEÑO EN COMUNICACION VISUAL EN LA UNIVERSIDAD DE SANTIAGO DE CHILE", x: 7, y: 6552000 },
                                { name: "DISEÑO EN INTERACCION DIGITAL  EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                                { name: "DISEÑO EN LA PONTIFICIA UNIVERSIDAD CATÓLICA DE CHILE", x: 7, y: 8080000 },
                                { name: "DISEÑO EN LA PONTIFICIA UNIVERSIDAD CATÓLICA DE VALPARAÍSO", x: 7, y: 6915000},
                                { name: "DISEÑO EN LA UNIVERSIDAD DE LAS AMÉRICAS", x: 5, y: 4730000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 9754692 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 6056038 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DIEGO PORTALES", x: 6, y: 7597000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7320000 },
                                { name: "DISEÑO EN MARKETING DIGITAL EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000},
                                { name: "DISEÑO GRÁFICO EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7065000 },
                                { name: "DISEÑO GRÁFICO EN LA UNIVERSIDAD DEL BÍO-BÍO", x: 5, y: 4307000 },
                                { name: "DISEÑO GRÁFICO ESPECIALIDAD MULTIMEDIA EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION", x: 3, y: 4210000},
                                { name: "DISEÑO GRÁFICO MENCIÓN DISEÑO ESTRATÉGICO EN LA UNIVERSIDAD DE ANTOFAGASTA", x: 5, y: 5120000 },
                                { name: "DISEÑO INDUSTRIAL EN LA UNIVERSIDAD DE SANTIAGO DE CHILE", x: 7, y: 4989000 },
                                { name: "DISEÑO INDUSTRIAL EN LA UTEM - UNIVERSIDAD TECNOLOGICA METROPOLITANA", x: 4, y: 4891000},
                                { name: "DISEÑO INDUSTRIAL EN LA UNIVERSIDAD DEL BÍO-BÍO", x: 5, y: 4434000 },
                                { name: "DISEÑO MENCION INDUSTRIAL/GRÁFICO/AMBIENTES EN LA UNIVERSIDAD MAYOR", x: 5, y: 7214218},
                                { name: "DISEÑO MULTIMEDIA EN LA UNIVERSIDAD DE TARAPACA", x: 6, y: 6555000 },
                                { name: "DISEÑO TEATRAL EN LA UNIVERSIDAD DE CHILE", x: 7, y: 5492400 },
                                { name: "INGENIERIA EN DISEÑO DE PRODUCTOS EN LA UNIVERSIDAD TÉCNICA FEDERICO SANTA MARIA", x: 6, y: 6000000 },
                                { name: "INGENIERIA EN DISEÑO EN LA UNIVERSIDAD ADOLFO IBAÑEZ", x: 6, y: 9754692 },
                                { name: "INGENIERIA EN FABRICACION Y DISEÑO INDUSTRIAL EN LA UNIVERSIDAD TÉCNICA FEDERICO SANTA MARIA", x: 6, y: 5180000 },
                                { name: "INGENIERIA EN REALIDAD VIRTUAL Y DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD BERNARDO O'HIGGINS", x: 5, y: 5900000 },
                            ],
                            backgroundColor: "rgba(241,142,45,.75)",
                            pointRadius: 5,
                            pointHoverRadius: 5,
                        },
                        {
                            label: "Línea de referencia",
                            type: "line",
                            data: [
                                { x: 3, y: 4030000 },
                                { x: 7, y: 8080000 },
                            ],
                            borderColor: "rgba(102,102,102,.2)",
                            borderWidth: 1,
                            pointRadius: 0,
                            pointHoverRadius: 0,
                            fill: false,
                            tension: 0,
                        },
						
                    ],
                },
                options: {
                    scales: {
                        x: {
                            type: "linear",
                            position: "bottom",
                            grid: { color: "rgba(0,0,0,0.06)" },
                            border: { color: "#ccc" },
                            ticks: {
                                font: { family: "'Georama', sans-serif", size: 11 },
                                color: "#999",
                                callback: function (value) {
                                    return Number.isInteger(value) ? value + " años" : null;
                                },
                            },
                        },
                        y: {
                            grid: { color: "rgba(0,0,0,0.06)" },
                            border: { color: "#bbb", dash: [4, 4] },
                            ticks: {
                                font: { family: "'Georama', sans-serif", size: 11 },
                                color: "#999",
                                callback: function (value) {
                                    return "$ " + value.toLocaleString("es-CL");
                                },
                            },
                        },
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: "#fff",
                            borderColor: "#ddd",
                            borderWidth: 1,
                            titleColor: "#111",
                            bodyColor: "#555",
                            titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                            bodyFont: { family: "'Georama', sans-serif", size: 11 },
                            padding: 10,
                            filter: function (item) {
                                return item.datasetIndex === 0;
                            },
                            callbacks: {
                                label: function (context) {
                                    const point = context.raw;
                                    return [
                                        point.name,
                                        "Universidad acreditada por " + point.x + " años",
                                        "Arancel $ " + point.y.toLocaleString("es-CL"),
                                    ];
                                },
                            },
                        },
                    },
                },
            });
			
			
           new Chart(document.getElementById("otro"), {
                type: "bar",
                data: {
                    datasets: [
											{
                            label: "Educación, Activismo y Género",
                            data: [
                                { name: "Educación, Activismo y Género", x: "Felipe Cortez O.", y: 5.9, cantidad: 4 },
                                { name: "Educación, Activismo y Género", x: "Jenny Abud C.", y: 6.5, cantidad: 5 },
                                { name: "Educación, Activismo y Género", x: "Roberto Osses F.", y: 6.0, cantidad: 1 },
                                { name: "Educación, Activismo y Género", x: "Leonardo Soto C.", y: 5.6, cantidad: 5 },
                                { name: "Educación, Activismo y Género", x: "Rubén Jacob D.", y: 6.5, cantidad: 5 },
                                { name: "Educación, Activismo y Género", x: "Rodrigo Dueñas S.", y: 6.1, cantidad: 9 },
                                { name: "Educación, Activismo y Género", x: "Eduardo Castillo E.", y: 6.3, cantidad: 3 },
                                { name: "Educación, Activismo y Género", x: "Veronica Ode S.", y: 6.2, cantidad: 4 },
                                { name: "Educación, Activismo y Género", x: "Pablo Domínguez G.", y: 5.4, cantidad: 4 },
                            ],
                            backgroundColor: "rgba(185, 115, 222, 0.8)",
                            pointRadius: 5,
                            pointHoverRadius: 6,
                        },
						
                        {
                            label: "Tecnología, Interacción y Medios",
                            data: [
                                { name: "Tecnología, Interacción y Medios", x: "Felipe Cortez O.", y: 5.7, cantidad: 1 },
                                { name: "Tecnología, Interacción y Medios", x: "Jenny Abud C.", y: 6.3, cantidad: 2 },
                                { name: "Tecnología, Interacción y Medios", x: "Roberto Osses F.", y: 5.9, cantidad: 9 },
                                { name: "Tecnología, Interacción y Medios", x: "Leonardo Soto C.", y: 4.5, cantidad: 1 },
                                { name: "Tecnología, Interacción y Medios", x: "Rodrigo Dueñas S.", y: 5.0, cantidad: 2 },
                                { name: "Tecnología, Interacción y Medios", x: "Eduardo Castillo E.", y: 7.0, cantidad: 1 },
                                { name: "Tecnología, Interacción y Medios", x: "Veronica Ode S.", y: 6.1, cantidad: 5 },
                                { name: "Tecnología, Interacción y Medios", x: "Pablo Domínguez G.", y: 5.5, cantidad: 5 },
                            ],
                            backgroundColor: "rgba(141, 234, 218, 0.8)",
                            pointRadius: 5,
                            pointHoverRadius: 5,
                        },
                        
					{
                            label: "Territorio, Identidad y Memoria",
                            data: [
                                { name: "Territorio, Identidad y Memoria", x: "Felipe Cortez O.", y: 6.7, cantidad: 3 },
                                { name: "Territorio, Identidad y Memoria", x: "Jenny Abud C.", y: 6.0, cantidad: 1 },
                                { name: "Territorio, Identidad y Memoria", x: "Leonardo Soto C.", y: 5.6, cantidad: 1 },
                                { name: "Territorio, Identidad y Memoria", x: "Rodrigo Dueñas S.", y: 6.3, cantidad: 5 },
                                { name: "Territorio, Identidad y Memoria", x: "Eduardo Castillo E.", y: 6.3, cantidad: 13 },
                                { name: "Territorio, Identidad y Memoria", x: "Veronica Ode S.", y: 5.9, cantidad: 11 },
                                { name: "Territorio, Identidad y Memoria", x: "Pablo Domínguez G.", y: 6.8, cantidad: 1 },
                            ],
                            backgroundColor: "rgba(231, 155, 84, 0.8)",
                            pointRadius: 5,
                            pointHoverRadius: 6,
                        },
						
											{
                            label: "Ecología, Materialidad y Futuros",
                            data: [
                                { name: "Ecología, Materialidad y Futuros", x: "Jenny Abud C.", y: 4.9, cantidad: 2 },
                                { name: "Ecología, Materialidad y Futuros", x: "Roberto Osses F.", y: 6.5, cantidad: 1 },
                                { name: "Ecología, Materialidad y Futuros", x: "Leonardo Soto C.", y: 5.7, cantidad: 2 },
                                { name: "Ecología, Materialidad y Futuros", x: "Rubén Jacob D.", y: 6.1, cantidad: 3 },
                                { name: "Ecología, Materialidad y Futuros", x: "Rodrigo Dueñas S.", y: 6.0, cantidad: 1 },
                                { name: "Ecología, Materialidad y Futuros", x: "Pablo Domínguez G.", y: 5.3, cantidad: 13 },
                            ],
                            backgroundColor: "rgba(117, 222, 115, 0.8)",
                            pointRadius: 5,
                            pointHoverRadius: 6,
											},
											{
                            label: "Salud, Cuidado y Neurodiversidad",
                            data: [
                                { name: "Salud, Cuidado y Neurodiversidad", x: "Felipe Cortez O.", y: 5.7, cantidad: 3 },
                                { name: "Salud, Cuidado y Neurodiversidad", x: "Jenny Abud C.", y: 6.0, cantidad: 1 },
                                { name: "Salud, Cuidado y Neurodiversidad", x: "Leonardo Soto C.", y: 5.2, cantidad: 3 },
                                { name: "Salud, Cuidado y Neurodiversidad", x: "Rubén Jacob D.", y: 7.0, cantidad: 6 },
                                { name: "Salud, Cuidado y Neurodiversidad", x: "Eduardo Castillo E.", y: 7.0, cantidad: 2 },
                                { name: "Salud, Cuidado y Neurodiversidad", x: "Veronica Ode S.", y: 5.6, cantidad: 5 },
                                { name: "Salud, Cuidado y Neurodiversidad", x: "Pablo Domínguez G.", y: 5.8, cantidad: 20 },
                            ],
                            backgroundColor: "rgba(115, 117, 222, 0.8)",
                            pointRadius: 5,
                            pointHoverRadius: 6,
                        },
                     
                    ],
                },
                options: {
                    scales: {
                        x: {
                            position: "bottom",
                            grid: { color: "rgba(0,0,0,0.06)" },
                            border: { color: "#ccc" },
                            ticks: {
                                font: { family: "'Georama', sans-serif", size: 11 },
                                color: "#999",
                                callback: function (value) {
                                    return this.getLabelForValue(value);
                                },
                            },
                        },
                        y: {
                            grid: { color: "rgba(0,0,0,0.06)" },
                            border: { color: "#bbb", dash: [4, 4] },
							min: 4.0,
                            ticks: {
                                font: { family: "'Georama', sans-serif", size: 11 },
                                color: "#999",
                                callback: function (value) {
                                    return value.toLocaleString("es-CL");
                                },
                            },
                        },
                    },
                    plugins: {
                        legend: { display: false }, 
                        tooltip: {
                            backgroundColor: "#fff",
                            borderColor: "#ddd",
                            borderWidth: 1,
                            titleColor: "#111",
                            bodyColor: "#555",
                            titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                            bodyFont: { family: "'Georama', sans-serif", size: 11 },
                            padding: 10,
							mode: 'point',
							intersect: true,

                            callbacks: {
								
                                label: function (context) {
                                    const point = context.raw;

                                    return [
                                        point.name,
                                        "Títulos guiados por " + point.x,
                                        "Promedio de Notas por Tendencia: " + point.y.toLocaleString("es-CL"),
										"Cantidad de Alumnos Guiados: " + point.cantidad,
										
                                    ];
                                },
                            },
                        },
                    },
                },
            });		
