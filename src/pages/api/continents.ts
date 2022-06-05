import { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse) => {
  const continents = [
    { name: 'Europa', description: 'O continente mais antigo.', url: 'assets/images/europa', slug: 'europa' },
    { name: 'Africa', description: 'O continente mais antigo.', url: 'assets/images/africa', slug: 'africa' },
    { name: 'America', description: 'O continente mais antigo.', url: 'assets/images/america', slug: 'america' },
    { name: 'America do Sul', description: 'O continente mais antigo.', url: 'assets/images/america_sul', slug: 'america-do-sul' },
    { name: 'Oceania', description: 'O continente mais antigo.', url: 'assets/images/oceania', slug: 'oceania' },
  ]

  return res.json(continents)
}