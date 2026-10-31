export async function json(req, res) {
    const buffers = []

    // Percorre todo o percurso e enquanto ela não for percorrida por completo não irá exibir o conteúdo
    for await (const chunk of req) {
        buffers.push(chunk)
    }

    try {
      req.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch (error) {
      req.body = null
    }  
res.setHeader('Content-Type', 'application/json')
}
