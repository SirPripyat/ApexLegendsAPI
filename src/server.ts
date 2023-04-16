import app from "./app";

function main() {
    try {
        app.listen(3000, 'localhost', async () => {
            console.log('Starting server')
        })
    } catch(err) {
        console.error('Starting server Error', err);
    }
}

main();