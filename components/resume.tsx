import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume"; // Adjust the import path as necessary

const Resume = () => {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold mb-6">Resume</h2>
      
      {/* Contact Information */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{DATA.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{DATA.contact.tel} | {DATA.contact.email}</p>
          <p>
            {Object.entries(DATA.contact.social).map(([platform, details], index) => (
              <span key={platform}>
                <a href={details.url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  {details.name}
                </a>
                {index < Object.entries(DATA.contact.social).length - 1 ? ' | ' : ''}
              </span>
            ))}
          </p>
        </CardContent>
      </Card>

      {/* Technical Skills */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Technical Skills</CardTitle>
        </CardHeader>
        <CardContent>
          {DATA.skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="mr-2 mb-2">{skill}</Badge>
          ))}
        </CardContent>
      </Card>

      {/* Professional Experience */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Professional Experience</CardTitle>
        </CardHeader>
        <CardContent>
          {DATA.work.map((job, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{job.title} | {job.company}</h3>
              <p className="text-sm text-gray-500">{job.start} - {job.end} | {job.location}</p>
              <p className="mt-2">{job.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Education */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent>
          {DATA.education.map((edu, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold">{edu.school}</h3>
              <p>{edu.degree} | {edu.start} - {edu.end}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Projects */}
      <Card>
        <CardHeader>
          <CardTitle>Projects</CardTitle>
        </CardHeader>
        <CardContent>
          {DATA.projects.map((project, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-500">{project.technologies.join(', ')}</p>
              <p className="mt-2">{project.description}</p>
              {project.links && project.links.length > 0 && (
                <div className="mt-2">
                  {project.links.map((link, linkIndex) => (
                    <a key={linkIndex} href={link.href} className="text-blue-500 hover:underline mr-4" target="_blank" rel="noopener noreferrer">
                      {link.type}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Resume;