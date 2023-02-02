import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'articles');

export async function getAllArticleSlugs() {
  const filenames = fs.readdirSync(articlesDirectory);
  const allArtcilesData = filenames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '');

    const fullPath = path.join(articlesDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContents);

    return {
      slug,
      ...matterResult.data,
    };
  });

  return allArtcilesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });
}
