const getSomething = () => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
        console.log('respondendo...')
        resolve(13);}, 1000)
    })
}

const system = async () => {
    console.log('init');
    const some = await getSomething();   
    console.log(`something é ${some}`);
    console.log('end')
    
}

    

system();