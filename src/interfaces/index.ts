export interface NextData {
  props: {
    initialState: {
      'v2/challenges': {
        // Record es un objeto que tiene como llave un string y como valor un objeto
        entities: Record<string, Challenge>
      }
    }
  }
}

export interface Challenge {
  title: string
  description: string
  heroImage: string
  slug: string
}
