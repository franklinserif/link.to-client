import { Link } from "@interfaces/entities";

export abstract class HTTPLinks {
  static host = process.env.HOST || "http://localhost:3000";

  static async getLink(id: string) {
    const response = await fetch(`${this.host}/links/information/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.log("error: ", response);
    }

    const linkInformation = await response.json();

    return linkInformation as Link;
  }
}
