// src/lib/constants.ts

export interface Project {
  title: string;
  desc: string;
  href: string;
}

export const PROJECTS: Project[] = [
  { 
    title: "Velocit", 
    desc: "A cycling analytics platform.", 
    href: "https://github.com/johnsyslo/veloceti" 
  },
  { 
    title: "CropEngine", 
    desc: "A farming client for Hypixel Skyblock.", 
    href: "https://github.com/johnsyslo/cropengine" 
  },
  { 
    title: "Portfolio", 
    desc: "The website your currently viewing!", 
    href: "https://github.com/johnsyslo/portfolio" 
  }
]
