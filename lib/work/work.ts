import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const workDirectory: string = path.join(process.cwd(), 'data', 'Work');

type workDataContent = {
    id: string
};

export const getWorkData = async () => {
    // Get file names under /posts
    const fileNames: string[] = fs.readdirSync(workDirectory);
    const workData: workDataContent[] = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id: string = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath: string = path.join(workDirectory, fileName);
        const fileContents: string = fs.readFileSync(fullPath, 'utf8');
        // Use gray-matter to parse the Work metadata section
        const matterResult: matter.GrayMatterFile<string> = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
        }
    })
    // Work Data
    return workData;
}