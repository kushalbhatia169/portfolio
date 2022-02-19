import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const skillsDirectory: string = path.join(process.cwd(), 'data', 'skills');

type skillsDataContent = {
  id: string
};

export const getSkillsData = async () => {
  // Get file names under /posts
  const fileNames: string[] = fs.readdirSync(skillsDirectory);
  const skillsData: skillsDataContent[] = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id: string = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath: string = path.join(skillsDirectory, fileName);
    const fileContents: string = fs.readFileSync(fullPath, 'utf8');
    // Use gray-matter to parse the skills metadata section
    const matterResult: matter.GrayMatterFile<string> = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    }
  })
  // Skills Data
  return skillsData;
}