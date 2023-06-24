import axios from 'axios';

type Result<T> = T | Error;

interface Request {
  request: { 
    url: string
  }, 
  completion: (result: Result<any>) => void
}

class APINetworkClient {

  private static _instance: APINetworkClient;

  private apiClient: any;
  private requests: Request[] = []
  private isRunning: boolean

  private constructor() {
      this.isRunning = false
  }

  public static get Instance()
  {
    // Do you need arguments? Make it a regular static method instead.
    return this._instance || (this._instance = new this());
  }

  public request(url: string, completion: (result: Result<any>) => void) {    
    let request = {
      request: {
        url: url
      },
      completion: completion
    }
    this.requests.push(request)
    this.nextRequest()
  }

  private async nextRequest() {
    if (this.isRunning === true) {
      return
    }

    this.isRunning = true
    
    let request = this.requests.shift()
    if (request === undefined) {
      this.isRunning = false
      return
    }

    const complete = () => {
      this.isRunning = false
      this.nextRequest()
    }

    axios.get(request.request.url).then(
      (message: any) => {
          request?.completion(message.data)
          complete()
      },
      (error: any) => {
          if (axios.isAxiosError(error)) {
            console.log(error.request)
          }
          request?.completion(error)
          complete()
      }
    )
  }
}

const apiNetworkingClient = APINetworkClient.Instance;
export default apiNetworkingClient;