import app from "./app";

function main() {
    try {
        app.listen(process.env.PORT || 3000, async () => {
            console.log('Starting server')
        })
    } catch(err) {
        console.error('Starting server Error', err);
    }
}

main();