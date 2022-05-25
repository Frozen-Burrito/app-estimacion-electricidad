import App from "./app";

const port = process.env.PORT || 5001;

const app = new App();

try {
    app.listen(port, `Servidor iniciado en el puerto ${port}`);

} catch (error: any) {
    // Mostrar error de inicializacion.
    console.log(`Hubo un error al iniciar el servidor: ${error.message}`)
}
