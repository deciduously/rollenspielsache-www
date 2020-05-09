class Server {
    constructor(host, port) {
        this.host = host;
        this.port = port || "";
        console.log(`Using API server ${host}`);
    }
    url() {
        const prefix = process.env.NODE_ENV === 'production' ? 'https' : 'http'
        return `${prefix}://${this.host}:${this.port}/`
    }
    rollEndpoint() {
        return `${this.url()}roll/`
    }
}

export const APIServer = new Server(process.env.API_HOST, process.env.API_HOST);