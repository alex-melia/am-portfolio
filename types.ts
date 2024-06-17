type Technology = {
  name: string
}

type Link = {
  type: string
  url: string
}

export type Project = {
  title: string
  description: string
  image: string
  url: string
  technologies: Technology[]
  links?: Link[]
}
