function indice(request, response) {
    const dynamicDate = new Date();

    response.json({
        date: dynamicDate.toGMTString()
    })
}

export default indice;