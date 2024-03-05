/// <reference types="vite/client" />

interface Project {
  name: string;
  key: string;
  type: string;
  web: string;
  description: string;
  version: string;
  resolution: Resolution;
  darkmode: boolean;
  git: Git;
  packages: Packages;
  gallery: Gallery[];
}

interface Git {
  frontend: string;
  backend: string;
}

interface Packages {
  frontend: string[];
  backend: string[];
  database: string[];
}

interface Gallery {
  title: string;
  image: string;
  description: string;
}

interface Resolution {
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
}

interface Skills {
  name: string;
  items: ItemSkills[];
}

interface ItemSkills {
  name: string;
  icon: string;
  level: number;
}