const TransportRequestDetail = async ({ merk="/", type="", model="", cc="", jenis="", bbm="", transmisi="", tahun=""}) => {
    try {
        const resp = await fetch(`http://127.0.0.1:8000${merk}${type}${model}${cc}${jenis}${bbm}${transmisi}${tahun}`)
        return await resp
    } catch (e) {
        console.log(e.message)
    }
}

export default TransportRequestDetail