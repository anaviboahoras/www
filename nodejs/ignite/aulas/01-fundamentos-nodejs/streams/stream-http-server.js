import http from 'node:http'
import { Transform } from 'node:stream'

class InverseStream extends Transform {
    _transform(chunk, encoding, callback){
        const transformed = Number(chunk.toString()) * -1

        console.log(transformed)

        callback(null, Buffer.from(String(transformed)))
}
}
const server = http.createServer(async(req, res) => {

    const buffers = []

    // Percorre todo o percurso e enquanto ela não for percorrida por completo não irá exibir o conteúdo
    for await (const chunk of req) {
        buffers.push(chunk)
    }

    // concat = ??
    const fullStreamContent = Buffer.concat(buffers).toString()
    console.log(fullStreamContent)

    return res.end(fullStreamContent)

//    return req
//  .pipe(new InverseStream())
//  .pipe(res)
})
//req = ReadableStream
//res = WritableStream
  server.listen(3334)