/** @format */

export default class projectsModel {
  constructor(
    id,
    title,
    category,
    date,
    status,
    image,
    description,
    role,
    technologies,
    projectUrl,
    githubUrl,
  ) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.date = date;
    this.status = status;
    this.image = image;
    this.description = description;
    this.role = role;
    this.technologies = technologies;
    this.projectUrl = projectUrl;
    this.githubUrl = githubUrl;
  }
}
