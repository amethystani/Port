/** Who this portfolio is about. The home page's main image and headline come from here. */
export const portfolio = {
  name: 'Animesh Mishra',
  role: 'ML/NLP Researcher',
  affiliation: 'NCA',
  /** Where "contact" links (footer, apply buttons, search results) send mail. */
  email: 'animeshmishra0567@gmail.com',
  /** The poster shown as the main photo on the home page. */
  poster: {
    src: '/assets/portfolio/animesh-mishra-poster.webp',
    width: 1254,
    height: 1254,
    alt: 'Black-and-white portrait of Animesh Mishra, smiling, with dark curly hair and glasses, on a handwritten and annotated paper collage. The label under the photo reads "Animesh Mishra, ML/NLP Researcher, NCA".',
  },
} as const;
