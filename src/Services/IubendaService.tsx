import apiNetworkingClient from "./Networking/APINetworkClient";

export enum IubendaDocument {
  TermsAndConditions,
  PrivacyPolicy,
  CookiePolicy
}

class IubendaService {

    public async getDocument(type: IubendaDocument) {

      let url: string = ""
      switch (type) {
        case IubendaDocument.TermsAndConditions: 
          url = "https://www.iubenda.com/api/terms-and-conditions/40981976"
          break
        case IubendaDocument.PrivacyPolicy: 
          url = "https://www.iubenda.com/api/privacy-policy/40981976/only-legal"
          break
        case IubendaDocument.CookiePolicy: 
          url = "https://www.iubenda.com/api/privacy-policy/40981976/cookie-policy"
          break
      }

        try {
            let result = await this.makeRequest(url)
            return result
        } catch (error) {
            console.error(error)
        }
    }

    // PRIVATE

    private async makeRequest<R>(url: string): Promise<R> {
        return new Promise(function(resolve, reject) {
            apiNetworkingClient.request(url, (result) => { 
                if (result instanceof Error) {
                    console.log("API Error: " + result)
                    reject(result)
                } else {
                    resolve(result)
                }
            })
        });
    }
}

export default IubendaService;