export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    demo: string;
    github: string;
  };
}