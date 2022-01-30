import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const skillsDirectory = path.join(process.cwd(), 'data', 'skills');

export  const getSkillsData = async() => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(skillsDirectory);
  const skillsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(skillsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // Use gray-matter to parse the skills metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Skills Data
  return skillsData;
}