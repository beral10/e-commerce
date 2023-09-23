import React, { useRef } from 'react';
import doc from '../assets/icons/doc.png';
import pdf from '../assets/icons/pdf.png';

const InputDragAndDrop = ({filedocs}) => {

	const dropAreaRef = useRef(null);
	const dragTextRef = useRef(null);
	const buttonRef = useRef(null);
	const inputRef = useRef(null);
	const previewRef = useRef(null);

	let files;  //Variable files

	const handleButton = (e) => {
		inputRef.current.click();
	};

	const handleInputChange = (e) => { //El archivo cambie su valor, ejecuta lo siguiente:
		files = e.files;
		dropAreaRef.current.classList.add('drop-area-active'); //agrega color de fondo
		showFiles(files); //identifica la cantidad de archivos a subir
		dropAreaRef.current.classList.remove('drop-area-active'); // retira fondo
	};

	//Función que se ejecuta si está dentro del drop-area
	const handleDragOver = (e) => {
		e.preventDefault();
		dropAreaRef.current.classList.add('drop-area-active');
		dragTextRef.current.textContent = 'Drop to upload the files'
	};

	//Función que se ejecuta si está fuera del drop-area
	const handleDragLeave = (e) => {
		e.preventDefault();
		dropAreaRef.current.classList.remove('drop-area-active');
		dragTextRef.current.textContent = 'Drag and drop files'
	};

	//Función al soltar los archivos dentro del drop-area
	const handleDrop = (e) => {
		e.preventDefault();

		files = e.dataTransfer.files; //Obtiene la referencia de las imágenes
		showFiles(files);  //Llamado de la función
		dropAreaRef.current.classList.remove('drop-area-active');
		dragTextRef.current.textContent = 'Drag and drop files'
	}

	const showFiles = ( files ) => { // función que identifica si es una o varias imágenes
		if (!Array.isArray(files)) {
			processFile(files);
		} else {
			files.forEach((file) => processFile(file)); // Utiliza forEach para procesar cada elemento en el array
		}
	};

	const processFile = ( file ) => {  //Procesa los archivos que intenta subir


		// Capturando por type del archivo
		const docType = file[0].type;
		const name = file[0].name;
		const validExtensions = ['application/pdf', 'image/jpg', 'image/jpeg', 'image/gif', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
		
		/* const regex = new RegExp('[^.]+$');
		const extension = docType.match(regex); //Capta todo el string, siempre y cuando no tenga NINGÚN punto.*/

		//Capturando por su nombre de archivo
		/* const docType = file[0].name;
		const extension = docType.substring(docType.lastIndexOf('.') + 1, docType.length );

		const validExtensions = ['jpeg', 'png', 'jpg', 'jpeg', 'docx', 'pdf']; */

		if( validExtensions.includes(docType)){
			//Es un archivo válido
			const fileReader = new FileReader(); //El obj permite extraer las prop del archivo, como extraer su nombre para jugar con la URL o extensión. Lee archivos de forma asíncrona en una aplicación web.
			const id = `file-${(Math.random()*10).toString(36).substring(2)}`;

			fileReader.onload = () => {
				const fileUrl = fileReader.result;

				let imageSource = '';

				if( docType === 'application/pdf'){
					imageSource = pdf;
				} else if ( docType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ){
					imageSource = doc;
				} else {
					imageSource = fileUrl;
				}
				
				const image = `
					<div id='${ id }' class='file-container'>
						<img src='${imageSource}' alt='${name}' width= 50 />
						<div class='status'>
							<p>${name}</p>
							<p class='status-text'> 
								Successfully uploaded
							</p>
						</div>
					</div>
				`;
				previewRef.current.innerHTML = image + previewRef.current.innerHTML;
			}

			fileReader.readAsDataURL( file[0] );
			filedocs(file)

		} else {
			alert('It is not a valid file.');
		}
	};

 	/* const uploadFile = async ( file, id ) => { //Función que envía una solicitud a un servidor remoto para poder subir el archivo. Se llama por c/img que se sube
		
		//Crea la promesa o un fetch
		const formData = new FormData();
		formData.append('file', file);

		try {
			const response = await fetch('http://localhost:3000/upload', {
				method: "POST",
				body: formData,
			});

			const responseText = await response.text();
			console.log(responseText);

			document.querySelector(
				`#${id} .status-text`
			).innerHTML = `<span className='success'>File uploaded successfully!</span>`;

		} catch (error) {
			document.querySelector(
				`#${id} .status-text`
			).innerHTML = `<span className='success'>The file could not be uploaded</span>`;
		}
	}; */ 

	return (
		<>
			<div>
				<div className='drop-area' ref={ dropAreaRef } onDragOver={ handleDragOver } onDragLeave={ handleDragLeave } onDrop={ handleDrop } >
					<h2 className='font-medium' ref={ dragTextRef }>Drag and drop files</h2>
					<span className='font-medium'>o</span>
					<button onClick={ handleButton } className='dropButton' ref={ buttonRef }>Select your files</button>
					<input type="file" name='input-file' id='input-file' hidden multiple ref={ inputRef } onChange={ handleInputChange } /> {/*Está oculto pero se manda a llamar con el botón*/}
				</div>
				<div className='preview' ref={ previewRef }></div> {/*Donde se mostrarán los archivos*/}
			</div>
		</>
	);
};

export default InputDragAndDrop;
