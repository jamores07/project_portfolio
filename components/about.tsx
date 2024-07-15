import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DATA } from "@/data/resume"; // Adjust the import path as necessary

const About = () => {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg mb-6">{DATA.summary}</p>
      <Card>
        <CardHeader>
          <CardTitle>Key Information</CardTitle>
          <CardDescription>Quick facts about me</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            <li>Based in {DATA.location}</li>
            <li>{DATA.description}</li>
            {DATA.work.slice(0, 1).map((job, index) => (
              <li key={index}>{job.title} at {job.company}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;