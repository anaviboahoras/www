import { Readable , Writable, Transform } from 'node:stream'

class OneToHundredStream extends Readable {
  index = 1

  _read() {
    const i = this.index++
    
    setTimeout(() => {
    if (i > 100) {
      this.push(null);
    } else {
      const buf = Buffer.from(String(i))
      this.push(buf) //chunk
    }
  }, 1000)
}
}

class MultiplyByTenStreams extends Writable {
    _write(chunk,encoding,callback){
        console.log(Number(chunk.toString()) * 10)
        callback()
    }
}

class InverseStream extends Transform {
    _transform(chunk, encoding, callback){
        const transformed = Number(chunk.toString()) * -1
        callback(null, Buffer.from(String(transformed)))
}
}
new OneToHundredStream()
.pipe(new InverseStream())
.pipe(new MultiplyByTenStreams())