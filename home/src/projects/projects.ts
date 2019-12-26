import stack from './stack.png'
import allaboard from './allaboard.png'
import pokebase from './pokebase.png'

export interface Project {
  name: string;
  image: any;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    name: "Stack",
    image: stack,
    description: "An Android application for viewing StackOverflow posts",
    link: "https://github.com/tylerbwong/stack",
  },
  {
    name: "AllAboard",
    image: allaboard,
    description: "A Kotlin DSL for creating onboarding flows in your Android apps",
    link: "https://github.com/tylerbwong/AllAboard",
  },
  {
    name: "Pokebase",
    image: pokebase,
    description: "Android application that let's you view information on the first 721 Pokémon",
    link: "https://github.com/tylerbwong/Pokebase",
  },
]
