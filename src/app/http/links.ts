import { Link } from "@interfaces/entities";

export abstract class HTTPLinks {
  static host = process.env.NEXT_PUBLIC_HOSTNAME || "http://localhost:3000";

  static async getLink(id: string): Promise<[Link | null, Error | null]> {
    const response = await fetch(`${this.host}/api/links/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return [null, new Error(`can't get link with id ${id}`)];
    }

    const linkInformation = await response.json();

    if (!linkInformation.id) {
      return [null, new Error(`something bad happend try again`)];
    }

    return [linkInformation as Link, null];
  }

  static async createLink(
    urlOriginal: string
  ): Promise<[Link | null, Error | null]> {
    const response = await fetch(`${this.host}/api/links`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ urlOriginal }),
    });

    if (!response.ok) {
      [null, new Error(`can't create a short link`)];
    }

    const linkInformation = await response.json();

    if (!linkInformation?.id) {
      return [null, new Error(`can't create a short link try again`)];
    }

    return [linkInformation as Link, null];
  }
}
